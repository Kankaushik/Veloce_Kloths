import { useEffect, useState, useCallback } from "react";
import "../styles/carousel.css";

const slides = [
  {
    img: "/img/crousel_1.jpg",
    title: "Timeless Style",
    desc: "Fashion that never fades, crafted for everyday confidence.",
  },
  {
    img: "/img/crousel_4.jpg",
    title: "Modern Comfort",
    desc: "Designed to move with you, styled to stand out.",
  },
  {
    img: "/img/crousel_3.png",
    title: "Premium Everyday Wear",
    desc: "Quality fabrics, clean designs, and perfect fits.",
  },
];

function Carousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-slide">
          <button className="carousel-btn carousel-btn--prev" onClick={prev}>
            &#8592;
          </button>

          <img
            key={index}
            className="carousel-img"
            src={slides[index].img}
            alt="slide"
          />

          <button className="carousel-btn carousel-btn--next" onClick={next}>
            &#8594;
          </button>

          <div className="carousel-caption">
            <h3>{slides[index].title}</h3>
            <p>{slides[index].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
