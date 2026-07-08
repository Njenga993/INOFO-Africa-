import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FaLeaf,
  FaHandshake,
  FaEnvelope,
  FaDonate,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGlobeAfrica,
} from "react-icons/fa";
import { useRef, useMemo } from "react";
//import Newsletter from "../components/Newsletter";
import SEO from "../components/SEO";
import "../styles/Contact.css";
import heroImg from "../assets/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg";
import journeyImg from "../assets/joyful-harvest-in-the-fields-101239609.jpg";

const ContactSection = () => {
  const containerRef = useRef<HTMLElement | null>(null);

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // --- SEO CONFIGURATION ---

  const contactPageBreadcrumbs = [
    { name: "Home", url: "https://www.inofoafrica.org/" },
    { name: "Contact", url: "https://www.inofoafrica.org/contact" },
  ];

  const contactPageFaqs = [
    {
      question: "How quickly does INOFO Africa respond to inquiries?",
      answer:
        "We strive to respond to all inquiries within 2-3 business days. For urgent partnership or media inquiries, please email us directly for a faster response.",
    },
    {
      question: "What types of partnerships does INOFO Africa seek with organizations?",
      answer:
        "INOFO Africa welcomes partnerships with NGOs, research institutions, government agencies, corporate social responsibility programs, and development organizations focused on agroecology, farmer empowerment, food sovereignty, and sustainable agriculture across Africa.",
    },
    {
      question: "How can farmers or farmer organizations join INOFO Africa's network?",
      answer:
        "Farmers and farmer organizations can join by emailing our membership team or contacting our regional coordinators. Membership is open to all farmer-led organizations practicing or transitioning to organic farming in Africa.",
    },
    {
      question: "Where are INOFO Africa's regional offices located across Africa?",
      answer:
        "INOFO Africa has regional presence in East Africa (Kenya), West Africa (Ghana), Southern Africa (Zimbabwe), and Central Africa (Cameroon). Our continental secretariat coordinates activities across all regions.",
    },
    {
      question: "How are donations to INOFO Africa used to support African farmers?",
      answer:
        "Donations directly support farmer-led initiatives including training programs, seed distribution, organic certification support, market access development, climate resilience projects, and advocacy for farmer rights across Africa.",
    },
  ];

  const organizationContactPoints = [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+254-700-000000",
      email: "info@inofoafrica.org",
      areaServed: "Africa",
      availableLanguage: ["English", "French", "Portuguese", "Swahili"],
      contactOption: "TollFree",
    },
    {
      "@type": "ContactPoint",
      contactType: "partnerships",
      email: "partnerships@inofoafrica.org",
      areaServed: "Africa",
      availableLanguage: ["English", "French"],
      description: "For partnership and collaboration inquiries",
    },
    {
      "@type": "ContactPoint",
      contactType: "membership",
      email: "membership@inofoafrica.org",
      areaServed: "Africa",
      availableLanguage: ["English", "French", "Portuguese"],
      description: "For farmer organization membership applications",
    },
    {
      "@type": "ContactPoint",
      contactType: "media inquiries",
      email: "media@inofoafrica.org",
      areaServed: "Africa",
      availableLanguage: ["English", "French"],
      description: "For press and media related questions",
    },
  ];

  const contactPageCustomSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact INOFO Africa - Get in Touch with African Organic Farmers Network",
    description:
      "Contact INOFO Africa for partnerships, membership inquiries, donations, or questions about organic farming across Africa.",
    url: "https://www.inofoafrica.org/contact",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.inofoafrica.org/contact",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: heroImg,
      width: "1200",
      height: "630",
      caption: "Contact INOFO Africa - Connecting with African Organic Farmers",
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    publisher: {
      "@type": "Organization",
      "@id": "https://www.inofoafrica.org#organization",
      name: "INOFO Africa",
      url: "https://www.inofoafrica.org",
      logo: "https://www.inofoafrica.org/assets/logo.png",
      description:
        "The continental body representing indigenous organic farmers across Africa, advocating for agroecology, food sovereignty, and farmer-led governance.",
      contactPoint: organizationContactPoints,
      sameAs: [
        "https://facebook.com/inofoafrica",
        "https://twitter.com/inofoafrica",
        "https://linkedin.com/company/inofoafrica",
        "https://instagram.com/inofoafrica",
        "https://youtube.com/@inofoafrica",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "P.O. Box 12345",
        addressLocality: "Nairobi",
        addressRegion: "Nairobi County",
        postalCode: "00100",
        addressCountry: "KE",
      },
    },
    about: {
      "@type": "Thing",
      name: "Organic Farming Support in Africa",
      description: "Supporting organic farmer organizations and sustainable agriculture initiatives across Africa",
    },
    audience: {
      "@type": "Audience",
      audienceType: ["Farmers", "Agricultural Organizations", "Development Partners", "Researchers", "Policy Makers", "Donors", "Media"],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "INOFO Africa",
    description: "Continental network of organic farmer organizations in Africa",
    url: "https://www.inofoafrica.org",
    telephone: "+254-700-000000",
    email: "info@inofoafrica.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: "P.O. Box 12345",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      postalCode: "00100",
      addressCountry: "KE",
    },
    geo: { "@type": "GeoCoordinates", latitude: "-1.2921", longitude: "36.8219" },
    openingHours: "Mo-Fr 08:00-17:00",
    priceRange: "Free services for member farmers",
    hasMap: "https://maps.google.com/?q=Nairobi,Kenya",
    areaServed: [
      { "@type": "Country", name: "Kenya" },
      { "@type": "Country", name: "Ghana" },
      { "@type": "Country", name: "Zimbabwe" },
      { "@type": "Country", name: "Cameroon" },
      { "@type": "Continent", name: "Africa" },
    ],
  };

  const socialMediaLinks = useMemo(
    () => [
      { icon: <FaFacebook />, name: "Facebook", className: "facebook", url: "https://facebook.com/inofoafrica" },
      { icon: <FaTwitter />, name: "Twitter", className: "twitter", url: "https://twitter.com/inofoafrica" },
      { icon: <FaLinkedin />, name: "LinkedIn", className: "linkedin", url: "https://linkedin.com/company/inofoafrica" },
      { icon: <FaInstagram />, name: "Instagram", className: "instagram", url: "https://instagram.com/inofoafrica" },
      { icon: <FaYoutube />, name: "YouTube", className: "youtube", url: "https://youtube.com/@inofoafrica" },
    ],
    []
  );

  return (
    <>
      <SEO
        title="Contact INOFO Africa | Get in Touch with African Organic Farmers Network"
        description="Contact INOFO Africa for partnerships, membership, donations, or questions about organic farming across Africa. Support farmer-led agroecology, food sovereignty, and sustainable agriculture initiatives throughout the continent."
        keywords={[
          "contact INOFO Africa",
          "INOFO Africa email",
          "organic farming Africa contact",
          "agroecology Africa contact",
          "African farmer organizations contact",
          "partnerships INOFO Africa",
          "membership INOFO Africa",
          "donate to African farmers",
          "support organic farming Africa",
          "food sovereignty Africa contact",
        ]}
        canonical="https://www.inofoafrica.org/contact"
        image="https://www.inofoafrica.org/assets/inofo-contact-share.jpg"
        type="website"
        breadcrumbs={contactPageBreadcrumbs}
        faqData={contactPageFaqs}
        customSchema={contactPageCustomSchema}
      />

      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>

      <motion.main
        className="contact-africa"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        ref={containerRef}
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        {/* Hero Section */}
        <motion.header
          className="hero-header"
          style={{ backgroundImage: `url(${heroImg})` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          itemProp="primaryImageOfPage"
          itemScope
          itemType="https://schema.org/ImageObject"
        >
          <div className="hero-overlay">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              itemProp="headline"
            >
              Contact INOFO Africa
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hero-subtitle"
              itemProp="description"
            >
              Connect with Africa's leading network of organic farmer organizations
            </motion.p>
          </div>
          <meta itemProp="url" content={heroImg} />
          <meta itemProp="caption" content="Contact INOFO Africa - Supporting Organic Farmers Across Africa" />
        </motion.header>

        {/* Contact Info Section — form removed, info-only */}
        <motion.section
          className="contact-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          itemScope
          itemType="https://schema.org/ContactPoint"
        >
          <motion.div className="contact-intro" variants={itemVariants}>
            <h2>
              <span className="title-gradient">Get in Touch With Us</span>
            </h2>
            <p className="lead">
              We're here to support organic farmer organizations across Africa.
              Reach out for partnerships, membership, or general questions —
              whichever fits, use the details below.
            </p>
          </motion.div>

          <motion.div
            className="contact-info-grid"
            variants={containerVariants}
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <motion.div className="info-card" variants={itemVariants} itemProp="contactPoint">
              <div className="info-icon">
                <FaLeaf />
              </div>
              <h3 itemProp="contactType">Partnership Inquiries</h3>
              <p itemProp="description">
                Explore collaboration opportunities with African organic farmer
                organizations for sustainable agriculture projects.
              </p>
              <a href="mailto:partnerships@inofoafrica.org" className="info-link" itemProp="email">
                partnerships@inofoafrica.org
              </a>
              <meta itemProp="availableLanguage" content="English, French" />
              <meta itemProp="areaServed" content="Africa" />
            </motion.div>

            <motion.div className="info-card" variants={itemVariants} itemProp="contactPoint">
              <div className="info-icon">
                <FaHandshake />
              </div>
              <h3 itemProp="contactType">Membership Questions</h3>
              <p itemProp="description">
                Learn how to join our continental network of organic farmer
                organizations and access member benefits.
              </p>
              <a href="mailto:membership@inofoafrica.org" className="info-link" itemProp="email">
                membership@inofoafrica.org
              </a>
              <meta itemProp="availableLanguage" content="English, French, Portuguese" />
              <meta itemProp="areaServed" content="Africa" />
            </motion.div>

            <motion.div className="info-card" variants={itemVariants} itemProp="contactPoint">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3 itemProp="contactType">General Inquiries</h3>
              <p itemProp="description">
                Contact our team for any other questions about our work,
                initiatives, and impact across Africa.
              </p>
              <a href="mailto:info@inofoafrica.org" className="info-link" itemProp="email">
                info@inofoafrica.org
              </a>
              <meta itemProp="availableLanguage" content="English, French, Portuguese, Swahili" />
              <meta itemProp="areaServed" content="Africa" />
            </motion.div>

            <motion.div className="info-card region-card" variants={itemVariants}>
              <div className="info-icon">
                <FaGlobeAfrica />
              </div>
              <h3>Regional Presence</h3>
              <p>INOFO Africa operates across all African regions:</p>
              <ul className="region-list">
                <li><strong>East Africa:</strong> Kenya (Secretariat)</li>
                <li><strong>West Africa:</strong> Ghana</li>
                <li><strong>Southern Africa:</strong> Zimbabwe</li>
                <li><strong>Central Africa:</strong> Cameroon</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div className="response-info" variants={itemVariants}>
            <h3>Response Time Information</h3>
            <ul className="response-list">
              <li><strong>General Inquiries:</strong> 2-3 business days</li>
              <li><strong>Partnership Inquiries:</strong> 1-2 business days</li>
              <li><strong>Membership Applications:</strong> 3-5 business days for review</li>
              <li><strong>Media Inquiries:</strong> 24-48 hours</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Donate Section — button disabled, PayPal logic removed */}
        <motion.section
          className="donate-section-enhanced"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="donate-container">
            <motion.div className="donate-content" variants={itemVariants}>
              <div className="donate-header">
                <h2>Support the Voice of African Organic Farmers</h2>
                <p>
                  Your donation fuels farmer-led solutions, sustainable agriculture,
                  and food sovereignty across the continent.
                </p>
              </div>

              <div className="impact-cards">
                <div className="impact-card">
                  <span className="impact-amount">$25</span>
                  <span className="impact-text">Provides indigenous seeds for one farmer</span>
                </div>
                <div className="impact-card">
                  <span className="impact-amount">$50</span>
                  <span className="impact-text">Funds agroecology training workshop</span>
                </div>
                <div className="impact-card">
                  <span className="impact-amount">$100</span>
                  <span className="impact-text">Supports organic certification process</span>
                </div>
              </div>

              <div className="M_donate-buttons">
                <button
                  className="M_btn-primary donate-btn donate-btn--disabled"
                  disabled
                  aria-disabled="true"
                >
                  <FaDonate className="M_btn-icon" />
                  <span>Donations Coming Soon</span>
                </button>
                <p className="donate-note">
                  <small>
                    Online donations aren't open yet — check back soon, or reach out
                    directly using the contact details above to support our work.
                  </small>
                </p>
              </div>
            </motion.div>

            <motion.div className="donate-image" variants={itemVariants}>
              <img
                src={journeyImg}
                alt="African organic farmers working together in a field harvesting crops"
                className="content-image"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Social Media Section */}
        <motion.section
          className="social-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          itemScope
          itemType="https://schema.org/Organization"
        >
          <motion.div className="social-container" variants={itemVariants}>
            <h2 itemProp="name">Follow Our Journey</h2>
            <p itemProp="description">Stay connected with INOFO Africa across social media platforms</p>

            <div className="social-grid" itemProp="sameAs">
              {socialMediaLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className={`social-link ${social.className}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  itemProp="url"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Newsletter Signup */}
        
      </motion.main>
    </>
  );
};

export default ContactSection;