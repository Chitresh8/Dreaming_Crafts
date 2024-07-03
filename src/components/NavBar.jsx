import { Link } from "react-router-dom";

import "./navBar.css";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="all-pages">
        <Link to="/about-us">About Us</Link>
        <Link to="/catalogue">Catalogue</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/home">Home</Link>
      </div>
    </nav>
  );
};
