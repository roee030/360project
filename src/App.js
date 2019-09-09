import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  return( 
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/rooms" component={Rooms}/>
      <Route exact path="/rooms/:_id" component={SingleRoom}/>
      <Route component={Error}/>
    </Switch>
    </>
  );
}
export default App;