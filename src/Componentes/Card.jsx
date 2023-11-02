import React, { useState } from 'react';



const Card = ({nombre, banda}) => {
  const sitioWeb = banda.replace(/\s/g, '');
  
 
    return (
    <div className="card">
        <h2>Hola {nombre}!<br/>Que gran elección, {banda} es una gran banda!<br/><br/>Visítalos en www.{sitioWeb.toLowerCase()}.com</h2>
    </div>
  )
}

export default Card