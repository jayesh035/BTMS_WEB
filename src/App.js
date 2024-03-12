import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import AdvanceBooking from './components/AdvanceBooking';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
function App() {
  return (
    <>
     
    <Router>
    <Navbar/>

    <Switch>
      <Route exact path="/AdvanceBooking">
      
        <AdvanceBooking/>

      </Route>
      <Route exact path="/">
      
      <Home/>

    </Route>
    </Switch>
    </Router>
    


    </>
  );
}

export default App;
