const { ipcMain } = require('electron');

// Backend function - runs in main process with Node.js
function addNumbers(a, b) {
  console.log(`Main process adding: ${a} + ${b}`);
  return a + b;
}

// Register IPC handlers
function registerCalculatorHandlers() {
  ipcMain.handle('add-numbers', async (event, a, b) => {
    console.log(`Adding numbers: ${a} + ${b}`);
    return addNumbers(a, b);
  });

  ipcMain.handle('ping', async () => {
    return 'pong';
  });
}

module.exports = { registerCalculatorHandlers };
