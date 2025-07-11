import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg"
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"
import theme_pattern from '../../assets/theme_pattern.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
   const [menu,setmenu]=useState("home");
   const menuRef= useRef();
   const openMenu =()=>{
    menuRef.current.style.right="0";
   }
   const closeMenu =()=>{
    menuRef.current.style.right="-350px";
   }
  return (
    <div className="navbar">
      <div className="navbar-logo">
           <h1>Eyobi</h1>
           <img src={theme_pattern}  alt="" />
      </div>
         <img src={menu_open} onClick={openMenu} className="nav-mob-open" alt="" />
          
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close}  onClick={closeMenu} alt="" className="nav-mob-close" />     
        <li><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={()=>setmenu("home")}>Home </p></AnchorLink>{menu==="home" ? <img src={underline}/>:<></>} </li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setmenu("about")}>About Me</p></AnchorLink>{menu==="about" ? <img src={underline}/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>setmenu("service")}>Services</p></AnchorLink>{menu==="service" ? <img src={underline}/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setmenu("work")}>Portfolio</p></AnchorLink>{menu==="work" ? <img src={underline}/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setmenu("contact")}>Contact</p></AnchorLink>{menu==="contact" ? <img src={underline}/>:<></>}</li>
      </ul>
      <div className="nav-contact"><AnchorLink className="anchor-link" offset={50} href="#contact">Contact With ME</AnchorLink></div>
    </div>
  );
};

export default Navbar;
