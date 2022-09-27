const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800
    })
    // win.loadURL('http://jx.1000phone.net/')
    win.loadFile("index.html")
    // win.webContents.openDevTools()
}
app.whenReady().then(createWindow)