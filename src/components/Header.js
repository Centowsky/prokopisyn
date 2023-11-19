// Header.js
import React from "react";
import "../styles/Header.css";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="relative h-screen" id="home">
      <div id="header-image"></div>
      <div className="absolute inset-0"></div>
      <div className="container mx-auto text-center text-white absolute inset-0 flex flex-col justify-center">
        <h1 className="text-6xl font-bold uppercase tracking-widest">
          {" "}
          Prokop i syn{" "}
        </h1>
        <h1 className="text-5xl font-bold uppercase text-amber-500 border-b-3 border-white">
          +48 729-339-051
        </h1>
        <p className="mt-2 text-xl font-extralight">
          Szybko bezpiecznie i całodobowo.
        </p>
        <p className="text-xl font-extralight">
          Najlepsza pomoc drogowa w okolicy.
        </p>
        <div className="flex flex-row mx-auto">
          <a
            href="https://www.facebook.com/PomocDrogowaPROKOP24H/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mr-2 text-black transition duration-500 hover:translate-y-1"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="border-2 hover:bg-amber-500 transition hover:text-black text-white p-2 rounded-full mr-2"
            />
          </a>
          <a
            href="https://www.tiktok.com/@pomocdrogowaprokopisyn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mr-2 text-black transition duration-500 hover:translate-y-1"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              size="2x"
              className="border-2 hover:bg-amber-500 transition hover:text-black text-white p-2 rounded-full mr-2"
            />
          </a>
        </div>
        <a
          href="#oferta"
          className="block mt-4 mx-auto w-10/12 md:w-1/5 px-4 py-2 text-white border border-white rounded-lg transition duration-300 ease-in-out hover:bg-amber-500 hover:text-black"
        >
          Sprawdź nasza ofertę!
        </a>
      </div>
    </header>
  );
};

export default Header;
