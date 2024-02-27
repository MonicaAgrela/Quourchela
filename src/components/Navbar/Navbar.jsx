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
      name: "About",
      link: "/#",
    },
    {
      id: 3,
      name: "Contact",
      link: "/#",
    },
  ];

  // drop down data

  const DropdownLinks = [
    {
      id: 1,
      name: "Meat",
      link: "/#",
    },
    {
      id: 2,
      name: "Fish",
      link: "/#",
    },
    {
      id: 3,
      name: "Pasta",
      link: "/#",
    },
    {
      id: 4,
      name: "Pizza",
      link: "/#",
    },
    {
      id: 5,
      name: "Vegetables",
      link: "/#",
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
              {/* {simple dropdown and links} */}
              <li className="cursor-pointer group">
                <a
                  href="/#"
                  className="inline-block hover:text-primary text-xl font-semibold"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    Categories
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>

                {/* dropdown section */}
                <div className="absolute !z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2">
                  <ul>
                    {DropdownLinks.map(({ id, name, link }) => (
                      <li key={id}>
                        <a
                          href={link}
                          className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Login button section */}
              <li>
                <button
                  onClick={HandlePopup}
                  className="flex justify-center items-center gap-2 bg-secondary text-xl h[40px] text-white px-5 py-2 hover:scale-105 duration-300"
                >
                  <FaUser />
                  My Account
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
