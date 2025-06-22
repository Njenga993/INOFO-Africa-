
import '../styles/contact.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-form-box">
          <h2>Get in Touch With Us</h2>
          <p>We're here to support organic farmer organizations across Africa. Reach out for partnerships, questions, or collaboration.</p>

          <form action="https://formsubmit.co/your@email.com" method="POST" className="contact-form">
            {/* Hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Contact Message from INOFO Africa Website" />
            <input type="hidden" name="_next" value="https://inofo-africa.org/thank-you" />

            <input type="text" name="Full Name" placeholder="Full Name" required />
            <input type="email" name="Email" placeholder="Email Address" required />
            <input type="text" name="Subject" placeholder="Subject" />
            <textarea name="Message" placeholder="Your message here..." rows={5} required></textarea>

            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>

        <div className="contact-image-box">
          <img src="./chaos-in-communication-a-call-centers-struggle-111332057.jpg" alt="Farmers connecting" />
        </div>
      </div>

      {/* Donate Section */}
      <div className="donate-section">
        <h2>Support the Voice of African Organic Farmers</h2>
        <p>
          Your donation fuels farmer-led solutions, sustainable agriculture, and food sovereignty across the continent.
          Help us scale impact and nurture the land for generations to come.
        </p>
        <a 
          href="https://www.paypal.com/donate" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="donate-btn"
        >
          Donate Using PayPal
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
