const express = require('express');
// const app = express();
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require('./server/config/routes')(app);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('message-broadcast', msg);
    });
});

app.listen(3000, () => console.log("Listening on port 8000"));