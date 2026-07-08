import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaLeaf } from 'react-icons/fa';
import '../styles/footer.css';
import { Link } from 'react-router-dom';

import LogoBlackDay from "../assets/Black_Day.png";
const Footer = () => {
 
  


  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* About Column */}
            <div className="footer-col">
              <div className="footer-logo">
                <img 
                  src= {LogoBlackDay}
                  alt="INOFO Africa" 
                  className="logo-img"
                />
                <div className="logo-text">
                  <span className="organic-badge">
                    <FaLeaf /> ORGANIC NETWORK
                  </span>
                </div>
              </div>
              <p className="footer-about">
                  We are Africa's organic farmers - proud smallholder families dedicated to nurturing 
                  the land without harmful chemicals. By working with nature, not against it, we 
                  protect our soils, our food, and our environment. We are the guardians of safe,
                   healthy food for today and for generations to come.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>

            {/* Quick Links Column */}
              <div className="footer-col">
                   <h3 className="footer-title">Quick Links</h3>
                <ul className="footer-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/membership">Membership</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/newsevents">News & Events</Link></li>
                    <li><Link to="/contact">Get Involved & Contact Us</Link></li>
                </ul>
              </div>

            {/* Resources Column */}
            <div className="footer-col">
              <h3 className="footer-title">Resource</h3>
              <ul className="footer-links">
                <li><a href="#">Publication</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-col">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt />
                  <span>334 -20116 , Gilgil, Kenya</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>info@inofoafrica.org</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          {/* FAQ Section 
          <div className="faq-section">
            <button 
              className="faq-toggle" 
              onClick={() => setFaqOpen(!faqOpen)}
              aria-expanded={faqOpen}
              aria-controls="faq-content"
            >
              <h3>Frequently Asked Questions</h3>
              <span className="faq-icon">
                {faqOpen ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            
            {faqOpen && (
              <div id="faq-content" className="faq-content">
                <div className="faq-grid">
                  {faqs.map((row, rowIndex) => (
                    <div key={rowIndex} className="faq-row">
                      {row.map((item, index) => (
                        <div key={index} className="faq-item">
                          <h4 className="faq-question">{item.question}</h4>
                          <p className="faq-answer">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>*/}
      </div>

      <div className="footer-bottom"> 
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} - 2030 INOFO Africa. All rights reserved  |  Powered by <a href="https://njenga993.github.io/kspace/"> K-SPACE</a></p>
            
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemaps</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;