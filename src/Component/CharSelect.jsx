

import React, { Component } from 'react';

export default class CharSelect extends Component {
    constructor(props)
    {
        super(props);
        this.state = {  };
    }
    
    handleClick = (e) => {
        
        let target = e.target;

        this.setState( (pervState)=>{
            if(pervState.element !== target){
                if(!target.classList.contains('imgPop')){
                    target.classList.toggle('imgPop');
                }
                

                if (pervState.element !== undefined && pervState.element.classList.contains('imgPop')){
                    pervState.element.classList.toggle('imgPop');
                    pervState.element.classList.toggle('imgPush');
                    setTimeout(() => {
                        pervState.element.classList.toggle('imgPush');
                    }, 1000);
                    
                }
                return{element: target};
            }
            else{
                //ENTER GAMER!

               this.props.history.replace({
                pathname: '/game',
                state: {
                    characterID: this.state.element.id,
                    playerName: this.props.location.state.userName,
                    email: this.props.location.state.email
                }
               });
                

            }
        })
    }
  render() {
      
    return (
        <div className="blue">
            <img alt='Character 1' id="1" src="/images/monster-1.png" className="avatar" onClick={this.handleClick} />
            <img alt='Character 2' id="2" src="/images/monster-2.png" className="avatar" onClick={this.handleClick} />
            <img alt='Character 3' id="3" src="/images/monster-3.png" className="avatar" onClick={this.handleClick} />
            <img alt='Character 4' id="4" src="/images/monster-4.png" className="avatar" onClick={this.handleClick} />
            <br />
            <button type="button" className="btn charBtn btn-info">
                character one
       </button>
            <button type="button" className="btn charBtn btn-info">
                character two
       </button>
            <button type="button" className="btn charBtn btn-info">
                character three
       </button>
            <button type="button" className="btn charBtn btn-info">
                character four
       </button>
        </div>
    )
  }
};
