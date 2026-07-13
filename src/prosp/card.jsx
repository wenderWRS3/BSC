import aimg from "../img/sem-imagem.png"
 export default function Card({ img = aimg }) {
  const numero= 100;
  return (
    <div id='card'>
      <div id='produto'>
        <img src={img} alt="imgem_de_produto" id='imag' />
        <p id='descriçao'>camisa</p>
        <p id='valor'>{Number(numero).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      </div>
    </div>
  )
}