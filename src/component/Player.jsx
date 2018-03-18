import React, { Component } from 'react';

export default class Player extends Component {

    constructor(props){
        super(props);
        this.state = {
            x: 0,
            y: 0
        }

            


    }

    componentDidMount(){
        document.getElementById('gameBoard').addEventListener('mousemove', (e)=>{
            this.setState((pervState) =>{
                if(e.clientX > 720 - 30 || e.clientY > 720 - 30){
                    return {x: pervState.x , y: pervState.y}
                }
                else{
                    return {x: e.clientX , y: e.clientY}
                }
            })
            
        });
    }

  render() {
    return (
        <div className="player" style={ {left: this.state.x - 30 , top: this.state.y - 30} }></div>
    )
  }
};
