import React, { Component } from 'react';
import Player from './Player';
import io from 'socket.io-client';
import './Styles/Styles.css';

const ip = 'localhost';



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

    this.socket.emit('p.pos', JSON.stringify({
      x: this.state.x,
      y: this.state.y,
      userName: this.userName,
      avatar: this.avatar
    }));

  }



  componentDidMount() {


    this.socket.on('p.pos', (msg) => {// need to change to recive array of players
      this.Players = {};
      let data = JSON.parse(msg);

      data = data.filter(ply => ply.id !== this.socket.id);

      data.forEach(ply => {
        this.Players[ply.id] =
          <Player key={ply.id} x={ply.x} y={ply.y} userName={ply.name} avatar={ply.avatar} />

      });
      this.forceUpdate();

    })

  }



  getPosition = (e) => {
    e.preventDefault();

    let x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    let y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY
    let data = {
      x: x,
      y: y,
      userName: this.userName,
      avatar: this.avatar
    }

    this.socket.emit('p.pos', JSON.stringify(data));

    this.setState({
      x: x,
      y: y
    });

  }

  render() {
    return (

      <section id="game" onTouchMove = {this.getPosition} onMouseMove = {this.getPosition}>

      {Object.values(this.Players)}

      <Player x={this.state.x} y={this.state.y} userName={this.userName} avatar={this.avatar} />

        <a className="sound"><img src="images/soundexit.png" /></a>
        <h2>1058</h2>

      </section>
    );
  }
};
