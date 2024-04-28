import React, { useState } from "react";
import BusInfo from "./BusInfo";
import './style/html_contants.css'
// useState
// BusInfo
const Show_available_buses=(props)=>{

    const [buses_information,set_busInformation]=useState([]);
    
    const [flg,setFlg]=useState(true)
   
    // let all_bus_data=[];
    let json=[];
const fetchalldetails=async()=>{


try {
        
        const response=await fetch("http://localhost:5000/api/buses/fetchAllbus",
    {
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })

  json=await response.json();
   
    // console.log(json[0].Bus_Name)
// all_bus_data=json;
set_busInformation(json);

    } catch (error) {
        console.log(error);
    }


    console.log(json);

}
    if(flg===true)
    {
        fetchalldetails();
        setFlg(false);
        
    }
    
    // setTimeout(fetchalldetails,1000);

    return(
        <>
    <div className="container my-5">
<div className="div1">
        <h1>Available buses from {props.booking_data.From} To {props.booking_data.To}</h1>
        </div>
       <div className="div2">
            {
                buses_information.map((obj)=>{
                    return <BusInfo busName={obj.Bus_Name} busNumber={obj.Bus_Number}></BusInfo>
                })
            }
        </div>
            
                
            
      


    </div>



        </>


    )

}

export default Show_available_buses;