// src/pages/MembershipAfrica.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "../styles/MembershipAfrica.css";
import Newsletter from "../components/Newsletter";
import MembersTable from "../components/LogoCarousel";
import SEO from "../components/SEO"; // Import the SEO component
import heroImg from "../assets/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg";

const MembershipAfrica: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      window.scrollTo({
        top: headerRef.current.offsetTop - 120,
        behavior: "smooth",
      });
    }
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
  };

  const handleEOIClick = () => setShowLanguagePopup(true);
  const handleLanguageSelect = (url: string) => {
    window.open(url, "_blank");
    setShowLanguagePopup(false);
  };

  // Schema for the membership page
  const membershipSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Membership & Affiliates | INOFO Africa",
    "description": "Join INOFO Africa as a member or affiliate. Learn about membership types, benefits, and our streamlined registration process for farmer organizations and supporting partners.",
    "url": "https://www.inofoafrica.org/membership",
    "mainEntity": {
      "@type": "Organization",
      "name": "INOFO Africa",
      "url": "https://www.inofoafrica.org",
      "logo": "https://www.inofoafrica.org/assets/logo.png",
      "description": "The Indigenous Organic Farmers Federation of Africa supporting smallholder farmers, agroecology, and food sovereignty.",
      "offers": [
        {
          "@type": "Offer",
          "name": "Organisational Partners",
          "description": "Ideal for farmer organizations supporting organic agriculture.",
          "itemOffered": {
            "@type": "Membership",
            "name": "Organisational Partners Membership",
            "description": "Membership for farmer organizations supporting organic agriculture",
            "programName": "INOFO Africa Organisational Partners",
            "provider": {
              "@type": "Organization",
              "name": "INOFO Africa"
            }
          }
        },
        {
          "@type": "Offer",
          "name": "Affiliate Partner",
          "description": "Designed for researchers, businesses, and supporters aligned with organic farming progress in Africa.",
          "itemOffered": {
            "@type": "Membership",
            "name": "Affiliate Partner Membership",
            "description": "Membership for researchers, businesses, and supporters of organic farming",
            "programName": "INOFO Africa Affiliate Partners",
            "provider": {
              "@type": "Organization",
              "name": "INOFO Africa"
            }
          }
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "membership",
        "email": ["info@inofoafrica.org", "membership@inofoafrica.org"]
      }
    }
  };

  return (
    <>
      {/* SEO Component */}
      <SEO
        title="Membership & Affiliates | INOFO Africa"
        description="Join INOFO Africa as a member or affiliate. Learn about membership types, benefits, and our streamlined registration process for farmer organizations and supporting partners."
        canonical="https://www.inofoafrica.org/membership"
        keywords={[
          "INOFO Africa membership",
          "farmer organization membership",
          "affiliate partners",
          "organic farming Africa",
          "agroecology Africa",
          "African farmer networks",
          "organic farmer registration",
          "agroecology membership",
          "food sovereignty Africa",
          "indigenous organic farmers",
          "farmer cooperatives Africa",
          "sustainable agriculture membership",
          "African organic movement",
          "organic certification Africa",
          "farmer led governance"
        ]}
        image="https://www.inofoafrica.org/assets/inofo-membership-share.jpg"
        type="website"
        schema={membershipSchema}
      />

      <motion.main
        className="membership-africa"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        role="main"
        aria-labelledby="membership-hero-title"
      >
        {/* Hero */}
        <motion.header
          className="member_hero-header"
          style={{ backgroundImage: `url(${heroImg})` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          ref={headerRef}
        >
          <div className="hero-overlay" role="region" aria-label="Membership hero section">
            <motion.h1
              id="membership-hero-title"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Membership & Affiliates
            </motion.h1>
          </div>
        </motion.header>

        {/* Membership Process */}
        <motion.section
          className="content-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          aria-labelledby="membership-process-title"
        >
          <motion.div className="text-content" variants={itemVariants}>
            <h2 id="membership-process-title">Membership Process</h2>
            <p className="section-subtitle">Join INOFO Africa through our streamlined membership process</p>

            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Eligibility</h3>
                  <p>
                    Membership to INOFO Africa is through a legally registered farmers' organization,
                    group, or association (OFO) practicing organic agriculture or agroecology. Individual farmers cannot join directly.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Expression of Interest</h3>
                  <p>
                    Interested OFOs submit an electronic Expression of Interest (EOI) form to the INOFO Africa Secretariat for assessment, in coordination with sub-regional and national chapters.
                  </p>
                  <button className="eoi-btn" onClick={handleEOIClick}>
                    <span>Click here to access EOI Form</span>
                    <svg className="btn-icon" viewBox="0 0 24 24">
                      <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Membership Fee</h3>
                  <p>A one-time fee of USD 10 (or equivalent) is paid to the National Chapter to support coordination at the national level.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Certificate & Ongoing Support</h3>
                  <p>After payment confirmation, the Secretariat issues a membership certificate. Voluntary subscriptions and donations are encouraged.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Membership Types */}
        <motion.section
          className="content-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          aria-labelledby="membership-types-title"
        >
          <motion.div className="text-content" variants={itemVariants}>
            <h2 id="membership-types-title">Choose Your Path</h2>
            <p className="section-subtitle">Select the membership type that aligns with your goals</p>

            <div className="types-grid">
              {[{
                id: 1,
                title: "Organisational Partners",
                description: "Ideal for farmer organizations supporting organic agriculture.",
                benefits: [
                  "Access to policy advocacy platforms",
                  "Capacity-building training & peer learning",
                  "Networking with continental peers",
                  "Exclusive resource downloads",
                ],
                icon: (
                  <svg viewBox="0 0 24 24">
                    <path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,13.6 14.1,15.3 12,15.3C9.9,15.3 8.2,13.6 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M7,18V10H17V18H7Z" />
                  </svg>
                )
              },{
                id: 2,
                title: "Affiliate Partner",
                description: "Designed for researchers, businesses, and supporters aligned with organic farming progress in Africa.",
                benefits: [
                  "Invitation to partner events",
                  "Quarterly newsletter and reports",
                  "Brand visibility on INOFO platforms",
                ],
                icon: (
                  <svg viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17V16H9V14H11V13H13V14H15V16H13V17H11M12,7A2,2 0 0,0 10,9A2,2 0 0,0 12,11A2,2 0 0,0 14,9A2,2 0 0,0 12,7Z" />
                  </svg>
                )
              }].map(card => (
                <motion.div
                  key={card.id}
                  className={`type-card ${activeCard === card.id ? "active" : ""}`}
                  onMouseEnter={() => setActiveCard(card.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() => setActiveCard(card.id)}
                  aria-labelledby={`membership-card-${card.id}-title`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="card-icon">{card.icon}</div>
                  <h3 id={`membership-card-${card.id}-title`}>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="benefits-dropdown">
                    <button
                      className="benefits-toggle"
                      aria-expanded={activeCard === card.id}
                      aria-controls={`membership-card-${card.id}-benefits`}
                    >
                      View Benefits
                    </button>
                    <ul
                      id={`membership-card-${card.id}-benefits`}
                      className={`benefits-list ${activeCard === card.id ? "visible" : ""}`}
                    >
                      {card.benefits.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          className="content-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          aria-labelledby="membership-cta-title"
        >
          <motion.div className="text-content" variants={itemVariants}>
            <h2 id="membership-cta-title">Still Have Questions?</h2>
            <p>
              Our Membership Coordinator is ready to assist with guidance, bulk applications, or custom partnership agreements.
            </p>
            <div className="cta-buttons">
              <Link to="mailto:info@inofoafrica.org" className="btn-primary">
                General Inquiries: info@inofoafrica.org
              </Link>
              <Link to="mailto:membership@inofoafrica.org" className="btn-secondary">
                Membership Inquiries: membership@inofoafrica.org
              </Link>
            </div>
          </motion.div>
        </motion.section>

        <MembersTable />
        <Newsletter />

        {/* Language Selection Popup */}
        {showLanguagePopup && (
          <div className="language-popup-overlay" role="dialog" aria-modal="true">
            <div className="language-popup">
              <div className="popup-header">
                <h3>Select EOI Form Language</h3>
                <button
                  className="close-popup"
                  onClick={() => setShowLanguagePopup(false)}
                  aria-label="Close language selection"
                >
                  ✕
                </button>
              </div>
              <div className="language-options">
                <button className="language-option" onClick={() => handleLanguageSelect("https://ee.kobotoolbox.org/x/iVb7CbtM")}>🇬🇧 English</button>
                <button className="language-option" onClick={() => handleLanguageSelect("https://ee.kobotoolbox.org/x/9UG0Pyuh")}>🇫🇷 Français</button>
                <button className="language-option" onClick={() => handleLanguageSelect("https://ee.kobotoolbox.org/x/ShrPiKPH")}>🇵🇹 Português</button>
              </div>
            </div>
          </div>
        )}
      </motion.main>
    </>
  );
};

export default MembershipAfrica;