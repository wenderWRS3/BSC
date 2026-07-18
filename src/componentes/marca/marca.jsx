import './marca.css'
import imgMarca from "../../img/bsc_higanbana_v3.png"
export default function marca() {
    return (
        <div>
            <div id='marcass'>
                <div id='marcaUm'>
                    <img src={imgMarca} alt="logo BSC" id='imgBSC'/>
                </div>
                <div id='marcaDois'>
                    <h4 id='texMarca'>Do mercado ao almoço em família, da rua ao sofá</h4>
                </div>
            </div>
        </div >
    )
}