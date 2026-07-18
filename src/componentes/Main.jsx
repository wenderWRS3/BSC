import './Main.css'
import img from "../img/sem-imagem.png"
import Card from "../prosp/card"
import Catalogo from "./cardRapido/Catalogo"
import Cartao from "./cardRapido/cartao"
import Marca from "./marca/marca.jsx"
import Footer  from './footer/footer.jsx'
export default function Main() {
  const numero = 100;
  return (
    <div id='poi'>
      <div id="main">
        <div id='bankai'>
          <div id='apresentaçao'>
            <p id='aan'>Bem vindo</p>
            <p id='aja'><strong className='qqq'>B</strong>om <strong className='qqq'>S</strong>imples <br /> <strong className='qqq'>C</strong>onfortavel</p>
            <p id='ooo'>Peças sem exagero, feitas para quem vive a vida real.
              <br />
              Do mercado ao almoço em família, da rua ao sofá
            </p>
          </div>
        </div>

        <div id='proMasCom'>
          <div id='aaall'>
            <Card img={img} className="center" />
            <Card img={img} className="center" />
            <Card img={img} className="center" />
          </div>
        </div>
      </div>

      <Catalogo  />
      <div className='enca'>
        <div className='encac'>
          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />

          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />

          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />

          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />

          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />

          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />

          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />

          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />
        </div>
      </div>
       <div className='enca'>
        <div className='encac'>
          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />

          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />

          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />

          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />

          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />

          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />

          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />

          <Cartao
            Img1={img}
            tex="aaaaaaa"
            val={45411414}
          />
        </div>
      </div>
      <Marca />
      <Footer/>
    </div>
  );
}
