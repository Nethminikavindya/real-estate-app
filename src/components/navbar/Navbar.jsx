import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <nav>
      <div className="left">
        <a className="logo" href="/">
          <img src="/logo.png"></img>
          <span>Estate</span>
        </a>
        
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Agents</Link>
      </div>
      <div className="right">
        <Link to="/">Sign in</Link>
        <Link to ="/" className="register" >
          Sign up
        </Link>
        <div className="menuIcon">
          <img src="/menu.png" alt=""  onClick={()=>setOpen(!open)}/>
        </div>
        <div className={open ? "menu active":"menu" }>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
