import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";
import { Header } from 'components/Header';
import { Carrito } from 'components/Carrito';

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl]= useState(0)
  const [images, setImages] = useState('')
  const params = useParams();
  let item = 0;

  useEffect(() =>{
    console.log('re render' , params.id)
    item=0;
    productos.forEach(producto =>{
      if(producto.id === parseInt(params.id)){
        setDetalle(producto)
        setUrl(0)
      }
    })
  },[params.id, productos])

  console.log(url)

  useEffect(() =>{
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values) 
  },[url, params.id])

  const handleInput = (e) =>{
  const number = e.target.value.toString().padStart(2,'01')
   setUrl(number)
  }

  if(detalle.length < 1) return null;

  return (
    <>

    <Header/>
    <Carrito/>
    {




<div className="container mt-2">
  <div className="card">
    <div className="container-fliud  ">
      <div className="wrapper row">
        <div className="preview col-md-7 mt-4 ">
          {
            url ? <img src={images} alt={detalle.title}/> : <img src={detalle.image} alt={detalle.title}/>
          }
        <input className=' w-100 ' type="range" min="1" max="36" step="1" value={url} onChange={handleInput} />
         
        </div>
         
        <div className="details col-md-4 text-center">
          <h3 className="product-title">{detalle.title}</h3>
        
          <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
          <h4 className="price">current price: <span className='text-success'>${detalle.price}</span></h4>
      
          <h5 className="sizes my-1">sizes:
            <span className="size" data-toggle="tooltip" title="small">s</span>
            <span className="size" data-toggle="tooltip" title="medium">m</span>

          </h5>
         
          <div className="action">
            <button className="add-to-cart btn btn-success" type="button" onClick={() => addCarrito(detalle.id)}>Agregar</button>
            <button className="like btn btn-default" type="button"><span className="fa fa-heart" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    }
    <h2 className="relacionados">Productos relacionados</h2>
    <div className="productos">
      {
        productos.map((producto)=>{
          if((item < 6)&&(detalle.category === producto.category)){
            item++;
          return <ProductoItem 
          key={producto.id}
          title={producto.title}
          image={producto.image}
          category={producto.category}
          price={producto.price}
          id={producto.id}
          />
          }
          
        
        })
      }
     
    </div>
    </>
  )
}
