# custom-react-electron-titlebar
Simple titlebar for electron apps for every system.

# Scrennshots



# Usage
Install with NPM.

```
npm install custom-react-electron-titlebar --save
```
In ```electron.js``` file:
```
const electron = require("electron");
const { app,ipcMain,BrowserWindow } = electron;
 mainWindow = new BrowserWindow({
        frame: false,
        titleBarStyle: 'hidden'});
..
..
.. 
ipcMain.handle("minimize-event", () => {
    mainWindow.minimize();
});

ipcMain.handle("unmaximize-event", () => {
    mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize();
});

ipcMain.handle("close-event", () => {
    app.quit();
});
```

In your Component:

```
import TitleBar from "custom-react-electron-titlebar"
..
..
..
render(){
  let options = {
            backgroundColor: "#000",
            iconsColor: "#FFF",
            title: "To Do List",
            titleColor: "#FFF",
            icon: true,
            closeIconClass: "fa fa-times",
            maximizeIconClass: "fa fa-square-o",
            minimizeIconClass: "fa fa-minus"
        }
return(<TitleBar options = { options }/>)}
```

-```backgroundColor```:[String] background of titlebar.  <br />
-```iconsColor```:[String] color of fontAwesome Icon.  <br />
-```title```:[String] title of project.  <br />
-```titleColor```:[String] color of project title.  <br />
-```icon```:[Boolean] true | false (get icon href from index.html).  <br />
```
<head>
 <link rel="icon" href="/list.png" />
</head>
```
-```closeIconClass```:fontAwesome class of close icon.  <br />
-```maximizeIconClass```fontAwesome class of maximize icon.  <br />
-```minimizeIconClass```:fontAwesome class of minimize icon.  <br />

Report an issue if you find there's something wrong
