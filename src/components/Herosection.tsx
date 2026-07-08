import { FaArrowRight, FaHandshake, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Herosection.css";

import HeroImage1 from "../assets/Evaluation des pairs  des producteurs biologique une fois par an.webp";

const Hero = () => {
  return (
    <section className="hero">
      {/* Static Background Image */}
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${HeroImage1})` }}
      >
        <div className="image-overlay"></div>
      </div>

      {/* Main Content — Left Aligned */}
      <div className="hero-content">
        <div className="container">
          <motion.div
            className="hero-inner"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <span className="hero-badge">
              <FaLeaf /> Africa's Organic &amp; Agroecology Farmers
            </span>

            {/* Main Heading */}
            <h1 className="main-title">
              Empowering Communities, Cultivating Safe Food &amp; Nurturing
              Mother Earth
            </h1>

            {/* Gold Highlight */}
            <p className="highlight-text">
              Representation for Africa's organic and agroecology farmers
            </p>

            {/* Description */}
            <p className="description">
              We are Africa's organic farmers — proud smallholder
              agroecological farmer-owned organizations dedicated to nurturing
              the land without harmful chemicals. Together, we strengthen food
              sovereignty, protect biodiversity, and create better livelihoods
              for millions of farming families across Africa.
            </p>

            {/* CTA Buttons */}
            <div className="h-hero-cta">
              <Link to="/about" className="btn-primary">
                Learn More <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn-outline">
                Get Involved <FaHandshake />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar 
      <div className="hero-stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">5,000+</span>
              <span className="stat-label">Organic Farmers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">African Countries</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of Impact</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Chemical-Free</span>
            </div>
          </div>
        </div>
      </div>*/}
    </section>
  );
};

export default Hero;