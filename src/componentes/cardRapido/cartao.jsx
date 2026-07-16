import './cartao.css'
export default function catao(props) {
    return (
        <div>
            <div id='enc'>
                <div id='imgcartao'>
                    <img src={props.Img1} alt="aaaa" id='tama' />

                    <p id='tex'>
                        {props.tex} 
                    </p>
                    <p id='val'>
                        {Number(props.val)}
                    </p>

                </div>
            </div>
        </div>
    )
}