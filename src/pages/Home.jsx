import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Carousel from "../components/Carousel";
import Features from "../components/Features";
import AboutSection from "../components/AboutSection";

const slides = [
  {
    title: "Timeless Style, Everyday Comfort",
    desc: "Explore curated fashion pieces crafted to elevate your look.",
  },
  {
    title: "Modern Fashion, Faster Style",
    desc: "Discover premium clothing collections designed for comfort.",
  },
  {
    title: "Designed to Wear, Built to Impress",
    desc: "Shop modern apparel that blends premium quality.",
  },
  {
    title: "Where Comfort Meets Modern Elegance",
    desc: "Discover fashion essentials created for versatility.",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="section-hero">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide slide${index + 1} ${
                current === index ? "active" : ""
              }`}
            >
              <h1 className="heading-primary">{slide.title}</h1>

              <div className="hero-description">
                <p className="para">{slide.desc}</p>

                <Link to="/products" className="btn btn--full">
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AboutSection />

      <Carousel />
      <Features />
    </>
  );
}
