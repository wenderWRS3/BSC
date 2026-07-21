import './footer.css'
import img from "../../img/bsc_higanbana_v3.png"
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTiktok } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
export default function Footer() {
    return (
        <div id='jgfd'>
            <div id='linkLinks'>
                <div id='qqqq'>
                    <div id='FooterSobre'>
                        <h4 id='BSCFooter'>BSC</h4>
                        <p> peças do dia a dia, sem exagero visual, com foco em qualidade de material</p>
                    </div>
                    <div id='redes'>
                        <p className='tiposLinks'>Redes</p>
                        <br />
                        <div>
                            <ul>
                            <li><a href="#" ><IoLogoInstagram /></a></li>
                            <li><a href="#" ><IoLogoTiktok /></a></li>
                            <li><a href="#" ><IoLogoYoutube /></a></li>
                            </ul>
                            <div />
                        </div>
                    </div>
                    <div id='aaaaa5'>
                        <div id='Institucional' className='link'>
                            <p className='tiposLinks'>Institucional
                            </p>
                            <ul>
                                <li className='link_bsc'>Sobre nós</li>
                                <li className='link_bsc'>Trabalhe conosco</li>
                                <li className='link_bsc'>Blog</li>
                            </ul>
                        </div>
                        <div id='Atendimento' className='link'>
                                <p className='tiposLinks'>Atendimento</p>
                            <ul className='link'>
                                <li className='link_bsc'>Central de ajuda</li>
                                <li className='link_bsc'>Trocas e devoluções</li>
                                <li className='link_bsc'>Rastrear pedido</li>
                                <li className='link_bsc'>Política de privacidade</li>
                                <li className='link_bsc'>Termos de uso</li>
                            </ul>
                        </div>
                        <div id='Contato' className='link'>
                            <p className='tiposLinks'>Contato</p>
                            <li className='link_bsc'>E-mail</li>
                            <li className='link_bsc'>WhatsApp</li>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}