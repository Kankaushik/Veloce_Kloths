import React from "react";
import { Link } from "react-router-dom";
import "../styles/aboutSection.css";
import "../styles/home.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/demo.avif" alt="Models wearing effortless style" />
        </div>

        <div className="about-content">
          <div className="content-wrapper">
            <h2 className="about-title">Effortless style for everyday wear</h2>
            <p className="about-text">
              Fashion is not something that exists in dresses only. Fashion is
              in the sky, in the street, fashion has to do with ideas, the way
              we live, what is happening.
            </p>
            <Link to="/products" className="btn btn--full about-btn-fix">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
