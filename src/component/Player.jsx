import React, { Component } from 'react';

export default class Player extends Component {

    constructor(props){
        super(props);
        this.x = 0;
        this.y = 0;
        

    }
    componentDidUpdate(prevProps){
       
        this.x = prevProps.x;
        this.y = prevProps.y;
      
    }


  render() {
    return (
        <div className="player" style={ {left: this.x , top: this.y} }></div>
    )
  }
};
