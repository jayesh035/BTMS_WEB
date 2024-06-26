import React from "react";

export default function Alert(props) {
  const capatalized=(word)=>
  {
    let lower=word.toLowerCase();

    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
   <div style={{height:'30px',margin:'5px'}} >

         { props.alert &&   <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={props.style}>
    <strong> {capatalized(props.alert.type)}</strong>: {props.alert.msg}   
      </div>}
      </div>
  );
}
