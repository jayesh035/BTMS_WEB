import React from "react";

import '../App.css';
import './style/booking.css';
const AdvanceBooking=(props)=>
{
    return(

<div>
<div className="box ">
    <h1 >Advance Booking</h1>

    <form className="path" >
        <label for="source">From</label>
        <input type="text" placeholder="From" name="source"/>
        
        <label for="destination">To</label>
        <input type="text" placeholder="To" name="destination"/>
        <label for="data">Date</label>
        <input type="date" name="date"/>

        <button className="btn-primary">search</button>
    </form>
</div>
</div>

    );
}

export default AdvanceBooking;