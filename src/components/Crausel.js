import React from 'react';
import first from './img/1.jpg'
import second from './img/2.jpg'
import third from './img/3.jpg'
import "./style/home.css"
const Crausel = () => {
  return (
    
<>

<div id="carouselExampleControls" class="carousel slide my-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={first} width={2000} height={500} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={second} width={2000} height={500} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={third} width={2000} height={500} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
  );
};
export default Crausel;