const {
    app,
    BrowserWindow,
    protocol
} = require('electron');
const url = require('url')
const path = require('path')

function CreateMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Electron',
        width: 1000,
        height: 600,
    });

    mainWindow.webContents.openDevTools()

    const startUrl = url.format({
        pathname: path.join(__dirname, './app/build/index.html'),
        protocol: 'file'
    })

    mainWindow.loadURL(startUrl)
}

app.whenReady().then(CreateMainWindow)