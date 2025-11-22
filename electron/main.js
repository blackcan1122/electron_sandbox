const { app, BrowserWindow, ipcMain } = require('electron/main');
const path = require('node:path');

function addNumbers(a, b) {
  console.log(`Main process adding: ${a} + ${b}`);
  return a + b;
}

ipcMain.handle('add-numbers', async (event, a, b) => {
  console.log(`Adding numbers: ${a} + ${b}`);
  return addNumbers(a, b);
});

ipcMain.handle('ping', async () => {
  return 'pong';
});

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js')
    }
  })


  console.log('NODE_ENV:', process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'development') {
    console.log('Loading from Vite dev server: http://localhost:5173');
    win.loadURL('http://localhost:5173');
  } else {
    const filePath = path.join(__dirname, '../renderer/main_window/index.html');
    console.log('Loading from file:', filePath);
    win.loadFile(filePath);
  }
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