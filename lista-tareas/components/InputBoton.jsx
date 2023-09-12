import React, { useState } from 'react'

const InputBoton = () => {

   const [tareas, setTareas] = useState({})

   const handleEnviarForm = () => {
    localStorage.setItem("formularioPau", JSON.stringify(tareas));
}

  return (
    <>
    <input type="text" onChange={(e)=>{setTareas({...tareas, tarea:e.target.value})}}></input>
    <button onClick={()=>handleEnviarForm()}>Añadir tarea</button>
    <br></br>
    </>
    
  )
}

export default InputBoton