const { app, BrowserWindow, ipcMain, screen, Tray, Menu, nativeImage } = require('electron');
const path = require('path');

let mainWindow = null;
let tray = null;
let settings = {
  isOn: true,
  snowMode: 'all',
  color: 'white',
  speed: 8
};

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().size;

  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    x: 0,
    y: 0,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    resizable: false,
    hasShadow: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
      backgroundThrottling: false
    }
  });

  mainWindow.loadFile('index.html');
  mainWindow.setAlwaysOnTop(true, 'screen-saver');
  mainWindow.setIgnoreMouseEvents(true, { forward: true });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.webContents.on('did-finish-load', () => {
    sendSettings();
  });
}

function sendSettings() {
  if (mainWindow) {
    mainWindow.webContents.send('update-settings', settings);
  }
}

function updateTrayMenu() {
  const contextMenu = Menu.buildFromTemplate([
    {
      label: settings.isOn ? '⏸ Выключить' : '▶ Включить',
      click: () => {
        settings.isOn = !settings.isOn;
        sendSettings();
        updateTrayMenu();
      }
    },
    { type: 'separator' },
    {
      label: 'Снег',
      submenu: [
        { label: 'Везде', type: 'radio', checked: settings.snowMode === 'all', click: () => { settings.snowMode = 'all'; sendSettings(); } },
        { label: 'Над ёлкой', type: 'radio', checked: settings.snowMode === 'tree', click: () => { settings.snowMode = 'tree'; sendSettings(); } },
        { label: 'Выкл', type: 'radio', checked: settings.snowMode === 'off', click: () => { settings.snowMode = 'off'; sendSettings(); } }
      ]
    },
    {
      label: 'Цвет',
      submenu: [
        { label: '⚪ Белый', type: 'radio', checked: settings.color === 'white', click: () => { settings.color = 'white'; sendSettings(); } },
        { label: '🟡 Золотой', type: 'radio', checked: settings.color === 'gold', click: () => { settings.color = 'gold'; sendSettings(); } },
        { label: '🔴 Красный', type: 'radio', checked: settings.color === 'red', click: () => { settings.color = 'red'; sendSettings(); } },
        { label: '🔵 Синий', type: 'radio', checked: settings.color === 'blue', click: () => { settings.color = 'blue'; sendSettings(); } },
        { label: '🟢 Зелёный', type: 'radio', checked: settings.color === 'green', click: () => { settings.color = 'green'; sendSettings(); } },
        { label: '🌈 Гирлянда', type: 'radio', checked: settings.color === 'rainbow', click: () => { settings.color = 'rainbow'; sendSettings(); } }
      ]
    },
    {
      label: 'Скорость',
      submenu: [
        { label: 'Медленно', type: 'radio', checked: settings.speed === 3, click: () => { settings.speed = 3; sendSettings(); } },
        { label: 'Нормально', type: 'radio', checked: settings.speed === 8, click: () => { settings.speed = 8; sendSettings(); } },
        { label: 'Быстро', type: 'radio', checked: settings.speed === 15, click: () => { settings.speed = 15; sendSettings(); } }
      ]
    },
    { type: 'separator' },
    { label: 'Выход', click: () => app.quit() }
  ]);

  tray.setContextMenu(contextMenu);
}

function createTray() {
  // Используем файл иконки
  const iconPath = path.join(__dirname, 'tray-icon.png');
  const icon = nativeImage.createFromPath(iconPath);

  tray = new Tray(icon);
  tray.setToolTip('Christmas Tree - ПКМ для настроек');
  updateTrayMenu();
}

app.whenReady().then(() => {
  createWindow();
  createTray();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('close-app', () => {
  app.quit();
});

ipcMain.on('set-ignore-mouse', (event, ignore) => {
  if (mainWindow) {
    mainWindow.setIgnoreMouseEvents(ignore);
  }
});

ipcMain.on('get-cursor-pos', (event) => {
  const pos = screen.getCursorScreenPoint();
  event.reply('cursor-pos', pos);
});
