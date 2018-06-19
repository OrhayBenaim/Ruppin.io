import React, { Component } from 'react';

export default class Menu extends Component {

Start = () =>{
    this.props.history.replace({
        pathname: '/intro',
        state: {
            characterID: this.props.location.state.characterID,
            playerName: this.props.location.state.playerName,
            email: this.props.location.state.email
        }
    });
}
Back = () => {
    this.props.history.replace({
        pathname: '/charselect',
        state: {
            userName: this.props.location.state.playerName,
            email: this.props.location.state.email
        }
    })
}

    render() {
        return (
            <section id="start">

                <a className="back" onClick={this.Back}><img src="images/back.png" /></a>
                <div className="container">
                    <a className="startgame" onClick={this.Start}>START GAME</a>
                    <a className="chart"><img src="images/chart.png" /></a>
                    <a className="exit" onClick={ ()=> {this.props.history.replace("/")}}><img src="images/exit.png" /></a>

                </div>

            </section>
        )
    }
};
