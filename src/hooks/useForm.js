
import {useState } from 'react'




export const useForm = (initialForm , validationForm) => {

   const [form, setform] = useState(initialForm)
   const [errors, seterrors] = useState({})


   const handleChange = (e) =>{


     const {name , value} = e.target

     setform({
         ...form , 
         [name]:value
     })

    
     seterrors(validationForm(form))
   }
     

  const handleSubmit = (e) =>{

    e.preventDefault()


    seterrors(validationForm(form))

    if(Object.keys(errors).length ===0){
  
    

        localStorage.setItem("usuarios" , JSON.stringify(form))
     


    }

  }



  return {


     form , handleChange , handleSubmit , errors


  }
    
  
}

