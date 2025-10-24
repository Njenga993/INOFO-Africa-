import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useState } from 'react';
import '../styles/pillars.css';

const MissionVision = () => {
  const [touchedCard, setTouchedCard] = useState<string | null>(null);

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

  // Hover animation variants for the circular effect
  const hoverVariants: Variants = {
    rest: {
      scale: 0,
      borderRadius: "50%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 4,
      borderRadius: "24px", // Match the card border-radius
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // For value items which have different border-radius
  const valueHoverVariants: Variants = {
    rest: {
      scale: 0,
      borderRadius: "50%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 4,
      borderRadius: "12px", // Match the value item border-radius
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const values = [
    { title: "Farmer-Centered", text: "Putting organic farmers at the heart of everything we do." },
    { title: "Collaboration", text: "Working together for greater impact." },
    { title: "Equity", text: "Commitment to ecological balance and fairness." },
    { title: "Transparency", text: "Open and honest in all our dealings." }
  ];

  // Touch event handlers
  const handleTouchStart = (cardId: string) => {
    setTouchedCard(cardId);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setTouchedCard(null), 150);
  };

  return (
    <section className="mv-section">
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
          whileHover="hover"
          initial="rest"
          animate="rest"
          onTouchStart={() => handleTouchStart('mission')}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div 
            className="circular-overlay"
            variants={hoverVariants}
            animate={touchedCard === 'mission' ? 'hover' : undefined}
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
          whileHover="hover"
          initial="rest"
          animate="rest"
          onTouchStart={() => handleTouchStart('vision')}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div 
            className="circular-overlay"
            variants={hoverVariants}
            animate={touchedCard === 'vision' ? 'hover' : undefined}
          />
          <div className="card-content">
            <h2 className="mv-title">Our Vision</h2>
            <p className="mv-text">
              Improved livelihoods, healthy and resilient environments for current and future generations.
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
              whileHover="hover"
              initial="rest"
              animate="rest"
              onTouchStart={() => handleTouchStart(`value-${i}`)}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div 
                className="circular-overlay value-overlay"
                variants={valueHoverVariants}
                animate={touchedCard === `value-${i}` ? 'hover' : undefined}
              />
              <div className="card-content">
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