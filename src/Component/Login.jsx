import React, { Component } from 'react';
import './Styles/Fields.css'
import $ from 'jquery';

const SQL_URL = 'http://localhost:49873/WebService.asmx';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
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

    passChange = (e) => {
        let pass = e.target.value;
        this.setState(() => {
            return { pass: pass }
        })

    }



    sub = () => {
    
        let paramObj = {
            email: this.state.email,
            pass: this.state.pass
        }
        $.ajax({
            url: SQL_URL + '/Login',
            dataType: 'json',
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(paramObj),
            error: (jqXHR, textStatus)=>{
                console.log(jqXHR, textStatus);
                
            },
            success: (data)=>{
            
            if(data.d != 'null'){
                data.d = JSON.parse(data.d);
               this.props.history.replace({
                    pathname: '/charselect',
                            state: {
                                email: this.state.email,
                                score: data.d['Score'],
                                userName: data.d["Name"]
                            }
                        })
               }else{
                   alert("incorrect Email or Password");
               }
            }
                
          
            
        });


        
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
                  
                        <input type="email" placeholder='E-mail' className='white' value={this.state.email} onChange={this.emailChange}/>
                        <input type="text" placeholder='Password' value={this.state.pass} onChange={this.passChange}/>
                        <input onClick={this.sub} type="submit" value="Log-In" className="button" />
                        <input type="button" value="Register" className="button2" onClick={this.Register} />
                        <div className='google'>
                            <a href=""><img src="/images/google.png" alt="" /></a>
                        </div>
                        <div className='facebook'>
                            <a href=""> <img src="/images/facebook.png" alt="" /> </a>
                        </div>
                    
                </div>
                <img id="soundImg" onClick={this.imgChange} src={this.state.img} alt="" />
            </section>
        );
    }
}

