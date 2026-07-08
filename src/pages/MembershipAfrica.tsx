import React, { useMemo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "../styles/MembershipAfrica.css";
import MembersTable from "../components/LogoCarousel";
import SEO from "../components/SEO";
import heroImg from "../assets/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg";

const MembershipAfrica: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
  };

  const membershipPageBreadcrumbs = useMemo(
    () => [
      { name: "Home", url: "https://www.inofoafrica.org/" },
      { name: "Membership", url: "https://www.inofoafrica.org/membership" },
    ],
    []
  );

  const membershipPageFaqs = useMemo(
    () => [
      {
        question: "Who is eligible to join INOFO Africa as a member?",
        answer:
          "INOFO Africa membership is open to legally registered farmers' organizations, groups, or associations (OFOs) across Africa that practice or are transitioning to organic agriculture and agroecology. Individual farmers join through their local farmer organizations.",
      },
      {
        question: "What is the step-by-step process to become an INOFO Africa member?",
        answer:
          "1) Verify eligibility as a registered farmer organization practicing organic agriculture. 2) Submit an Expression of Interest (EOI) form in English, French, or Portuguese. 3) Pay the one-time membership fee of USD 10 to your National Chapter. 4) Receive official membership certificate and network access.",
      },
      {
        question: "What are the main differences between Organizational Partners and Affiliate Partners?",
        answer:
          "Organizational Partners are farmer-led organizations who receive full voting rights, policy advocacy access, and capacity-building opportunities. Affiliate Partners are researchers, businesses, NGOs, and supporters who gain access to events and networking but do not have voting rights.",
      },
      {
        question: "How much does INOFO Africa membership cost and what does it include?",
        answer:
          "A one-time membership fee of USD 10 provides lifetime access to INOFO Africa's continental network, including a membership certificate, policy advocacy access, training programs, and networking events.",
      },
      {
        question: "Can international organizations or businesses outside Africa join?",
        answer:
          "Yes — international organizations, research institutions, and businesses supporting organic agriculture in Africa can join as Affiliate Partners.",
      },
      {
        question: "How long does the membership approval process take?",
        answer:
          "Applications are typically processed within 2-3 weeks after complete submission of the Expression of Interest form.",
      },
    ],
    []
  );

  const membershipPageCustomSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Membership & Affiliates | Join INOFO Africa's Continental Organic Farmer Network",
      description:
        "Become a member or affiliate of INOFO Africa - the leading continental network for organic farmer organizations across Africa.",
      url: "https://www.inofoafrica.org/membership",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.inofoafrica.org/membership" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: heroImg,
        width: "1200",
        height: "630",
        caption: "INOFO Africa Membership - Join Our Continental Organic Farmer Network",
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      publisher: {
        "@type": "Organization",
        "@id": "https://www.inofoafrica.org#organization",
        name: "INOFO Africa",
        url: "https://www.inofoafrica.org",
        logo: "https://www.inofoafrica.org/assets/logo.png",
        sameAs: [
          "https://facebook.com/inofoafrica",
          "https://twitter.com/inofoafrica",
          "https://linkedin.com/company/inofoafrica",
          "https://instagram.com/inofoafrica",
          "https://youtube.com/@inofoafrica",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "membership inquiries",
            email: "membership@inofoafrica.org",
            availableLanguage: ["English", "French", "Portuguese", "Swahili"],
            areaServed: "Africa",
          },
        ],
      },
      offers: [
        {
          "@type": "Offer",
          name: "INOFO Africa Organizational Partners Membership",
          description: "Full membership for farmer-led organizations with voting rights and continental networking.",
          price: "10",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "INOFO Africa Affiliate Partner Membership",
          description: "Supporting membership for researchers, businesses, and organizations.",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      ],
      areaServed: { "@type": "Continent", name: "Africa" },
    }),
    []
  );

  const EOI_LINKS = [
    { label: "English EOI Form", flag: "🇬🇧", url: "https://ee.kobotoolbox.org/x/iVb7CbtM" },
    { label: "Français Formulaire d'Intérêt", flag: "🇫🇷", url: "https://ee.kobotoolbox.org/x/9UG0Pyuh" },
    { label: "Português Formulário de Interesse", flag: "🇵🇹", url: "https://ee.kobotoolbox.org/x/ShrPiKPH" },
  ];

  const MEMBERSHIP_TYPES = [
    {
      id: 1,
      title: "Organizational Partners Membership",
      description:
        "Designed for farmer-led organizations, cooperatives, and associations directly involved in organic agriculture across Africa.",
      benefits: [
        "Full voting rights in INOFO Africa governance",
        "Access to continental policy advocacy platforms",
        "Capacity-building training programs",
        "Peer learning and farmer exchange opportunities",
        "Market access and organic certification support",
        "Technical resource library access",
      ],
      price: "USD 10",
      eligibility: "Legally registered farmer organizations practicing organic agriculture",
    },
    {
      id: 2,
      title: "Affiliate Partner Membership",
      description:
        "For researchers, businesses, NGOs, and supporters contributing to organic farming development in Africa.",
      benefits: [
        "Invitation to partner events and forums",
        "Quarterly newsletter and research reports",
        "Networking with farmer organizations",
        "Brand visibility on INOFO platforms",
        "Access to research collaboration opportunities",
        "Recognition as organic agriculture supporter",
      ],
      price: "Complimentary",
      eligibility: "Organizations supporting organic agriculture development",
    },
  ];

  return (
    <>
      <SEO
        title="Membership & Affiliates | Join INOFO Africa's Continental Organic Farmer Network"
        description="Join INOFO Africa as a member or affiliate. Choose between Organizational Partners for farmer organizations or Affiliate Partners for supporters. Access continental networking, training, and market opportunities across Africa."
        canonical="https://www.inofoafrica.org/membership"
        keywords={[
          "INOFO Africa membership",
          "organic farmer organization membership",
          "African farmer network join",
          "agroecology membership Africa",
          "farmer cooperative registration",
          "sustainable agriculture membership",
        ]}
        image="https://www.inofoafrica.org/assets/inofo-membership-share.jpg"
        type="website"
        breadcrumbs={membershipPageBreadcrumbs}
        faqData={membershipPageFaqs}
        customSchema={membershipPageCustomSchema}
      />

      <motion.main
        className="membership-africa"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero — full-bleed */}
        <motion.header
          className="member_hero-header"
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
              Join INOFO Africa's Continental Network
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Become part of Africa's leading organic farmer network with comprehensive membership benefits
            </motion.p>
          </div>
        </motion.header>

        {/* Process Steps — vertical timeline */}
        <motion.section
          className="content-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Membership Process for African Farmer Organizations</h2>
            <p className="section-subtitle">
              Simple four-step process to join INOFO Africa's continental network of organic farming practitioners
            </p>
          </motion.div>

          <div className="process-timeline">
            <motion.div className="process-step" variants={itemVariants}>
              <div className="step-marker">
                <span className="step-number">1</span>
                <div className="step-line"></div>
              </div>
              <div className="step-body">
                <h3>Eligibility Verification</h3>
                <p>
                  Membership to INOFO Africa is through legally registered farmers' organizations,
                  groups, or associations (OFOs) practicing organic agriculture or agroecology across Africa.
                  Individual farmers join through their local organizations.
                </p>
              </div>
            </motion.div>

            <motion.div className="process-step" variants={itemVariants}>
              <div className="step-marker">
                <span className="step-number">2</span>
                <div className="step-line"></div>
              </div>
              <div className="step-body">
                <h3>Expression of Interest Submission</h3>
                <p>
                  Interested OFOs submit an electronic Expression of Interest (EOI) form to the
                  INOFO Africa Secretariat — available in English, French, and Portuguese.
                </p>
                <div className="eoi-links">
                  {EOI_LINKS.map((form) => (
                    <a
                      key={form.url}
                      href={form.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="eoi-btn"
                    >
                      <span aria-hidden="true">{form.flag}</span>
                      <span>{form.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div className="process-step" variants={itemVariants}>
              <div className="step-marker">
                <span className="step-number">3</span>
                <div className="step-line"></div>
              </div>
              <div className="step-body">
                <h3>Membership Fee Payment</h3>
                <p>
                  A one-time affordable membership fee of USD 10 (or equivalent in local currency) is paid
                  to the National Chapter to support coordination at national level and sustain network activities.
                </p>
              </div>
            </motion.div>

            <motion.div className="process-step" variants={itemVariants}>
              <div className="step-marker">
                <span className="step-number">4</span>
                <div className="step-line"></div>
              </div>
              <div className="step-body">
                <h3>Certificate &amp; Network Access</h3>
                <p>
                  After payment confirmation, the Secretariat issues an official membership certificate.
                  Members gain access to all network benefits, resources, and continental forums.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Membership Types */}
        <motion.section
          className="content-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Choose Your Membership Path</h2>
            <p className="section-subtitle">
              Select the membership type that aligns with your organization's goals and contributions to organic agriculture
            </p>
          </motion.div>

          <div className="types-grid">
            {MEMBERSHIP_TYPES.map((card) => (
              <motion.div key={card.id} className="type-card" variants={itemVariants}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>

                <div className="membership-meta">
                  <div className="membership-price">
                    <strong>Cost:</strong> {card.price}
                  </div>
                  <div className="membership-eligibility">
                    <strong>Eligibility:</strong> {card.eligibility}
                  </div>
                </div>

                <div className="benefits-block">
                  <span className="benefits-label">Membership Benefits</span>
                  <ul className="benefits-list">
                    {card.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section — card treatment */}
        <motion.section
          className="cta-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="cta-card" variants={itemVariants}>
            <h2>Need Help With Membership?</h2>
            <p>
              Our dedicated Membership Coordination team is available to assist with application guidance,
              bulk organization registrations, or custom partnership agreements for larger networks.
            </p>
            <div className="cta-buttons">
              <a href="mailto:info@inofoafrica.org" className="btn-primary">
                General Inquiries: info@inofoafrica.org
              </a>
              <a href="mailto:membership@inofoafrica.org" className="btn-secondary">
                Membership Support: membership@inofoafrica.org
              </a>
            </div>
          </motion.div>
        </motion.section>

        <MembersTable />
      </motion.main>
    </>
  );
};

export default MembershipAfrica;