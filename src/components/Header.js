import React from 'react';
import './Header.css';
class Header extends React.Component
{
    render(){
        return(
            <div className="container">
            <img src={require("../../src/images/Virtual_Tours.jpg")} alt="logo" class="logo"></img>
            <nav>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a class="active" href="#about">About</a></li>
              </ul>
              </nav>
           </div>
        );
    }
}
export default Header;