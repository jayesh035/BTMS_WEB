import React from 'react';
import './style/Bus.css'; // Import the CSS file for styling
import './style/html_contants.css'
const BusInfo = (props) => {
  return (
    <div className="bus-info-container">
      <div className="box1">
      <div className="bus-name">{props.busName}</div>

<div className="bus-number">Bus Number: {props.busNumber}</div>
      </div>
      <div className="box2">
      <button class="rounded-button" type="submit">Book Now</button>
      </div>
      
    </div>
  );
};

export default BusInfo;