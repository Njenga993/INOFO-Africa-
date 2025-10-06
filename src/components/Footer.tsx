import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLeaf, FaPlus, FaMinus } from 'react-icons/fa';
import '../styles/footer.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LogoBlackDay from "../assets/Black_Day.png";
const Footer = () => {
  const [faqOpen, setFaqOpen] = useState(false);
  
  // FAQ data
  const faqs = [
    [
      { 
        question: "What is INOFO Africa?", 
        answer: "INOFO Africa is a network of organic farmers across Africa dedicated to promoting organic farming practices and sustainable agriculture." 
      },
      { 
        question: "How can I become a member?", 
        answer: "You can become a member by visiting our membership page and filling out the application form. We welcome all organic farmers and supporters." 
      },
      { 
        question: "What are the benefits of membership?", 
        answer: "Members gain access to training, resources, networking opportunities, and support in organic certification processes." 
      },
      { 
        question: "Do you offer training programs?", 
        answer: "Yes, we offer various training programs on organic farming techniques, certification, and sustainable practices throughout the year." 
      },
      { 
        question: "How is organic certification obtained?", 
        answer: "Organic certification is obtained through approved certification bodies after meeting specific organic standards and undergoing inspections." 
      },
      { 
        question: "Can small-scale farmers join?", 
        answer: "Absolutely! We specifically support smallholder farmers in transitioning to and maintaining organic farming practices." 
      },
      { 
        question: "Where do you operate?", 
        answer: "We operate across Africa with member organizations in multiple countries and regional coordination centers." 
      },
      { 
        question: "How can I support your work?", 
        answer: "You can support us by becoming a member, donating, volunteering, or partnering with our organization." 
      }
    ],
    [
      { 
        question: "What crops do you focus on?", 
        answer: "We support organic farming of all crops, with special attention to indigenous and traditional African crops." 
      },
      { 
        question: "Is organic farming profitable?", 
        answer: "Yes, organic farming can be highly profitable due to premium prices, lower input costs, and growing market demand." 
      },
      { 
        question: "How do you ensure quality?", 
        answer: "We maintain strict quality standards through training, peer reviews, and adherence to international organic regulations." 
      },
      { 
        question: "Do you help with market access?", 
        answer: "Yes, we facilitate market linkages for our members through partnerships with buyers and organic markets." 
      },
      { 
        question: "What's your stance on GMOs?", 
        answer: "We promote non-GMO agriculture in line with organic principles that prohibit genetically modified organisms." 
      },
      { 
        question: "How do you handle pests organically?", 
        answer: "We promote integrated pest management using natural predators, companion planting, and organic-approved treatments." 
      },
      { 
        question: "Can urban farmers join?", 
        answer: "Yes, we welcome urban farmers practicing organic methods in cities and peri-urban areas." 
      },
      { 
        question: "How do I contact regional offices?", 
        answer: "Visit our contact page for regional office details or email info@inofo-africa.org for assistance." 
      }
    ]
  ];

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
              
              <div className="F-newsletter">
                <h4>Subscribe to Newsletter</h4>
                <form className="F-newsletter-form">
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
        <div className="container">
          {/* FAQ Section */}
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
          </div>
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