import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import '../styles/pillars.css';

const MissionVision = () => {
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

  const values = [
    { title: "Farmer-Centered", text: "Putting organic farmers at the heart of everything we do." },
    { title: "Collaboration", text: "Working together for greater impact." },
    { title: "Equity", text: "Commitment to ecological balance and fairness." },
    { title: "Transparency", text: "Open and honest in all our dealings." }
  ];

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
        <motion.div className="mv-block mission-block" variants={itemVariants}>
          <h2 className="mv-title">Our Mission</h2>
          <p className="mv-text">
            Empowering farming communities in Africa in organic agriculture for a just transition towards sustainable food systems.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div className="mv-block vision-block" variants={itemVariants}>
          <h2 className="mv-title">Our Vision</h2>
          <p className="mv-text">
            Improved livelihoods, healthy and resilient environments for current and future generations.
          </p>
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
            <motion.div key={i} className="value-item" variants={itemVariants}>
              <h4>{val.title}</h4>
              <p>{val.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
