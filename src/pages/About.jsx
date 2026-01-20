import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Top Content: Title and Subtext */}
        <div className="about-header">
          <span className="sub-heading">Our Story</span>
          <h2 className="main-heading">
            Crafting Elegance for the Modern Wardrobe
          </h2>
          <p className="about-intro">
            At Veloce Kloths, we believe that fashion is more than just
            clothing—it's an expression of identity. Founded with a passion for
            quality and a commitment to timeless design, we bridge the gap
            between luxury aesthetics and everyday comfort.
          </p>
        </div>

        {/* Middle Content: Split Grid Image/Text */}
        <div className="about-grid">
          <div className="about-image-box">
            <img
              src="/img/demo.avif"
              alt="Fashion Design"
              className="about-img"
            />
          </div>
          <div className="about-text-box">
            <h3>Why We Exist</h3>
            <p>
              The industry is often a choice between fast-fashion convenience or
              inaccessible luxury. We chose a third path: Premium materials,
              ethical manufacturing, and styles that outlast the trends.
            </p>
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Design Awards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content: The Mission */}
        <div className="mission-banner">
          <div className="mission-content">
            <h3>Our Mission</h3>
            <p>
              "To empower individuals through style that inspires confidence and
              reflects their true character."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
