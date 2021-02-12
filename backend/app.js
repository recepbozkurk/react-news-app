const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./static/helper/db')();
const app = express()
const Notices = require("./static/models/Notices");

const http = require('http');
const socketio = require('socket.io');

const server = http.createServer()

server.listen(6060);
const io = socketio.listen(server);

io.sockets.on('connection', (socket) => {
    socket.on('addNotice', () => {
        setTimeout(() => {
            const promise = Notices.find().sort({ "noticesDate": -1 });

            promise.then((data) => {
                socket.broadcast.emit('getNotice', data)
                console.log("Data: ", data)
            }).catch((error) => {
                res.json(error)
            })
        }, 2000);
    })
})

const newsRouter = require('./static/routes/news')
const noticesRouter = require('./static/routes/notices')

app.use(bodyParser.json())
app.use(cors())
app.use('/news', newsRouter)
app.use('/notices', noticesRouter)

app.listen(7070, '0.0.0.0')