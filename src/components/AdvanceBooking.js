import React, { useState } from "react";

import "../App.css";
import "./style/booking.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// useHistory
const AdvanceBooking = (props) => {
const history=useHistory();
  const [dateBegin, setDateBegin] = useState(new Date())
  const [formData, setFormData] = useState({
    From: '',
    To: '',
    seats: 0
  });
  const changeDate=(e)=>{
    setDateBegin(e.target.value);
    // console.log(dateBegin);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log(formData);
    // console.log("submitted!");
    props.set_booking_data({From:formData.From,
      To:formData.To,
      No_seats:formData.seats,
    date:dateBegin});

    // console.log(props.booking_data.date);
      
      history.push('/show_buses')
// console.log(dateBegin);
  };
  return (
    <>
      <div className="box ">
        <div className="main_header_1"></div>
        <div className="main_header_2">
        <div className="box">
    <div className="styled-form-container">
      <h2>Advance Booking</h2>
      <form className="styled-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from">From:</label>
          <input type="text" id="from" name="From" value={formData.From} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="to">To:</label>
          <input type="text" id="to" name="To" value={formData.To} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="seats">Seats:</label>
          <input type="number" id="seats" name="seats" value={formData.seats} onChange={handleChange}></input>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={dateBegin} onChange={changeDate}></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default AdvanceBooking;
