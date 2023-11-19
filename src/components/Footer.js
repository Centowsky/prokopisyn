// Footer.js
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {currentYear}{" "}
          <span className="uppercase text-amber-500 font-semibold">
            Prokop i syn - pomoc drogowa
          </span>{" "}
          Wszelkie prawa zastrzeżone. Autor:{" "}
          <span className="font-bold">
            <a
              href="https://www.instagram.com/centowskywww"
              rel="noreferrer"
              target="_blank"
              className="text-amber-500"
            >
              Centowsky
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
