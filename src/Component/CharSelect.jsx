

import React, { Component } from 'react';

export default class CharSelect extends Component {
    constructor(props)
    {
        super(props);
        this.state = {  };
    }
    
    handleClick = (e) => {
        
        let target = e.target;
        console.log(target);
        this.setState( (pervState)=>{
            if(pervState.element != target){
                if(!target.classList.contains('imgPop')){
                    target.classList.toggle('imgPop');
                }
                

                if (pervState.element !=undefined && pervState.element.classList.contains('imgPop')){
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
                alert('gamse startu')
            }
        })
    }
  render() {
      
    return (
        <div class="blue">
            <img id="1" src="/images/monster-1.png" className="avatar" onClick={this.handleClick} />
            <img id="2" src="/images/monster-2.png" className="avatar" onClick={this.handleClick} />
            <img id="3" src="/images/monster-3.png" className="avatar" onClick={this.handleClick} />
            <img id="4" src="/images/monster-4.png" className="avatar" onClick={this.handleClick} />
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
