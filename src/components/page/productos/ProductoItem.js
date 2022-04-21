import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "context/DataProvider";

export const ProductoItem = ({title, image, category, price, id}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;



  return (
    
    // <div key={id} className="producto">
    //   <Link to={`/producto/${id}`}>
    //   <div className="producto__img">
    //     <img src={image} alt={title} />
    //   </div>
    //   </Link>
    //   <div className="producto__footer">
    //     <h1>{title}</h1>
    //     <p>{category}</p>
    //     <p className="price">${price} </p>
    //   </div>
    //   <div className="bottom">
    //     <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito</button>
    //     <div>
    //     <Link to={`/producto/${id}`} className="btn">Vista</Link>
    //     </div>
    //   </div>
    // </div>


    
        <div className="card p-7">
          <img src={image} alt="" className="card-img-top" />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <h4 className="card-text">{category}</h4>
            <h4 className="card-text text-success">{price}</h4>
      
  <div className="w-100 text-center">
  <Link  className="btn btn-outline-success btn-sm  mx-1" onClick={() => addCarrito(id)}>Agregar </Link>
            <Link to={`/producto/${id}`} className="btn btn-outline-primary btn-sm mx-1">Vista...</Link>
  </div>
          </div>
        </div>
   

  );
};
