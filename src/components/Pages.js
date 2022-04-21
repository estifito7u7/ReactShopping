import React from "react";
import { Switch, Route ,BrowserRouter as Router} from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";
import Formulario from "./Formulario.js"

export default function Pages() {
  return (
    <section>

      <Switch>
				<Route path="/" exact component={Formulario}/>
        <Route path="/home" exact component={Inicio}/>
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
			</Switch>
    </section>
  );
}
