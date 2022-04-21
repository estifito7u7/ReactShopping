


import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "../hooks/useForm";
import {NavLink} from "react-router-dom"
const initialForm = {


  Nombre:"",
  Usuario:"",
  Email:"",
  Cedula:"",
  Password:"",
  ConfirmPassword:"",
  id:null

 }


 const validarForm = (form) =>{

  let errors = {}
  // validaciones con expresiones algebraicas
  let valNombre= /^[a-zA-Z]{4,18}$/;
  let valUsuario= /^[a-zA-Z0-9]{4,18}$/;
  let valEmail= /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let valCedula= /^[0-9]{4,18}$/;
  let valPassword= /^[a-zA-Z09/.,]{4,18}$/;


if(!form.Nombre.trim()){
  errors.Nombre = "El nombre es Requerido"
  
}else if(!valNombre.test(form.Nombre.trim())){
  errors.Nombre = "El nombre es incorrecto"
}
 
if(!form.Usuario.trim()){
  errors.Usuario = "El usuario es Requerido"

}else if(!valUsuario.test(form.Usuario.trim())){
  errors.Usuario = "El usuario es incorrecto"
}
 
if(!form.Email.trim()){
  errors.Email = "El Email es Requerido"

}else if(!valEmail.test(form.Email.trim())){
  errors.Email = "El Email es incorrecto"
}
 

if(!form.Cedula.trim()){
  errors.Cedula = "El Cedula es Requerido"

}else if(!valCedula.test(form.Cedula.trim())){
  errors.Cedula = "El cedula es incorrecto"
}
 
if(!form.Password.trim()){
  errors.Password = "El Password es Requerido"

}else if(!valPassword.test(form.Password.trim())){
  errors.Password = "El password es incorrecto"
}
 

if(!form.ConfirmPassword.trim()){
  errors.ConfirmPassword = "El ConfirmPassword es Requerido"

}else if(!valPassword.test(form.ConfirmPassword.trim())){
  errors.ConfirmPassword = "El ConfirmPassword es incorrecto"
}



return errors

 }

function Formulario() {



    const {form , handleChange , handleSubmit , errors  } = useForm(initialForm , validarForm)



  return (
  <>
  
  

 
 <div className="container vh-100 d-flex justify-content-center align-items-center">
<div className="row">
<div className="col">



<div className='text-center'>
  <h1 className='title'>Registrar Usuario</h1>
</div>

<form onSubmit={handleSubmit}>
  <div className="mb-3" controlId="formBasicEmail">
    <label className="form-control">Nombre</label>
    <input className="form-control"  isInvalid = {!!errors.Nombre}  type="text" placeholder="John Doe" onChange={handleChange} value={form.Nombre} name = "Nombre" />
   
   {errors.Nombre &&  <p className=" text-danger">{errors.Nombre}</p>}
  </div>

  <div className="mb-3" controlId="formBasicPassword">
    <label className="form-control">Usuario</label>
    <input className="form-control"  isInvalid = {!!errors.Usuario}  type="text"  placeholder="JohnDoe1234"   onChange={handleChange} value={form.Usuario} name = "Usuario" />
    {errors.Usuario  &&  <p className=" text-danger">{errors.Usuario}</p>}
  </div>

  <div className="mb-3" controlId="formBasicPassword">
    <label className="form-control">Email</label>
    <input className="form-control"  isInvalid = {!!errors.Email} type="text" placeholder="JohnDoe@gmail.com"  onChange={handleChange} value={form.Email} name = "Email"/>
    {errors.Email &&  <p className=" text-danger">{errors.Email}</p>}
  </div>


  <div className="mb-3" controlId="formBasicPassword">
    <label className="form-control">Cedula</label>
    <input className="form-control" isInvalid = {!!errors.Cedula} type="number" placeholder="1235435"   onChange={handleChange} value={form.Cedula} name = "Cedula" />
    {errors.Cedula &&  <p className=" text-danger">{errors.Cedula}</p>}
  </div>

  <div className="mb-3" controlId="formBasicPassword">
    <label className="form-control">Password</label>
    <input className="form-control" isInvalid = {!!errors.Password} type="password" placeholder="Password"  onChange={handleChange} value={form.Password} name = "Password" />
    {errors.Password &&  <p className=" text-danger">{errors.Password}</p>}
  </div>


  <div className="mb-3" controlId="formBasicPassword">
    <label className="form-control">Confirmar Password</label>
    <input className="form-control" isInvalid = {!!errors.ConfirmPassword} type="password" placeholder="Confirme el Password"  onChange={handleChange} value={form.ConfirmPassword} name = "ConfirmPassword"/>
    {errors.ConfirmPassword &&  <p className=" text-danger">{errors.ConfirmPassword}</p>}
  </div>




  

  {Object.keys(errors).length === 0 ?<NavLink to={"/home"}><button  className='btn btn-primary w-100 ' type="submit">Submit</button></NavLink>:<button  className='btn btn-primary w-100 disabled' type="submit">Submit</button> }

</form>






</div>


<div className="col bg-primary">
  <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_ctKmtF.json" background="transparent" speed={1} style={{width: '100%', height: '100%'}} loop autoPlay />

</div>


</div>
 </div>
  



  
  </>
  )
}

export default Formulario;
