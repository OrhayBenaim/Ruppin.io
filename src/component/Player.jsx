import React, { Component } from 'react';

export default class Player extends Component {

    constructor(props){
        super(props);
        this.state = {
            x: 0,
            y: 0
        }

        this.x = 0;
        this.y = 0;
           setInterval( ()=>{
            this.setState((pervState) =>{
                if( (this.state.x > 720 - 30 || this.state.y > 720 - 30 ) ||
                    ( pervState.x === this.x && pervState.y === this.y) ){
                    return {x: pervState.x , y: pervState.y}
                }
                else{
                    let angle = Math.atan2(pervState.y - this.y, pervState.x - this.x);
                    return {x: pervState.x -  Math.cos(angle) *10 , y: pervState.y -  Math.sin(angle) *10 }
                }
            })
           } , 32);


    }

    componentDidMount(){
        document.getElementById('gameBoard').addEventListener('mousemove', (e)=>{
            this.x = e.clientX;
            this.y = e.clientY;
            
        });
    }

  render() {
    return (
        <div className="player" style={ {left: this.state.x , top: this.state.y} }></div>
    )
  }
};
