import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "../styles/MembershipAfrica.css";
import Newsletter from "../components/Newsletter";
import MembersTable from "../components/LogoCarousel";
import SEO from "../components/SEO";
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

  // --- ENHANCED SEO CONFIGURATION ---

  // 1. Breadcrumbs for Membership Page
  const membershipPageBreadcrumbs = useMemo(() => [
    { name: "Home", url: "https://www.inofoafrica.org/" },
    { name: "Membership", url: "https://www.inofoafrica.org/membership" }
  ], []);

  // 2. Enhanced Membership Page FAQs (for rich snippets)
  const membershipPageFaqs = useMemo(() => [
    {
      question: "Who is eligible to join INOFO Africa as a member?",
      answer: "INOFO Africa membership is open to legally registered farmers' organizations, groups, or associations (OFOs) across Africa that practice or are transitioning to organic agriculture and agroecology. Individual farmers join through their local farmer organizations. Eligibility requires commitment to sustainable farming practices and participation in the continental organic farming movement."
    },
    {
      question: "What is the step-by-step process to become an INOFO Africa member?",
      answer: "The membership process involves four clear steps: 1) Verify eligibility as a registered farmer organization practicing organic agriculture. 2) Submit an Expression of Interest (EOI) form through our online platform in English, French, or Portuguese. 3) Pay the one-time membership fee of USD 10 to your National Chapter. 4) Receive official membership certificate and gain access to all network benefits and resources."
    },
    {
      question: "What are the main differences between Organizational Partners and Affiliate Partners?",
      answer: "Organizational Partners are farmer-led organizations directly involved in organic farming who receive full voting rights, policy advocacy access, and capacity-building opportunities. Affiliate Partners are researchers, businesses, NGOs, and supporters who gain access to events, newsletters, and networking opportunities but do not have voting rights in organizational decisions."
    },
    {
      question: "How much does INOFO Africa membership cost and what does it include?",
      answer: "A one-time membership fee of USD 10 provides lifetime access to INOFO Africa's continental network. This includes membership certificate, access to policy advocacy platforms, training programs, networking events, technical resources, market access opportunities, and participation in continental organic farming forums across Africa."
    },
    {
      question: "Can international organizations or businesses outside Africa join INOFO Africa?",
      answer: "Yes, international organizations, research institutions, and businesses supporting organic agriculture in Africa can join as Affiliate Partners. This includes NGOs, academic institutions, development partners, and ethical businesses aligned with our mission of promoting agroecology and food sovereignty across the continent."
    },
    {
      question: "How long does the membership approval process take?",
      answer: "Typically, membership applications are processed within 2-3 weeks after complete submission of the Expression of Interest form. The National Chapter reviews the application, followed by coordination with the Continental Secretariat to issue membership certificates and activate all network benefits."
    }
  ], []);

  // 3. Enhanced Membership Page Schema
  const membershipPageCustomSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Membership & Affiliates | Join INOFO Africa's Continental Organic Farmer Network",
    "description": "Become a member or affiliate of INOFO Africa - the leading continental network for organic farmer organizations. Join our community of sustainable agriculture practitioners across Africa with comprehensive membership benefits and support.",
    "url": "https://www.inofoafrica.org/membership",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.inofoafrica.org/membership"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": heroImg,
      "width": "1200",
      "height": "630",
      "caption": "INOFO Africa Membership - Join Our Continental Organic Farmer Network"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.inofoafrica.org#organization",
      "name": "INOFO Africa",
      "url": "https://www.inofoafrica.org",
      "logo": "https://www.inofoafrica.org/assets/logo.png",
      "description": "The Indigenous Organic Farmers Federation of Africa — farmer-led, agroecological, and rooted in local knowledge.",
      "sameAs": [
        "https://facebook.com/inofoafrica",
        "https://twitter.com/inofoafrica",
        "https://linkedin.com/company/inofoafrica",
        "https://instagram.com/inofoafrica",
        "https://youtube.com/@inofoafrica"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "membership inquiries",
          "email": "membership@inofoafrica.org",
          "availableLanguage": ["English", "French", "Portuguese", "Swahili"],
          "areaServed": "Africa"
        },
        {
          "@type": "ContactPoint",
          "contactType": "general inquiries",
          "email": "info@inofoafrica.org",
          "availableLanguage": ["English", "French", "Portuguese"],
          "areaServed": "Africa"
        }
      ]
    },
    "about": {
      "@type": "Thing",
      "name": "Organic Farming Organization Membership in Africa",
      "description": "Membership opportunities for farmer organizations and supporters of organic agriculture across Africa"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": ["Farmer Organizations", "Agricultural Cooperatives", "Research Institutions", "NGOs", "Development Partners", "Ethical Businesses", "Agricultural Students"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "INOFO Africa Organizational Partners Membership",
        "description": "Full membership for farmer-led organizations practicing organic agriculture across Africa with voting rights and continental networking opportunities",
        "price": "10",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01",
        "itemOffered": {
          "@type": "Membership",
          "name": "Organizational Partners Membership",
          "description": "Complete membership package for organic farmer organizations with full network benefits",
          "membershipNumber": "INOFO-ORG-001",
          "programName": "INOFO Africa Organizational Partners Program",
          "provider": {
            "@type": "Organization",
            "name": "INOFO Africa"
          },
          "membershipLevel": {
            "@type": "QuantitativeValue",
            "name": "Full Membership"
          }
        }
      },
      {
        "@type": "Offer",
        "name": "INOFO Africa Affiliate Partner Membership",
        "description": "Supporting membership for researchers, businesses, and organizations aligned with organic farming development in Africa",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01",
        "itemOffered": {
          "@type": "Membership",
          "name": "Affiliate Partner Membership",
          "description": "Supporting membership for organizations and individuals contributing to organic agriculture development",
          "membershipNumber": "INOFO-AFF-001",
          "programName": "INOFO Africa Affiliate Partners Program",
          "provider": {
            "@type": "Organization",
            "name": "INOFO Africa"
          },
          "membershipLevel": {
            "@type": "QuantitativeValue",
            "name": "Affiliate Membership"
          }
        }
      }
    ],
    "areaServed": {
      "@type": "Continent",
      "name": "Africa"
    },
    "hasPart": {
      "@type": "HowTo",
      "name": "How to Join INOFO Africa Membership",
      "description": "Step-by-step guide to becoming a member of INOFO Africa's continental network",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Check Eligibility",
          "text": "Ensure your organization is a legally registered farmers' organization, group, or association practicing organic agriculture or transitioning to agroecology"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Submit Expression of Interest",
          "text": "Complete the EOI form in your preferred language (English, French, or Portuguese) through our secure online platform"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Pay Membership Fee",
          "text": "Submit the one-time USD 10 membership fee to your National Chapter coordinator for processing"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Receive Membership Package",
          "text": "Get your official membership certificate and access to all INOFO Africa network benefits and resources"
        }
      ]
    }
  }), []);

  // 4. Additional HowTo Schema for Membership Process
  const membershipProcessSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Step-by-Step Guide to INOFO Africa Membership Application",
    "description": "Complete guide to applying for membership in INOFO Africa's continental organic farmer network",
    "image": {
      "@type": "ImageObject",
      "url": heroImg
    },
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "10"
    },
    "totalTime": "PT30M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Review Eligibility Requirements",
        "text": "Confirm your organization meets the criteria for either Organizational Partner (farmer organizations) or Affiliate Partner (supporting organizations)"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Choose Membership Type",
        "text": "Select between Organizational Partners membership for farmer organizations or Affiliate Partner for researchers, businesses, and supporters"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Submit Online Application",
        "text": "Complete the Expression of Interest form in English, French, or Portuguese through our secure online platform"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Coordinate with National Chapter",
        "text": "Work with your country's INOFO Africa National Chapter coordinator to complete registration and payment"
      }
    ]
  };

  return (
    <>
      {/* Enhanced SEO Component */}
      <SEO
        title="Membership & Affiliates | Join INOFO Africa's Continental Organic Farmer Network"
        description="Join INOFO Africa as a member or affiliate. Choose between Organizational Partners for farmer organizations or Affiliate Partners for supporters. Access continental networking, training, policy advocacy, and market opportunities for sustainable agriculture across Africa."
        canonical="https://www.inofoafrica.org/membership"
        keywords={[
          "INOFO Africa membership",
          "organic farmer organization membership",
          "African farmer network join",
          "agroecology membership Africa",
          "farmer cooperative registration",
          "sustainable agriculture membership",
          "organic certification network Africa",
          "African organic farming community",
          "farmer-led organization membership",
          "agricultural cooperative Africa",
          "food sovereignty network membership",
          "indigenous farmer organization join",
          "climate resilient agriculture membership",
          "women farmer organizations Africa",
          "youth in agriculture network",
          "organic market access membership",
          "agricultural policy advocacy membership",
          "continental farmer forum membership",
          "organic training programs Africa",
          "sustainable farming network Africa"
        ]}
        image="https://www.inofoafrica.org/assets/inofo-membership-share.jpg"
        type="website"
        breadcrumbs={membershipPageBreadcrumbs}
        faqData={membershipPageFaqs}
        customSchema={membershipPageCustomSchema}
      />

      {/* Additional Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(membershipProcessSchema)}
      </script>

      <motion.main
        className="membership-africa"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        role="main"
        aria-labelledby="membership-hero-title"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {/* Hero Section */}
        <motion.header
          className="member_hero-header"
          style={{ backgroundImage: `url(${heroImg})` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          ref={headerRef}
          itemProp="primaryImageOfPage"
          itemScope
          itemType="https://schema.org/ImageObject"
        >
          <div className="hero-overlay" role="region" aria-label="Membership hero section">
            <motion.h1
              id="membership-hero-title"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              itemProp="headline"
            >
              Join INOFO Africa's Continental Network
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              itemProp="description"
            >
              Become part of Africa's leading organic farmer network with comprehensive membership benefits
            </motion.p>
          </div>
          <meta itemProp="url" content={heroImg} />
          <meta itemProp="caption" content="INOFO Africa Membership - Continental Organic Farmer Network" />
        </motion.header>

        {/* Membership Process */}
        <motion.section
          className="content-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          aria-labelledby="membership-process-title"
          itemScope
          itemType="https://schema.org/HowTo"
        >
          <motion.div className="text-content" variants={itemVariants} itemProp="step">
            <h2 id="membership-process-title" itemProp="name">Membership Process for African Farmer Organizations</h2>
            <p className="section-subtitle" itemProp="description">
              Simple four-step process to join INOFO Africa's continental network of organic farming practitioners
            </p>

            <div className="process-steps" itemProp="step">
              <div className="process-step" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                <meta itemProp="position" content="1" />
                <div className="step-number" aria-hidden="true">1</div>
                <div className="step-content">
                  <h3 itemProp="name">Eligibility Verification</h3>
                  <p itemProp="text">
                    Membership to INOFO Africa is through legally registered farmers' organizations,
                    groups, or associations (OFOs) practicing organic agriculture or agroecology across Africa. 
                    Individual farmers join through their local organizations.
                  </p>
                </div>
              </div>
              <div className="process-step" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                <meta itemProp="position" content="2" />
                <div className="step-number" aria-hidden="true">2</div>
                <div className="step-content">
                  <h3 itemProp="name">Expression of Interest Submission</h3>
                  <p itemProp="text">
                    Interested OFOs submit an electronic Expression of Interest (EOI) form to the INOFO Africa 
                    Secretariat, available in English, French, and Portuguese for accessibility across African regions.
                  </p>
                  <button 
                    className="eoi-btn" 
                    onClick={handleEOIClick}
                    aria-label="Access Expression of Interest form"
                    itemProp="url"
                  >
                    <span>Access Expression of Interest Form</span>
                    <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="process-step" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                <meta itemProp="position" content="3" />
                <div className="step-number" aria-hidden="true">3</div>
                <div className="step-content">
                  <h3 itemProp="name">Membership Fee Payment</h3>
                  <p itemProp="text">
                    A one-time affordable membership fee of USD 10 (or equivalent in local currency) is paid 
                    to the National Chapter to support coordination at national level and sustain network activities.
                  </p>
                </div>
              </div>
              <div className="process-step" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                <meta itemProp="position" content="4" />
                <div className="step-number" aria-hidden="true">4</div>
                <div className="step-content">
                  <h3 itemProp="name">Certificate & Network Access</h3>
                  <p itemProp="text">
                    After payment confirmation, the Secretariat issues an official membership certificate. 
                    Members gain access to all network benefits, resources, and continental forums for organic farming development.
                  </p>
                </div>
              </div>
            </div>
            <meta itemProp="totalTime" content="PT4W" />
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
          itemScope
          itemType="https://schema.org/OfferCatalog"
        >
          <motion.div className="text-content" variants={itemVariants}>
            <h2 id="membership-types-title" itemProp="name">Choose Your Membership Path</h2>
            <p className="section-subtitle" itemProp="description">
              Select the membership type that aligns with your organization's goals and contributions to organic agriculture
            </p>

            <div className="types-grid">
              {[
                {
                  id: 1,
                  title: "Organizational Partners Membership",
                  description: "Designed for farmer-led organizations, cooperatives, and associations directly involved in organic agriculture across Africa.",
                  benefits: [
                    "Full voting rights in INOFO Africa governance",
                    "Access to continental policy advocacy platforms",
                    "Capacity-building training programs",
                    "Peer learning and farmer exchange opportunities",
                    "Market access and organic certification support",
                    "Technical resource library access"
                  ],
                  icon: (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,13.6 14.1,15.3 12,15.3C9.9,15.3 8.2,13.6 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M7,18V10H17V18H7Z" />
                    </svg>
                  ),
                  price: "USD 10",
                  eligibility: "Legally registered farmer organizations practicing organic agriculture"
                },
                {
                  id: 2,
                  title: "Affiliate Partner Membership",
                  description: "For researchers, businesses, NGOs, and supporters contributing to organic farming development in Africa.",
                  benefits: [
                    "Invitation to partner events and forums",
                    "Quarterly newsletter and research reports",
                    "Networking with farmer organizations",
                    "Brand visibility on INOFO platforms",
                    "Access to research collaboration opportunities",
                    "Recognition as organic agriculture supporter"
                  ],
                  icon: (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M11,17V16H13V17H11M11,13V11H13V13H11M12,7A2,2 0 0,0 10,9A2,2 0 0,0 12,11A2,2 0 0,0 14,9A2,2 0 0,0 12,7Z" />
                    </svg>
                  ),
                  price: "Complimentary",
                  eligibility: "Organizations supporting organic agriculture development"
                }
              ].map(card => (
                <motion.div
                  key={card.id}
                  className={`type-card ${activeCard === card.id ? "active" : ""}`}
                  onMouseEnter={() => setActiveCard(card.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() => setActiveCard(card.id)}
                  aria-labelledby={`membership-card-${card.id}-title`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  itemScope
                  itemType="https://schema.org/Offer"
                  itemProp="itemListElement"
                >
                  <meta itemProp="position" content={String(card.id)} />
                  <div className="card-icon" aria-hidden="true">
                    {card.icon}
                  </div>
                  <h3 id={`membership-card-${card.id}-title`} itemProp="name">
                    {card.title}
                  </h3>
                  <p itemProp="description">{card.description}</p>
                  
                  <div className="membership-meta">
                    <div className="membership-price" itemProp="price" content={card.price === "Complimentary" ? "0" : "10"}>
                      <strong>Cost:</strong> {card.price}
                    </div>
                    <div className="membership-eligibility">
                      <strong>Eligibility:</strong> {card.eligibility}
                    </div>
                  </div>
                  
                  <div className="benefits-dropdown">
                    <button
                      className="benefits-toggle"
                      aria-expanded={activeCard === card.id}
                      aria-controls={`membership-card-${card.id}-benefits`}
                      aria-label={`Toggle benefits for ${card.title}`}
                    >
                      View Membership Benefits
                    </button>
                    <ul
                      id={`membership-card-${card.id}-benefits`}
                      className={`benefits-list ${activeCard === card.id ? "visible" : ""}`}
                      itemProp="itemOffered"
                    >
                      {card.benefits.map((benefit, i) => (
                        <li key={i} itemProp="description">{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <meta itemProp="priceCurrency" content="USD" />
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                </motion.div>
              ))}
            </div>
            <meta itemProp="numberOfItems" content="2" />
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
          itemScope
          itemType="https://schema.org/ContactPage"
        >
          <motion.div className="text-content" variants={itemVariants}>
            <h2 id="membership-cta-title" itemProp="name">Need Help With Membership?</h2>
            <p itemProp="description">
              Our dedicated Membership Coordination team is available to assist with application guidance, 
              bulk organization registrations, or custom partnership agreements for larger networks.
            </p>
            <div className="cta-buttons">
              <a href="mailto:info@inofoafrica.org" className="btn-primary" itemProp="email">
                General Inquiries: info@inofoafrica.org
              </a>
              <a href="mailto:membership@inofoafrica.org" className="btn-secondary" itemProp="email">
                Membership Support: membership@inofoafrica.org
              </a>
            </div>
            <div className="contact-info" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
              <meta itemProp="contactType" content="membership support" />
              <meta itemProp="email" content="membership@inofoafrica.org" />
              <meta itemProp="availableLanguage" content="English, French, Portuguese" />
              <meta itemProp="areaServed" content="Africa" />
            </div>
          </motion.div>
        </motion.section>

        <MembersTable />
        <Newsletter />

        {/* Language Selection Popup */}
        {showLanguagePopup && (
          <div className="language-popup-overlay" role="dialog" aria-modal="true" aria-labelledby="language-popup-title">
            <div className="language-popup" itemScope itemType="https://schema.org/ChooseAction">
              <div className="popup-header">
                <h3 id="language-popup-title">Select EOI Form Language</h3>
                <button
                  className="close-popup"
                  onClick={() => setShowLanguagePopup(false)}
                  aria-label="Close language selection"
                >
                  ✕
                </button>
              </div>
              <div className="language-options" itemProp="actionOption">
                <button 
                  className="language-option" 
                  onClick={() => handleLanguageSelect("https://ee.kobotoolbox.org/x/iVb7CbtM")}
                  aria-label="English Expression of Interest form"
                >
                  <span role="img" aria-label="English">🇬🇧</span> English EOI Form
                </button>
                <button 
                  className="language-option" 
                  onClick={() => handleLanguageSelect("https://ee.kobotoolbox.org/x/9UG0Pyuh")}
                  aria-label="French Expression of Interest form"
                >
                  <span role="img" aria-label="French">🇫🇷</span> Français Formulaire d'Intérêt
                </button>
                <button 
                  className="language-option" 
                  onClick={() => handleLanguageSelect("https://ee.kobotoolbox.org/x/ShrPiKPH")}
                  aria-label="Portuguese Expression of Interest form"
                >
                  <span role="img" aria-label="Portuguese">🇵🇹</span> Português Formulário de Interesse
                </button>
              </div>
              <p className="language-note">
                Forms available in three languages to serve farmers across all African regions
              </p>
            </div>
          </div>
        )}
      </motion.main>
    </>
  );
};

export default MembershipAfrica;