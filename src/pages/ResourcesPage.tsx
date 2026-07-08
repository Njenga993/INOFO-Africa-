import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FaImages,
  FaHandshake,
  FaGraduationCap,
  FaGlobe,
  FaQuestionCircle,
} from "react-icons/fa";
import { useMemo } from "react";
import "../styles/ResourcesPage.css";
import SEO from "../components/SEO";
import LatestNews from "../components/LatestNews";

import heroImg from "../assets/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg";
import comingSoonImg from "../assets/talk.webp";


import progressImg1 from "../assets/african.webp";
import progressImg2 from "../assets/feet.webp";
import progressImg3 from "../assets/uganda.jpg";
import progressImg4 from "../assets/p.webp";
import progressImg5 from "../assets/all.webp";
import progressImg6 from "../assets/Tshawekazi_.jpg";
import progressImg7 from "../assets/AM.jpeg";
import progressImg8 from "../assets/AM_1.jpeg";
import progressImg9 from "../assets/AM_2.jpeg";
import progressImg10 from "../assets/AM_3.jpeg";
import progressImg11 from "../assets/AM_4.jpeg";
import progressImg12 from "../assets/AM_5.jpeg";

const ResourcesPage = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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



  const quickLinks = [
    {
      icon: <FaGlobe />,
      title: "INOFO International",
      description: "Connect with the global INOFO network",
      url: "https://www.inofo.org",
    },
    {
      icon: <FaGraduationCap />,
      title: "Farmer Training Portal",
      description: "Access online training modules",
      url: "#",
    },
    {
      icon: <FaQuestionCircle />,
      title: "Ask an Expert",
      description: "Get answers from agricultural specialists",
      url: "#",
    },
    {
      icon: <FaHandshake />,
      title: "Join INOFO Africa",
      description: "Become part of our growing network",
      url: "/contact",
    },
  ];

  const progressImages = useMemo(
    () => [
      { id: 1, src: progressImg1, title: "Farmer Training Workshop", category: "Training", alt: "African farmers participating in a workshop about organic farming techniques" },
      { id: 2, src: progressImg2, title: "Community Harvest", category: "Harvest", alt: "Community members harvesting organic produce together in a field" },
      { id: 3, src: progressImg3, title: "Seed Distribution", category: "Seeds", alt: "INOFO Africa volunteers distributing indigenous seeds to local farmers" },
      { id: 4, src: progressImg4, title: "Market Day Success", category: "Market", alt: "Farmers displaying their organic vegetables at an African market stall" },
      { id: 5, src: progressImg5, title: "Youth Engagement", category: "Youth", alt: "Young African farmers learning sustainable agriculture practices" },
      { id: 6, src: progressImg6, title: "Conference Highlights", category: "Events", alt: "INOFO Africa annual conference with farmers from across the continent" },
      { id: 7, src: progressImg7, title: "Water Conservation Project", category: "Infrastructure", alt: "Installation of water irrigation system for sustainable farming" },
      { id: 8, src: progressImg8, title: "Women Farmers Initiative", category: "Community", alt: "Women farmers group discussion about organic agriculture" },
      { id: 9, src: progressImg9, title: "Soil Testing Workshop", category: "Training", alt: "Farmers conducting soil tests for organic farming" },
      { id: 10, src: progressImg10, title: "Organic Certification", category: "Achievement", alt: "Organic certification ceremony for INOFO Africa member farms" },
      { id: 11, src: progressImg11, title: "Equipment Distribution", category: "Resources", alt: "Distribution of farming equipment to rural African communities" },
      { id: 12, src: progressImg12, title: "School Garden Program", category: "Education", alt: "Children learning organic farming in school garden program" },
    ],
    []
  );


  const resourcesPageBreadcrumbs = [
    { name: "Home", url: "https://www.inofoafrica.org/" },
    { name: "Resources", url: "https://www.inofoafrica.org/resources" },
  ];

  const resourcesPageFaqs = [
    {
      question: "What kind of resources does INOFO Africa offer to organic farmers?",
      answer:
        "INOFO Africa provides educational publications on agroecology, practical guides for organic certification, case studies on sustainable farming practices, market access tools, and our progress gallery showcasing farmer-led initiatives across Africa.",
    },
    {
      question: "How often are new farming resources added?",
      answer:
        "New materials are announced through our newsletter and social media channels, and directly on this Resources page.",
    },
    {
      question: "Can local farming cooperatives contribute their success stories?",
      answer:
        "Yes — INOFO Africa encourages member organizations and cooperatives to submit success stories and case studies for review by our technical committee.",
    },
    {
      question: "Are INOFO Africa's resources available in multiple African languages?",
      answer:
        "We prioritize accessibility by offering key resources in English, French, Portuguese, Swahili, and major regional languages.",
    },
  ];

  const resourcesPageCustomSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Resources & Progress Gallery | INOFO Africa",
    description:
      "Explore INOFO Africa's farming resources and progress gallery, showcasing our work promoting agroecology across Africa.",
    url: "https://www.inofoafrica.org/resources",
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    publisher: {
      "@type": "Organization",
      "@id": "https://www.inofoafrica.org#organization",
      name: "INOFO Africa",
      url: "https://www.inofoafrica.org",
      logo: "https://www.inofoafrica.org/assets/logo.png",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.inofoafrica.org/resources" },
    image: {
      "@type": "ImageObject",
      url: heroImg,
      width: "1200",
      height: "630",
      caption: "INOFO Africa Resources - Supporting Organic Farmers Across Africa",
    },
  };

  return (
    <>
      <SEO
        title="Resources & Progress Gallery | INOFO Africa - Organic Farming Materials"
        description="Access INOFO Africa's organic farming resources and progress gallery. Explore training materials, market tools, and success stories from across Africa's farming communities."
        keywords={[
          "INOFO Africa Resources",
          "Organic Farming Resources Africa",
          "Farmer Education Materials Africa",
          "Sustainable Agriculture Guides",
          "African Farming Tools",
          "Agroecology Resources",
        ]}
        canonical="https://www.inofoafrica.org/resources"
        image={heroImg}
        type="website"
        breadcrumbs={resourcesPageBreadcrumbs}
        faqData={resourcesPageFaqs}
        customSchema={resourcesPageCustomSchema}
      />

      <motion.main
        className="resources-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero — full-bleed */}
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
            <motion.p
              className="hero-subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Farming materials, tools, and progress from across Africa's organic agriculture community
            </motion.p>
          </div>
        </motion.header>

        {/* Upcoming Events 
        <motion.section
          className="section-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2><FaCalendarAlt className="heading-icon" /> Upcoming Events</h2>
            <p className="section-subtitle">
              Stay informed about upcoming meetings, workshops, and conferences hosted by INOFO Africa
            </p>
          </motion.div>

          <div className="events-grid">
            {upcomingEvents.map((event) => {
              const dateInfo = formatDate(event.date);
              const isEventUpcoming = isUpcoming(event.date);
              return (
                <motion.div key={event.id} className="event-card" variants={itemVariants}>
                  <div className="event-card-image">
                    <img src={event.image} alt={event.title} loading="lazy" />
                    <div className="event-date-badge">
                      <span className="date-day">{dateInfo.day}</span>
                      <span className="date-month">{dateInfo.month}</span>
                    </div>
                    <span className="event-type-badge">{event.type}</span>
                  </div>

                  <div className="event-card-content">
                    <h3>{event.title}</h3>

                    <div className="event-details">
                      <div className="event-detail">
                        <FaClock className="event-detail-icon" />
                        <span>{event.time}</span>
                      </div>
                      <div className="event-detail">
                        <FaMapMarkerAlt className="event-detail-icon" />
                        <span>{event.location}</span>
                      </div>
                      {event.meetingId && (
                        <div className="event-detail">
                          <FaVideo className="event-detail-icon" />
                          <span>Meeting ID: {event.meetingId}</span>
                        </div>
                      )}
                    </div>

                    <div className="event-card-actions">
                      {isEventUpcoming && event.meetingLink ? (
                        <a
                          href={event.meetingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="event-btn event-btn-primary"
                        >
                          <FaExternalLinkAlt />
                          Join Meeting
                        </a>
                      ) : (
                        <span className="event-btn event-btn-disabled">
                          Registration Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>*/}

        {/* Latest News */}
        <LatestNews />

        {/* Quick Links */}
        <motion.section
          className="section-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Quick Links</h2>
            <p className="section-subtitle">
              Fast access to key platforms and services
            </p>
          </motion.div>

          <div className="quick-links-grid">
            {quickLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="quick-link-card"
                variants={itemVariants}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className="quick-link-icon">{link.icon}</div>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Coming Soon */}
        <motion.section
          className="section-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="coming-soon-container" variants={itemVariants}>
            <div className="coming-soon-content">
              <h2>More Resources Coming Soon</h2>
              <p>
                We're continuously developing new resources to support farmers
                and agricultural professionals. Currently in development:
              </p>

              <ul className="resource-list">
                <li>Interactive training modules with quizzes</li>
                <li>Video tutorial series in local languages</li>
                <li>Mobile app for offline resource access</li>
                <li>Farmer-to-farmer knowledge exchange platform</li>
                <li>Seasonal planting calendars by region</li>
              </ul>

              <div className="coming-soon-callout">
                <strong>Subscribe to our newsletter</strong> to be the first to
                know when new resources are available!
              </div>

              <div className="progress-container">
                <div className="progress-text">Next batch in development</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "45%" }} />
                </div>
                <div className="progress-percentage">45% done</div>
              </div>
            </div>

            <div className="coming-soon-image">
              <img
                src={comingSoonImg}
                alt="INOFO Africa resources coming soon for organic farmers"
                loading="lazy"
              />
              <div className="floating-tag">In Development</div>
            </div>
          </motion.div>
        </motion.section>

        {/* Progress Gallery — static grid */}
        <motion.section
          className="section-block gallery-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2><FaImages className="heading-icon" /> Our Progress Gallery</h2>
            <p className="section-subtitle">
              A look at our ongoing work and the impact we're making together.
            </p>
          </motion.div>

          <motion.div className="gallery-grid" variants={containerVariants}>
            {progressImages.map((image) => (
              <motion.div key={image.id} className="gallery-item" variants={itemVariants}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gallery-item-overlay">
                  <h3>{image.title}</h3>
                  <span className="category-tag">{image.category}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </motion.main>
    </>
  );
};

export default ResourcesPage;