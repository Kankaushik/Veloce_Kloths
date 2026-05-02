import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand Column */}
        <div className="footer-col footer-brand">
          <h3 className="footer-logo">Veloce_Kloths</h3>
          <p className="footer-tagline">
            Modern fashion crafted for confidence, comfort, and everyday elegance.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.23-5.2 1.23-5.2s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.87 3.51-.25 1.05.52 1.9 1.54 1.9 1.84 0 3.08-2.36 3.08-5.15 0-2.13-1.43-3.62-3.47-3.62-2.36 0-3.75 1.77-3.75 3.6 0 .71.27 1.48.62 1.9.07.08.08.16.06.24-.06.26-.21.84-.23.96-.04.16-.13.19-.29.12-.99-.46-1.6-1.92-1.6-3.09 0-2.51 1.82-4.81 5.25-4.81 2.76 0 4.9 1.96 4.9 4.58 0 2.73-1.72 4.93-4.1 4.93-.8 0-1.56-.42-1.82-.91l-.5 1.87c-.18.69-.67 1.56-1 2.07.75.23 1.55.36 2.37.36 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="footer-col">
          <h4 className="footer-heading">Customer Care</h4>
          <ul className="footer-links">
            <li><a href="#">Track My Order</a></li>
            <li><a href="#">Returns & Exchange</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping Info</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col footer-newsletter">
          <h4 className="footer-heading">Stay in the Loop</h4>
          <p className="footer-newsletter-text">Get early access to new drops, exclusive offers &amp; style tips.</p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
          <p className="footer-contact-line">
            <span>📞</span> +91 98765 43210
          </p>
          <p className="footer-contact-line">
            <span>✉️</span> support@velocekloths.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Veloce_Kloths. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
