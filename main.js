require("update-electron-app")();
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
};
// const version = require("./package.json").version;
// console.log(111, version);
app.whenReady().then(() => {
  ipcMain.handle("ping", () => require("./package.json").version);
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
