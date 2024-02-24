import { Link } from "react-router-dom";
import React from "react";
import "../App.css";

function Navbar() {

  return (
    <div className="header">
      <Link className="logo" to="/">Quourchela</Link>
      <nav className="navBar">
        <Link to="/">
          Home
        </Link>
        <Link to="/">
          Recipes
        </Link>
        <Link to="/">
          Blog
        </Link>
        <Link to="/">
          About
        </Link>
        <Link to="/">
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
