import React from 'react';
import {  Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms';
import Error from './pages/Error';

import Navbar from './components/Navbar';
function App() {
  return( 
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms" component={Rooms}/>
      <Route exact path="/single-room" component={SingleRoom}/>
      <Route component={Error}/>
    </Switch>
    </>
  );
}
export default App;