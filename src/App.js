import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AdvanceBooking from './components/AdvanceBooking';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Crausel from './components/Crausel';
// import PNR_component from './components/PNR_component';

import Signup from './components/Signup';
import Login from './components/Login';
import Alert from './components/Alert';
import NoteState from './context/notes/noteState';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import BusInfo from './components/add_bus_info';
import Show_available_buses from './components/Show_available_buses';


// import crausel from './components/crausel';


const  App=()=> {


  const[alert,setalert] =useState(null);
  const [vis,setvis]=useState({
    visibility:'hidden'
  });

  const [booking_data,set_booking_data]=useState({
    From:'',
    To:'',
    No_seats:0,
    date:new Date()
  })
  const showAlert=(massage,type)=>
  {
    setalert({
      msg:massage,
      type:type
    });
    setvis({
      visibility:'visible'
    });
    setTimeout(()=>
    {
      setvis({
        visibility:'hidden'
      });
      setalert(null);
    },1500);
  }

  return (
    <>
    <BrowserRouter>
     <NoteState> 
    <Router>
  
    <Navbar/>
    {/* <Navbar />  */}
    <div className="container">
        <Alert alert={alert} />
        
    <Switch>
      <Route exact path="/AdvanceBooking">
      
        <AdvanceBooking showAlrt={showAlert} booking_data={booking_data} set_booking_data={set_booking_data}/>

      </Route>

   <Route exact path="/">
<Crausel/>
   </Route>

   <Route exact path="/add_bus" >
<BusInfo   showAlrt={showAlert}/>
   </Route>
   
   <Route exact path="/login">

<Login  showAlrt={showAlert}/>

   </Route>
   
   <Route exact path="/sign_up" >
<Signup showAlrt={showAlert}/>
   </Route>

   <Route exact path="/show_buses" >
<Show_available_buses showAlrt={showAlert} booking_data={booking_data} />
   </Route>
 
    
    </Switch>
    
    </div>
    </Router>
    </NoteState>

    </BrowserRouter>
    </>
  );
}

export default App;
