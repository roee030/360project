import React, { Component } from 'react'
import items from './data';
import axios from 'axios';

const RoomContext = React.createContext();
export default class RoomProvider extends Component {

    state = {
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
            //console.log(this.state.rooms)
          })
          .catch((error) => {
            console.log("error fetch data from mongodb");
          })
    }
    componentDidMount()
    {
        this.getdata();
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