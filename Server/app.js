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
      Eating:false,
      name: data.userName,
      avatar: data.avatar
    }

 
  });


  
});

setInterval( ()=> {
  if (Object.keys(players).length >= 2)
  {
    for ( let i=0;i<players.length;i++)
    {
      for (let j=0;j<player.length;j++)
      {
        if(i==j)
        continue;
        Eat(player[i],player[j])
      }
    }
  }
  if(Object.keys(players).length>0){ 

    io.emit('p.pos' , JSON.stringify( Object.values(players) ));
    
  }
} , 45)

http.listen(port, function(){
  //console.log('listening on *:'+port);
})

function Distance  (player1,player2){
  let x = player1.x - player2.x
  let y = player1.y - player2.y
  let distancex = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  return distancex
}

function Eat(Eater,Eaten) {
  let d=Distance(Eater,Eaten)
  console.log(d)
  if(!Eater.Eating&&!Eaten.Eating)
  {
    if (d>30)
    {
      console.log("Eat been made")
    }
  }
}
