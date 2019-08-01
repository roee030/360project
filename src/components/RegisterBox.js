import React, { Component } from 'react'

export default class RegisterBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            errors: [],
            pwdState: null
          };
        }
          showValidationErr(elm, msg) {
            this.setState((prevState) => ({
              errors: [
                ...prevState.errors, {
                  elm,
                  msg
                }
              ]
            }));
          }
        
          clearValidationErr(elm) {
            this.setState((prevState) => {
              let newArr = [];
              for (let err of prevState.errors) {
                if (elm != err.elm) {
                  newArr.push(err);
                }
              }
              return {errors: newArr};
            });
          }
        
          onUsernameChange(e) {
            this.setState({username: e.target.value});
            this.clearValidationErr("username");
          }
        
          onEmailChange(e) {
            this.setState({email: e.target.value});
            this.clearValidationErr("email");
          }
        
          onPasswordChange(e) {
            this.setState({password: e.target.value});
            this.clearValidationErr("password");
        
            this.setState({pwdState: "weak"});
            if (e.target.value.length > 8) {
              this.setState({pwdState: "medium"});
            } else if (e.target.value.length > 12) {
              this.setState({pwdState: "strong"});
            }
        
          }
        
          openPopup(e) {
            console.log("Hello world!");
          }
          validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
          }

          submitRegister(e) {
        
            console.log(this.state);
        
            if (this.state.username == "") {
              this.showValidationErr("username", "Username Cannot be empty!");
            }
            if (this.state.email == "") {
              this.showValidationErr("email", "Email Cannot be empty!");
            }
            if (this.state.password < 6) {
              this.showValidationErr("password", "Password Cannot be less than 6 characters long!");
            }
            if (!this.validateEmail(this.state.email)){
                this.showValidationErr("email","Not valid Email");
            }
        
      }
    
     
    
      render() {
            let usernameErr = null,
              passwordErr = null,
              emailErr = null;
        
            for (let err of this.state.errors) {
              if (err.elm == "username") {
                usernameErr = err.msg;
              }
              if (err.elm == "password") {
                passwordErr = err.msg;
              }
              if (err.elm == "email") {
                emailErr = err.msg;
              }
            } 

        return (
          <div className="inner-container">
            <div className="header">
              Register
            </div>
            <div className="box">
    
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  className="login-input"
                  placeholder="Username" 
                  onChange={this.onUsernameChange
                    .bind(this)}/>
                  <small className="danger-error">{usernameErr
                      ? usernameErr
                      : ""}</small>
              </div>
    
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" className="login-input" placeholder="Email"onChange={this
                    .onEmailChange
                    .bind(this)}/>
                  <small className="danger-error">{emailErr
                      ? emailErr
                      : ""}</small>
              </div>
    
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="login-input"
                  placeholder="Password"onChange={this
                    .onPasswordChange
                    .bind(this)}/>
                  <small className="danger-error">{passwordErr
                      ? passwordErr
                      : ""}</small>
      
              </div>
              <button
                type="button"
                className="btn-primary"
                onClick={this
                    .submitRegister
                    .bind(this)}
                    onHover={this
                        .openPopup
                        .bind(this)}>Register</button>
            </div>
          </div>
        );
    }
}
