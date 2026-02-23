import React from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "../styles/product.css";

const PRODUCTS = [
  { id: 1, title: "Modern Saree", price: 1299, image: "/images/saree.jpg" },
  { id: 2, title: "Classic Purse", price: 459, image: "/images/purse.jpg" },
  {
    id: 3,
    title: "Sleek Urban Blazer",
    price: 899,
    image: "/images/blazer.jpg",
  },
  {
    id: 4,
    title: "Sunglasses",
    price: 555,
    image: "/images/sunglass.jpg",
  },
  {
    id: 4,
    title: "Designer Sunglasses",
    price: 55,
    image: "/images/sunglass_1.jpg",
  },
  {
    id: 4,
    title: "Shoes",
    price: 505,
    image: "/images/shoes.jpg",
  },
  {
    id: 4,
    title: "Shirt",
    price: 1255,
    image: "/images/shirt.jpg",
  },
];

export default function ProductGrid() {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <section className="product-section">
      <h2 className="section-title">Shop Our Collection</h2>

      <div className="product-grid">
        {PRODUCTS.map((product) => {
          const isLiked = wishlist.some((item) => item.id === product.id);

          return (
            <div className="product-card" key={product.id}>
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.title} />

                <button
                  className={`wishlist-btn ${isLiked ? "active" : ""}`}
                  onClick={() => toggleWishlist(product)}
                >
                  ❤
                </button>

                <button
                  className="quick-add"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>

              <div className="product-info">
                <h3>{product.title}</h3>
                <p className="price">₹{product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
