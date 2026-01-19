import "../styles/home.css";

export default function Home() {
  return (
    <section className="section-hero">
      <div className="hero-slider">
        <div className="hero-slide slide1 active">
          <h1 className="heading-primary">Timeless Style, Everyday Comfort</h1>
          <p className="hero-description ">
            Explore curated fashion pieces crafted to elevate your look and fit
            your lifestyle.
            <div>
              <button className="btn btn--full">Shop Now</button>
            </div>
          </p>
        </div>

        <div className="hero-slide slide2">
          <h1 className="heading-primary">Modern Fashion, Faster Style</h1>
          <p className="hero-description">
            Discover premium clothing collections designed for comfort,
            confidence, and everyday elegance.
            <div>
              <button className="btn btn--full">Shop Now</button>
            </div>
          </p>
        </div>

        <div className="hero-slide slide3">
          <h1 className="heading-primary">
            Designed to Wear, Built to Impress
          </h1>
          <p className="hero-description">
            Shop modern apparel that blends premium quality, comfort, and
            confident design.
            <div>
              <button className="btn btn--full">Shop Now</button>
            </div>
          </p>
        </div>

        <div className="hero-slide slide4">
          <h1 className="heading-primary">
            Where Comfort Meets Modern Elegance
          </h1>
          <p className="hero-description">
            Discover fashion essentials created for versatility, confidence, and
            daily wear.
            <div>
              <button className="btn btn--full">Shop Now</button>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}
const slides = document.querySelectorAll(".hero-slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 4000);
