const {app, BrowserWindow} = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 300,
        height: 500,
        resizable: false
    })
    win.setMenuBarVisibility(false);
    win.setTitle('Калькулятор');
    win.loadFile('src/index.html');
}

app.whenReady().then(() => createWindow());
app.om('window-all-closed', () => app.quit());