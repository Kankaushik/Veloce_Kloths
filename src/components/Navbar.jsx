import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "../styles/navbar.css";

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const wishlistCount = wishlist.length;

  return (
    <header className="header sticky">
      <nav className="navbar">
        <Link to="/" className="nav-text">
          <img className="logo" alt="logo" src="/images/logo.png" />
          Veloce_Kloths
        </Link>

        <ul className="nav-links">
          <li className="nav-link-arrow">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link-arrow">
            <Link to="/products">Products</Link>
          </li>
          <li className="nav-link-arrow">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-link-arrow">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="nav-actions">
          <Link className="wis" to="/wishlist">
            ❤️
            {wishlistCount > 0 && (
              <span className="cart-badge">{wishlistCount}</span>
            )}
          </Link>

          <Link className="wis" to="/cart">
            🛒
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>

          <Link to="/login" className="login-btn">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
