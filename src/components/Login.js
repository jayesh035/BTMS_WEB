import React, {  useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";





const Login = (props) => {
  
    let history=useHistory();
    const [credientials,setCredientials]=useState({email:"",password:""})
    const handleSubmit=async(e)=>
    {
     e.preventDefault();   
try {
    const response=await fetch("http://localhost:5000/api/auth/login",
     {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
            },
            body:JSON.stringify({email:credientials.email,password:credientials.password})
     });

     const json=await response.json();
     console.log(json)
     if(json.success)
     {

        //save auth token and redirect
        localStorage.setItem('token',json.authtoken);
        props.showAlrt("Logged in successfully","success");
        history.push('/');


     }
     else
     {
      props.showAlrt("Invalid creadientials","danger")
     }
} catch (error) {
    console.log(error)
}
     
    }
    const onChange=(e)=>
    {
        setCredientials({...credientials,[e.target.name]:e.target.value})
    }
    return (
      <div className="box" style={{height:"100vh",width:"100vw"}}>
    <div className="container mt-3">
      <form  onSubmit={handleSubmit}>
        <h2>Login to continue to BTMS</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={credientials.email}
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={credientials.password}
            name="password"
            onChange={onChange}
            
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
