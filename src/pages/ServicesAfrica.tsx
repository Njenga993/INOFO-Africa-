import { useMemo } from "react";
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
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { JSX } from "react";
import "../styles/ServicesAfrica.css";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

import heroImg from "../assets/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg";
import journeyImg from "../assets/train.webp";


interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  url: string;
}

const services: Service[] = [
  {
    icon: <FaHandshake size={28} />,
    title: "Advocacy & Policy Engagement for African Organic Farmers",
    description: "Championing organic agriculture policies at national & continental forums, advocating for farmer rights and sustainable farming legislation.",
    features: ["Land rights advocacy for smallholder farmers", "Organic certification standards development", "Climate justice policy engagement", "Food sovereignty legislation support"],
    url: "/services/advocacy",
  },
  {
    icon: <FaLeaf size={28} />,
    title: "Training & Capacity Building for Organic Agriculture",
    description: "Farmer-led workshops, webinars, and mentorship programs focusing on sustainable farming techniques and organic certification.",
    features: ["Agroecology training workshops", "Organic certification guidance", "Youth leadership in agriculture", "Women farmer empowerment programs"],
    url: "/services/training",
  },
  {
    icon: <FaBook size={28} />,
    title: "Knowledge Exchange & Resource Sharing",
    description: "Open-source knowledge library and technical resources for African farmers to share indigenous practices and modern techniques.",
    features: ["Technical manuals on organic farming", "Case studies from successful farms", "Indigenous farming practices database", "Climate adaptation resources"],
    url: "/services/knowledge",
  },
  {
    icon: <FaGlobeAfrica size={28} />,
    title: "Networking & Continental Farmer Forums",
    description: "Connecting farmer organisations across borders to foster collaboration and share best practices.",
    features: ["Continental organic farming forums", "Regional summit organization", "Cross-border farmer exchanges", "International partnership facilitation"],
    url: "/services/networking",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Marketing & Market Access Support",
    description: "Promoting agroecology producer groups in accessing regional and international markets with fair-value marketing strategies.",
    features: ["Regional market access development", "Export opportunities creation", "Fair-trade certification support", "Digital marketing for farmers"],
    url: "/services/marketing",
  },
  {
    icon: <FaSeedling size={28} />,
    title: "Mentorship & Peer Exchange Programs",
    description: "Linking seasoned farmers with emerging groups through structured mentorship and peer learning initiatives.",
    features: ["Technical mentoring by experienced farmers", "Leadership development programs", "Youth & women focused mentorship", "Peer-to-peer learning networks"],
    url: "/services/mentorship",
  },
];

const ServicesAfrica = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },
  };

  const servicesPageBreadcrumbs = useMemo(() => [
    { name: "Home", url: "https://www.inofoafrica.org/" },
    { name: "Services", url: "https://www.inofoafrica.org/services" },
  ], []);

  const servicesPageFaqs = useMemo(() => [
    {
      question: "What specific services does INOFO Africa offer for organic farmer organizations?",
      answer: "INOFO Africa offers six comprehensive services: Advocacy & Policy Engagement, Training & Capacity Building, Knowledge Exchange & Resource Sharing, Networking & Continental Forums, Marketing & Market Access Support, and Mentorship & Peer Exchange Programs.",
    },
    {
      question: "How can African farmer organizations access INOFO Africa's training programs?",
      answer: "Farmer organizations can access our training programs through membership in INOFO Africa. We offer regional training workshops, online webinars, and mentorship programs focused on agroecology, organic certification, climate resilience, and youth leadership development.",
    },
    {
      question: "What market access support does INOFO Africa provide to smallholder organic farmers?",
      answer: "We provide comprehensive market access support including connecting farmers to regional markets, facilitating export opportunities, supporting fair-trade certification, developing digital marketing strategies, and creating direct links between producers and buyers.",
    },
    {
      question: "How does INOFO Africa facilitate knowledge exchange among farmers across Africa?",
      answer: "We facilitate knowledge exchange through our open-source resource library containing technical manuals, case studies, and indigenous farming practices, plus farmer exchange programs, online forums, and regional meetings.",
    },
    {
      question: "What advocacy work does INOFO Africa do for organic farming policies in Africa?",
      answer: "INOFO Africa advocates at national and continental levels by engaging with government agencies, participating in policy dialogues, submitting position papers on land rights and food sovereignty, and representing farmer interests in international forums.",
    },
  ], []);

  const servicesPageCustomSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "INOFO Africa Services - Comprehensive Support for Organic Farming",
    "description": "Complete range of services for African organic farmers including training, advocacy, market access, knowledge exchange, networking, and mentorship programs.",
    "url": "https://www.inofoafrica.org/services",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.inofoafrica.org#organization",
      "name": "INOFO Africa",
      "url": "https://www.inofoafrica.org",
      "logo": "https://www.inofoafrica.org/assets/logo.png",
    },
    "areaServed": { "@type": "Continent", "name": "Africa" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "INOFO Africa Services Catalog",
      "numberOfItems": services.length,
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
        },
      })),
    },
  }), []);

  return (
    <>
      <SEO
        title="Our Services | INOFO Africa - Comprehensive Support for Organic Farmers"
        description="Explore INOFO Africa's complete range of services: advocacy, training, market access, knowledge exchange, networking, and mentorship programs for organic farmers across Africa."
        canonical="https://www.inofoafrica.org/services"
        keywords={[
          "INOFO Africa services",
          "organic farming services Africa",
          "farmer training programs Africa",
          "agricultural policy advocacy Africa",
          "knowledge exchange for farmers",
          "agroecology training Africa",
          "organic certification support Africa",
          "farmer network Africa",
          "market access for smallholder farmers",
          "sustainable agriculture services",
        ]}
        image="https://www.inofoafrica.org/assets/inofo-services-share.jpg"
        type="website"
        breadcrumbs={servicesPageBreadcrumbs}
        faqData={servicesPageFaqs}
        customSchema={servicesPageCustomSchema}
      />

      <motion.main
        className="services-africa"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero — full-bleed */}
        <motion.header
          className="service_hero-header"
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
              Our Services for African Organic Farmers
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Comprehensive support services for sustainable agriculture across the continent
            </motion.p>
          </div>
        </motion.header>

        {/* Services Intro */}
        <motion.section
          className="section-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Comprehensive Guide for Organic Agriculture Development</h2>
            <p className="section-subtitle">
              We provide holistic support to organic farmers across Africa through six key service areas.
              Each service addresses specific challenges while building a resilient, sustainable agricultural ecosystem.
            </p>
          </motion.div>
        </motion.section>

        {/* Services Grid — always expanded */}
        <motion.section
          className="services-showcase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="services-grid">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="service-card"
                variants={itemVariants}
              >
                <div className="card-header">
                  <div className="card-icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <div className="card-number" aria-hidden="true">
                    0{idx + 1}
                  </div>
                </div>

                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="card-features">
                    <ul>
                      {service.features.map((feature, featureIdx) => (
                        <li key={featureIdx}>
                          <FaCheckCircle className="feature-icon" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to={service.url} className="card-link">
                    Learn more
                    <FaArrowRight className="link-arrow" aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Service */}
        <motion.section
          className="section-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="featured-content">
            <motion.div className="featured-text" variants={itemVariants}>
              <div className="featured-badge">
                <FaStar className="badge-icon" aria-hidden="true" />
                <span>Featured Service</span>
              </div>
              <h2>Customized Training Programs for African Farmers</h2>
              <p>
                Partnering with local agricultural hubs for in-person and virtual training tailored
                to regional needs, focusing on sustainable practices and climate resilience.
              </p>
              <div className="featured-highlights">
                <div className="highlight-item">
                  <FaLightbulb className="highlight-icon" aria-hidden="true" />
                  <span>Hands-on practical learning</span>
                </div>
                <div className="highlight-item">
                  <FaUsers className="highlight-icon" aria-hidden="true" />
                  <span>Expert farmer mentorship</span>
                </div>
                <div className="highlight-item">
                  <FaGlobeAfrica className="highlight-icon" aria-hidden="true" />
                  <span>Regionally adapted curriculum</span>
                </div>
              </div>
              <Link to="/services/training" className="btn-primary">
                <span>Explore Training Programs</span>
                <FaArrowRight className="btn-icon" aria-hidden="true" />
              </Link>
            </motion.div>
            <motion.div className="featured-image" variants={itemVariants}>
              <img
                src={journeyImg}
                alt="African farmers participating in training workshop for sustainable agriculture"
                className="content-image"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Impact Section */}
        <motion.section
          className="section-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Our Impact Across African Agriculture</h2>
          </motion.div>

          <div className="impact-grid">
            {[
              { icon: <FaUsers />, title: "Community Building", desc: "Connecting farmers and agricultural organizations across 20+ African countries through our continental network" },
              { icon: <FaLeaf />, title: "Sustainable Practices", desc: "Promoting ecological farming methods and organic certification for long-term food security and environmental health" },
              { icon: <FaGlobeAfrica />, title: "Policy Influence", desc: "Advocating for farmer-friendly policies and sustainable agriculture legislation at continental level forums" },
            ].map((item, i) => (
              <motion.div key={i} className="impact-card" variants={itemVariants}>
                <div className="impact-icon" aria-hidden="true">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="section-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="cta-card" variants={itemVariants}>
            <div className="cta-card-content">
              <h2>Ready to Transform African Agriculture?</h2>
              <p>
                Join INOFO Africa as a partner, donor, or farmer representative to scale organic
                agriculture and promote sustainable farming practices across the continent.
              </p>
              <div className="cta-buttons">
                <Link to="/membership" className="btn-primary">
                  <FaHandshake className="btn-icon" aria-hidden="true" />
                  <span>Join Our Continental Network</span>
                </Link>
                <Link to="/contact" className="btn-outline">
                  <span>Get In Touch About Services</span>
                  <FaArrowRight className="btn-icon" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </motion.main>
    </>
  );
};

export default ServicesAfrica;