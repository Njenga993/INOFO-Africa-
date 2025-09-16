import React from "react";
import { motion } from "framer-motion";
import "../styles/Publications.css";
import { FaFilePdf, FaArrowRight } from "react-icons/fa";

const publications = [
  {
    id: 1,
    title: "Agroecology Policy Brief 2025",
    description:
      "A detailed policy document highlighting the role of agroecology in sustainable farming and resilience building.",
    file: "#",
  },
  {
    id: 2,
    title: "Seed Sovereignty Report",
    description:
      "Comprehensive report on seed sovereignty in East Africa, covering grassroots initiatives and farmer networks.",
    file: "#",
  },
  {
    id: 3,
    title: "Farmer Training Manual",
    description:
      "A practical manual offering step-by-step training modules for smallholder farmers.",
    file: "#",
  },
];

const Publications: React.FC = () => {
  return (
    <div className="publications-page">
      {/* Hero Section */}
      <section className="publications-hero">
        <div className="overlay">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Publications
          </motion.h1>
          <p>
            Explore our policy briefs, reports, and manuals designed to empower
            farmers, researchers, and advocates.
          </p>
        </div>
      </section>

      {/* Publications Section */}
      <section className="publications-section">
        <h2 className="section-heading">Our Publications</h2>
        <div className="publications-grid">
          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              className="publication-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="card-icon">
                <FaFilePdf />
              </div>
              <h3>{pub.title}</h3>
              <p>{pub.description}</p>
              <a href={pub.file} className="read-more">
                <span>Read / Download</span>
                <FaArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Publications;
