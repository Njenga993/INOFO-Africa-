import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useState } from 'react';
import { FaSeedling, FaHandshake, FaBalanceScale, FaClipboardList } from 'react-icons/fa';
import '../styles/pillars.css';

const MissionVision = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Animation for the gradient overlay
  const overlayVariants: Variants = {
    rest: {
      opacity: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const values = [
    { 
      title: "Farmer-Centered", 
      text: "Putting organic farmers at the heart of everything we do.",
      icon: <FaSeedling />
    },
    { 
      title: "Collaboration", 
      text: "Working together for greater impact.",
      icon: <FaHandshake />
    },
    { 
      title: "Equity", 
      text: "Commitment to ecological balance and fairness.",
      icon: <FaBalanceScale />
    },
    { 
      title: "Transparency", 
      text: "Open and honest in all our dealings.",
      icon: <FaClipboardList />
    }
  ];

  return (
    <section className="mv-section">
      <div className="mv-header">
        <motion.h1 
          className="mv-main-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Purpose & Values
        </motion.h1>
        <motion.p 
          className="mv-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Guiding principles that shape our commitment to organic farming in Africa
        </motion.p>
      </div>

      <motion.div 
        className="mv-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        {/* Mission */}
        <motion.div 
          className="mv-block mission-block"
          variants={itemVariants}
          onMouseEnter={() => setActiveCard('mission')}
          onMouseLeave={() => setActiveCard(null)}
          onTouchStart={() => setActiveCard('mission')}
          onTouchEnd={() => setActiveCard(null)}
        >
          <motion.div 
            className="gradient-overlay"
            variants={overlayVariants}
            animate={activeCard === 'mission' ? 'hover' : 'rest'}
          />
          <div className="card-content">
            
            <h2 className="mv-title">Our Mission</h2>
            <p className="mv-text">
              Empowering farming communities in Africa in organic agriculture for a just transition towards sustainable food systems.
            </p>
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div 
          className="mv-block vision-block"
          variants={itemVariants}
          onMouseEnter={() => setActiveCard('vision')}
          onMouseLeave={() => setActiveCard(null)}
          onTouchStart={() => setActiveCard('vision')}
          onTouchEnd={() => setActiveCard(null)}
        >
          <motion.div 
            className="gradient-overlay"
            variants={overlayVariants}
            animate={activeCard === 'vision' ? 'hover' : 'rest'}
          />
          <div className="card-content">
            
            <h2 className="mv-title">Our Vision</h2>
            <p className="mv-text">
              Improved livelihoods, healthy and resilient environments 
              for future generations.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Values */}
      <div className="values-section">
        <motion.h3 
          className="values-title"
          initial={{ opacity: 0, y: 15 }}
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
          {values.map((val, i) => (
            <motion.div 
              key={i} 
              className="value-item"
              variants={itemVariants}
              onMouseEnter={() => setActiveCard(`value-${i}`)}
              onMouseLeave={() => setActiveCard(null)}
              onTouchStart={() => setActiveCard(`value-${i}`)}
              onTouchEnd={() => setActiveCard(null)}
            >
              <motion.div 
                className="gradient-overlay"
                variants={overlayVariants}
                animate={activeCard === `value-${i}` ? 'hover' : 'rest'}
              />
              <div className="card-content">
                <div className="value-icon">
                  {val.icon}
                </div>
                <h4>{val.title}</h4>
                <p>{val.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;