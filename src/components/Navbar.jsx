import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "../styles/navbar.css";

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const wishlistCount = wishlist.length;

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Add scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <nav className="navbar" ref={navRef}>
        {/* Logo */}
        <Link to="/" className="nav-text">
          <img className="logo" alt="logo" src="img/logo.png" />
          <span className="brand-name">Veloce_Kloths</span>
        </Link>

        {/* Nav Links */}
        <ul className={`nav-links${menuOpen ? " show" : ""}`}>
          {navLinks.map((link) => (
            <li
              key={link.to}
              className={`nav-link-arrow${location.pathname === link.to ? " active" : ""}`}
            >
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <Link className="wis" to="/wishlist" aria-label="Wishlist">
            <span className="nav-icon">❤️</span>
            {wishlistCount > 0 && (
              <span className="cart-badge">{wishlistCount}</span>
            )}
          </Link>

          <Link className="wis" to="/cart" aria-label="Cart">
            <span className="nav-icon">🛒</span>
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </Link>

          <Link to="/login" className="login-btn">
            Login
          </Link>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`nav-overlay${menuOpen ? " visible" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </header>
  );
}
