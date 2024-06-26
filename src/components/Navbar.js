import React from "react";
import {Link,Outlet} from "react-router-dom"


const Navbar = (props) => {
  return (
    <>

<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">BTMS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/AdvanceBooking">Advance Booking</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/add_bus">Add Bus</Link>
        </li>
 
      
      </ul>

    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/sign_up">Sign up</Link>
        </li>      
      </ul>

    </div>
  </div>
</nav>

</>
  );
};
export default Navbar;


