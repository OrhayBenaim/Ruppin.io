import React, { Component } from 'react';

const smoothing = 15;
const radius = 30;
export default class Player extends Component {

    constructor(props){
        super(props);
        this.state = {
            x: 0,
            y: 0
        }

        this.x = 0;
        this.y = 0;
           


    }

    
    componentDidMount(){// once every thing loaded in this component 
                        //attach a mouse move to the gameboard element
        document.getElementById('gameBoard').addEventListener('mousemove', (e)=>{
            this.x = e.clientX;
            this.y = e.clientY;
            // same new positions to vars that only exist in this class (this.x , this.y)
        });


        setInterval( ()=>{//when we create the component start a interval
            this.setState((pervState) =>{//every 32ms state need to be updated
                if( (this.state.x > 720 - 30 || this.state.y > 720 - 30 ) ||
                    ( pervState.x === this.x && pervState.y === this.y) ){//if out of range
                    return {x: pervState.x , y: pervState.y}//set state to pervious state so no change
                }
                else{
                    //get distance by 2 points formula distance
                    let distance = Math.sqrt( Math.pow( pervState.x  - this.x , 2)  + Math.pow(pervState.y - this.y , 2) ) / smoothing;
                    //get angle between 2 points (mouse position and player position)
                    let angle = Math.atan2(pervState.y - this.y, pervState.x - this.x);
                    //set the new position to the position we heading at
                    return {x: pervState.x -  Math.cos(angle) *distance , y: pervState.y -  Math.sin(angle) *distance }
                }
            })
            
            
           } , 32);
    }

  render() {
    return (
                                    // moving the player using css left and top
        <div className="player" style={ {left: this.state.x - radius, top: this.state.y + radius} }></div>
    )
  }
};
