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
    // get specific room
    getRoom = id =>
    {
      let tempRoom = [...this.state.rooms];
      const room = tempRoom.find(room => room._id == id);
      return room;
    };
    componentDidMount()
    {
        this.getdata();
        this.setState({
          loading : false
        })
        
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom}}>
            {this.props.children}
            </RoomContext.Provider>
        )
    }
}


const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer , RoomContext};

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}