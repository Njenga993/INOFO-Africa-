import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FaPaperPlane,
  FaLeaf,
  FaHandshake,
  FaDonate,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Newsletter from "../components/Newsletter";
import SEO from "../components/SEO"; // Import the SEO component
import "../styles/Contact.css";
import heroImg from "../assets/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg";
import journeyImg from "../assets/joyful-harvest-in-the-fields-101239609.jpg";

const ContactSection = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Basic validation
    if (!formData.from_name.trim() || !formData.from_email.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      setError("Please enter a valid email address");
      return;
    }

    setSending(true);
    setSuccess(false);
    setError("");

    emailjs
      .send(
        "service_29mw7wa",
        "template_zshzk8k",
        formData,
        "lEcqKKs_4Aar5QqYv"
      )
      .then(() => {
        setSending(false);
        setSuccess(true);
        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSending(false);
        setError("Failed to send message. Please try again later.");
      });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Schema for the contact page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact INOFO Africa",
    "description": "Get in touch with INOFO Africa for partnerships, membership inquiries, or general questions about organic farming in Africa.",
    "url": "https://www.inofoafrica.org/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "INOFO Africa",
      "url": "https://www.inofoafrica.org",
      "logo": "https://www.inofoafrica.org/assets/logo.png",
      "description": "The Indigenous Organic Farmers Federation of Africa supporting smallholder farmers, agroecology, and food sovereignty.",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "partnerships",
          "email": "partnerships@inofoafrica.org",
          "availableLanguage": ["English", "French", "Portuguese"]
        },
        {
          "@type": "ContactPoint",
          "contactType": "membership",
          "email": "membership@inofoafrica.org",
          "availableLanguage": ["English", "French", "Portuguese"]
        },
        {
          "@type": "ContactPoint",
          "contactType": "general",
          "email": "info@inofoafrica.org",
          "availableLanguage": ["English", "French", "Portuguese"]
        }
      ],
      "sameAs": [
        "https://facebook.com/inofoafrica",
        "https://twitter.com/inofoafrica",
        "https://linkedin.com/company/inofoafrica",
        "https://instagram.com/inofoafrica",
        "https://youtube.com/@inofoafrica"
      ],
      "potentialAction": {
        "@type": "DonateAction",
        "target": "https://www.paypal.com/donate",
        "description": "Support the voice of African organic farmers"
      }
    }
  };

  return (
    <>
      {/* SEO Component */}
      <SEO
        title="Contact Us | INOFO Africa"
        description="Get in touch with INOFO Africa for partnerships, membership inquiries, or general questions about organic farming in Africa. Support our mission through donations."
        canonical="https://www.inofoafrica.org/contact"
        keywords={[
          "INOFO Africa contact",
          "contact INOFO Africa",
          "organic farming Africa contact",
          "agroecology Africa contact",
          "farmer organizations Africa",
          "partnerships INOFO Africa",
          "membership INOFO Africa",
          "donate INOFO Africa",
          "support African farmers",
          "food sovereignty Africa",
          "indigenous organic farmers",
          "African agriculture contact",
          "sustainable farming Africa",
          "farmer networks Africa"
        ]}
        image="https://www.inofoafrica.org/assets/inofo-contact-share.jpg"
        type="website"
        schema={contactSchema}
      />

      <motion.main
        className="contact-africa"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        ref={containerRef}
      >
        {/* Hero Section */}
        <motion.header
          className="hero-header"
          style={{ backgroundImage: `url(${heroImg})` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="hero-overlay">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Contact Us.
            </motion.h1>
          </div>
        </motion.header>

        {/* Contact Section */}
        <motion.section
          className="contact-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="contact-container">
            {/* Contact Form */}
            <motion.div className="contact-form-box" variants={itemVariants}>
              <h2>
                <span className="title-gradient">Get in Touch With Us</span>
              </h2>
              <p className="lead">
                We're here to support organic farmer organizations across Africa.
                Reach out for partnerships, questions, or collaboration.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="full-name">Full Name *</label>
                  <input
                    type="text"
                    id="full-name"
                    name="from_name"
                    placeholder="Your full name"
                    required
                    value={formData.from_name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    placeholder="Your email address"
                    required
                    value={formData.from_email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Message subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="M_btn-primary" disabled={sending}>
                  {sending ? (
                    <div className="sending-btn-content">
                      <div className="spinner"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="M_btn-icon" />
                    </>
                  )}
                </button>
              </form>

              {success && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  ✅ Message sent successfully!
                </motion.div>
              )}

              {error && (
                <motion.div
                  className="error-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  ❌ {error}
                </motion.div>
              )}
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div className="contact-info-box" variants={containerVariants}>
              <motion.div className="info-card" variants={itemVariants}>
                <div className="info-icon">
                  <FaLeaf />
                </div>
                <h3>Partnership Inquiries</h3>
                <p>
                  Explore collaboration opportunities with African organic farmer
                  organizations.
                </p>
                <a href="mailto:partnerships@inofoafrica.org" className="info-link">
                  partnerships@inofoafrica.org
                </a>
              </motion.div>

              <motion.div className="info-card" variants={itemVariants}>
                <div className="info-icon">
                  <FaHandshake />
                </div>
                <h3>Membership Questions</h3>
                <p>
                  Learn how to join our continental network of organic farmer
                  organizations.
                </p>
                <a href="mailto:membership@inofoafrica.org" className="info-link">
                  membership@inofoafrica.org
                </a>
              </motion.div>

              <motion.div className="info-card" variants={itemVariants}>
                <div className="info-icon">
                  <FaPaperPlane />
                </div>
                <h3>General Inquiries</h3>
                <p>
                  Contact our team for any other questions about our work and
                  initiatives.
                </p>
                <a href="mailto:info@inofoafrica.org" className="info-link">
                  info@inofoafrica.org
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Donate Section */}
        <motion.section
          className="donate-section-enhanced"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="donate-container">
            <motion.div className="donate-content" variants={itemVariants}>
              <div className="donate-header">
                <h2>Support the Voice of African Organic Farmers</h2>
                <p>
                  Your donation fuels farmer-led solutions, sustainable agriculture,
                  and food sovereignty across the continent.
                </p>
              </div>

              <div className="impact-cards">
                <div className="impact-card">
                  <span className="impact-amount">$25</span>
                  <span className="impact-text">Provides seeds for one farmer</span>
                </div>
                <div className="impact-card">
                  <span className="impact-amount">$50</span>
                  <span className="impact-text">Funds training workshop</span>
                </div>
                <div className="impact-card">
                  <span className="impact-amount">$100</span>
                  <span className="impact-text">
                    Supports organic certification
                  </span>
                </div>
              </div>

              <div className="M_donate-buttons">
                <a
                  href="https://www.paypal.com/donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="M_btn-primary donate-btn"
                >
                  <FaDonate className="M_btn-icon" />
                  <span>Donate Using PayPal</span>
                </a>
              </div>
            </motion.div>

            <motion.div className="donate-image" variants={itemVariants}>
              <img
                src={journeyImg}
                alt="African farmers working together"
                className="content-image"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Social Media Section */}
        <motion.section
          className="social-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="social-container" variants={itemVariants}>
            <h2>Follow Our Journey</h2>
            <p>Stay connected with INOFO Africa across social media platforms</p>

            <div className="social-grid">
              {[
                { icon: <FaFacebook />, name: "Facebook", className: "facebook", url: "https://facebook.com/inofoafrica" },
                { icon: <FaTwitter />, name: "Twitter", className: "twitter", url: "https://twitter.com/inofoafrica" },
                { icon: <FaLinkedin />, name: "LinkedIn", className: "linkedin", url: "https://linkedin.com/company/inofoafrica" },
                { icon: <FaInstagram />, name: "Instagram", className: "instagram", url: "https://instagram.com/inofoafrica" },
                { icon: <FaYoutube />, name: "YouTube", className: "youtube", url: "https://youtube.com/@inofoafrica" },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.url}
                  className={`social-link ${s.className}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                  <span>{s.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <Newsletter />
      </motion.main>
    </>
  );
};

export default ContactSection;