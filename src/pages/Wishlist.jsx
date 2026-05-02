import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import "../styles/product.css";
import "../styles/wishlist.css";

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="wishlist-page wishlist-empty-page">
        <div className="wishlist-empty-box">
          <div className="wishlist-empty-icon">❤️</div>
          <h2>Your Wishlist is Empty</h2>
          <p>Save your favourite pieces here so you never lose track of styles you love.</p>
          <Link to="/products" className="wishlist-empty-btn">Explore Collection</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h2 className="section-title">My Saved Items</h2>
        <span className="wishlist-count">{wishlist.length} item{wishlist.length !== 1 ? "s" : ""} saved</span>
      </div>

      <div className="product-grid">
        {wishlist.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.title} />

              <button
                className="wishlist-btn active"
                onClick={() => toggleWishlist(product)}
                aria-label="Remove from wishlist"
              >
                ❤️
              </button>

              <button className="quick-add" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>

            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="price">₹{product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
