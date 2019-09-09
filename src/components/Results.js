import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { NONAME } from 'dns';
import {RoomContext} from '../context';

const ResultTable = props => (
  <tr>
    <td>{props.ResultTable.streetName}</td>
    <td>{props.ResultTable.description}</td>
    <td>{props.ResultTable.city}</td>
    <td>{props.ResultTable.flor}</td>
    <td>{props.ResultTable.numOfRooms}</td>
    <td>{props.ResultTable.price}</td>
    <td>{props.ResultTable.size}</td>
  </tr>
)
export default class Rooms extends Component {
  static contextType = RoomContext;

    constructor(props) {
        super(props);
        
        this.state = {apartments: []};
      }
      componentDidMount() {
        axios.get('http://localhost:5000/apartments/')
          .then(response => {
            this.setState({ apartments: response.data })
            
          })
          .catch((error) => {
            console.log("error fetch data from mongodb");
          })
      }
      apartmentList() {
        return this.state.apartments.map(currentapartments => {
          return <ResultTable ResultTable={currentapartments} key={currentapartments._id}></ResultTable>
        })
      };
    render() {
      let {rooms} = this.context;
      rooms = rooms.map(room=>{
        return <Rooms key={room._id} room={room}/>
      })
        return (
          <div>
          <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Street Name</th>
              <th>Description</th>
              <th>City</th>
              <th>Floor</th>
              <th>Num Of Rooms</th>
              <th>Price</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            { this.apartmentList() }
          </tbody>
        </table>
        </div>
        )
    }
}
