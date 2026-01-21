import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-hero-header">
        <h1>How to reach out</h1>
      </header>

      <main className="contact-main-grid">
        <div className="contact-info-side">
          <h2>Need assistance? contact us</h2>
          <p className="contact-subtext">
            Embrace ultimate coziness with this stylish essential.
          </p>

          <div className="contact-details">
            <a href="mailto:your@gmail.com">kankaushik7@gmail.com</a>
            <a href="tel:+918542563232" className="phone-num">
              +91 854 256 32 32
            </a>
            <address>Ranchi</address>
          </div>
        </div>

        <div className="contact-form-side">
          <form className="reach-out-form">
            <div className="input-row">
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Number" />
            </div>
            <div className="input-row">
              <input type="email" placeholder="E-mail" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea placeholder="Your query" rows="6"></textarea>

            <div className="form-footer">
              <button type="submit" className="submit-btn-black">
                Submit now
              </button>
              <label className="privacy-check">
                <input type="checkbox" /> I agree to the privacy policy.
              </label>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
