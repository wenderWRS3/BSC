import './Header.css'
import { useState } from 'react'
import paginalog from '../paginalog/log.jsx'
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import Log from '../paginalog/Log';

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
          <button id="menu-but" onClick={() => setButton(!Button)}>
           <IoPersonSharp size={24} color="white" />
          </button>
        </li>
      </ul>

    </header>
  )
}