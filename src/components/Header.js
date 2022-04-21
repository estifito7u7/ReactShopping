import React, { useContext} from "react";
import { DataContext } from "context/DataProvider";
import { NavLink } from "react-router-dom";
import Nike from "images/Nike.jpg";


export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>{
    setMenu(!menu)
  }
 

  return (

    <>
    

  <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
    <div className="container px-4 px-lg-5">
      <NavLink to="/home" className="navbar-brand" href="index.html">Shopping shoes</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto py-4 py-lg-0">
          
          <li className="nav-item">
           <NavLink to={"/home "} className="nav-link px-lg-3 py-3 py-lg-4">INICIO</NavLink>
        </li>
       <li className="nav-item">
          <NavLink to={"/productos"} className="nav-link px-lg-3 py-3 py-lg-4">PRODUCTOS</NavLink>
       </li>


       <div className="cart  d-flex align-items-center" onClick={toogleMenu}>
      <box-icon name="cart"  ></box-icon>
        <span className="item__total"> {carrito.length} </span>
    </div>
        </ul>
      </div>
     
    </div>
  </nav>

 




    
    </>

  );
};
