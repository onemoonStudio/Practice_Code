// socket 기본 예제

const socketIo = require('socket.io');

const express = require('express');
const app = express();

app.set('port', 3000 || process.env.port );

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})
.get('/test',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
})

const test = require('./test');
// test.start();
test.test;

const server = app.listen(app.get('port'),()=>{
  console.log('server is running at ' + app.get('port'));
})

// io 와 서버를 연결해 주어야 한다. - > 그 후에 변수를 socketEvent에 전달한다.
const io = new socketIo(server);

io.on('connection', (socket) => {
    socket.emit('news', { hello: 'world' });
    
    socket.on('my other event', function (data) {
      console.log(data);
    });

    socket.on('disconnect',()=>{
      console.log('socket io is disconnected ');
    })

    socket.on('new_timer',(data)=>{
      console.log(data);
      socket.emit('change_num',{
        num : data.timer
      });
    })
  });