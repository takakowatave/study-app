import { defineConfig } from "vite";
import dotenv from "dotenv";

// `.env` を読み込む
dotenv.config();

export default defineConfig({
  define: {
    "process.env": process.env, // Vite でも `process.env` を使えるようにする
  },
});
