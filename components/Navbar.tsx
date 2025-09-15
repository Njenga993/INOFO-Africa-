import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaBars, 
  FaTimes, 
  FaSearch,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/navbar.css';
import type { ReactNode } from "react";


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
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const location = useLocation();
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const toggleSearch = () => setSearchOpen(!searchOpen);
  
  const closeAll = () => {
    setIsOpen(false);
    setSearchOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = 'auto';
  };

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMobileNavClick = (item: NavItem, index: number, e: React.MouseEvent) => {
    if (item.dropdown) {
      if (location.pathname === item.path) {
        e.preventDefault();
        toggleDropdown(index);
      } else {
        closeAll();
      }
    } else {
      closeAll();
      if (location.pathname === item.path) {
        scrollToTop();
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        closeAll();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeAll();
  }, [location]);

  const navItems: NavItem[] = [
    { path: '/', label: 'Home',  },
    { 
      path: '/about', 
      label: 'Who We Are',
      dropdown: [
        { path: '/about/mission', label: 'Our Mission', },
        { path: '/about/team', label: 'Our Team',  },
        { path: '/about/partners', label: 'Partners', }
      ]
    },
    { 
      path: '/membership', 
      label: 'Membership',
      dropdown: [
        { path: '/membership/benefits', label: 'Benefits',  },
        { path: '/membership/apply', label: 'Apply Now',  }
      ]
    },
    { 
      path: '/services', 
      label: 'Our Work',
      dropdown: [
        { path: '/services/training', label: 'Training Programs', },
        { path: '/services/advocacy', label: 'Policy Advocacy', },
        { path: '/services/markets', label: 'Market Access', }
      ]
    },
    { 
      path: '/newsevents', 
      label: 'Resources',
      dropdown: [
        { path: '/resources/news', label: 'News & Events', },
        { path: '/resources/publications', label: 'Publications',  },
        { path: '/resources/tools', label: 'Farmer Tools',  }
      ]
    },
    { path: '/contact', label: 'Contact',}
  ];

  return (
    <header 
      className={`header ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}
      ref={navbarRef}
    >
      {/* TOP BAR - Always visible now */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-links">
               <Link to="mailto:Info@inofoafrica.org">
                  <span className="link-icon">✉</span> Info@inofoafrica.org
                </Link>
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
        <div className="container">
          <div className="logo-box">
            <Link to="/" onClick={scrollToTop} className="logo-link">
              <motion.img 
                src="Black_Day.png" 
                alt="INOFO Africa" 
                className="logo-img"
                initial={{ height: 70 }}
                animate={{ height: scrolled ? 50 : 70 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </div>

          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li 
                key={index}
                className={`nav-item ${item.dropdown ? 'has-dropdown' : ''} ${location.pathname === item.path ? 'active' : ''}`}
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <Link 
                  to={item.path} 
                  className="nav-link"
                  onClick={(e) => {
                    if (item.dropdown && location.pathname === item.path) {
                      e.preventDefault();
                      toggleDropdown(index);
                    } else if (location.pathname === item.path) {
                      scrollToTop();
                    }
                  }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  {item.dropdown && (
                    <span className="dropdown-arrow">
                      {activeDropdown === index ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  )}
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
                                if (location.pathname === subItem.path) {
                                  scrollToTop();
                                }
                              }}
                            >
                              <span className="dropdown-icon">{subItem.icon}</span>
                              <span className="dropdown-label">{subItem.label}</span>
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
            
            <li className="translate-li">
              <div id="google_translate_element" />
            </li>
          </ul>

          <div className="nav-actions">
            <button
              className={`search-toggle ${searchOpen ? 'active' : ''}`}
              onClick={toggleSearch}
              aria-label="Toggle search"
            >
              <FaSearch />
            </button>
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
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween' }}
              >
                <div className="sidebar-header">
                  <Link to="/" className="sidebar-logo" onClick={closeAll}>
                    <img src="Black_Day.png" alt="INOFO Africa" />
                  </Link>
                  <button className="sidebar-close" onClick={closeAll}>
                    <FaTimes />
                  </button>
                </div>
                
                <ul className="sidebar-links">
                  {navItems.map((item, index) => (
                    <li key={index} className="sidebar-item">
                      {item.dropdown ? (
                        <div className="mobile-dropdown">
                          <div
                            className={`mobile-dropdown-btn ${activeDropdown === index ? 'open' : ''}`}
                            onClick={(e) => handleMobileNavClick(item, index, e)}
                          >
                            <span className="mobile-nav-icon">{item.icon}</span>
                            <span className="mobile-nav-label">{item.label}</span>
                            {item.dropdown && (
                              activeDropdown === index ? <FaChevronUp /> : <FaChevronDown />
                            )}
                          </div>
                          
                          <AnimatePresence>
                            {activeDropdown === index && (
                              <motion.ul
                                className="mobile-dropdown-content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                {item.dropdown.map((subItem, subIndex) => (
                                  <li key={subIndex} className="mobile-dropdown-item">
                                    <Link 
                                      to={subItem.path} 
                                      className="mobile-dropdown-link"
                                      onClick={() => {
                                        closeAll();
                                        if (location.pathname === subItem.path) {
                                          scrollToTop();
                                        }
                                      }}
                                    >
                                      <span className="mobile-dropdown-icon">{subItem.icon}</span>
                                      <span>{subItem.label}</span>
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link 
                          to={item.path} 
                          className="sidebar-link"
                          onClick={() => {
                            closeAll();
                            if (location.pathname === item.path) {
                              scrollToTop();
                            }
                          }}
                        >
                          <span className="sidebar-icon">{item.icon}</span>
                          <span>{item.label}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                  
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
                  
                  <li className="sidebar-translate">
                    <div id="google_translate_element" />
                  </li>
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* SEARCH BAR */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div 
              className="search-bar"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="search-container">
                <form className="search-form">
                  <input
                    type="text"
                    placeholder="Search for resources, news, or members..."
                    className="search-input"
                  />
                  <button type="submit" className="search-submit">
                    <FaSearch />
                  </button>
                  <button
                    type="button"
                    className="search-close"
                    onClick={toggleSearch}
                    aria-label="Close search"
                  >
                    <FaTimes />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;