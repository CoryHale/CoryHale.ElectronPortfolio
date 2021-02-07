const { BrowserWindow, app } = require('electron');
const path = require('path');

function createWindow() {
    const window = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
        }
    })

    window.loadFile('index.html');
}

app.whenReady().then(createWindow);