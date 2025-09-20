import { useState, useEffect, useRef, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Navbar.css";

// ✅ Import your logo image from assets
import LogoBlackDay from "../assets/Black_Day.png";

interface NavItem {
  path: string;
  label: string;
  icon?: ReactNode;
  dropdown?: Array<{
    path: string;
    label: string;
    icon?: ReactNode;
  }>;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const location = useLocation();
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = "auto";
  };

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        closeAll();
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeAll();
  }, [location]);

  const navItems: NavItem[] = [
    { path: "/", label: "Home" },
    {
      path: "/about",
      label: "Who We Are",
      dropdown: [
        { path: "/about/mission", label: "Our Mission" },
        { path: "/about/team", label: "Our Team" },
        { path: "/about/partners", label: "Partners" },
      ],
    },
    {
      path: "/membership",
      label: "Membership",
      dropdown: [
        { path: "/membership/benefits", label: "Benefits" },
        { path: "/membership/apply", label: "Apply Now" },
      ],
    },
    {
      path: "/services",
      label: "Our Work",
      dropdown: [
        { path: "/services/training", label: "Training Programs" },
        { path: "/services/advocacy", label: "Polic Advocacy" },
        { path: "/services/markets", label: "Market Access" },
      ],
    },
    {
      path: "/resources",
      label: "Resources",
      dropdown: [
        { path: "/resources/news", label: "News & Events" },
        { path: "/resources/publications", label: "Publications" },
        { path: "/resources/#tools", label: "Farmer Tools" },
      ],
    },
    { path: "/contact", label: "Contact" },
  ];

  // Split nav items into left and right wings
  const leftNavItems = navItems.slice(0, 3);
  const rightNavItems = navItems.slice(3);

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${
        isOpen ? "menu-open" : ""
      }`}
      ref={navbarRef}
    >
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-links">
              <Link to="mailto:info@inofoafrica.org">info@inofoafrica.org</Link>
            </div>
            <div className="top-right">
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
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <nav className="main-nav">
        <div className="nav-container">
          {/* LEFT WING */}
          <ul className="nav-wing nav-wing--left">
            {leftNavItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${item.dropdown ? "has-dropdown" : ""} ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="nav-link"
                  onClick={() => {
                    closeAll();
                    if (location.pathname === item.path) scrollToTop();
                  }}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.ul
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex} className="dropdown-item">
                            <Link
                              to={subItem.path}
                              className="dropdown-link"
                              onClick={() => {
                                closeAll();
                                if (location.pathname === subItem.path)
                                  scrollToTop();
                              }}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* CENTRAL LOGO WITH CREST */}
          <div className="logo-crest">
            <div className="crest-shape"></div>
            <Link to="/" onClick={scrollToTop} className="logo-link">
              <motion.img
                src={LogoBlackDay}
                alt="INOFO Africa"
                className="logo-img"
                initial={{ height: 70 }}
                animate={{ height: scrolled ? 50 : 70 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </div>

          {/* RIGHT WING */}
          <ul className="nav-wing nav-wing--right">
            {rightNavItems.map((item, index) => {
              const originalIndex = index + 3;
              return (
                <li
                  key={originalIndex}
                  className={`nav-item ${item.dropdown ? "has-dropdown" : ""} ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(originalIndex)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className="nav-link"
                    onClick={() => {
                      closeAll();
                      if (location.pathname === item.path) scrollToTop();
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === originalIndex && (
                        <motion.ul
                          className="dropdown-menu"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex} className="dropdown-item">
                              <Link
                                to={subItem.path}
                                className="dropdown-link"
                                onClick={() => {
                                  closeAll();
                                  if (location.pathname === subItem.path)
                                    scrollToTop();
                                }}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              );
            })}
          </ul>

          {/* MOBILE MENU TOGGLE */}
          <div className="nav-actions">
            <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE SIDEBAR */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="sidebar-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeAll}
              />
              <motion.div
                className="sidebar"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween" }}
              >
                <div className="sidebar-header">
                  <div className="logo-crest-mobile">
                  </div>
                  <button
                    className="sidebar-close"
                    onClick={closeAll}
                    aria-label="Close Menu"
                  >
                    <FaTimes />
                  </button>
                </div>

                <ul className="sidebar-links">
                  {navItems.map((item, index) => (
                    <li key={index} className="sidebar-item">
                      <div className="mobile-nav-row">
                        <Link
                          to={item.path}
                          className="sidebar-link"
                          onClick={() => {
                            if (!item.dropdown) closeAll();
                            if (location.pathname === item.path) scrollToTop();
                          }}
                        >
                          {item.label}
                        </Link>
                        {item.dropdown && (
                          <button
                            className="dropdown-toggle-btn"
                            onClick={() => toggleDropdown(index)}
                            aria-label="Expand submenu"
                          >
                            {activeDropdown === index ? (
                              <FaChevronUp />
                            ) : (
                              <FaChevronDown />
                            )}
                          </button>
                        )}
                      </div>

                      {item.dropdown && (
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.ul
                              className="mobile-dropdown-content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.dropdown.map((subItem, subIndex) => (
                                <li
                                  key={subIndex}
                                  className="mobile-dropdown-item"
                                >
                                  <Link
                                    to={subItem.path}
                                    className="mobile-dropdown-link"
                                    onClick={closeAll}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;