import React from "react";
import { motion } from "framer-motion";
import "../styles/FarmerTools.css";
import { FaSeedling, FaMobileAlt, FaBookOpen, FaArrowRight } from "react-icons/fa";

const tools = [
  {
    id: 1,
    title: "Seed Exchange App",
    description:
      "A mobile app that connects farmers to exchange indigenous and hybrid seeds within their community.",
    icon: <FaMobileAlt />,
    link: "#",
  },
  {
    id: 2,
    title: "Farming Handbook",
    description:
      "An online reference with step-by-step guides on sustainable agroecological practices.",
    icon: <FaBookOpen />,
    link: "#",
  },
  {
    id: 3,
    title: "Agroecology Toolkit",
    description:
      "Practical tools, charts, and templates to help farmers monitor soil health and crop rotation.",
    icon: <FaSeedling />,
    link: "#",
  },
];

const FarmerTools: React.FC = () => {
  return (
    <div className="farmer-tools-page">
      {/* Hero Section */}
      <section className="farmer-tools-hero">
        <div className="overlay">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Farmer Tools
          </motion.h1>
          <p>
            Access innovative apps, manuals, and toolkits to empower farmers with knowledge and connectivity.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <h2 className="section-heading">Explore Our Tools</h2>
        <div className="tools-grid">
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              className="tool-card"
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="tool-icon">{tool.icon}</div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <a href={tool.link} className="tool-link">
                <span>Explore</span>
                <FaArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FarmerTools;
