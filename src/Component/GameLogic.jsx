import React, { Component } from 'react';
import Player from './Player';
import io from 'socket.io-client';
const ip = '10.0.0.18';


export default class GameLogic extends Component {

    constructor(props){
        super(props);
        this.state = {
          x: 0,
          y: 0
        }

        this.email = this.props.location.state.email;
        this.userName = this.props.location.state.playerName;
        this.socket = io(`${ip}:3001`);
        this.Players = [];
        this.socket.emit('p.pos', JSON.stringify( { // just logged into game better tell the server
          email: this.email,                        //my init position and data
          x: this.state.x,
          y: this.state.y,
          userName: this.userName
        } ));
        
      }

      

      componentDidMount(){
        this.socket.on('DC' , (email) => {
          delete this.Players[email]; // when user disconnect update the array of users
        });

        this.socket.on('p.pos', (msg)=>{// need to change to recive array of players
          
          let data = JSON.parse(msg);
          data.forEach(ply => {

            if(ply.email !== this.props.location.state.email){
              this.Players[ply.email] =   
              <Player x = {ply.x} y = {ply.y} userName = {ply.name}/>
              this.setState({});//force update

            }else{
              this.setState({
                x: ply.x ,
                y: ply.y
              });
          
            }
            
          });
          
      })
    }

      getPosition = (e) =>{
        e.preventDefault();

        let x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        let y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY
        let data = {
          email: this.email,
          x: x,
          y: y,
          userName: this.userName
        }
        this.socket.emit('p.pos',JSON.stringify(data) );
            
        
      }

      render() {
        return (
    
          <div id ='gameBoard' onTouchMove = {this.getPosition} onMouseMove = {this.getPosition}>
            {Object.values(this.Players)}
            
            <Player x = {this.state.x} y = {this.state.y} userName = {this.userName}/>
            
          </div>
        );
      }
};
