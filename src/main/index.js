import {app, BrowserWindow, session} from 'electron'
import * as path from 'path'
import {formatUrl} from 'url'


let mainWindow

function createWindow()
{
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
    mainWindow.webContents.openDevTools()

}

app.on('ready',createWindow)
app.on('window-all-closed', () => {
    if ( process.platform !== 'darwin')
    {
        app.quit()
    }
})
app.on('activate',() => {
    if ( mainWindow == null )
    {
        createWindow()
    }
})

if (module.hot) {
    module.hot.accept();
  }



