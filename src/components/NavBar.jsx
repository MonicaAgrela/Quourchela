import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../App.css";

function NavBar() {



  return (
    <div className="header">
      <img className="logo" src="/mainLogo.png" alt="logo-img" />
      <nav className="navbar">
        <ul>
          <li>
            <Link className="active">Home</Link>
          </li>
          <li>
            <Link>Recipes</Link>
          </li>
          <li>
            <Link>Blogs</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <Link className="material-symbols-outlined">person</Link>
          <button className="navBtn">Submit Recipe</button>
        </ul>
      </nav>


    </div>
  );
}

export default NavBar;
