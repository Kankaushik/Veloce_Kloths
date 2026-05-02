import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";

const VALUES = [
  { icon: "🌿", title: "Sustainability", desc: "We use eco-conscious fabrics and responsible sourcing to reduce our environmental footprint." },
  { icon: "✂️", title: "Craftsmanship", desc: "Every stitch is intentional. Our garments are made with precision by skilled artisans." },
  { icon: "💡", title: "Innovation", desc: "Blending timeless design with modern trends so your wardrobe stays ahead of the curve." },
  { icon: "❤️", title: "Community", desc: "Our customers are our inspiration. We listen, adapt, and grow together as a community." },
];

const TEAM = [
  { name: "Ananya Kapoor", role: "Founder & Creative Director", img: "/images/model_2.avif" },
  { name: "Rohan Das", role: "Head of Design", img: "/images/Model.avif" },
  { name: "Sneha Joshi", role: "Brand Strategist", img: "/images/model_6.avif" },
];

export default function About() {
  return (
    <div className="about-page-container">

      {/* ===== HERO ===== */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <span className="about-hero-badge">Our Story</span>
          <h1 className="about-hero-title">Where Style Meets Purpose</h1>
          <p className="about-hero-sub">
            Born in 2020, Veloce_Kloths was built on a single belief — that fashion should feel as good as it looks.
          </p>
        </div>
      </section>

      {/* ===== SPLIT SECTION ===== */}
      <section className="effortless-split">
        <div className="split-visual">
          <img src="/images/demo.avif" alt="Fashion models" />
        </div>
        <div className="split-info-pink">
          <div className="text-container">
            <span className="about-eyebrow">Who We Are</span>
            <h3 className="display-title">
              Introducing Our Best Fashion Collection
            </h3>
            <p className="description-text">
              Discover a thoughtfully curated range of fashion essentials designed to elevate your everyday style. Each piece blends modern aesthetics with premium comfort, ensuring you look confident while feeling effortlessly at ease.
            </p>

            <div className="stats-container">
              <div className="stat-box">
                <span className="number">5+</span>
                <span className="label">Years in Fashion</span>
              </div>
              <div className="stat-box">
                <span className="number">12K+</span>
                <span className="label">Happy Clients</span>
              </div>
              <div className="stat-box">
                <span className="number">500+</span>
                <span className="label">Products</span>
              </div>
            </div>

            <Link to="/products" className="action-button">
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="values-section">
        <div className="values-header">
          <span className="about-eyebrow">What Drives Us</span>
          <h2 className="values-title">Our Core Values</h2>
        </div>
        <div className="values-grid">
          {VALUES.map((v) => (
            <div className="value-card" key={v.title}>
              <div className="value-icon">{v.icon}</div>
              <h4 className="value-name">{v.title}</h4>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="team-section">
        <div className="values-header">
          <span className="about-eyebrow">The People Behind It</span>
          <h2 className="values-title">Meet Our Team</h2>
        </div>
        <div className="team-grid">
          {TEAM.map((m) => (
            <div className="team-card" key={m.name}>
              <div className="team-img-wrap">
                <img src={m.img} alt={m.name} />
              </div>
              <h4 className="team-name">{m.name}</h4>
              <p className="team-role">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== LOOK / TREND ===== */}
      <section className="look-trend-section">
        <div className="look-card">
          <div className="look-card-img">
            <img src="/images/women-shirt.avif" alt="Look" />
          </div>
          <div className="look-card-body">
            <span className="look-num">01</span>
            <h3>The Look</h3>
            <p>
              Every outfit tells a story. We design pieces that let you write yours — from morning meetings to weekend getaways. Our collections are built for real life, real confidence.
            </p>
            <Link to="/products" className="look-link">Explore →</Link>
          </div>
        </div>

        <div className="look-card look-card--reverse">
          <div className="look-card-img">
            <img src="/images/women_tshirt.avif" alt="Trend" />
          </div>
          <div className="look-card-body">
            <span className="look-num">02</span>
            <h3>The Trend</h3>
            <p>
              Fashion moves fast, and so do we. Our in-house design team monitors global runways and street style to bring you on-trend silhouettes that feel current without sacrificing comfort.
            </p>
            <Link to="/products" className="look-link">Explore →</Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="about-cta">
        <h2>Ready to elevate your wardrobe?</h2>
        <p>Explore thousands of styles crafted just for you.</p>
        <Link to="/products" className="action-button">Shop Now</Link>
      </section>

    </div>
  );
}
