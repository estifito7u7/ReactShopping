import React, { useContext } from "react";

import { DataContext } from "context/DataProvider";


export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const tooglefalse = () => {
    setMenu(false);
	};
	
	const reduce = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
			}
			setCarrito([...carrito])
		})
	}
	const increase = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad +=1;
			}
			setCarrito([...carrito])
		})
	}

  const productoComprado = ()=>{

     if(Object.keys(carrito).length === 0 ){
       
      alert("No hay datos en el carrito")

     } else{

     alert("Productos Comprados")
      
     }

  }

	const removeProducto = id =>{
		if(window.confirm("¿Quieres suspender el producto?")){
			carrito.forEach((item, index)=>{
				if(item.id === id){
					item.cantidad = 1;
					carrito.splice(index, 1)
				}
			})
			setCarrito([...carrito])
		}
	}

  const show1 = menu ? "carritos show" : "carrito";
	const show2 = menu ? "carrito show" : "carrito";
	


  return (
    <div className={show1}>
      <div className={show2}>
        <div onClick={tooglefalse} className="carrito__close">
          <box-icon name="x"></box-icon>
        </div>
        <div className="card">
  <div className="row">
    <div className="col-md-8 cart">
      <div className="title">
        <div className="row">
          <div className="col">
            <h4><b>Shopping Cart</b></h4>
          </div>
          <div className="col align-self-center text-right text-muted">
            {carrito.length ===0 ? <p>Sin Datos</p> :carrito.length}
            </div>
        </div>
      </div>
        
					{
					
					carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem"}}>Carrito Vacio</h2> :<>
					{
					carrito.map((producto) => (
           







      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img className="img-fluid" src={producto.image} />
            </div>
          <div className="col">
            <div className="row text-muted">{producto.title}</div>
            <div className="row text-center">{producto.price}</div>
          </div>
          <div className="col"> <a href="#" onClick={() => reduce(producto.id)} > - </a><a href="#" className="border">{producto.cantidad}</a><a href="#" onClick={() => increase(producto.id)}> + </a> </div>
            <div className="col"><button className="btn btn-danger " onClick={() =>removeProducto(producto.id)}>X</button></div>
        </div>
      </div>
     



					))
				}
					
					</>
					}

      


    </div>
    <div className="col-md-4 summary">
      <div>
        <h5><b>Summary</b></h5>
      </div>
      <hr />
      
   
      
      <div className="row" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0'}}>
        <div className="col">Precio Total</div>
        <div className="col text-right">$ {total}</div>
      </div> <button className="btn btn-success" onClick={productoComprado}>Comprar</button>
    </div>









      </div>
    </div>
	        
	</div>
</div>


  );
};
