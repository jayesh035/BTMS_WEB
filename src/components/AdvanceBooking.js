import React from "react";

import "../App.css";
import "./style/booking.css";
const AdvanceBooking = (props) => {
  return (
    <div>
      <div className="box ">
        <div className="main_header_1"></div>
        <div className="main_header_2">
          <h1>Advance Booking</h1>

          <form className="path">
            <div className="src">
              <label for="source">From:</label>
              <br />
              <input type="text" placeholder="From" name="source" />
            </div>

            <div className="dst">
              <label for="destination">To:</label>
              <br />
              <input type="text" placeholder="To" name="destination" />
            </div>
            <div className="dt">
              <label for="data">Date:</label>
              <input type="date" name="date" />
            </div>
            <div className="seat">
              <label for="seat">No of seats:</label>
              <br />
              <input type="number" name="number" />
            </div>

            <div className="bton">
              <button className="btn">search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdvanceBooking;
