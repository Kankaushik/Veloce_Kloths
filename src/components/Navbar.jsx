import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header class="header sticky">
      <nav className="navbar">
        <a href="#">
          <img class="logo" alt="logo" src="img/logo.png" />
          Veloce_Kloths
        </a>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="nav-actions">
          <Link to="/wishlist">❤️</Link>
          <Link to="/cart">🛒</Link>
          <Link to="/login" className="login-btn">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
