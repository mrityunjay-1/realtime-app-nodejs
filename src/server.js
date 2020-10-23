const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../public')));

const server = http.createServer(app);


const io = socketio(server);

let string1 = "";
io.on("connection", (socket) => {
    console.log("Connection eastablished");

    io.emit("welcome_message", "Welcome to live chat!");

    socket.on("senddata", (data) => {
        string1 += data;
        io.emit("return_data", string1);
    })
})


server.listen(port, () => {
    console.log("Server is up on port:" + port);
})