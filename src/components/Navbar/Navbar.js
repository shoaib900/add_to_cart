import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import cart from "../../assets/cart.png";

const Navbar = ({size}) => {
  return (
    <div className={style.navbar}>
      <Link to="/" className={style.a} >
        <h1>Shoping system</h1>
      </Link>
      <Link to="/cart" className={style.a}>
        <div className={style.box}>
        <img src={cart} alt="" height={50} />
        { size >= 1 ?   <span className={style.notify }>{size}</span>:"" }
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
