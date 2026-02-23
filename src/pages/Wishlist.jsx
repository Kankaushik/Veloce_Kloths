import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import "../styles/product.css";
import "../styles/wishlist.css";

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="wishlist-page empty-state">
        <h2>Your Wishlist is Empty</h2>
        <p>Go back to the shop to save your favorites!</p>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <h2 className="section-title">My Saved Items</h2>

      <div className="product-grid">
        {wishlist.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.title} />

              <button
                className="wishlist-btn active"
                onClick={() => toggleWishlist(product)}
              >
                ❤️
              </button>

              <button className="quick-add" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>

            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="price">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
