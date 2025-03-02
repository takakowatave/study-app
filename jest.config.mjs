export default {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  setupFiles: ["dotenv/config"], // 追加
  setupFilesAfterEnv: ["./jest.setup.js"],
};
