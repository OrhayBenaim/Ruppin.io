import React, { Component } from 'react';
import Player from './Player';
import io from 'socket.io-client';
const ip = '10.0.0.21';


export default class GameLogic extends Component {

    constructor(props){
        super(props);
        this.state = {
          x: 0,
          y: 0
        }
        
        this.socket = io(`${ip}:3001`);
        this.Players = [];
      
        
      }

      

      componentDidMount(){
  
        this.socket.on('p.pos', (msg)=>{
          let data = msg.split(' ');
          if(data[0] !== this.props.location.state.email){
            this.Players[data[0] ] =   
            <Player x = {data[1]} y = {data[2]} userName = {data[3]}/>
          this.setState({});//force update
          }else{
          this.setState({
            x: data[1] ,
            y: data[2]
        });
      }
      })
    }

      getPosition = (e) =>{
        e.preventDefault();

        let x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        let y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY

          let data = {
            x: x,
            y: y,
            name: this.props.location.state.playerName,
            email: this.props.location.state.email
          }
            this.socket.emit('p.pos', `${data.email} ${data.x} ${data.y} ${data.name}`);
            
        
      }

      render() {
        return (
    
          <div id ='gameBoard' onTouchMove = {this.getPosition} onMouseMove = {this.getPosition}>
            {Object.values(this.Players)}
            
            <Player x = {this.state.x} y = {this.state.y} userName = {this.props.location.state.playerName}/>
            
          </div>
        );
      }
};
