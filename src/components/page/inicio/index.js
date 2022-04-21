import React from 'react'
import { Link } from "react-router-dom";
import Portada from "images/inicio.jpg";
import { Header } from 'components/Header';
import { Carrito } from 'components/Carrito';



export default function Inicio() {
    return (
       <>
              <Header/>
              <Carrito/>

              <div className="container hero mt-2 d-flex justify-content-center align-center ">
  <div className="row">
    <div className="col-12 col-lg-6 col-xl-5 offset-xl-1 d-flex justify-content-center flex-column">
      <h1>Shopping Shore</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /></p> <Link to ={"/productos"}><button className="btn btn-primary bg-primary btn-lg action-button" type="button">Productos<i className="fa fa-long-arrow-right ml-2" /></button></Link> 
    </div>
    <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
      <div className="iphone-mockup"> <img className="device" src="https://i.imgur.com/bkCeTu7.png" />  
      </div>
    </div>
  </div>
</div>

                          
       </> 
      
    )
}
