import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavForm = () => {
  return (
    <div className={style.containerMain}>
      <div className={style.container}>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to="/clases">Clases</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div className={style.container}>
        <Link to="/membresias">Membresias</Link>
      </div>
      <div>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default NavForm;
