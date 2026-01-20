import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header class="header sticky">
      <nav className="navbar">
        <a href="#" class="nav-text ">
          <img class="logo " alt="logo" src="img/logo.png" />
          Veloce_Kloths
        </a>

        <ul className="nav-links">
          <div class="nav-link-arrow">
            <li>
              <Link to="/">Home</Link>
            </li>
          </div>
          <div class="nav-link-arrow">
            <li>
              <Link to="/products">Products</Link>
            </li>
          </div>
          <div class="nav-link-arrow">
            <li>
              <Link to="/about">About</Link>
            </li>
          </div>
          <div class="nav-link-arrow">
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </ul>

        <div className="nav-actions">
          <Link class="wis" to="/wishlist">
            ❤️
          </Link>
          <Link class="wis" to="/cart">
            🛒
          </Link>
          <Link to="/login" className="login-btn">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
