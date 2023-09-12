import React, { useEffect, useState } from 'react'

const InputBoton = () => {

    // 1. Crear variable para guardar los datos y por defecto un objeto vacio
  const [listaTareas, setListaTareas] = useState({})


// 2. Crear funcion para guardar los datos en local y llamarla en el boton añadir
  const enviarTarea = () => {
    localStorage.setItem("tareas por hacer", JSON.stringify(listaTareas))
  }

  // 3. Crear el input con su tipo correspondiente y que en el onChange tiene el set con un objeto dentro que tendra lo que hay hasta ahora en la variable y la clave valor que se añade con el input.

  // 4. Mostrar los datos en la screen:
    useEffect(() => {
      const datosLocal = localStorage.getItem("tareas por hacer")
      console.log(JSON.parse(datosLocal))
    }, [])
    
    


  return (
    <>
    <input type="text" onChange={(e)=>setListaTareas({...listaTareas,"nombre tarea:":e.target.value})} />
    <button onClick={()=>enviarTarea()}>AÑADIR TAREA</button>
    </>
    
  )
}

export default InputBoton