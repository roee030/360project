import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
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
      exerciseList() {
        return this.state.apartments.map(currentapartments => {
          return <ResultTable ResultTable={currentapartments} key={currentapartments._id}/>;
        })
      }
    render() {
        return (
          <div>
          <h3>Logged Exercises</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              { this.exerciseList() }
            </tbody>
          </table>
        </div>
        )
    }
}
