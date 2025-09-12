import { motion } from 'framer-motion';
import { FaPaperPlane, FaLeaf, FaHandshake, FaDonate } from 'react-icons/fa';
import '../styles/contact.css';

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
          className="contact-form-box"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>
            <span className="title-gradient">Get in Touch With Us</span>
          </h2>
          <p className="lead">
            We're here to support organic farmer organizations across Africa. Reach out for partnerships, questions, or collaboration.
          </p>

          <form 
            action="https://formsubmit.co/your@email.com" 
            method="POST" 
            className="contact-form"
          >
            {/* Hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Contact Message from INOFO Africa Website" />
            <input type="hidden" name="_next" value="https://inofo-africa.org/thank-you" />

            <div className="form-group">
              <label htmlFor="full-name">Full Name *</label>
              <input 
                type="text" 
                id="full-name" 
                name="Full Name" 
                placeholder="Your full name" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="Email" 
                placeholder="Your email address" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="Subject" 
                placeholder="Message subject" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea 
                id="message" 
                name="Message" 
                placeholder="How can we help you?" 
                rows={5} 
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              <span>Send Message</span>
              <FaPaperPlane className="btn-icon" />
            </button>
          </form>
        </motion.div>

        <motion.div 
          className="contact-info-box"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="info-card">
            <div className="info-icon">
              <FaLeaf />
            </div>
            <h3>Partnership Inquiries</h3>
            <p>Explore collaboration opportunities with African organic farmer organizations.</p>
            <a href="mailto:partnerships@inofoafrica.org" className="info-link">
              partnerships@inofoafrica.org
            </a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaHandshake />
            </div>
            <h3>Membership Questions</h3>
            <p>Learn how to join our continental network of organic farmer organizations.</p>
            <a href="mailto:membership@inofoafrica.org" className="info-link">
              membership@inofoafrica.org
            </a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaPaperPlane />
            </div>
            <h3>General Inquiries</h3>
            <p>Contact our team for any other questions about our work and initiatives.</p>
            <a href="mailto:info@inofoafrica.org" className="info-link">
              info@inofoafrica.org
            </a>
          </div>
        </motion.div>
      </div>

      {/* Donate Section */}
      <motion.div 
        className="donate-section"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="donate-container">
          <div className="donate-content">
            <h2>Support the Voice of African Organic Farmers</h2>
            <p>
              Your donation fuels farmer-led solutions, sustainable agriculture, and food sovereignty across the continent.
              Help us scale impact and nurture the land for generations to come.
            </p>
            <div className="donate-buttons">
              <a 
                href="https://www.paypal.com/donate" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="donate-btn"
              >
                <FaDonate className="btn-icon" />
                <span>Donate Using PayPal</span>
              </a>
            </div>
          </div>
          <div className="donate-image">
            <img 
              src="dedicated-farmer-tending-to-vibrant-crops-328717.jpg" 
              alt="African farmers working together" 
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;