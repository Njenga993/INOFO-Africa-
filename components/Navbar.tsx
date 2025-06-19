import { useState, useEffect } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaSearch,
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="container">
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
          <button
            className="search-toggle"
            onClick={toggleSearch}
            aria-label="Toggle search"
          >
            <FaSearch />
          </button>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <nav className="main-nav">
        <div className="container">
          <div className="logo-box">
            <Link to="/">
              <img src="assets/INOFO-LOGO-2.jpg" alt="INOFO Africa" />
            </Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <b>About</b>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <b>Services</b>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <b>Blog</b>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <b>Contact</b>
              </Link>
            </li>
            {/* TRANSLATOR */}
            <li className="translate-li">
              <div id="google_translate_element" />
            </li>
          </ul>

          <div className="nav-actions">
            <button
              className="hamburger"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE SIDEBAR */}
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <ul className="sidebar-links">
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li className="sidebar-social">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </li>
            {/* TRANSLATOR IN SIDEBAR */}
            <li className="sidebar-translate">
              <div id="google_translate_element" />
            </li>
          </ul>
        </div>

        <div
          className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        />

        {/* SEARCH BAR */}
        <div className={`search-bar ${searchOpen ? 'open' : ''}`}>
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <button
            className="search-close"
            onClick={toggleSearch}
            aria-label="Close search"
          >
            <FaTimes />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
