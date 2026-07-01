import './Header.css'
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
export default function Header() {
  return (
    <header id="header">
      <div id="logoo">
        <h1 id="logo">BSC</h1>
        <p><strong>B</strong>om <strong>S</strong>imples é <strong>C</strong>onfortavel</p>
      </div>
      <ul id="menu">
        <li><a href="#"><MdOutlineAttachMoney /></a></li>
        <li><a href="#"><AiFillAppstore /></a></li>
      </ul>

      <ul>
        <li><a href="#"><FiSearch /></a></li>
        <li><a href="#"><FiShoppingCart /></a></li>


        <li>
           <a href="#"><FiUser /></a>
        </li>
      </ul>

    </header>
  )
}