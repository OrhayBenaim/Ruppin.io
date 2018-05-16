import React, { Component } from 'react';
import './Styles/Fields.css';
import * as FontAwesome from 'react-icons/lib/fa'
import ajax from './AJAX';
const AJAX = new ajax();

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
        let flag = true;
        let x = this.state.valids;
        for (let i = 0; i < x.length; i++) {
            console.log(x[i]);
            if (x[i] == false) {
                flag = false
            }
        }
        if (x.length < 3)
            flag = false;
        if (flag) {
            AJAX.register(this.state.email, this.state.pass, this.state.user)
                .then((json) => {
                    this.props.history.replace({
                        pathname: '/',
                    })
                })
                .catch((err) => {
                    alert(err);
                })
        }
        else
            alert("nope");
        //shake animation 
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
        this.setState(() => {
            let temp = this.state.valids;
            if (nick.length > 8) {
                temp[0] = false;
                return {
                    valids: temp,
                    user: nick
                }
            }
            temp[0] = true;

            return {
                valids: temp,
                user: nick
            }
        })
    }
    emailChange = (e) => {
        let mail = e.target.value;
        this.setState(() => {
            let temp = this.state.valids;
            if (mail.length < 8) {
                temp[1] = false;
                return {
                    valids: temp,
                    email: mail
                }
            }
            temp[1] = true;

            return {
                valids: temp,
                email: mail
            }
        })
    }
    passChange = (e) => {
        let password = e.target.value;
        this.setState({ pass: password })
    }
    changeRepPass = (e) => {
        let passchk = e.target.value;
        this.setState(() => {
            let temp = this.state.valids;
            if (passchk != this.state.pass) {
                temp[2] = false;
                return {
                    valids: temp,
                    repPass: passchk
                }
            }
            temp[2] = true;
            return {
                valids: temp,
                repPass: passchk
            }
        })
    }

    render() {
        return (

            <div className="clouds">
                <div className="login">
                    <form onSubmit={this.Submitted} >
                        <input type="text" onChange={this.userChange} placeholder='Nickname' value={this.state.user} />
                        <input type="email" onChange={this.emailChange} placeholder='E-mail' value={this.state.email} />
                        <input type="password" onChange={this.passChange} placeholder='Password' value={this.state.pass} />
                        <input type="password" onChange={this.changeRepPass} placeholder='Repeat Password' value={this.state.repPass} />
                        <input type="submit" value="Register" />
                        <input type="button" value="Cancel" onClick={this.Cancel} />
                    </form>

                </div>
                <input type="button" className="sound" onClick={this.imgChange} src={this.state.img} />
            </div>
        )
    }
};
