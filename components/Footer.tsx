import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLeaf } from 'react-icons/fa';
import '../styles/footer.css'

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
                  src="/INOFO-LOGO-2.jpg" 
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
                INOFO Africa is a continental platform uniting organic farmer organizations 
                to advocate for policies, share knowledge, and promote sustainable 
                agriculture across Africa.
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
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/membership">Membership</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/newsevents">News & Events</a></li>
                <li><a href="/contact">Get Involved & Contact Us</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="footer-col">
              <h3 className="footer-title">Resources</h3>
              <ul className="footer-links">
                <li><a href="#">Publications</a></li>
                <li><a href="#">Research Papers</a></li>
                <li><a href="#">Organic Standards</a></li>
                <li><a href="#">Training Materials</a></li>
                <li><a href="#">Success Stories</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-col">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt />
                  <span>123 Organic Street, Nairobi, Kenya</span>
                </li>
                <li>
                  <FaPhoneAlt />
                  <span>+254 700 123 456</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>info@inofo-africa.org</span>
                </li>
              </ul>
              
              <div className="newsletter">
                <h4>Subscribe to Newsletter</h4>
                <form className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    required 
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} INOFO Africa. All rights reserved.</p>
            
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;