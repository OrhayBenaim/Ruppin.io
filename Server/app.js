const app = require('express')();
const http = require('http').Server(app);
var io = require('socket.io')(http);
const port = 3001;


let players = [];
let playersCount = 0 ;

io.on('connection', function(socket){
  console.log(`player ${socket.id} at server`);
  playersCount++;
  socket.on('disconnect', function(){
    console.log('user disconnected');//send DC message to all users to update
    playersCount--;
  });

  socket.on('p.pos', function(msg){
    //// need to move this into 45ms interval
    let data = JSON.parse(msg);
    
    players[data.email]={
      x: data.x,
      y: data.y,
      name: data.userName
    }
    console.log(players);
    
    //io.emit('p.pos' , players );
 
  });


  
});
setInterval( ()=> {
  if(playersCount>0){
   //io.emit('p.pos' , players );

    
  }
} , 45)

http.listen(port, function(){
  console.log('listening on *:'+port);
});
