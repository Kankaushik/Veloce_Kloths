import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-page-container">
      <header className="kloths-header">
        <h1>About us</h1>
      </header>

      <section className="effortless-split">
        <div className="split-visual">
          <img src="/images/demo.avif" alt="Fashion models" />
        </div>
        <div className="split-info-pink">
          <div className="text-container">
            <h3 className="display-title">
              Introducing Our Best Fashion Collection
            </h3>
            <p className="description-text">
              Discover a thoughtfully curated range of fashion essentials
              designed to elevate your everyday style. Each piece blends modern
              aesthetics with premium comfort, ensuring you look confident while
              feeling effortlessly at ease.From timeless classics to
              contemporary trends, our collection is crafted using quality
              fabrics and refined details—perfect for those who value both style
              and versatility in their wardrobe.
            </p>

            <div className="stats-container">
              <div className="stat-box">
                <span className="number">5+</span>
                <span className="label">Years</span>
              </div>
              <div className="stat-box">
                <span className="number">2K+</span>
                <span className="label">Clients</span>
              </div>
              <div className="stat-box">
                <span className="number">50+</span>
                <span className="label">Team</span>
              </div>
            </div>

            <Link to="/shop" className="action-button">
              Shop now
            </Link>
          </div>
        </div>
      </section>

      <section className="look-trend-section">
        <div className="card">
          <div className="card-image-container">
            <img src="/images/Look.jpg" alt="Look Section" />
          </div>
          <div className="card-header">
            <span className="card-num">01</span>
            <h3 className="heading-tertiary">Look</h3>
            <p>
              Every story needs a protagonist, and so does every About Us page.
              In some cases, that might be you or your founding team.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-num">02</span>
            <h3 className="heading-tertiary">Trend</h3>
            <p>
              Every story needs a protagonist, and so does every About Us page.
              In some cases, that might be you or your founding team.
            </p>
          </div>
          <div className="card-image-container">
            <img src="/images/Trands.jpg" alt="Trend Section" />
          </div>
        </div>
      </section>
    </div>
  );
}
