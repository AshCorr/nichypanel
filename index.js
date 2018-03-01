const Express = require('express');
const path = require('path');
const child_process = require('child_process');

var app = new Express();

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/shutdown", (req, res) => {
   res.send("Shutdown signal sent.");
   child_process.exec("shutdown /s");
});

app.listen(9000);