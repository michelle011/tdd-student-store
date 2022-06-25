import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const homeImg =
  "https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <Link to="/">
        <img className="home-image" src={homeImg}></img>
      </Link>
      <a className="anchor" href={"#buy-now"}>
        Buy Now
      </a>
      <a className="anchor" href={"#about-us"}>
        About Us
      </a>
      <a className="anchor" href={"#contact-us"}>
        Contact Us
      </a>
    </nav>
  );
}
