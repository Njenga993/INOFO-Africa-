import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <motion.section 
      className="newsletter-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="newsletter-container">
        <div className="newsletter-text">
          <h2>Stay Connected</h2>
          <p>
            Subscribe to our newsletter and be the first to know about 
            updates, programs, and opportunities across Africa. 
          </p>
        </div>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </motion.section>
  );
};

export default Newsletter;
