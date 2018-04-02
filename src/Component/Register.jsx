import React, { Component } from 'react';
import './Styles/Fields.css';

export default class Register extends Component {



    Cancel = () =>{
        this.props.history.replace({
            pathname: '/'
        })
    }

    Submitted = (e) =>{
        e.preventDefault();
    }
  render() {
    return (
        <section id='login'>
            <div className='form'>
                <form onSubmit={this.Submitted}>
                    <input type="text" placeholder ='Nickname'/>
                    <input type="text" placeholder='E-mail'/>
                    <input type="text" placeholder='Password'/>
                    <input type="text" placeholder='Repeat Password'/>
                    <input type="submit" value='Register' className='register'/>
                    <input type='button' value='Cancel' className='cancel' onClick={this.Cancel}/>
                </form>
            </div>
            <img srcSet="/images/sound-on.png" className='sound' alt=''/>
        </section>

    )
  }
};
