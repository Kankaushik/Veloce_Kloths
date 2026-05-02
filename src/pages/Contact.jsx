import React, { useState } from "react";
import "../styles/contact.css";

const CONTACT_INFO = [
  { icon: "✉️", label: "Email Us", value: "support@velocekloths.com", href: "mailto:support@velocekloths.com" },
  { icon: "📞", label: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: "📍", label: "Visit Us", value: "Ranchi, Jharkhand, India", href: "#" },
  { icon: "🕘", label: "Working Hours", value: "Mon–Sat, 9 AM – 7 PM", href: null },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <div className="contact-page">

      {/* ===== HERO ===== */}
      <section className="contact-hero-header">
        <span className="contact-badge">Get In Touch</span>
        <h1>We'd love to hear<br />from you</h1>
        <p className="contact-hero-sub">
          Questions, feedback, or just want to say hello? Our team is here for you.
        </p>
      </section>

      {/* ===== INFO CARDS ===== */}
      <section className="contact-cards-row">
        {CONTACT_INFO.map((c) => (
          <div className="contact-info-card" key={c.label}>
            <div className="contact-info-icon">{c.icon}</div>
            <div>
              <p className="contact-info-label">{c.label}</p>
              {c.href ? (
                <a href={c.href} className="contact-info-value">{c.value}</a>
              ) : (
                <p className="contact-info-value">{c.value}</p>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* ===== MAIN GRID ===== */}
      <main className="contact-main-grid">

        {/* Left side info */}
        <div className="contact-info-side">
          <span className="contact-badge contact-badge--dark">Send a Message</span>
          <h2>Need assistance?<br />Contact us</h2>
          <p className="contact-subtext">
            Fill in the form and our team will get back to you within 24 hours. We're happy to help with any enquiry.
          </p>
          <div className="contact-social-row">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-social">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-social">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-social">Twitter</a>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-side">
          {sent && (
            <div className="contact-success">
              ✅ Message sent! We'll get back to you within 24 hours.
            </div>
          )}
          <form className="reach-out-form" onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="form-field">
                <label>Your Name</label>
                <input type="text" placeholder="Priya Sharma" required />
              </div>
              <div className="form-field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" />
              </div>
            </div>
            <div className="input-row">
              <div className="form-field">
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" required />
              </div>
              <div className="form-field">
                <label>Subject</label>
                <input type="text" placeholder="Order enquiry, Returns..." />
              </div>
            </div>
            <div className="form-field">
              <label>Your Message</label>
              <textarea placeholder="Tell us how we can help you..." rows="6" required></textarea>
            </div>

            <div className="form-footer">
              <button type="submit" className="submit-btn-black">
                Send Message
              </button>
              <label className="privacy-check">
                <input type="checkbox" required /> I agree to the privacy policy.
              </label>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
