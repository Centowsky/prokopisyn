import React from "react";
import bannerImage from "../assets/baner.jpeg";

const Banner = () => {
  return (
    <div className="banner relative w-full border-b-2 border-t-2 border-black  overflow-hidden">
      <img src={bannerImage} alt="Banner" className=" object-cover w-full" />
    </div>
  );
};

export default Banner;
