import React from 'react'
import NavBar from '../components/NavBar.jsx'

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="home">
          <img src="/background.png" alt="" />


        <div className="home-content">
          <h1>Discover Simple Delicious and</h1>
          <h2>Fast Recipes!</h2>
          <p>
            A Recipe is Soulless. The essence of Recipe must Come from you.The
            Cook.
          </p>
          <button>Exoplore</button>
        </div>

        <div className="middlePage">
          <div className="foodCategory"></div>
          <div className="foodCategory"></div>
          <div className="foodCategory"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage