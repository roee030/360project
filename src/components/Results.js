import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { NONAME } from 'dns';
const ResultTable = props => (
  <tr>
    <td>{props.ResultTable.floor}</td>
    <td>{props.ResultTable.floor}</td>
    <td>{props.ResultTable.floor}</td>
    <td>{props.ResultTable.numofRoom}</td>
    <td>{props.ResultTable.price}</td>
    <td>{props.ResultTable.description}</td>
  </tr>
)
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
            console.log("error fetch data from mongodb");
          })
      }
      apartmentList() {
        return this.state.apartments.map(currentapartments => {
          return <main id="accordion" key={currentapartments.id}>
            <section id={currentapartments._id}>
            <a href={"#"+currentapartments._id}><h1>{currentapartments.city},{currentapartments.streetName}</h1></a>
            <p>
            <iframe  src="https://EyeSpy360.vr-360-tour.com/e/NEkBbB93P6Q/e" allowfullscreen allow="microphone; camera; gyroscope; accelerometer"></iframe>

            </p>
            </section>
          </main>
        })
      };
    render() {
        return (
          <div>
          {this.apartmentList()}
        </div>
        )
    }
}
