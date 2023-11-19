import React, { useState, useEffect } from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";

const images = [
  { image: img1, caption: "Opis obrazu 1" },
  { image: img2, caption: "Opis obrazu 2" },
  { image: img3, caption: "Opis obrazu 2" },
  { image: img4, caption: "Opis obrazu 2" },
  { image: img5, caption: "Opis obrazu 2" },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative min-w-screen flex items-center justify-center">
      <div className="relative h-3/4 sm:h-4/5 lg:h-3/5 xl:h-2/3 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex
                ? "block opacity-100 transition-opacity duration-700 ease-in-out transform translate-x-0"
                : "hidden opacity-0 transition-opacity duration-700 ease-in-out transform translate-x-full"
            } w-full h-full flex items-center justify-center`}
            style={{
              transition:
                "opacity 0.7s ease-in-out, transform 0.7s ease-in-out",
            }}
          >
            <img
              src={image.image}
              className="max-h-screen max-w-full object-cover"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 -translate-x-1/2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full border-2 border-black ${
                    index === currentIndex ? "bg-amber-500" : "bg-white"
                  }`}
                  aria-current={index === currentIndex ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                  data-carousel-slide-to={index}
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-10 h-10 text-black md:hover:text-amber-500 bg-zinc-100 md:bg-zinc-300 rounded-full transition-transform duration-700 ease-in-out transform translate-x-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-10 h-10 text-black md:hover:text-amber-500 bg-zinc-100 md:bg-zinc-300 rounded-full transition-transform duration-700 ease-in-out transform translate-x-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
