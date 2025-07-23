import { FaLeaf, FaUsers, FaHandshake, FaGlobeAfrica, FaBalanceScale, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/pillars.css';

const MissionVision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="mv-section">
      <motion.div 
        className="mv-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Left Column - Mission */}
        <motion.div 
          className="mv-block mission-block"
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
        >
          <div className="mv-icon">
            <FaLeaf className="icon-pulse" />
          </div>
          <h2 className="mv-title">Our Mission</h2>
          <p className="mv-text">
            Empowering farming communities in Africa in organic agriculture for a just transformation towards sustainable food systems.
          </p>
          <div className="mv-decoration">
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
          </div>
        </motion.div>

        {/* Right Column - Vision */}
        <motion.div 
          className="mv-block vision-block"
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
        >
          <div className="mv-icon">
            <FaGlobeAfrica className="icon-rotate" />
          </div>
          <h2 className="mv-title">Our Vision</h2>
          <p className="mv-text">
            Improved livelihoods, healthy and resilient environment for current and future generations
          </p>
          <div className="mv-decoration">
            <div className="decoration-triangle"></div>
            <div className="decoration-triangle"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Values Section Below */}
      <div className="values-section">
        <motion.h3 
          className="values-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Core Values
        </motion.h3>
        
        <motion.div 
          className="values-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="value-item"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
            }}
          >
            <div className="value-icon">
              <FaUsers className="icon-bounce" />
            </div>
            <h4>Farmer-Centered</h4>
            <p>Putting organic farmers at the heart of everything we do</p>
          </motion.div>
          
          <motion.div 
            className="value-item"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
            }}
          >
            <div className="value-icon">
              <FaHandshake className="icon-bounce" />
            </div>
            <h4>Collaboration</h4>
            <p>Working together for greater impact</p>
          </motion.div>
          
          <motion.div 
            className="value-item"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
            }}
          >
            <div className="value-icon">
              <FaBalanceScale className="icon-bounce" />
            </div>
            <h4>Equity</h4>
            <p>Commitment to ecological balance</p>
          </motion.div>
          
          <motion.div 
            className="value-item"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
            }}
          >
            <div className="value-icon">
              <FaEye className="icon-bounce" />
            </div>
            <h4>Transparency</h4>
            <p>Open and honest in all our dealings</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;