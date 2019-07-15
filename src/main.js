// const express = require("express");
// const body = require("body-parser")
// const http = require('http');
const socket = require("socket.io");

// const app = express();
// app.use(body.json());
const io = socket(3000);


/* app.get('/', (req, res) => {
    console.log('e ai ');
})

app.post('/connect', (req, res) => {
    res.status(200).send('ok');
});

app.listen('3000', () => {
    console.log('listen to 3000...');
}); */

io
    .on('connection', (socket) => {
        socket.emit('connected');
        socket.on('message',(data) => {    
            socket.broadcast.emit('received',data);
        })
    })

