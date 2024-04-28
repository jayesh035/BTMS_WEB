import React, { useState } from 'react';
import './style/BusInfo.css'; // Importing CSS file for styling
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// useHistory
const Add_bus_info = (props) => {
  const [formData, setFormData] = useState({
    Bus_name: '',
    Bus_number: '',
    Stations: ''
  });
const  history=useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log(formData);

    try
    {

      const response=await fetch("http://localhost:5000/api/buses/addbus",
    {method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      Bus_Name:formData.Bus_name,
      Bus_Number:formData.Bus_number,
      Stations:formData.Stations
    })
    
    }
    );
    const json=await response.json();
    if(json.success==="true")
    {
      history.push("/");
      props.showAlrt("Bus Added successfully","success");
    }
    else{
     
        props.showAlrt("Invalid credentials","danger")
      
    }
  } 
  catch (error) {
    console.log(error);
    
  }


  };

  return (
    <div className="box">
    <div className="styled-form-container">
      <h2>Add New Bus</h2>
      <form className="styled-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="busname">Bus Name:</label>
          <input type="text" id="fullName" name="Bus_name" value={formData.Bus_name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="Bus Number">Bus Number:</label>
          <input type="text" id="busnumber" name="Bus_number" value={formData.Bus_number} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="stations">Stations:</label>
          <input type="text" id="stations" name="Stations" value={formData.Stations} onChange={handleChange}></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Add_bus_info;
