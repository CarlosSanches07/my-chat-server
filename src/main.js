const express = require("express");
const body = require("body-parser")
const socket = require("socket.io");

const app = express();
app.use(body.json());

app.post('/connect', (req, res) => {
    console.log(req.body.data);
    res.status(200).send('ok');
});

app.listen('3000', () => {
    console.log('listen to 3000...');
})

