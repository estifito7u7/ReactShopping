import React, {useContext} from 'react'
import { DataContext } from "context/DataProvider";
import { ProductoItem } from "./ProductoItem";
import { Header } from 'components/Header';
import { Carrito } from 'components/Carrito';

export const ProductosList = () => {
	const value = useContext(DataContext)
	const [productos] = value.productos;
    return (
			<>
			      
				  <Header />      
      <Carrito />
			<h1 className="title text-center">PRODUCTOS</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItem 
									key={producto.id}
									title={producto.title}
									image={producto.image}
									category={producto.category}
									price={producto.price}
									id={producto.id}
								/>
							))
						}					
        </div>
				</>
    )
}
