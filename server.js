const express = require("express");

const app = express()
const http = require('http').createServer(app)
const PORT = process.env.PORT || https://neetumaheshwari.github.io/Ayaan_chat/

http.listen(PORT, ()=>{console.log(`listen on PORT ${PORT}`)})

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res) => {res.sendFile(__dirname +'/index.html')})

//socket.io
//const io = require("socket.io").listen(http);
const io = require('socket.io-client')('https://neetumaheshwari.github.io/Ayaan_chat/', {
  rejectUnauthorized:   false,
})
//const io = require("socket.io")("https://neetumaheshwari.github.io/Ayaan_chat/", {
//  allowRequest: (req, callback) => {
  //  callback(null, false);
  //}
//});

//const io =require('socket.io')(http, {
  //  allowEIO3: true // false by default
 // })
//const io = socketIo(server, { cors: { origin: "localhost:3000", credentials: true } });

io.on('connection',(socket) =>{
    console.log('connected......');
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)
    })
})

http.listen(3000, () => {
  console.log(`Listening on ${http.address().port}`);
});

