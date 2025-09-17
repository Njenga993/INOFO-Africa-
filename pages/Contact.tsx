import { motion  } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaPaperPlane, FaLeaf, FaHandshake, FaDonate } from "react-icons/fa";
import "../styles/contact.css";
import { useRef } from "react";
import Newsletter from "../components/Newsletter";

const ContactSection = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  // Animation variants with proper TypeScript typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
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
        style={{
          backgroundImage:
            "url(./_MG_0674.webp)",
        }}
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
        {/* Background elements */}
        <div className="contact-bg-pattern">
          <div className="organic-shape-1"></div>
          <div className="organic-shape-2"></div>
        </div>

        <div className="contact-container">
          {/* Contact Form */}
          <motion.div className="contact-form-box" variants={itemVariants}>
            <motion.h2 variants={itemVariants}>
              <span className="title-gradient">Get in Touch With Us</span>
            </motion.h2>
            <motion.p className="lead" variants={itemVariants}>
              We're here to support organic farmer organizations across Africa.
              Reach out for partnerships, questions, or collaboration.
            </motion.p>

            <form
              action="https://formsubmit.co/your@email.com"
              method="POST"
              className="contact-form"
            >
              {/* Hidden fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Contact Message from INOFO Africa Website"
              />
              <input
                type="hidden"
                name="_next"
                value="https://inofo-africa.org/thank-you"
              />

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

              <button type="submit" className="M_btn-primary">
                <span>Send Message</span>
                <FaPaperPlane className="M_btn-icon" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="contact-info-box"
            variants={containerVariants}
          >
            <motion.div
              className="info-card"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="info-icon">
                <FaLeaf />
              </div>
              <h3>Partnership Inquiries</h3>
              <p>
                Explore collaboration opportunities with African organic farmer
                organizations.
              </p>
              <a
                href="mailto:partnerships@inofoafrica.org"
                className="info-link"
              >
                partnerships@inofoafrica.org
              </a>
            </motion.div>

            <motion.div
              className="info-card"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="info-icon">
                <FaHandshake />
              </div>
              <h3>Membership Questions</h3>
              <p>
                Learn how to join our continental network of organic farmer
                organizations.
              </p>
              <a
                href="mailto:membership@inofoafrica.org"
                className="info-link"
              >
                membership@inofoafrica.org
              </a>
            </motion.div>

            <motion.div
              className="info-card"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
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
        className="content-section image-left donate-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="text-content" variants={itemVariants}>
          <h2>Support the Voice of African Organic Farmers</h2>
          <p>
            Your donation fuels farmer-led solutions, sustainable agriculture,
            and food sovereignty across the continent. Help us scale impact and
            nurture the land for generations to come.
          </p>
          <div className="M_donate-buttons">
            <a
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="M_btn-primary"
            >
              <FaDonate className="M_btn-icon" />
              <span>Donate Using PayPal</span>
            </a>
          </div>
        </motion.div>

        <motion.div className="image-content" variants={itemVariants}>
          <img
            src="./_MG_0457.webp"
            alt="African farmers working together"
            className="content-image"
          />
        </motion.div>
      </motion.section>

      <Newsletter />
    </motion.main>
  );
};

export default ContactSection;
