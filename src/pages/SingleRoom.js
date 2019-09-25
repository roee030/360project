import React, { Component } from 'react'
import {RoomContext} from '../context';
class SingleRoom extends Component {
    static contextType = RoomContext;
    constructor(props)
    {
        super(props);
        this.state={
            id:this.props.match.params.id
        }
    }
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.id);
        if (!room) {
            return (
              <div className="error">
                <h3> no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                  back to rooms
                </Link>
              </div>
            );
          }        return (
            <div>
               <h1> hello from single room page</h1>
            </div>
        )
    }
}
export default SingleRoom;