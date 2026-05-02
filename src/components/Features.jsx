import React from "react";
import "../styles/features.css";

const FEATURE_DATA = [
  {
    icon: "🚚",
    title: "Free Delivery",
    desc: "We offer complimentary standard shipping on all orders over $99, ensuring your fashion favorites arrive at your doorstep without extra cost.",
  },
  {
    icon: "🔄",
    title: "Easy Returns",
    desc: "Not the perfect fit? No problem. Our 30-day hassle-free return policy allows you to shop with absolute confidence and peace of mind.",
  },
  {
    icon: "👕",
    title: "Premium Quality",
    desc: "Every garment is crafted from the finest sustainable fabrics, combining durability with a soft touch for a wardrobe that lasts seasons.",
  },
  {
    icon: "🛡️",
    title: "Secure Shopping",
    desc: "Your data security is our priority. We use industry-leading encryption to ensure your personal and payment information is always protected.",
  },
];

function Features() {
  return (
    <section className="features-section">
      <div className="features-header">
        <span className="section-badge">Why Us</span>
        <h2 className="section-heading">The Veloce Promise</h2>
        <p className="section-subtext">
          Everything we do is built around making your shopping experience seamless and your wardrobe exceptional.
        </p>
      </div>
      <div className="features-container">
        {FEATURE_DATA.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon-box">{item.icon}</div>
            <div className="feature-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
        </div>
    </section>
  );
}

export default Features;
