"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  { id: 1, url: "/slides/slide1.jpg" },
  { id: 2, url: "/slides/slide2.jpg" },
  { id: 3, url: "/slides/slide3.jpg" },
];

export default function SimpleSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[30vh] md:h-[70vh] overflow-hidden shadow-lg">
      {images.map((item, idx) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={item.url}
            alt={`slide-${idx}`}
            fill
            className="object-cover w-full h-full"
            priority={idx === 0}
          />
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute z-20 top-1/2 left-2 md:left-3 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 p-1 md:p-2 rounded-full text-white"
      >
        <FaChevronLeft className="text-xl md:text-3xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-20 top-1/2 right-2 md:right-3 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 p-1 md:p-2 rounded-full text-white"
      >
        <FaChevronRight className="text-xl md:text-3xl" />
      </button>
    </div>
  );
}
