import React, { Component } from 'react'
import items from './data';
import axios from 'axios';

const RoomContext = React.createContext();
export default class RoomProvider extends Component {

    state = {
      users:[],
      rooms:[],
      sortedRooms:[],
      featuredRooms:[],
      loading:true
    };

    //GetData
    getdata() {
        axios.get('http://localhost:5000/apartments/')
          .then(response => {
            this.setState({ rooms: response.data })
          })
          .catch((error) => {
            console.log("error fetch data from mongodb");
          })
          axios.get('http://localhost:5000/users/')
          .then(response => {
            this.setState({ users: response.data })
          })
          .catch((error) => {
            console.log("error fetch data from mongodb");
          })
          

    }
    componentDidMount()
    {
        this.getdata();
        console.log(this.state.rooms);
        let featuredRooms = this.state.rooms.filter(room => room.featured === true);
        this.setState({
          featuredRooms,
          loading : false
        })
        
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
            {this.props.children}
            </RoomContext.Provider>
        )
    }
}


const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer , RoomContext};