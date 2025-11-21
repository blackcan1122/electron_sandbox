const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

// Backend function - runs in main process with Node.js
function addNumbers(a, b) {
  console.log(`Main process adding: ${a} + ${b}`)
  return a + b
}

// Register IPC handler so renderer can call it
ipcMain.handle('add-numbers', async (event, a, b) => {
  return addNumbers(a, b)
})

 ipcMain.handle('ping', async () => {
    return 'pong'
  })

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
 

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})