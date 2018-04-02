import React, { Component } from 'react';
import './Styles/Fields.css'


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            user: "",
            pass: ""
        }

    }

    emailChange = (e) => {
        let mail = e.target.value;
        this.setState(() => {
            return { email: mail }
        })

    }

    userChange = (e) =>{
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

    render() {
        return (
            <section id='login'>
                <div className='form'>
                <form onSubmit={this.sub}>
                    <input type="text" placeholder='E-mail' className='white'/>
                    <input type="text" placeholder='Password'/>
                    <input type="submit"  value="Log-In" className="button"/>
                    <input type="button" value="Register" class="button2" onClick={this.Register}/>
                    <div className='google'>
                        <a href=""><img src="/images/google.png" alt=""/></a>
                    </div>
                    <div className='facebook'>
                        <a href=""> <img src="/images/facebook.png" alt=""/> </a>
                    </div>
                </form>
                </div>
                <img srcSet="images/sound-on.png" alt=""/>
            </section>
        );
    }
}

