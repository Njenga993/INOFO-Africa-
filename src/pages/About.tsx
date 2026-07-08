import React, { useMemo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { JSX } from "react";
import { Leaf, Users as UsersIcon, Globe, Landmark } from "lucide-react";
import "../styles/AboutUsAfrica.css";

import SEO from "../components/SEO";
import MembersTable from "../components/LogoCarousel";
import LeadershipTeam from "../components/LeadershipTeam";

import journeyImg from "../assets/njoro.webp";
import governance from "../assets/3.webp";
import governanceImg from "../assets/all.webp";
import heroImg from "../assets/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg";

interface Pillar {
  icon: JSX.Element;
  title: string;
  description: string;
}

const AboutUsAfrica: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
  };

  const pillars: Pillar[] = useMemo(
    () => [
      {
        icon: <UsersIcon className="pillar-icon-svg" aria-hidden="true" />,
        title: "Community Resilience & Farmer Empowerment",
        description:
          "We empower cooperatives and networks to strengthen local food systems and rural economies through capacity building and farmer-led governance.",
      },
      {
        icon: <Leaf className="pillar-icon-svg" aria-hidden="true" />,
        title: "Ecological Stewardship & Biodiversity Conservation",
        description:
          "Our farmers safeguard biodiversity, soil health, water sources, and traditional ecological knowledge through sustainable agroecology practices.",
      },
      {
        icon: <Landmark className="pillar-icon-svg" aria-hidden="true" />,
        title: "Policy Advocacy & Farmer Voice Representation",
        description:
          "We advocate for inclusive policies that support smallholders, youth, and women-led agricultural movements at national and continental levels.",
      },
      {
        icon: <Globe className="pillar-icon-svg" aria-hidden="true" />,
        title: "Global Solidarity & Knowledge Exchange",
        description:
          "We connect grassroots African farmers with regional and international allies to amplify their innovations and rights through collaborative networks.",
      },
    ],
    []
  );

  const aboutPageBreadcrumbs = useMemo(
    () => [
      { name: "Home", url: "https://www.inofoafrica.org/" },
      { name: "About Us", url: "https://www.inofoafrica.org/about" },
    ],
    []
  );

  const aboutPageFaqs = useMemo(
    () => [
      {
        question: "What is the governance structure and leadership of INOFO Africa?",
        answer:
          "INOFO Africa operates with a four-tier governance structure: 1) African General Assembly at community level, 2) African Council of Convenors representing each country, 3) Executive Committee with 5 sub-regional representatives, and 4) Secretariat led by the Executive Director.",
      },
      {
        question: "When was INOFO Africa established and what is its mission?",
        answer:
          "INOFO Africa was formed in 2008 as the continental branch of the global INOFO network. Our mission is to unite indigenous organic farmers across Africa to promote agroecology, food sovereignty, and farmer-led governance across 20+ African countries.",
      },
      {
        question: "What are the core strategic pillars of INOFO Africa's work?",
        answer:
          "Our work is built on four strategic pillars: Community Resilience through farmer empowerment, Ecological Stewardship of biodiversity and traditional knowledge, Policy Advocacy for farmer rights, and Global Solidarity connecting African farmers with international networks.",
      },
      {
        question: "How many countries does INOFO Africa operate in across Africa?",
        answer:
          "INOFO Africa has active presence in over 20 African countries with national chapters and farmer organizations, spanning East, West, Southern, Central, and North Africa.",
      },
      {
        question: "What is INOFO Africa's approach to organic farming in Africa?",
        answer:
          "We promote an African-led organic farming approach that blends traditional ecological knowledge with modern agroecology, prioritizing seed sovereignty, soil conservation, and climate resilience.",
      },
      {
        question: "How can farmers or organizations connect with INOFO Africa?",
        answer:
          "Farmers and organizations can connect through our regional chapters, membership program, or by contacting our Secretariat directly.",
      },
    ],
    []
  );

  const aboutPageCustomSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About INOFO Africa | Our Mission, Leadership & Continental Governance",
      description:
        "Discover INOFO Africa's mission, governance structure, and leadership team. Learn how we unite indigenous organic farmers across 20+ African countries to promote agroecology, food sovereignty, and sustainable agriculture.",
      url: "https://www.inofoafrica.org/about",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.inofoafrica.org/about" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: heroImg,
        width: "1200",
        height: "630",
        caption: "INOFO Africa - Uniting Organic Farmers Across the Continent",
      },
      datePublished: "2008-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      publisher: {
        "@type": "Organization",
        "@id": "https://www.inofoafrica.org#organization",
        name: "INOFO Africa",
        alternateName: "Indigenous Organic Farmers Federation of Africa",
        url: "https://www.inofoafrica.org",
        logo: "https://www.inofoafrica.org/assets/logo.png",
        description:
          "The continental body representing indigenous organic farmers across Africa, advocating for agroecology, food sovereignty, and farmer-led governance.",
        foundingDate: "2008",
        foundingLocation: "Africa",
        knowsAbout: [
          "Agroecology Africa",
          "Seed Sovereignty",
          "Organic Farming Africa",
          "Food Sovereignty",
          "Farmer-Led Governance",
          "Climate Resilient Agriculture",
        ],
        sameAs: [
          "https://facebook.com/inofoafrica",
          "https://twitter.com/inofoafrica",
          "https://linkedin.com/company/inofoafrica",
          "https://instagram.com/inofoafrica",
          "https://youtube.com/@inofoafrica",
        ],
        areaServed: { "@type": "Continent", name: "Africa" },
      },
    }),
    []
  );

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "INOFO Africa",
    alternateName: "Indigenous Organic Farmers Federation of Africa",
    description:
      "Continental network of indigenous organic farmer organizations promoting agroecology and food sovereignty across Africa",
    url: "https://www.inofoafrica.org",
    logo: "https://www.inofoafrica.org/assets/logo.png",
    foundingDate: "2008",
    foundingLocation: "Africa",
  };

  const GOVERNANCE_LEVELS = [
    {
      level: 1,
      title: "The African General Assembly (A.G.A) at community level",
      desc: "OFOs form national chapters with an elected coordinating team led by a National Convenor.",
      iconPath: "M12 2L2 7V12C2 16.5 4.23 20.68 7.62 23.15L12 24L16.38 23.15C19.77 20.68 22 16.5 22 12V7L12 2Z",
    },
    {
      level: 2,
      title: "The African Council of Convenors (A.C.C) — represented by a National Convenor from each active country",
      desc: "The A.C.C provides governance oversight between African General Assembly sessions.",
      iconPath:
        "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 16.02C6.03 14.02 10 12.9 12 12.9C13.99 12.9 17.97 14.02 18 16.02C16.71 17.92 14.5 19.2 12 19.2Z",
    },
    {
      level: 3,
      title: "The Executive Committee of the African Council of Convenors",
      subtext: "— 5 representatives from Africa's subregions",
      desc: [
        "Representatives elected by the A.G.A connect the regional bodies to INOFO Global and provide governance oversight.",
        "This committee supports the INOFO Africa Secretariat to implement Assembly and Council decisions.",
      ],
      iconPath: "M12 2L14.09 8.26L20.18 8.27L15.54 11.97L17.64 18.23L12 14.47L6.36 18.23L8.46 11.97L3.82 8.27L9.91 8.26L12 2Z",
    },
  ];

  return (
    <>
      <SEO
        title="About INOFO Africa | Our Mission, Leadership & Continental Governance"
        description="Discover INOFO Africa's mission, governance structure, and leadership team. Learn how we unite indigenous organic farmers across 20+ African countries to promote agroecology, food sovereignty, and sustainable agriculture."
        canonical="https://www.inofoafrica.org/about"
        keywords={[
          "About INOFO Africa",
          "INOFO Africa mission",
          "African organic farmers organization",
          "Agroecology Africa leadership",
          "African farmer federation governance",
          "Food sovereignty Africa organization",
          "Indigenous organic farming network",
        ]}
        image="https://www.inofoafrica.org/assets/inofo-about-share.jpg"
        type="website"
        breadcrumbs={aboutPageBreadcrumbs}
        faqData={aboutPageFaqs}
        customSchema={aboutPageCustomSchema}
      />

      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>

      <motion.main
        className="about-africa"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero — full-bleed */}
        <motion.header
          className="about_hero-header"
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
              About INOFO Africa
            </motion.h1>
            <p className="hero-subtitle">
              The Indigenous Organic Farmers Federation of Africa — farmer-led, agroecological,
              and rooted in local knowledge for sustainable agriculture across the continent.
            </p>
          </div>
        </motion.header>

        {/* Our Journey — image right */}
        <motion.section
          className="content-section image-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-content" variants={itemVariants}>
            <h2>Our African Journey Since 2008</h2>
            <p>
              Formed in 2008 under the global INOFO umbrella, INOFO Africa has evolved into an
              autonomous continental coalition with membership across 20+ African countries.
            </p>
            <p>
              Our work is grounded in resilience, farmer knowledge, and community-led innovations.
              Through capacity building, policy advocacy, and regional programs, we support smallholder
              farmers to reclaim seed systems, strengthen local markets, and enhance climate resilience.
            </p>
            <p>
              INOFO Africa brings together farmer organizations, NGOs, and grassroots movements committed
              to agroecology, sustainable livelihoods, and food sovereignty across the continent.
            </p>
          </motion.div>

          <motion.div className="image-content" variants={itemVariants}>
            <img
              src={journeyImg}
              alt="African farmers participating in community meeting about sustainable agriculture practices"
              className="content-image"
              loading="lazy"
            />
          </motion.div>
        </motion.section>

        {/* Governance philosophy — image left */}
        <motion.section
          className="content-section image-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="image-content" variants={itemVariants}>
            <img
              src={governanceImg}
              alt="INOFO Africa leadership team meeting at continental governance forum"
              className="content-image"
              loading="lazy"
            />
          </motion.div>

          <motion.div className="text-content" variants={itemVariants}>
            <h2>Governance Rooted in Farmer Representation</h2>
            <p>
              INOFO Africa combines continental coordination with regional autonomy. The Continental
              Council of Convenors — elected every three years — provides strategic direction, while
              Regional Assemblies ensure that local priorities shape our programs.
            </p>
            <p>
              The Executive Secretariat coordinates continental programming, and a Technical Advisory
              Circle supports policy and training initiatives. This layered governance model ensures
              transparent, accountable, and inclusive decision-making from the grassroots to the continental
              level.
            </p>
          </motion.div>
        </motion.section>

        {/* Why We Farm Organic — image right (fixed alternation) */}
        <motion.section
          className="content-section image-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-content" variants={itemVariants}>
            <h2>Why We Farm Organic in Africa</h2>
            <p className="subtitle">
              A regenerative approach rooted in community, culture, and climate resilience.
            </p>
            <p className="intro-text">
              Organic farming in Africa is a people-powered response to food insecurity, soil degradation,
              and economic marginalization. By blending traditional knowledge with agroecological practices,
              our farmers restore ecosystems, protect biodiversity, and build livelihoods resilient to climate shocks.
            </p>
            <p>
              Our approach prioritizes local seed systems, farmer sovereignty, and market access that
              benefits smallholder producers rather than extractive value chains.
            </p>
          </motion.div>

          <motion.div className="image-content" variants={itemVariants}>
            <img
              src={governance}
              alt="African farmers working together in organic fields using sustainable farming techniques"
              className="content-image"
              loading="lazy"
            />
          </motion.div>
        </motion.section>

        {/* Strategic Pillars */}
        <motion.section
          className="content-section pillars-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="pillars-full-width" variants={itemVariants}>
            <h2>Our Strategic Pillars for African Agriculture</h2>
            <motion.div className="pillars-grid" variants={containerVariants}>
              {pillars.map((pillar, index) => (
                <motion.article className="pillar-card" key={index} variants={itemVariants}>
                  <div className="pillar-icon" aria-hidden="true">
                    {pillar.icon}
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Governance Structure diagram */}
        <motion.section
          className="governance-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="section-header">
            <motion.h2 variants={itemVariants}>
              INOFO Africa Organizational Governance Structure
            </motion.h2>
            <motion.div className="section-underline" variants={itemVariants} />
          </div>

          <motion.div className="governance-container" variants={containerVariants}>
            {GOVERNANCE_LEVELS.map((lvl, i) => (
              <React.Fragment key={lvl.level}>
                <motion.div className="governance-level" variants={itemVariants}>
                  <div className="level-indicator">
                    <span className="level-number">{lvl.level}</span>
                  </div>
                  <div className="level-content">
                    <div className="title-box">
                      <div className="title-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d={lvl.iconPath} fill="currentColor" />
                        </svg>
                      </div>
                      <h3>
                        {lvl.title}
                        {lvl.subtext && <span className="subtext"> {lvl.subtext}</span>}
                      </h3>
                    </div>
                    <div className="desc-box">
                      {Array.isArray(lvl.desc) ? (
                        lvl.desc.map((d, di) => <p key={di}>{d}</p>)
                      ) : (
                        <p>{lvl.desc}</p>
                      )}
                    </div>
                  </div>
                </motion.div>

                {i < GOVERNANCE_LEVELS.length - 1 && (
                  <motion.div className="connection-arrows-container" variants={itemVariants} aria-hidden="true">
                    <div className="arrow-left">
                      <svg viewBox="0 0 100 50" className="arrow-svg">
                        <path d="M30 0 L30 35 M20 25 L30 35 L40 25" stroke="#4c7031" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <div className="arrow-right">
                      <svg viewBox="0 0 100 50" className="arrow-svg">
                        <path d="M70 50 L70 15 M60 25 L70 15 L80 25" stroke="#4c7031" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}

            {/* Connector into level 4 */}
            <motion.div className="connection-arrows-container" variants={itemVariants} aria-hidden="true">
              <div className="arrow-left">
                <svg viewBox="0 0 100 50" className="arrow-svg">
                  <path d="M30 0 L30 35 M20 25 L30 35 L40 25" stroke="#4c7031" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div className="arrow-right">
                <svg viewBox="0 0 100 50" className="arrow-svg">
                  <path d="M70 50 L70 15 M60 25 L70 15 L80 25" stroke="#4c7031" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </motion.div>

            {/* Level 4 — Secretariat */}
            <motion.div className="governance-level" variants={itemVariants}>
              <div className="level-indicator">
                <span className="level-number">4</span>
              </div>
              <div className="level-content">
                <div className="title-box">
                  <div className="title-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM13 17H11V15H13V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3>
                    The Secretariat <span className="subtext">— led by the Executive Director</span>
                  </h3>
                </div>
                <div className="desc-box">
                  <div className="secretariat-roles">
                    <div className="role-item">
                      <div className="role-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="role-title">Administration & Finance</span>
                    </div>
                    <div className="role-item">
                      <div className="role-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="role-title">Sub-region coordination (5 subregions)</span>
                    </div>
                    <div className="role-item">
                      <div className="role-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM18 14H6V12H18V14ZM18 10H6V8H18V10Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="role-title">Communications & Information Technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Leadership Team */}
        <LeadershipTeam title="INOFO Africa Leadership Team" />

        {/* Partners / Members */}
        <MembersTable />
      </motion.main>
    </>
  );
};

export default AboutUsAfrica;