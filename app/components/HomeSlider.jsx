"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  {
    url: "/slides/slide1.jpg",
    heading: "জগদীশপুর পাবলিক গার্লস হাই স্কুল",
    ctaText: "আমাদের সম্পর্কে জানুন",
    ctaLink: "/about",
  },
  {
    url: "/slides/slide2.jpg",
    heading: "আধুনিক শিক্ষায় অগ্রগামী",
    ctaText: "ভর্তি আবেদন করুন",
    ctaLink: "/admission",
  },
  {
    url: "/slides/slide3.jpg",
    heading: "শিক্ষা, শৃঙ্খলা ও নৈতিকতা",
    ctaText: "যোগাযোগ করুন",
    ctaLink: "/contact",
  },
  {
    url: "/slides/slide4.jpg",
    heading: "শিক্ষা, শৃঙ্খলা ও নৈতিকতা",
    ctaText: "যোগাযোগ করুন",
    ctaLink: "/contact",
  },
];

export default function HomeSlider() {
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
    <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden shadow-lg">
      {images.map((item, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            width={500}
            height={500}
            src={item.url}
            alt={`slide-${idx}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg mb-4">
              {item.heading}
            </h1>
            <a
              href={item.ctaLink}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm md:text-base shadow-lg transition"
            >
              {item.ctaText}
            </a>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute z-50 top-1/2 left-4 transform -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/70 transition"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-50 top-1/2 right-4 transform -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/70 transition"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute z-50 bottom-4 w-full flex justify-center gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
