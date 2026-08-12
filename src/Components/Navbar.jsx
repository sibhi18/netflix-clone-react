import img1 from "../assets/Images/netflix1.jpg";
import "../Styles/Navbar.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbarStyles">
      <div className="navbar-brand">
        <img src={img1} alt="Netflix logo" width="120" height="50" />
        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <ul className="ul">
          <li>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/tv-show" onClick={closeMenu}>TV Show</NavLink>
          </li>
          <li>
            <NavLink to="/movies" onClick={closeMenu}>Movies</NavLink>
          </li>
          <li>
            <NavLink to="/newpopular" onClick={closeMenu}>New Popular</NavLink>
          </li>
          <li>
            <NavLink to="/mylist" onClick={closeMenu}>❤️ My List</NavLink>
          </li>
          <li>
            <NavLink to="/search" onClick={closeMenu}>Search <FaSearch /></NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={closeMenu}>Login</NavLink>
          </li>
          <li>
            <NavLink to="/profile" onClick={closeMenu}>👤</NavLink>
          </li>
          <li className="navbar-notification">
            <IoNotifications />
          </li>
        </ul>
      </div>

      {menuOpen && <div className="navbar-backdrop" onClick={closeMenu} />}
    </nav>
  );
}

export default Navbar;
