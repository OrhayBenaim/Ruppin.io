import React, { Component } from 'react';
import './Styles/Fields.css'


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            user: "",
            pass: "",
            img: "images/sound-on.png"
        }
    }

    emailChange = (e) => {
        let mail = e.target.value;
        this.setState(() => {
            return { email: mail }
        })

    }

    userChange = (e) => {
        let _user = e.target.value;
        this.setState({
            user: _user
        })
    }

    sub = (e) => {
        e.preventDefault();
        this.props.history.replace({
            pathname: '/charselect',
            state: {
                email: this.state.email,
                userName: 'bot' //'change this to get from sql by email
            }
        })
    }

    Register = () => {
        this.props.history.replace({
            pathname: '/register'
        })
    }
    imgChange = () => {
        if (this.state.img === "images/sound-on.png") {
            this.setState({ img: "images/sound-off.png" })
        }
        else
            this.setState({ img: "images/sound-on.png" })
    }

    render() {
        return (
            <section id='login'>
                <div className='form'>
                    <form onSubmit={this.sub}>
                        <input type="email" placeholder='E-mail' className='white' />
                        <input type="text" placeholder='Password' />
                        <input type="submit" value="Log-In" className="button" />
                        <input type="button" value="Register" className="button2" onClick={this.Register} />
                        <div className='google'>
                            <a href=""><img src="/images/google.png" alt="" /></a>
                        </div>
                        <div className='facebook'>
                            <a href=""> <img src="/images/facebook.png" alt="" /> </a>
                        </div>
                    </form>
                </div>
                <img id="soundImg" onClick={this.imgChange} src={this.state.img} alt="" />
            </section>
        );
    }
}

