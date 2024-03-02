import React from "react";
import { Link } from "react-router-dom";
import { FaCaretDown, FaUser } from "react-icons/fa";

function Navbar({ HandlePopup }) {
  const Navlinks = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Recipes",
      link: "/recipes",
    },
    {
      id: 3,
      name: "Blog",
      link: "/blogs",
    },
    {
      id: 4,
      name: "Categories",
      link: "/categories",
    },
    {
      id: 5,
      name: "About",
      link: "/about",
    },
  ];


  return (
    <>
      <div className="bg-white shadow-md">
        <div className="container flex justify-between py-4 sm:py-3">
          {/* {logo section} */}
          <img
            src="/mainLogo.png"
            alt="logo"
            style={{ width: "200px", height: "auto" }}
          />

          {/* {Navlinks section} */}
          <div>
            <ul className="flex items-center gap-10 font-">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="inline-block hover:text-primary text-xl font-semibold"
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* Button  */}
              <li>
                <button className="flex justify-center items-center gap-2 bg-secondary text-xl h[40px] text-white px-5 py-2 hover:scale-105 duration-300">
                  <a href="/new-recipe">+ New Recipe</a>
                </button>
              </li>
              <li>
                <button
                  onClick={HandlePopup}
                  className="flex justify-center items-center gap-2 bg-secondary text-xl h[40px] text-white px-5 py-2 hover:scale-105 duration-300"
                >
                  <FaUser />
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
