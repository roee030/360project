import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class Rooms extends Component {
    constructor(props) {
        super(props);
        
        this.state = {apartments: []};
      }
      componentDidMount() {
        axios.get('http://localhost:5000/apartments/')
          .then(response => {
            this.setState({ apartments: response.data })
            console.log(this.state.apartments)
          })
          .catch((error) => {
            console.log("error");
          })
      }
    render() {
        return (
            <div>
                <h1>fff</h1>
            </div>
        )
    }
}
