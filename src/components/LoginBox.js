import React, { Component } from 'react'

export default class LoginBox extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    submitLogin(event) {

    }
    render() {
       
            <div className="inner-container">
                <div className="box">

                    <div className = "input-group">
                        <label htmlFor="username">UserName</label>
                        <input type="text" name="username" className="login-input" placeholder="Username"></input>
                    </div>
                    <div className = "input-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" className="login-input" placeholder="Password"></input>
                    </div>
                    <button type="button" className="login-btn" onClick={} ></button>
                </div>
                
            </div>
    }
}
