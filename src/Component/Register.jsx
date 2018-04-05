import React, { Component } from 'react';
import './Styles/Fields.css';
import * as FontAwesome from 'react-icons/lib/fa'

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            repPass: '',
            user: '',
            img: "/images/sound-on.png",
            valids: []
        }
    }

    Cancel = () => {
        this.props.history.replace({
            pathname: '/'
        })
    }

    Submitted = (event) => {
        event.preventDefault();

        let u = this.state.user;
        let e = this.state.email;
        let p = this.state.pass;
        if (u.length <= 4 || e.length <= 4 || p.length <= 4) {
            alert("something went wrong");
            window.location.reload();
        }


    }

    imgChange = () => {
        if (this.state.img === "images/sound-on.png") {
            this.setState({ img: "images/sound-off.png" })
        }
        else
            this.setState({ img: "images/sound-on.png" })
    }

    userChange = (e) => {
        let nick = e.target.value;
        this.setState( () => {
            let temp = this.state.valids;
            if(nick.length > 8){
                temp[0] = false;
                return {
                    valids: temp,
                    user: nick
                }
            }
            temp[0] = true;
            
            return{
                valids: temp,
                user: nick
            }
        })
    }
    emailChange = (e) => {
        let mail = e.target.value;
        this.setState({ email: mail })
    }
    passChange = (e) => {
        let password = e.target.value;
        this.setState({ pass: password })
    }

    render() {
        return (
            <section id='login'>
                <div className='form'>
                <div className='fa fa-check' style= { {width:'10pt', height:'10pt'} }></div>
                    <form onSubmit={this.Submitted}>
                        <input type="text" onChange={this.userChange} placeholder='Nickname' value={this.state.user}/>
                        <FontAwesome.FaCheck className='icon' style = { {visibility: this.state.valids[0] ? 'visible' : 'hidden'} }/>
                        <FontAwesome.FaClose className='icon' style = { {visibility: this.state.valids[0] | this.state.valids[0] ==undefined ? 'hidden' : 'visible'} }/>
                        <input type="text" onChange={this.emailChange} placeholder='E-mail' value={this.state.email} />
                        <input type="password" onChange={this.passChange} placeholder='Password' value={this.state.pass} />
                        <input type="password" onChange={this.changeRepPass} placeholder='Repeat Password' value={this.state.repPass} />
                        <input type="submit" value='Register' className='register' />
                        <input type='button' value='Cancel' className='cancel' onClick={this.Cancel} />
                    </form>
                </div>
                <img alt = '' onClick={this.imgChange} srcSet={this.state.img} className='sound' />
            </section>

        )
    }
};
