import React, { Component } from 'react';
import Player from './Player';
import io from 'socket.io-client';
import './Styles/Styles.css';

const ip = 'localhost';

let gameboard = null;
let player = {}
export default class GameLogic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      x: 100 + Math.random() * 100,
      y: 20 + Math.random() * 100
    }

    this.email = this.props.location.state.email;
    this.userName = this.props.location.state.playerName;
    this.avatar = this.props.location.state.characterID;
    this.socket = io(`${ip}:3001`);
    this.Players = {};

    player = {
      x: this.state.x,
      y: this.state.y,
      userName: this.userName,
      Eating: false,
      avatar: this.avatar
    }
    this.socket.emit('p.pos', JSON.stringify( player ));

  }



  componentDidMount() {

    gameboard =  document.getElementById("game");
    this.socket.on('p.pos', (msg) => {
      this.Players = {};
      let data = JSON.parse(msg);

      for(let ply of data){
        if(ply.id == this.socket.id){
          this.setState({
            x: ply.x,
            y: ply.y,
            angle: ply.angle
          });
        }
        
      }
      
      
      data = data.filter(ply => ply.id !== this.socket.id);

      data.forEach(ply => {
        this.Players[ply.id] =
          <Player key={ply.id} angle={ply.angle} x={ply.x} y={ply.y} userName={ply.name} avatar={ply.avatar} />

      });
      this.forceUpdate();

    })
    this.socket.on('p.dead', (dead_player)=>{
      if (this.socket.id!=dead_player){
        this.props.history.replace({
          pathname: '/manu',
          state: {
            characterID: this.avatar,
            playerName: this.userName,
            email: this.email,
          }
        })
      }
    })
   

  }



  getPosition = (e) => {
    e.preventDefault();

    let x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    let y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY

    player.x = x;
    player.y = y;
    
    if( !(this.x > gameboard.clientWidth || this.y > gameboard.clientHeight - 120 || this.x < 50 || this.y < 50) &&
      !(this.state.x > gameboard.clientWidth|| this.state.y > gameboard.clientHeight - 120 || this.state.x < 0 || this.state.y < 0) ){
        this.socket.emit('p.pos', JSON.stringify(player));
    }
  

  }
eat = () => {
player.Eating=true;    
console.log(player.Eating);
      
}


  render() {
    return (

      <section id="game" onTouchMove = {this.getPosition} onMouseMove = {this.getPosition}>
      <div className='btn_eat' onClick={this.eat}/>
      {Object.values(this.Players)}

      <Player x={this.state.x}  angle={this.state.angle} y={this.state.y} userName={this.userName} avatar={this.avatar} />

        <a className="sound"><img src="images/soundexit.png" /></a>
        <h2>1058</h2>

      </section>
    );
  }
};
