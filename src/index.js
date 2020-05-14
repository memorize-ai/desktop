const { BrowserWindow, app } = require('electron')
const { join } = require('path')

let window

const createWindow = () => {
	window = new BrowserWindow({
		width: 800,
		height: 600,
		icon: join(__dirname, '../build/icon.icns'),
		title: 'memorize.ai',
	})
	
	window.loadURL('https://memorize.ai')
	window.maximize()
}

app.whenReady().then(createWindow)

app.on('activate', () =>
	BrowserWindow.getAllWindows().length || createWindow()
)

app.on('window-all-closed', () =>
	process.platform === 'darwin' || app.quit()
)
