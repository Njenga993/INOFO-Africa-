import '../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Image Block */}
          <div className="contact-image">
            <img src="joyful-harvest-in-the-fields-101239609.jpg" alt="Contact Us" />
          </div>

          {/* Contact Form */}
          <div className="contact-form-box">
            <h2>Get in Touch With Us</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows={5} required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter-card">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with news, events and initiatives from INOFO Africa.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
