import React, { Component } from 'react';
import './Styles/Fields.css';
import * as FontAwesome from 'react-icons/lib/fa'
import ajax from './AJAX';
const AJAX = new ajax();

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: "/images/sound-on.png",
            nick: '',
            email: '',
            pass: ''
        }
    }

    Cancel = () => {
        this.props.history.replace({
            pathname: '/'
        })
    }


    onSubmit = (e) => {
        e.preventDefault();
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(String(this.state.email).toLowerCase())) {
            AJAX.register(this.state.email, this.state.pass, this.state.nick)
                .then((json) => {
                    this.props.history.replace({
                        pathname: '/',
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        else {

        }


    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (

            <div className="clouds">
                <div className="login">
                    <form onSubmit={this.onSubmit} >
                        <input required name='nick' type="text" onChange={this.handleChange} placeholder='Nickname' value={this.state.nick} />
                        <input required name='email' type="email" onChange={this.handleChange} placeholder='E-mail' value={this.state.email} />
                        <input required name='pass' type="password" onChange={this.handleChange} placeholder='Password' value={this.state.pass} />
                        <input type="submit" value="Register" />
                        <input type="button" value="Cancel" onClick={this.Cancel} />
                    </form>

                </div>
                <input type="button" className="sound" onClick={this.imgChange} src={this.state.img} />
            </div>
        )
    }
};
