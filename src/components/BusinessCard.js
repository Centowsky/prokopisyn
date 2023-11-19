// BusinessCard.js
import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { label: "Strona Główna", target: "home" },
  { label: "Holowanie", target: "oferta" },
  { label: "Laweta", target: "oferta" },
  { label: "Galeria", target: "galeria" },
  { label: "Kontakt", target: "wizytowka" },
];

const BusinessCard = () => {
  return (
    <div
      className="flex flex-col md:flex-row w-full bg-gray-300 text-black mt-10 items-start"
      id="wizytowka"
    >
      <div className="p-4 md:w-1/3">
        <div className="p-2 mt-2">
          <img src={logo} alt="Logo firmy" className="w-64"></img>
        </div>

        <div className="p-2">
          <h3 className="text-xl uppercase font-bold ">Prokop i syn</h3>
          <p className="font-light italic">
            Pomoc drogowa - Ratownictwo drogowe
          </p>
        </div>

        <div className="p-2 flex">
          <a
            href="https://www.facebook.com/PomocDrogowaPROKOP24H/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mr-2 text-black transition duration-500 hover:translate-y-1"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              className="bg-black text-white p-2 rounded-full mr-2"
            />
            <span>Facebook</span>
          </a>

          <a
            href="https://www.tiktok.com/@pomocdrogowaprokopisyn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mr-2 text-black transition duration-500 hover:translate-y-1"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              size="lg"
              className="bg-black text-white p-2 rounded-full mr-2"
            />
            <span>Tiktok</span>
          </a>
        </div>
      </div>

      <div className=" p-4 md:w-1/3 ">
        <h3 className="text-xl font-bold translate-x-4">
          <span className="border-b-2 border-amber-500 border-solid  ">
            Przydatne linki
          </span>
        </h3>
        <div className="flex flex-col mt-4">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center mb-2 font-semibold">
              <span className="text-amber-500 mr-2">&gt;</span>
              <ScrollLink
                key={index}
                to={item.target}
                smooth={true}
                duration={500}
                offset={-50}
                className="hover:cursor-pointer text-black border-b-2 border-transparent transition duration-300 hover:border-stone-950 hover:text-zinc-950"
              >
                {item.label}
              </ScrollLink>
            </div>
          ))}
        </div>
      </div>

      <div className=" p-4 md:w-1/3">
        {" "}
        <h3 className="text-xl font-bold translate-x-4">
          <span className="border-b-2 border-amber-500 border-solid  ">
            Zadzwoń już teraz
          </span>
        </h3>
        <div className="mt-4 flex flex-row items-center">
          <FontAwesomeIcon
            icon={faPhone}
            size="sm"
            className="bg-black text-white p-2 rounded-full mr-2"
          />
          <a href="tel:+48729339051" className="text-amber-500 font-bold">
            +48 729-339-051
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
