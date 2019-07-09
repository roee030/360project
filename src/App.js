import React from 'react';
import {  Route, Switch } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms';

function App() {
  return( 
    <>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms/:slug" component={SingleRoom}/>
    </>
  );
}
export default App;