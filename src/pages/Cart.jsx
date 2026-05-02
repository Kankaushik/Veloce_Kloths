import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/cart.css";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page cart-empty-page">
        <div className="cart-empty-box">
          <div className="cart-empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything yet. Explore our collection and find something you'll love.</p>
          <Link to="/products" className="cart-empty-btn">Start Shopping</Link>
        </div>
      </div>
    );
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <div className="cart-header-row">
        <h2 className="cart-title">Your Shopping Bag</h2>
        <span className="cart-count">{cart.reduce((a, i) => a + i.qty, 0)} item{cart.reduce((a, i) => a + i.qty, 0) !== 1 ? "s" : ""}</span>
      </div>

      <div className="cart-layout">
        {/* Items */}
        <div className="cart-items-container">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="cart-item-info">
                <h4>{item.title}</h4>
                <p className="item-price">₹{item.price.toLocaleString()}</p>
                <div className="qty-controls">
                  <button className="qty-btn" onClick={() => updateQty(item.id, -1)} aria-label="Decrease">−</button>
                  <span className="qty-value">{item.qty}</span>
                  <button className="qty-btn" onClick={() => updateQty(item.id, 1)} aria-label="Increase">+</button>
                </div>
              </div>

              <div className="cart-item-actions">
                <p className="item-total">₹{(item.price * item.qty).toLocaleString()}</p>
                <button
                  className="cart-remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  🗑 Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <aside className="cart-summary">
          <h3 className="cart-summary-title">Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span className={shipping === 0 ? "free-shipping" : ""}>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
          </div>
          {shipping > 0 && (
            <p className="free-shipping-hint">Add ₹{(999 - subtotal).toLocaleString()} more for free shipping!</p>
          )}
          <div className="summary-divider" />
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>

          <div className="summary-trust">
            <span>🔒 Secure Checkout</span>
            <span>🔄 Easy Returns</span>
          </div>

          <Link to="/products" className="continue-shopping">← Continue Shopping</Link>
        </aside>
      </div>
    </div>
  );
}
