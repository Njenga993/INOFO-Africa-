import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/WhoWeAre.css";
import WhoWeAreImage from "../assets/busi.webp";

const WhoWeAre = () => {
  const stats = [
    { label: "Farmers Reached", value: "15K+" },
    { label: "Countries Engaged", value: "10+" },
    { label: "Projects Implemented", value: "150+" },
    { label: "Years of Impact", value: "10+" },
  ];

  return (
    <motion.section
      className="nwa-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="nwa-wrapper">

        {/* Left Image */}
        <motion.div
          className="nwa-image-wrapper"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="nwa-image-card">
            <img src={WhoWeAreImage} alt="Farmers" />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="nwa-content"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="nwa-title">Who We Are</h2>
          <p className="nwa-subtitle">
            Cultivating African Collaboration for Sustainable Agriculture
          </p>

          <p className="nwa-text">
            Across Africa’s diverse landscapes, INOFO Africa connects farmer wisdom, 
            indigenous knowledge, and collective strength to build sustainable futures.
          </p>

          <p className="nwa-text">
            Together, we are cultivating more than food—we are nurturing a movement 
            that allows every community to thrive in harmony with nature.
          </p>

          <div className="nwa-btn-wrapper">
            <Link to="/about" className="nwa-btn">
              Learn More <FaArrowRight className="nwa-icon" />
            </Link>
          </div>

          {/* Stats */}
          <div className="nwa-stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="nwa-stat-card"
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
