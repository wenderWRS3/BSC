import './marca.css'
import imgMarca from "../../img/bsc_higanbana_v3.png"
export default function marca(){
    return(
        <div>
            <div>
                <img src={imgMarca} alt="" />
            </div>
            <div>
                <h4>Do mercado ao almoço em família, da rua ao sofá</h4>
            </div>
        </div>
    )
}