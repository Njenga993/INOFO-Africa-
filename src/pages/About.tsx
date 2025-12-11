// src/pages/AboutUsAfrica.tsx
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { JSX } from "react";
import { Leaf, Users as UsersIcon, Globe, Landmark } from "lucide-react";
import "../styles/AboutUsAfrica.css";

import SEO from "../components/SEO";
import MembersTable from "../components/LogoCarousel";
import Newsletter from "../components/Newsletter";

// Leader images
import wanjamaImg from "../assets/wanjama.jpg";
import raoudathImg from "../assets/Roudath.jpg";
import charlesImg from "../assets/charles.jpg";

// Section images
import journeyImg from "../assets/njoro.webp";
import governance from "../assets/3.webp";
import governanceImg from "../assets/all.webp";
import heroImg from "../assets/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg";

interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Pillar {
  icon: JSX.Element;
  title: string;
  description: string;
}

const AboutUsAfrica: React.FC = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  // Leadership data
  const leaders: Leader[] = [
    {
      name: "Daniel Wanjama",
      role: "East Africa Convenor",
      bio:
        "Daniel Wanjama (Seed Savers Network Kenya) champions seed sovereignty and food security in Eastern Africa. He leads initiatives to preserve indigenous seed varieties, strengthen biodiversity, and empower farmers with locally adapted, organic seed systems. As East Africa Convenor on the INOFO Africa Council, Daniel brings deep grassroots experience and commitment to farmer-led resilience.",
      image: wanjamaImg
    },
    {
      name: "Raoudath Bouaima",
      role: "West Africa Convenor",
      bio:
        "Raoudath Bouraima (Benin) advances sustainable agriculture and organic farming across West Africa through community-driven projects. A strong advocate for women's leadership in agriculture, she supports resilience-building programs that amplify rural voices and promote environmental stewardship.",
      image: raoudathImg
    },
    {
      name: "Charles Mubanga",
      role: "Southern Africa Convenor",
      bio:
        "Charles K. Mubanga (Mpongwe Bulima Cooperative, Zambia) promotes cooperative development and ecological farming practices. He focuses on strengthening farmer cooperatives, advocacy, and policy engagement to improve livelihoods and amplify smallholder voices across Southern Africa.",
      image: charlesImg
    }
  ];

  const pillars: Pillar[] = [
    {
      icon: <UsersIcon className="pillar-icon-svg" aria-hidden="true" />,
      title: "Community Resilience",
      description:
        "We empower cooperatives and networks to strengthen local food systems and rural economies."
    },
    {
      icon: <Leaf className="pillar-icon-svg" aria-hidden="true" />,
      title: "Ecological Stewardship",
      description:
        "Our farmers safeguard biodiversity, soil health, water sources, and traditional ecological knowledge."
    },
    {
      icon: <Landmark className="pillar-icon-svg" aria-hidden="true" />,
      title: "Policy & Voice",
      description:
        "We advocate for inclusive policies that support smallholders, youth, and women-led agricultural movements."
    },
    {
      icon: <Globe className="pillar-icon-svg" aria-hidden="true" />,
      title: "Global Solidarity",
      description:
        "We connect grassroots African farmers with regional and international allies to amplify their innovations and rights."
    }
  ];

  // Schema for the About page
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About INOFO Africa",
    "description": "Discover INOFO Africa — our mission, governance, leadership, and continental work promoting agroecology, seed sovereignty, and farmer-led initiatives across 20+ African countries.",
    "url": "https://www.inofoafrica.org/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "INOFO Africa",
      "url": "https://www.inofoafrica.org",
      "logo": "https://www.inofoafrica.org/assets/logo.png",
      "description": "The Indigenous Organic Farmers Federation of Africa — farmer-led, agroecological, and rooted in local knowledge.",
      "foundingDate": "2008",
      "sameAs": [
        "https://facebook.com/inofoafrica",
        "https://twitter.com/inofoafrica",
        "https://linkedin.com/company/inofoafrica"
      ],
      "hasPart": [
        {
          "@type": "Organization",
          "name": "East Africa Regional Network",
          "leader": {
            "@type": "Person",
            "name": "Daniel Wanjama",
            "jobTitle": "East Africa Convenor",
            "image": wanjamaImg
          }
        },
        {
          "@type": "Organization",
          "name": "West Africa Regional Network",
          "leader": {
            "@type": "Person",
            "name": "Raoudath Bouaima",
            "jobTitle": "West Africa Convenor",
            "image": raoudathImg
          }
        },
        {
          "@type": "Organization",
          "name": "Southern Africa Regional Network",
          "leader": {
            "@type": "Person",
            "name": "Charles Mubanga",
            "jobTitle": "Southern Africa Convenor",
            "image": charlesImg
          }
        }
      ],
      "knowsAbout": [
        "Agroecology",
        "Seed Sovereignty",
        "Food Sovereignty",
        "Organic Farming",
        "Farmer Networks",
        "Climate Resilience",
        "Indigenous Knowledge"
      ]
    }
  };

  return (
    <motion.main
      className="about-africa"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      role="main"
      aria-labelledby="about-hero-title"
    >
      {/* SEO */}
      <SEO
        title="About INOFO Africa | Indigenous Organic Farmers of Africa"
        description="Discover INOFO Africa — our mission, governance, leadership, and continental work promoting agroecology, seed sovereignty, and farmer-led initiatives across 20+ African countries."
        canonical="https://www.inofoafrica.org/about"
        keywords={[
          "INOFO Africa",
          "About INOFO Africa",
          "Indigenous Organic Farmers Africa",
          "Organic farming Africa",
          "agroecology Africa",
          "seed sovereignty Africa",
          "farmer networks Africa",
          "African agricultural governance",
          "INOFO Africa leadership",
          "Daniel Wanjama",
          "Raoudath Bouaima",
          "Charles Mubanga",
          "Farmer-led governance Africa",
          "Indigenous knowledge systems Africa",
          "Sustainable agriculture Africa"
        ]}
        image="https://www.inofoafrica.org/assets/inofo-about-share.jpg"
        type="website"
        schema={aboutPageSchema} // Add the custom schema
      />

      {/* Hero */}
      <motion.header
        className="about_hero-header"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        aria-hidden={false}
      >
        <div className="hero-overlay" role="region" aria-label="About INOFO Africa hero">
          <motion.h1
            id="about-hero-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About INOFO Africa
          </motion.h1>
          <p className="hero-subtitle">
            The Indigenous Organic Farmers Federation of Africa — farmer-led, agroecological,
            and rooted in local knowledge.
          </p>
        </div>
      </motion.header>

      {/* Our Journey */}
      <motion.section
        className="content-section image-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        aria-labelledby="our-journey-title"
      >
        <motion.div className="text-content" variants={itemVariants}>
          <h2 id="our-journey-title">Our African Journey</h2>
          <p>
            Formed in 2008 under the global INOFO umbrella, INOFO Africa has evolved into an
            autonomous continental coalition with membership across 20+ countries.
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

        <motion.div className="image-content" variants={itemVariants} aria-hidden={false}>
          <img
            src={journeyImg}
            alt="African farmers in discussion during a community meeting"
            className="content-image"
            loading="lazy"
          />
        </motion.div>
      </motion.section>

      {/* Governance */}
      <motion.section
        className="content-section image-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        aria-labelledby="governance-title"
      >
        <motion.div className="image-content" variants={itemVariants}>
          <img
            src={governanceImg}
            alt="INOFO Africa leadership meeting"
            className="content-image"
            loading="lazy"
          />
        </motion.div>

        <motion.div className="text-content" variants={itemVariants}>
          <h2 id="governance-title">Governance Rooted in Representation</h2>
          <p>
            INOFO Africa combines continental coordination with regional autonomy. The Continental
            Council of Convenors — elected every three years — provides strategic direction, while
            Regional Assemblies ensure that local priorities shape our programs.
          </p>
          <p>
            The Executive Secretariat coordinates continental programming, and a Technical Advisory
            Circle supports policy and training initiatives. This layered governance model ensures
            transparent, accountable, and inclusive decision-making from grassroots to continental
            levels.
          </p>
        </motion.div>
      </motion.section>

      {/* Why We Farm Organic */}
      <motion.section
        className="content-section image-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        aria-labelledby="why-organic-title"
      >
        <motion.div className="image-content-1" variants={itemVariants}>
          <img
            src={governance}
            alt="Farmers tending organic fields"
            className="content-image-1"
            loading="lazy"
          />
        </motion.div>

        <motion.div className="text-content" variants={itemVariants}>
          <h2 id="why-organic-title">Why We Farm Organic in Africa</h2>
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
      </motion.section>

      {/* Pillars */}
      <motion.section
        className="content-section image-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        aria-labelledby="pillars-title"
      >
        <motion.div className="text-content" variants={itemVariants}>
          <h2 id="pillars-title">Our Strategic Pillars</h2>
          <motion.div className="pillars-grid" variants={containerVariants}>
            {pillars.map((pillar, index) => (
              <motion.article
                className="pillar-card"
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                aria-labelledby={`pillar-title-${index}`}
                role="article"
              >
                <div className="pillar-icon" aria-hidden="true">
                  {pillar.icon}
                </div>
                <h3 id={`pillar-title-${index}`}>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Governance Structure */}
<motion.section
  className="governance-section"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={containerVariants}
  aria-labelledby="org-structure-title"
>
  <div className="section-header">
    <motion.h2 variants={itemVariants} id="org-structure-title">
      INOFO Africa Organizational Structure
    </motion.h2>
    <motion.div className="section-underline" variants={itemVariants}></motion.div>
  </div>

  <motion.div className="governance-container" variants={containerVariants}>
    {/* Level 1 */}
    <motion.div className="governance-level" variants={itemVariants} role="region" aria-label="Level 1 - African General Assembly">
      <div className="level-indicator">
        <span className="level-number">1</span>
      </div>
      <div className="level-content">
        <div className="title-box">
          <div className="title-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7V12C2 16.5 4.23 20.68 7.62 23.15L12 24L16.38 23.15C19.77 20.68 22 16.5 22 12V7L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          <h3>The African General Assembly (A.G.A) at community level</h3>
        </div>
        <div className="desc-box">
          <p>
            OFOs form national chapters with an elected coordinating team led by a National Convenor.
          </p>
        </div>
      </div>
    </motion.div>

    {/* Connection Arrow 1-2 */}
    <motion.div className="connection-arrows-container" variants={itemVariants}>
      <div className="arrow-left">
        <svg viewBox="0 0 100 50" className="arrow-svg">
          <path d="M30 0 L30 35 M20 25 L30 35 L40 25" stroke="#4c7031" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      <div className="arrow-right">
        <svg viewBox="0 0 100 50" className="arrow-svg">
          <path d="M70 50 L70 15 M60 25 L70 15 L80 25" stroke="#4c7031" strokeWidth="2" fill="none"/>
        </svg>
      </div>
    </motion.div>

    {/* Level 2 */}
    <motion.div className="governance-level" variants={itemVariants} role="region" aria-label="Level 2 - African Council of Convenors">
      <div className="level-indicator">
        <span className="level-number">2</span>
      </div>
      <div className="level-content">
        <div className="title-box">
          <div className="title-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 16.02C6.03 14.02 10 12.9 12 12.9C13.99 12.9 17.97 14.02 18 16.02C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
            </svg>
          </div>
          <h3>
            The African Council of Convenors (A.C.C) — represented by a National Convenor from each active country
          </h3>
        </div>
        <div className="desc-box">
          <p>
            The A.C.C provides governance oversight between African General Assembly sessions.
          </p>
        </div>
      </div>
    </motion.div>

    {/* Connection Arrow 2-3 */}
    <motion.div className="connection-arrows-container" variants={itemVariants}>
      <div className="arrow-left">
        <svg viewBox="0 0 100 50" className="arrow-svg">
          <path d="M30 0 L30 35 M20 25 L30 35 L40 25" stroke="#4c7031" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      <div className="arrow-right">
        <svg viewBox="0 0 100 50" className="arrow-svg">
          <path d="M70 50 L70 15 M60 25 L70 15 L80 25" stroke="#4c7031" strokeWidth="2" fill="none"/>
        </svg>
      </div>
    </motion.div>

    {/* Level 3 */}
    <motion.div className="governance-level" variants={itemVariants} role="region" aria-label="Level 3 - Executive Committee">
      <div className="level-indicator">
        <span className="level-number">3</span>
      </div>
      <div className="level-content">
        <div className="title-box">
          <div className="title-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.09 8.26L20.18 8.27L15.54 11.97L17.64 18.23L12 14.47L6.36 18.23L8.46 11.97L3.82 8.27L9.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          <h3>
            The Executive Committee of the African Council of Convenors
            <span className="subtext"> — 5 representatives from Africa's subregions</span>
          </h3>
        </div>
        <div className="desc-box">
          <p>
            Representatives elected by the A.G.A connect the regional bodies to INOFO Global and provide governance oversight.
          </p>
          <p>
            This committee supports the INOFO Africa Secretariat to implement Assembly and Council decisions.
          </p>
        </div>
      </div>
    </motion.div>

    {/* Connection Arrow 3-4 */}
    <motion.div className="connection-arrows-container" variants={itemVariants}>
      <div className="arrow-left">
        <svg viewBox="0 0 100 50" className="arrow-svg">
          <path d="M30 0 L30 35 M20 25 L30 35 L40 25" stroke="#4c7031" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      <div className="arrow-right">
        <svg viewBox="0 0 100 50" className="arrow-svg">
          <path d="M70 50 L70 15 M60 25 L70 15 L80 25" stroke="#4c7031" strokeWidth="2" fill="none"/>
        </svg>
      </div>
    </motion.div>

    {/* Level 4 */}
    <motion.div className="governance-level" variants={itemVariants} role="region" aria-label="Level 4 - Secretariat">
      <div className="level-indicator">
        <span className="level-number">4</span>
      </div>
      <div className="level-content">
        <div className="title-box">
          <div className="title-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM13 17H11V15H13V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z" fill="currentColor"/>
            </svg>
          </div>
          <h3>
            The Secretariat <span className="subtext">— led by the Executive Director</span>
          </h3>
        </div>
        <div className="desc-box">
          <div className="secretariat-roles" aria-hidden="false">
            <div className="role-item">
              <div className="role-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="role-title">Administration & Finance</span>
            </div>
            <div className="role-item">
              <div className="role-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="role-title">Sub-region coordination (5 subregions)</span>
            </div>
            <div className="role-item">
              <div className="role-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM18 14H6V12H18V14ZM18 10H6V8H18V10Z" fill="currentColor"/>
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
      {/* Leadership */}
      <motion.section
        className="text-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        aria-labelledby="leadership-title"
      >
        <motion.h2 variants={itemVariants} id="leadership-title">
          Meet Our Leadership Team
        </motion.h2>

        <motion.div className="leaders-grid" variants={containerVariants}>
          {leaders.map((leader, index) => (
            <motion.article
              className="leader-card"
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              aria-labelledby={`leader-name-${index}`}
              role="article"
            >
              <div className="leader-image" aria-hidden={false}>
                <img
                  src={leader.image}
                  alt={`${leader.name} — ${leader.role}`}
                  loading="lazy"
                />
                <div className="leader-overlay">
                  <h4 id={`leader-name-${index}`}>{leader.name}</h4>
                  <p>{leader.role}</p>
                </div>
              </div>

              <div className="leader-bio">
                <p>{leader.bio}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      {/* Partners / Members and Newsletter */}
      <MembersTable />
      <Newsletter />

    </motion.main>
  );
};

export default AboutUsAfrica;