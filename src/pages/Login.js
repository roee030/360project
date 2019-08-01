import React, { Component } from 'react'
import LoginBox from '../components/LoginBox';
import RegisterBox from '../components/RegisterBox';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoginOpen: true,
          isRegisterOpen: false
        };
      }
      showRegisterBox() {
          this.setState({isRegisterOpen: true, isLoginOpen: false})
      }
      showLoginBox() {
        this.setState({isRegisterOpen: false, isLoginOpen: true})
    }
    render() {
        return (
            <div className="root-container">
             
                    <div className="box-controller"> 
                        <div className="controller" onClick={this.showLoginBox.bind(this)}> 
                        Login
                        </div>
                        <div className="controller"onClick={this.showRegisterBox.bind(this)}> 
                        Register
                        </div>
                    </div>
                    <div className="box-container">
                    
                    </div>
                    
            </div>
        )
    }
}
