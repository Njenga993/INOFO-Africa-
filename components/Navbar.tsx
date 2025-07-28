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
  FaChevronUp
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/navbar.css';

interface NavItem {
  path: string;
  label: string;
  dropdown?: Array<{
    path: string;
    label: string;
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
      // If we're already on this page, prevent navigation and toggle dropdown
      if (location.pathname === item.path) {
        e.preventDefault();
        toggleDropdown(index);
      } else {
        // Otherwise, navigate to the page and close any open dropdowns
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
    { path: '/', label: 'Home' },
    { 
      path: '/about', 
      label: 'Who We Are',
      dropdown: [
        { path: '/about/mission', label: 'Our Mission' },
        { path: '/about/team', label: 'Our Team' },
        { path: '/about/partners', label: 'Partners' }
      ]
    },
    { 
      path: '/membership', 
      label: 'Membership',
      dropdown: [
        { path: '/membership/benefits', label: 'Benefits' },
        { path: '/membership/apply', label: 'Apply Now' }
      ]
    },
    { 
      path: '/services', 
      label: 'Our Work',
      dropdown: [
        { path: '/services/training', label: 'Training Programs' },
        { path: '/services/advocacy', label: 'Policy Advocacy' },
        { path: '/services/markets', label: 'Market Access' }
      ]
    },
    { 
      path: '/newsevents', 
      label: 'Resources',
      dropdown: [
        { path: '/resources/news', label: 'News & Events' },
        { path: '/resources/publications', label: 'Publications' },
        { path: '/resources/tools', label: 'Farmer Tools' }
      ]
    },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`header ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}
      ref={navbarRef}
    >
      {/* TOP BAR */}
      <motion.div 
        className="top-bar"
        initial={{ opacity: 1, height: 'auto' }}
        animate={{ 
          opacity: scrolled ? 0 : 1,
          height: scrolled ? 0 : 'auto'
        }}
        transition={{ duration: 0.3 }}
      >
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
          
          <div className="top-links">
            <Link to="/contact">Support Us</Link>
          </div>
        </div>
      </motion.div>

      {/* MAIN NAVIGATION */}
      <nav className="main-nav">
        <div className="container">
          <div className="logo-box">
            <Link to="/" onClick={scrollToTop}>
              <motion.img 
                src="Black_Day.png" 
                alt="INOFO Africa" 
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
                className={item.dropdown ? 'has-dropdown' : ''}
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <Link 
                  to={item.path} 
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={(e) => {
                    if (item.dropdown && location.pathname === item.path) {
                      e.preventDefault();
                      toggleDropdown(index);
                    } else if (location.pathname === item.path) {
                      scrollToTop();
                    }
                  }}
                >
                  {item.label}
                  {item.dropdown && (
                    activeDropdown === index ? <FaChevronUp /> : <FaChevronDown />
                  )}
                </Link>

                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.ul 
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link 
                              to={subItem.path}
                              onClick={() => {
                                closeAll();
                                if (location.pathname === subItem.path) {
                                  scrollToTop();
                                }
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
            
            <li className="translate-li">
              <div id="google_translate_element" />
            </li>
          </ul>

          <div className="nav-actions">
            <button
              className="search-toggle"
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
                <ul className="sidebar-links">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      {item.dropdown ? (
                        <div className="mobile-dropdown">
                          <Link
                            to={item.path}
                            className={`mobile-dropdown-btn ${activeDropdown === index ? 'open' : ''}`}
                            onClick={(e) => handleMobileNavClick(item, index, e)}
                          >
                            {item.label}
                            {item.dropdown && (
                              activeDropdown === index ? <FaChevronUp /> : <FaChevronDown />
                            )}
                          </Link>
                          
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
                                  <li key={subIndex}>
                                    <Link 
                                      to={subItem.path} 
                                      onClick={() => {
                                        closeAll();
                                        if (location.pathname === subItem.path) {
                                          scrollToTop();
                                        }
                                      }}
                                    >
                                      {subItem.label}
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
                          onClick={() => {
                            closeAll();
                            if (location.pathname === item.path) {
                              scrollToTop();
                            }
                          }}
                        >
                          {item.label}
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
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;