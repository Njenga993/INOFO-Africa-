import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "../styles/ResourcesPage.css";
import Newsletter from "../components/Newsletter";
import heroImg from "../assets/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg";
import comingSoonImg from "../assets/dedicated-farmer-tending-to-vibrant-crops-328717.jpg"; // Add a relevant image

const ResourcesPage = () => {
  // Animation variants
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
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <motion.main
      className="resources-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.header
        className="R-hero-header"
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
            Resources
          </motion.h1>
        </div>
      </motion.header>

      {/* Coming Soon Section */}
      <motion.section
        className="coming-soon-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="coming-soon-container">
          <motion.div 
            className="coming-soon-content"
            variants={itemVariants}
          >
            <div className="coming-soon-icon">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10 Z" fill="none" stroke="var(--primary-green)" strokeWidth="8"/>
                <path d="M30,50 L45,65 L70,35" fill="none" stroke="var(--accent-gold)" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </div>
            <h2> Something Amazing is Coming Soon...</h2>
            <p>
              We're carefully cultivating valuable resources to help farmers and agricultural 
              professionals thrive. Our team is working diligently to bring you:
            </p>
            
            <ul className="resource-list">
              <li> News & Events updates</li>
              <li> Educational Publications</li>
              <li> Practical Farmer Tools</li>
              <li> Market Insights</li>
              <li> Sustainable Practices Guides</li>
            </ul>
            
            <p className="coming-soon-message">
              <strong>Check back soon!</strong> We're planting the seeds for your success 
              and can't wait to share these resources with you.
            </p>
            
            <div className="progress-container">
              <div className="progress-text">Resource development in progress</div>
              <div className="progress-bar">
                <motion.div 
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </div>
              <div className="progress-percentage">65% done</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="coming-soon-image"
            variants={itemVariants}
          >
            <img src={comingSoonImg} alt="Resources coming soon" />
            <div className="floating-tag">Coming Soon</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Signup - Keep this to capture interested visitors */}
      <Newsletter/>
    </motion.main>
  );
};

export default ResourcesPage;