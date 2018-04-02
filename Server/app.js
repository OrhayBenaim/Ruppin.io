const app = require('express')();
const http = require('http').Server(app);
var io = require('socket.io')(http);
const port = 3001;


let players = {};


io.on('connection', function(socket){

  socket.on('disconnect', function(){

     delete players[socket.id]; // better update my own table of players
 
   });

  socket.on('p.pos', function(msg){ // a player moved better update his data
    
    let data = JSON.parse(msg);

    players[socket.id]={
      email: data.email,
      x: data.x,
      y: data.y,
      name: data.userName,
      avatar: data.avatar
    }
 
    console.log(data.userName,data.avatar);
    
 
  });


  
});

setInterval( ()=> {
  if(Object.keys(players).length>0){ // if there are players in game better tell every one their location
   
    io.emit('p.pos' , JSON.stringify( Object.values(players) ));
    
  }
} , 45)

http.listen(port, function(){
  console.log('listening on *:'+port);
})
