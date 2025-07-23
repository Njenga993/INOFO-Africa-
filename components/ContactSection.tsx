import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaLeaf, FaUsers } from 'react-icons/fa';
import '../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <motion.section 
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="contact-bg-pattern">
        <div className="organic-shape-1"></div>
        <div className="organic-shape-2"></div>
      </div>

      <div className="contact-container">
        <motion.div 
          className="contact-grid"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Image Block */}
          <motion.div 
            className="contact-image"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="joyful-harvest-in-the-fields-101239609.jpg" 
              alt="Contact Us" 
              className="contact-img"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form-box"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              <span className="title-gradient">Get in Touch With Us</span>
            </h2>
            <p className="form-intro">
              Have questions or want to collaborate? Our team is ready to assist you.
            </p>

            <form className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  className="form-input"
                />
                <span className="input-focus-border"></span>
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  className="form-input"
                />
                <span className="input-focus-border"></span>
              </div>

              <div className="form-group">
                <textarea 
                  placeholder="Your Message" 
                  rows={5} 
                  required 
                  className="form-textarea"
                ></textarea>
                <span className="input-focus-border"></span>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <FaPaperPlane className="btn-icon" />
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="contact-info-cards">
          <motion.div 
            className="info-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-icon">
              <FaEnvelope />
            </div>
            <h3>Email Us</h3>
            <p>For general inquiries and information</p>
            <a href="mailto:info@inofo-africa.org" className="info-link">
              info@inofo-africa.org
            </a>
          </motion.div>

          <motion.div 
            className="info-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-icon">
              <FaLeaf />
            </div>
            <h3>Partnerships</h3>
            <p>For collaboration opportunities</p>
            <a href="mailto:partnerships@inofo-africa.org" className="info-link">
              partnerships@inofo-africa.org
            </a>
          </motion.div>

          <motion.div 
            className="info-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-icon">
              <FaUsers />
            </div>
            <h3>Membership</h3>
            <p>For joining our network</p>
            <a href="mailto:membership@inofo-africa.org" className="info-link">
              membership@inofo-africa.org
            </a>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div 
          className="newsletter-card"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="newsletter-content">
            <h3>Stay Connected With Our Community</h3>
            <p>
              Subscribe to receive updates on organic farming initiatives, events, 
              and resources from across Africa.
            </p>
            <form className="newsletter-form">
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  <span>Subscribe</span>
                  <FaPaperPlane className="btn-icon" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;