import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "../styles/product.css";

const PRODUCTS = [
  { id: 1,  title: "Modern Saree",          price: 1299, image: "/images/saree.jpg",       category: "Women" },
  { id: 2,  title: "Classic Purse",          price: 459,  image: "/images/purse.jpg",       category: "Accessories" },
  { id: 3,  title: "Sleek Urban Blazer",     price: 899,  image: "/images/blazer.jpg",      category: "Men" },
  { id: 4,  title: "Sunglasses",             price: 555,  image: "/images/sunglass.jpg",    category: "Accessories" },
  { id: 5,  title: "Designer Sunglasses",    price: 55,   image: "/images/sunglass_1.jpg",  category: "Accessories" },
  { id: 6,  title: "Shoes",                  price: 505,  image: "/images/shoes.jpg",       category: "Accessories" },
  { id: 7,  title: "Shirt",                  price: 1255, image: "/images/shirt.jpg",       category: "Men" },
];

const CATEGORIES = ["All", "Men", "Women", "Accessories"];

const SORT_OPTIONS = [
  { label: "Default",       value: "default" },
  { label: "Price: Low → High", value: "asc" },
  { label: "Price: High → Low", value: "desc" },
];

export default function ProductGrid() {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("default");

  let filtered = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  if (sort === "asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "desc") filtered = [...filtered].sort((a, b) => b.price - a.price);

  return (
    <section className="product-section">
      {/* Page Header */}
      <div className="product-page-hero">
        <span className="product-hero-badge">Our Collection</span>
        <h1 className="product-hero-title">Shop All Products</h1>
        <p className="product-hero-sub">Premium styles curated for every occasion and every wardrobe.</p>
      </div>

      {/* Filters Bar */}
      <div className="product-filters-bar">
        <div className="category-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`category-tab-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {activeCategory === cat && filtered.length > 0 && (
                <span className="tab-count">{filtered.length}</span>
              )}
            </button>
          ))}
        </div>

        <div className="sort-select-wrap">
          <select
            className="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="product-empty">
          <p>No products found in this category.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filtered.map((product) => {
            const isLiked = wishlist.some((item) => item.id === product.id);

            return (
              <div className="product-card" key={product.id}>
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.title} />

                  <span className="product-category-tag">{product.category}</span>

                  <button
                    className={`wishlist-btn ${isLiked ? "active" : ""}`}
                    onClick={() => toggleWishlist(product)}
                    aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
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
                  <p className="price">₹{product.price.toLocaleString()}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
