const { app, BrowserWindow } = require('electron');

// global scope so garbage collection doesnt grab it, which it will if only in functions
let mainWindow = null;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 600,
    show:false
  });

  //win everything is ready load mainWindow.show
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  })
  // on close
  // mainWindow.on('close', ()=>{
  //   mainWindow = null;
  // })
  //
// what to load in renderer
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
