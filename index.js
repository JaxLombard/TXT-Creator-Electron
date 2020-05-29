const { app, BrowserWindow } = require("electron");

function createWindow() {

    // Creating the window for the browser

    let win = new BrowserWindow({

        width: 800,

        height: 600,

        webPreferences: {

            nodIntergration: true

        }


    })

    win.loadFile("index.html");

}

app.on("ready", createWindow);