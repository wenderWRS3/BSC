import './Exercicio.css'
import { useState } from 'react'

export default function Exercicio() {
  const [numero, setNumero] = useState(0);  

 
    function mas() {
     setNumero(numero + 1);
     console.log(numero);
    }

  return (
    <div id="exercicio">
       <h1>{numero}</h1>
      <button id="id" onClick={mas}>
        click
      </button>


    </div>
  )
}