import React from 'react';
import './style/PNR_style.css'
import axios, * as others from 'axios';
class PNR_component extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            PNR_Number:"",
            PNR_details:[],
            Passanger_status:[],
            submitClicked:true,
        }


    }
    handeChange= (event)=>
    {
        this.setState(
            {
                PNR_Number:event.target.value
            }
        );
    }
     handleClick= async(event)=>
    {

        this.setState
        (
            {
                Passanger_status:[],
                PNR_details:[],
                submitClicked:false
            }
        )
        // console.log(this.state.PNR_Number);
        // const axios = require('axios');
      

const options = {
  method: 'GET',
  url: 'https://irctc1.p.rapidapi.com/api/v3/getPNRStatus',
  params: {
    pnrNumber: this.state.PNR_Number
  },
  headers: {
    'X-RapidAPI-Key': '3eaad5c005mshbd93a9b690171bbp133217jsn3f6024f21601',
    'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
    this.setState(
        {
            PNR_details:response.data.data,
            Passanger_status:response.data.data.PassengerStatus
        }
    )
} catch (error) {
	console.error(error);
}
    }
    render() {
      return (
        <div className='container' >
          <h3>This is PNR component of this website</h3>
          <div className="form">
          <label htmlFor="pnr_no"><b>Enter your PNR NO.</b></label>
          <input type="text" id='pnr' name='pnr' value={this.state.PNR_Number} onChange={this.handeChange} />
          <button className='btn-primary' onClick={this.handleClick}>search</button>
          </div>
            <div className='tbl' hidden={this.state.submitClicked}>

                <table className='table'>
                <thead>
                    <tr>
                        <th>PNR Number</th>
                        <th>Bus Number</th>
                        <th>Bus Name</th>
                        <th>Source Station</th>
                        <th>Destination Station</th>
                        <th>Date of Journey</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.PNR_details.Pnr}</td>
                        <td>{this.state.PNR_details.TrainNo}</td>
                        <td>{this.state.PNR_details.TrainName}</td>
                        <td>{this.state.PNR_details.BoardingStationName}</td>
                        <td>{this.state.PNR_details.ReservationUptoName}</td>
                        <td>{this.state.PNR_details.Doj}</td>
                    </tr>
                </tbody>
                </table>
            </div>    

               <div className='tb2' hidden={this.state.submitClicked}>

                <table className='table'>
                <thead>
                    <tr>
                        <th>Person No</th>
                        <th>Coach</th>
                        <th>Berth</th>
                        <th>Booking status</th>
                        
                        <th>Current status</th>

                    </tr>
                </thead>
                <tbody>
                    {this.state.Passanger_status.map((passenger,index)=>
                    <tr key={index}>
                    <td>{passenger.Number}</td>
                    <td>{passenger.Coach}</td>
                    <td>{passenger.Berth}</td>
                    <td>{passenger.BookingStatus}</td>
                    <td>{passenger.CurrentStatus}</td>
                    
                </tr>
                    
                    )}
                    
                </tbody>
                </table>
            </div>      
        </div>
      )
    }
}
export default PNR_component;
