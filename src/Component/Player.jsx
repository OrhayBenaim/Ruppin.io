import React, { Component } from 'react';

const smoothing = 15;
const radius = 30;



export default class Player extends Component {



    
    constructor(props){
        super(props);
        this.state = {
            x: 100,
            y: 100
        }


    }


    componentDidMount(){
        console.log(this.props.userName);
        
        setInterval( ()=>{//when we create the component start a interval
            this.setState((pervState) =>{//every 32ms state need to be updated
                if( (this.state.x > 720 - 30 || this.state.y > 720 - 30 ) ||
                    ( pervState.x === this.props.x && pervState.y === this.props.y) ){//if out of range
                    return {x: pervState.x , y: pervState.y}//set state to pervious state so no change
                }
                else{
                    //get distance by 2 points formula distance
                    let distance = Math.sqrt( Math.pow( pervState.x  - this.props.x , 2)  + Math.pow(pervState.y - this.props.y , 2) ) / smoothing;
                    //get angle between 2 points (mouse position and player position)
                    let angle = Math.atan2(pervState.y - this.props.y, pervState.x - this.props.x);
                    //set the new position to the position we heading at
                    return {x: pervState.x -  Math.cos(angle) *distance , y: pervState.y -  Math.sin(angle) *distance }
                }
            })
            
            
           } , 32);
    }


  render() {
    return (
            // moving the player using css left and top
            <div className='players' style={ {left: this.state.x - radius, top: this.state.y + radius} }>
                <div id="player" ></div>
                <p>{this.props.userName}</p>
            </div>
        
    )
  }
};
