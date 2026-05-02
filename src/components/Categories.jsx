import React from "react";
import { Link } from "react-router-dom";
import "../styles/categories.css";

const CATEGORIES = [
  {
    label: "Men",
    tag: "Shirts · Blazers · Trousers",
    image: "/images/men_shirt.avif",
    color: "#3a1a2e",
  },
  {
    label: "Women",
    tag: "Tops · Sarees · Dresses",
    image: "/images/women_tshirt.avif",
    color: "#5c1f3a",
  },
  {
    label: "Accessories",
    tag: "Bags · Sunglasses · Shoes",
    image: "/images/model_6.avif",
    color: "#7d2b4f",
  },
];

export default function Categories() {
  return (
    <section className="categories-section">
      <div className="section-header">
        <span className="section-badge">Explore</span>
        <h2 className="section-heading">Shop by Category</h2>
        <p className="section-subtext">
          Find what fits your style — from everyday essentials to standout pieces.
        </p>
      </div>

      <div className="categories-grid">
        {CATEGORIES.map((cat) => (
          <Link to="/products" className="category-card" key={cat.label}>
            <div className="category-img-wrap">
              <img src={cat.image} alt={cat.label} />
              <div
                className="category-overlay"
                style={{ background: `${cat.color}cc` }}
              />
            </div>
            <div className="category-info">
              <h3 className="category-name">{cat.label}</h3>
              <p className="category-tag">{cat.tag}</p>
              <span className="category-cta">Shop Now →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
