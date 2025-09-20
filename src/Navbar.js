import { Link } from "react-router-dom";
import { useState } from 'react';
import "./Navbar.css";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title">Anjali's Page</Link>
      <ul>
        <li className="dropdown-container">
          {/* Change CustomLink to a span that handles the click */}
          <span className="nav-link" onClick={toggleDropdown}>Projects</span>
          <ul className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
            {/* Change this link to point to your Punyam project */}
            <li><Link to="/projects/punyam">Punyam</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
