import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import "@testing-library/jest-dom";

describe("学習記録の追加テスト", () => {
  it("フォームに入力して登録するとリストが1つ増える", async () => {
    render(<App />);

    // 初期のリスト数を取得
    const initialRecords = screen.queryAllByTestId("record-item").length;
    console.log("Initial records count:", initialRecords);

    await userEvent.type(screen.getByPlaceholderText("テキストを入力"), "React Testing");

    const timeInput = screen.getByPlaceholderText("0");
    await userEvent.clear(timeInput);
    await userEvent.type(timeInput, "2");

    // `act()` でボタンクリック処理を確実に反映
    await act(async () => {
      await userEvent.click(screen.getByRole("button", { name: "登録" }));
    });

    // `waitFor` のコールバック関数は同期関数にする
    await waitFor(() => {
      const newRecords = screen.queryAllByTestId("record-item").length;
      console.log("New records count:", newRecords);
      expect(newRecords).toBeGreaterThan(initialRecords);
    });
  });
});

describe("学習記録の削除テスト", () => {
  it("フォームに入力して削除するとリストが1つ減る", async () => {
    render(<App />);

    // 初期のリスト数を取得
    await waitFor(() => {
      expect(screen.queryAllByTestId("record-item").length).toBeGreaterThan(0);
    })
    const initialRecords = screen.queryAllByTestId("record-item").length;
    console.log("Initial records count:", initialRecords);

    // 最初の削除ボタン（✖️）を取得してクリック
    const deleteButton = screen.getAllByText("✖️")[0];
    await act(async () => {
      await userEvent.click(deleteButton);
    });

    // リストが1つ減ったか確認
    await waitFor(() => {
      const newRecords = screen.queryAllByTestId("record-item").length;
      console.log("New records count:", newRecords);
      expect(newRecords).toBe(initialRecords - 1);
    });
  });
});

