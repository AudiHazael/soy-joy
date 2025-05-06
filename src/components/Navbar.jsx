import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/styles.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        {/* SoyJoy Milk */}
      </Link>

      {/* Hamburger toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible content */}
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
        data-aos="fade"
        data-aos-duration="1500"
        data-aos-once="true">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Varieties">
              Varieties
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
