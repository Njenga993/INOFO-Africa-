// src/pages/ServicesAfrica.tsx
import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaLeaf,
  FaUsers,
  FaHandshake,
  FaSeedling,
  FaBook,
  FaGlobeAfrica,
  FaCheckCircle,
  FaStar,
  FaLightbulb,
} from "react-icons/fa";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import type { JSX } from "react";
import "../styles/ServicesAfrica.css";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import SEO from "../components/SEO"; // Import the SEO component

// ✅ Images
import heroImg from "../assets/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg";
import journeyImg from "../assets/train.webp";
import img from "../assets/Tshawekazi_.jpg";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    icon: <FaHandshake size={28} />,
    title: "Advocacy & Policy Engagement",
    description: "Championing organic agriculture policies at national & continental forums",
    features: ["Land rights advocacy", "Certification standards", "Climate justice"],
    color: "#4c7031",
  },
  {
    icon: <FaLeaf size={28} />,
    title: "Training & Capacity Building",
    description: "Farmer-led workshops, webinars, and mentorship programs",
    features: ["Agroecology training", "Organic certification", "Youth leadership"],
    color: "#4c7031",
  },
  {
    icon: <FaBook size={28} />,
    title: "Knowledge Exchange",
    description: "Open-source knowledge library for African farmers",
    features: ["Technical manuals", "Case studies", "Indigenous practices"],
    color: "#4c7031",
  },
  {
    icon: <FaGlobeAfrica size={28} />,
    title: "Networking & Events",
    description: "Connecting farmer organisations across borders",
    features: ["Continental forums", "Regional summits", "Cross-border exchanges"],
    color: "#4c7031",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Marketing & Market Access",
    description: "Promoting agroecology producer groups in accessing markets",
    features: ["Regional markets", "Export opportunities", "Fair-value marketing"],
    color: "#4c7031",
  },
  {
    icon: <FaSeedling size={28} />,
    title: "Mentorship & Peer Exchange",
    description: "Linking seasoned farmers with emerging groups",
    features: ["Technical mentoring", "Leadership development", "Youth & women focus"],
    color: "#4c7031",
  },
];

const ServicesAfrica = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  // Schema for the services page
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "INOFO Africa Services",
    "description": "Comprehensive services for organic farmers across Africa including training, advocacy, knowledge exchange, and market access.",
    "provider": {
      "@type": "Organization",
      "name": "INOFO Africa",
      "url": "https://www.inofoafrica.org",
      "logo": "https://www.inofoafrica.org/assets/logo.png"
    },
    "serviceType": "Professional Services",
    "areaServed": {
      "@type": "Place",
      "name": "Africa"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "INOFO Africa Services Catalog",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "name": service.title,
        "description": service.description,
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "Organization",
            "name": "INOFO Africa"
          }
        }
      }))
    }
  };

  return (
    <>
      {/* SEO Component */}
      <SEO
        title="Our Services | INOFO Africa"
        description="Explore INOFO Africa services including training, advocacy, knowledge exchange, and market access to support organic agriculture across Africa."
        canonical="https://www.inofoafrica.org/services"
        keywords={[
          "INOFO Africa services",
          "organic agriculture Africa",
          "farmer training Africa",
          "policy advocacy Africa",
          "knowledge exchange Africa",
          "agroecology training",
          "organic certification Africa",
          "farmer networks Africa",
          "market access Africa",
          "sustainable agriculture services",
          "indigenous farming knowledge",
          "African farmer development",
          "organic farming support",
          "agricultural mentorship Africa",
          "continental farmer forums"
        ]}
        image="https://www.inofoafrica.org/assets/inofo-services-share.jpg"
        type="website"
        schema={servicesSchema}
      />

      <motion.main
        className="services-africa"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        role="main"
        aria-labelledby="services-hero-title"
      >
        {/* Hero Section */}
        <motion.header
          className="service_hero-header"
          style={{ backgroundImage: `url(${heroImg})` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="hero-overlay" role="region" aria-label="Services hero section">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hero-content"
            >
              <h1 id="services-hero-title">Our Services</h1>
            </motion.div>
          </div>
        </motion.header>

        {/* Services Intro */}
        <motion.section className="services-intro" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div
            className="intro-content"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Comprehensive Guide for Organic Agriculture</h2>
            <p>
              We provide a holistic guide to organic farmers across Africa through six key service areas.
              Each service addresses specific challenges while building a resilient, sustainable ecosystem.
            </p>
          </motion.div>
        </motion.section>

        {/* Services Grid */}
        <motion.section className="services-showcase" ref={sectionRef} initial="hidden" animate={controls} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <div className="services-grid">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className={`service-card ${selectedService === idx ? "expanded" : ""} ${hoveredCard === idx ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedService(selectedService === idx ? null : idx)}
                variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
                role="region"
                aria-labelledby={`service-card-${idx}-title`}
                aria-expanded={selectedService === idx}
              >
                <div className="card-header">
                  <div className="card-icon" style={{ color: service.color }}>{service.icon}</div>
                  <div className="card-number"><span>0{idx + 1}</span></div>
                </div>
                <div className="card-content">
                  <h3 id={`service-card-${idx}-title`}>{service.title}</h3>
                  <p>{service.description}</p>
                  <AnimatePresence>
                    {selectedService === idx && (
                      <motion.div className="card-features" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <ul>
                          {service.features.map((feature, featureIdx) => (
                            <li key={featureIdx}><FaCheckCircle className="feature-icon" /> {feature}</li>
                          ))}
                        </ul>
                        <Link to="/about" className="card-link" onClick={(e) => e.stopPropagation()}>
                          Learn more <FaArrowRight className="link-arrow" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="card-footer">
                  <span className="expand-text">{selectedService === idx ? "Click to collapse" : "Click to expand"}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Service */}
        <motion.section className="featured-service" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.div className="featured-content">
            <motion.div className="featured-text" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <div className="featured-badge"><FaStar className="badge-icon" /><span>Featured Service</span></div>
              <h2>Customized Training Programs</h2>
              <p>
                Partnering with local hubs for in-person and virtual training tailored to regional needs.
              </p>
              <div className="featured-highlights">
                <div className="highlight-item"><FaLightbulb className="highlight-icon" /><span>Hands-on learning</span></div>
                <div className="highlight-item"><FaUsers className="highlight-icon" /><span>Expert mentorship</span></div>
                <div className="highlight-item"><FaGlobeAfrica className="highlight-icon" /><span>Regional adaptation</span></div>
              </div>
              <Link to="#" className="btn-primary featured-btn"><span> Training Programs Coming Soon...</span><FaArrowRight className="btn-icon" /></Link>
            </motion.div>
            <motion.div className="featured-image" initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className={`image-container ${isImageLoaded ? "loaded" : ""}`}>
                <img src={journeyImg} alt="Farmers on a training journey" onLoad={() => setIsImageLoaded(true)} className="content-image" />
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Impact Section */}
        <motion.section className="impact-section" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.div className="impact-content" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2>Our Impact Across Africa</h2>
            <div className="impact-grid">
              <div className="impact-card"><div className="impact-icon"><FaUsers /></div><h3>Community Building</h3><p>Connecting farmers and organizations across 20+ African countries</p></div>
              <div className="impact-card"><div className="impact-icon"><FaLeaf /></div><h3>Sustainable Practices</h3><p>Promoting ecological farming methods for long-term food security</p></div>
              <div className="impact-card"><div className="impact-icon"><FaGlobeAfrica /></div><h3>Policy Influence</h3><p>Advocating for farmer-friendly policies at continental level</p></div>
            </div>
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section className="cta-section" initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}>
          <div className="cta-content">
            <motion.div className="cta-image" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <div className={`image-container ${isImageLoaded ? "loaded" : ""}`}>
                <img src={img} alt="African farmers collaborating" onLoad={() => setIsImageLoaded(true)} className="content-image" />
              </div>
            </motion.div>
            <motion.div className="cta-text" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2>Ready to Transform African Agriculture?</h2>
              <p>Join as a partner, donor, or farmer representative to scale organic agriculture across Africa.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-secondary secondary-btn"><span>Get Involved Today!</span><FaHandshake className="btn-icon" /></Link>
                <Link to="/about" className="btn-secondary secondary-btn"><span>Learn More</span><FaArrowRight className="btn-icon" /></Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <Newsletter />
      </motion.main>
    </>
  );
};

export default ServicesAfrica;