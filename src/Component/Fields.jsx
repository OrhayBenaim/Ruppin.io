import React, { Component } from 'react';


export default class Fields extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            user: "",
            pass: ""
        }

    }
    btnLogin = (e) => {
        alert("Login Button");
    }
    btnReset = (e) => {
        alert("Reset Button");
    }
    txtChange = (e) => {
        let mail = e.target.value;
        this.setState(() => {
            return { email: mail }
        })

    }

    sub = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div className="loginFrame">
                <form onSubmit={this.sub}>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email address</label>
                        <input onChange={this.txtChange} type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputUser">User Name</label>
                        <input type="text" id="userId" className="form-control" placeholder="User Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPass">Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="rememberLogin" />
                        <label className="form-check-label" htmlFor="rememberLogin">Remember Me</label>
                    </div>
                    <button onClick={this.btnLogin} type="submit" className="btn btn-primary" >Submit</button>
                    <button onClick={this.btnReset} type="reset" className="btn btn-secondary">Reset</button>

                    <br /><br /><br />
                    <div>
                        {this.state.email}
                    </div>
                </form>
            </div>

        );
    }
}

