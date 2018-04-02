const app = require('express')();
const http = require('http').Server(app);
var io = require('socket.io')(http);
const port = 3001;


let players = {};


io.on('connection', function(socket){


  socket.on('disconnect', function(){

     delete players[socket.id]; 
 
   });

  socket.on('p.pos', function(msg){ 
    
    let data = JSON.parse(msg);

    players[socket.id]={
      id: socket.id,
      x: data.x,
      y: data.y,
      name: data.userName,
      avatar: data.avatar
    }

 
  });


  
});

setInterval( ()=> {
  if(Object.keys(players).length>0){ 
   
    io.emit('p.pos' , JSON.stringify( Object.values(players) ));
    
  }
} , 45)

http.listen(port, function(){
  console.log('listening on *:'+port);
})
