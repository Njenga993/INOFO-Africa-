import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "../styles/ResourcesPage.css";
import Newsletter from "../components/Newsletter";

// Temporary placeholders – we’ll build these next
import NewsEvents from "../components/NewsEvents";
import Publications from "../components/Publications";
import FarmerTools from "../components/FarmerTools";

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
        style={{ backgroundImage: "url(/_MG_0674.webp)" }}
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

      {/* News & Events */}
      <motion.section
        className="content-section image-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="section-component" variants={itemVariants}>
          <NewsEvents />
        </motion.div>
      </motion.section>

      {/* Publications */}
      <motion.section
        className="content-section image-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="section-component" variants={itemVariants}>
          <Publications />
        </motion.div>
      </motion.section>

      {/* Farmer Tools */}
      <motion.section
        className="content-section image-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="section-component" variants={itemVariants}>
          <FarmerTools/>
        </motion.div>
      </motion.section>
      <Newsletter/>
    </motion.main>
  );
};

export default ResourcesPage;
