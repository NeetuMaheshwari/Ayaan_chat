const express = require("express");

const app = express()
const http = require('https').createServer(app)
const PORT = process.env.PORT || 3000

http.listen(PORT, ()=>{console.log(`listen on PORT ${PORT}`)})

app.use(express.static(__dirname+'/public'))



//socket.io

const io =require('socket.io')(http)

io.on('connection',(socket) =>{
    console.log('connected......');
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)
    })
})

