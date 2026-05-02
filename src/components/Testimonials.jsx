import React, { useState } from "react";
import "../styles/testimonials.css";

const REVIEWS = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    avatar: "P",
    rating: 5,
    text: "Absolutely love the quality! The fabric is soft and the fit is perfect. I've ordered three times now and each order has been flawless. Veloce_Kloths is my go-to for stylish everyday wear.",
    product: "Women's Shirt",
  },
  {
    name: "Rahul Mehta",
    location: "Delhi",
    avatar: "R",
    rating: 5,
    text: "The blazer I ordered exceeded all my expectations. Premium stitching, great colour, and arrived well-packaged. Got so many compliments at work. Will definitely shop again!",
    product: "Sleek Urban Blazer",
  },
  {
    name: "Sneha Joshi",
    location: "Pune",
    avatar: "S",
    rating: 5,
    text: "Quick delivery and the saree looks exactly like the pictures — maybe even better in person. Customer support was super helpful when I had a sizing question. Highly recommend!",
    product: "Modern Saree",
  },
  {
    name: "Arjun Nair",
    location: "Bangalore",
    avatar: "A",
    rating: 4,
    text: "Great value for money. The shirt fits well and the colours are vibrant after multiple washes. Shipping was faster than expected. Very happy with my purchase.",
    product: "Men's Shirt",
  },
  {
    name: "Kavya Reddy",
    location: "Hyderabad",
    avatar: "K",
    rating: 5,
    text: "I gifted the purse to my sister and she absolutely adored it. The quality is unmistakably premium and it looks much more expensive than it is. Will be coming back for more!",
    product: "Classic Purse",
  },
];

const STARS = [1, 2, 3, 4, 5];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const review = REVIEWS[active];

  return (
    <section className="testimonials-section">
      <div className="section-header">
        <span className="section-badge">Reviews</span>
        <h2 className="section-heading">What Our Customers Say</h2>
        <p className="section-subtext">
          Real stories from people who wear Veloce_Kloths every day.
        </p>
      </div>

      <div className="testimonials-wrapper">
        {/* Featured Review */}
        <div className="testimonial-featured">
          <div className="testimonial-quote-icon">"</div>
          <p className="testimonial-text">{review.text}</p>
          <div className="testimonial-stars">
            {STARS.map((s) => (
              <span key={s} className={s <= review.rating ? "star filled" : "star"}>★</span>
            ))}
          </div>
          <div className="testimonial-author">
            <div className="testimonial-avatar">{review.avatar}</div>
            <div className="testimonial-meta">
              <strong>{review.name}</strong>
              <span>{review.location}</span>
              <em>Purchased: {review.product}</em>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="testimonial-thumbs">
          {REVIEWS.map((r, i) => (
            <button
              key={i}
              className={`thumb-btn${active === i ? " active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="thumb-avatar">{r.avatar}</div>
              <div className="thumb-info">
                <strong>{r.name}</strong>
                <span>{r.product}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="testimonial-stats">
        <div className="stat-item">
          <span className="stat-number">4.9</span>
          <span className="stat-label">Average Rating</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">12K+</span>
          <span className="stat-label">Happy Customers</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">98%</span>
          <span className="stat-label">Positive Reviews</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Products</span>
        </div>
      </div>
    </section>
  );
}
