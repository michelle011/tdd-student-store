import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

// Generates navigation bar that wil autoscroll to various page components renders logo in homepage
export default function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <Logo />
        <div className="navbar-links">
          <p className="item">
            <a className="anchor" href="#home">
              Home
            </a>
          </p>
          <p className="item">
            <a className="anchor" href="#about-us">
              About Us
            </a>
          </p>
          <p className="item">
            <a className="anchor" href="#contact-us">
              Contact Us
            </a>
          </p>
          <p className="item">
            <a className="anchor" href="#search-bar">
              Buy Now
            </a>
          </p>
        </div>
      </div>
    </nav>
  );
}
