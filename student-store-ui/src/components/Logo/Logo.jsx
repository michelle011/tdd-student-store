import "./Logo.css";
import { Link } from "react-router-dom";

// Renders site logo to homepage
export default function Logo() {
  return (
    <div className="logo">
      <Link to="/" className="logo-link">
        <img
          className="navbar-logo"
          src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
          alt="Logo for Student Store"
        />
      </Link>
    </div>
  );
}
