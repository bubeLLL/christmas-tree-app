const { ipcRenderer } = require('electron');

window.electronAPI = {
  setIgnoreMouseEvents: (ignore) => {
    ipcRenderer.send('set-ignore-mouse', ignore);
  },
  getCursorPosition: (callback) => {
    ipcRenderer.send('get-cursor-pos');
    ipcRenderer.once('cursor-pos', (event, pos) => callback(pos));
  },
  closeApp: () => {
    ipcRenderer.send('close-app');
  },
  onSettingsUpdate: (callback) => {
    ipcRenderer.on('update-settings', (event, settings) => callback(settings));
  }
};
