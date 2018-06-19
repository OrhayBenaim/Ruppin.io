import React, { Component } from 'react';

const smoothing = 50;
const radius = 30;


export default class Player extends Component {



    
    constructor(props){
        super(props);
        this.state = {
            x: this.props.x,
            y: this.props.x,
            angle: 0
        }

        this.avatar = `/images/SVG/${this.props.avatar}.svg`;
        this.update =null;
    }



    componentDidMount(){

        const gameboard =  document.getElementById("game");
        
       this.update = setInterval( ()=>{//when we create the component start a interval
            this.setState((pervState) =>{//every 32ms state need to be updated
                if( (this.state.x > gameboard.clientWidth - 50 || this.state.y > gameboard.clientHeight - 120 || this.state.x < 50 || this.state.y < 0) &&
                    (this.props.x > gameboard.clientWidth - 50 || this.props.y > gameboard.clientHeight - 120 || this.props.x < 50 || this.props.y < 0) )
                {//if out of range
                    return {x: pervState.x , y: pervState.y}//set state to pervious state so no change
                }
                else{
                    //get distance by 2 points formula distance
                    let distance = Math.sqrt( Math.pow( pervState.x  - this.props.x , 2)  + Math.pow(pervState.y - this.props.y , 2) ) / smoothing;
                    //get angle between 2 points (mouse position and player position)
                    let angle = Math.atan2(pervState.y - this.props.y, pervState.x - this.props.x);
                    //set the new position to the position we heading at
                    return {
                        x: pervState.x -  Math.cos(angle) *distance,
                        y: pervState.y -  Math.sin(angle) *distance,
                        angle: angle }
                }
            })
            
            
           } , 32);
    }
componentWillUnmount(){
    clearInterval(this.update);
}


  render() {
    return (
            // moving the player using css left and top
            <div className='players' style={ {left: this.state.x - radius, top: this.state.y + radius, position:'absolute'} }>
                <img alt='' id = 'player' srcSet={this.avatar} style={ {width: 50,transform: `rotate(${( (this.state.angle * 180) / Math.PI) + 90}deg)` } }/>
                <p>{this.props.userName}</p>
            </div>
        
    )
  }
};
