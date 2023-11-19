import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Strona Główna", target: "home" },
  { label: "Holowanie", target: "oferta" },
  { label: "Laweta", target: "oferta" },
  { label: "Galeria", target: "galeria" },
  { label: "Kontakt", target: "wizytowka" },
];

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-amber-500 py-4 px-8 fixed top-0 w-full z-50 rounded-b-lg">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo Prokop i Syn 24H" className="w-16" />

          <span className="text-black font-bold text-lg uppercase">
            POMOC DROGOWA 24H
          </span>
        </div>

        <div className="md:hidden">
          <button className="text-black" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`md:flex md:items-center md:space-x-8 ${
            isMenuOpen ? "flex flex-col mt-4 md:mt-0" : "hidden"
          } md:w-auto w-full text-center`}
        >
          {navItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.target}
              smooth={true}
              duration={500}
              offset={-50}
              className=" text-black border-b-2 border-transparent transition duration-300 hover:border-stone-950 hover:text-zinc-950 block md:inline-block md:mt-0 mt-2 cursor-pointer"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
