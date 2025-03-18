import React from 'react';
import { supabase } from "./supabaseClient.js";
import { useState, useEffect } from "react";
import { act } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [time, setTime] = useState(0); // 初期値を数値に変更
  const [record, setRecord] = useState([]); // 記録の状態を定義
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = async () => { // 非同期関数を定義
    setLoading(true); // ローディング
    const { data, error } = await supabase.from("study-record").select("*"); // Supabaseからデータを参照する定義
    if (error) {
      setErrorMessage(error.message); // エラーだったらメッセージ出す
      return;
    }
    setRecord(data);
    setLoading(false); // ローディングじゃない時
  };

  useEffect(() => {
    fetchData();
  }, []); // 空の第二引数を渡して「何も依存しない」＝「初回だけ動く」ようにする

  const handleAdd = async () => {
    let message = "";
    if(text.trim()==="") {
      message = "学習内容を入力してください";
    } else if (time <= 0) {
      message = "学習時間を入力してください";
    }
    if(message) {
      setErrorMessage(message);
      return;
    }
    
    const { data, error } = await supabase.from("study-record").insert([{ text, time }]);
    if (error) {     
      setErrorMessage(error.message); // エラーだったらメッセージ出す
      return;
    }
    await fetchData();
    setText("");
    setTime(0);
  };

  const handleChangeText = (e) => setText(e.target.value); // テキストの変化を取得

  const handleDelete = async (id) => {
    console.log(id);
    const { error } = await supabase.from("study-record").delete().eq("id", id);
    if (error) {
      setErrorMessage(error.message); // エラーだったらメッセージ出す
      return;
    }
    await fetchData();
  };

  const handleChangeTime = (e) => setTime(Number(e.target.value) || 0);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        textAlign: "center",
      }}
    >
      <h1>学習リスト</h1>
      <div
        style={{
          backgroundColor: "#F3F6F9",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <form>
          学習内容：
          <input
            type="text"
            value={text}
            onChange={handleChangeText}
            style={{ border: "2px #DBE0E5", padding: "8px", marginRight: "8px" }}
          />
        </form>
        <form>
          学習時間：
          <input
            type="number"
            min="0"
            value={time}
            onChange={handleChangeTime}
            style={{ border: "2px #DBE0E5", padding: "8px", marginRight: "8px" }}
          />
        </form>
        <button
          style={{ color: "white", backgroundColor: "#168EFD", padding: "8px", marginRight: "8px" }}
          onClick={handleAdd}
        >
          追加
        </button>
        <p style={{ color: "red" }}>{errorMessage}</p>
      </div>
      <div>記入内容 内容：{text} 時間：{time}</div>
      <div
        style={{
          backgroundColor: "#F3F6F9",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          width: "350px",
        }}
      >
        <ul>
          {record.map((item) => (
            <li key={item.id}>
              {item.text}
              <span onClick={() => handleDelete(item.id)}>✖️</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
