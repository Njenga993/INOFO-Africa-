import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/WhoWeAre.css";

// ✅ Import the image from assets
import WhoWeAreImage from "../assets/MG_0457.webp";

const WhoWeAre = () => {
  const stats = [
    { label: "Farmers Reached", value: "15K+" },
    { label: "Countries Engaged", value: "10+" },
    { label: "Projects Implemented", value: "150+" },
    { label: "Years of Impact", value: "10+" },
  ];

  return (
    <motion.section
      className="who-we-are-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="who-we-are-container">
        {/* Left: Image */}
        <motion.div
          className="who-we-are-image"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={WhoWeAreImage} alt="Farmers Working Together" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="who-we-are-content"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Who We Are</h2>
          <p className="subtitle">
            Cultivating African Collaboration for Sustainable Agriculture
          </p>
          <p>
            Across Africa's diverse landscapes, INOFO Africa weaves together
            the wisdom of farmers, the resilience of tradition, and the power
            of global solidarity.
          </p>
          <p>
            Together, we're cultivating more than food we're growing a
            movement where every community thrives in harmony with nature,
            today and for the future.
          </p>
          <div className="who-cta">
            <Link to="/about" className="btn-primary">
              Learn More <FaArrowRight className="icon-arrow" />
            </Link>
          </div>

          {/* Stats */}
          <div className="impact-stats">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="stat-card"
                whileHover={{ scale: 1.05 }}
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhoWeAre;
