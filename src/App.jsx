import { useState } from 'react'
import './App.css'
import Card from './Componentes/Card'
import React from 'react'

function App() {
  const [nombre, setNombre] = useState('')
  const [banda, setBanda] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(nombre.length > 3 && banda.length > 6){
      setShow(true)
      setError(false)
  } else {
      setError(true)
      setShow(false)
  }
}


  return (
    <>
      <h1>Encuesta sobre gustos musicales</h1>
      <div>
          <form onSubmit={handleSubmit}>
              <label> Nombre: </label>
              <input type="text" placeholder='Ingrese nombre'
                onChange={(e) => {
                  setNombre(e.target.value.trim());
                  setShow(false);
                  setError(false)
                  }}/>
              <label> Banda Favorita: </label>
              <input type="text" placeholder='Ingrese Banda favorita' 
              onChange={(e) => {
                setBanda(e.target.value.trim())
                setShow(false);
                setError(false)
                }}/>
              <button>Listo!</button>
          </form>
      </div>
      <div>
        {show && <Card nombre={nombre} banda={banda}/>}
        {error && <h2 className="error">Por favor chequea que la información sea correcta</h2>}
      </div>
    </>
  )
}

export default App