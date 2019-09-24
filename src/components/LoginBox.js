import React, { Component } from 'react'

export default class LoginBox extends Component {
    constructor(props){
        super(props);
        this.state = {
          username: '',
          password:''
        };
    }
    submitLogin(e) {
      e.preventDefault();
      console.log(this.state.username);
    }
    onChangeUserName(event) {
      this.setState({
        username:event.target.value
      });

  }
  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Login
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              onChange={this.onChangeUserName.bind(this)}
              />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>

          <button
            type="button"
            className="btn-primary"
            onClick={this
            .submitLogin
            .bind(this)}>Login</button>
        </div>
      </div>
    );
    }
}
