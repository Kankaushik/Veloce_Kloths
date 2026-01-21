import { useCart } from "../context/CartContext";
import "../styles/cart.css";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <p className="cart-empty">Your cart is empty</p>
      </div>
    );
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Shopping Bag</h2>

      <div className="cart-items-container">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="cart-item-info">
              <h4>{item.title}</h4>
              <p className="item-price">₹{item.price}</p>
              <p className="item-qty">Quantity: {item.qty}</p>
            </div>

            <div className="cart-item-actions">
              <p className="item-total">₹{item.price * item.qty}</p>
              <button
                className="cart-remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <h3>
          Subtotal: <span>₹{subtotal}</span>
        </h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}
