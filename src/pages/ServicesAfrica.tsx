import { useEffect, useRef, useState, useMemo } from "react";
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
import SEO from "../components/SEO";

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
  url: string;
}

const services: Service[] = [
  {
    icon: <FaHandshake size={28} />,
    title: "Advocacy & Policy Engagement for African Organic Farmers",
    description: "Championing organic agriculture policies at national & continental forums, advocating for farmer rights and sustainable farming legislation.",
    features: ["Land rights advocacy for smallholder farmers", "Organic certification standards development", "Climate justice policy engagement", "Food sovereignty legislation support"],
    color: "#4c7031",
    url: "/services/advocacy"
  },
  {
    icon: <FaLeaf size={28} />,
    title: "Training & Capacity Building for Organic Agriculture",
    description: "Farmer-led workshops, webinars, and mentorship programs focusing on sustainable farming techniques and organic certification.",
    features: ["Agroecology training workshops", "Organic certification guidance", "Youth leadership in agriculture", "Women farmer empowerment programs"],
    color: "#4c7031",
    url: "/services/training"
  },
  {
    icon: <FaBook size={28} />,
    title: "Knowledge Exchange & Resource Sharing",
    description: "Open-source knowledge library and technical resources for African farmers to share indigenous practices and modern techniques.",
    features: ["Technical manuals on organic farming", "Case studies from successful farms", "Indigenous farming practices database", "Climate adaptation resources"],
    color: "#4c7031",
    url: "/services/knowledge"
  },
  {
    icon: <FaGlobeAfrica size={28} />,
    title: "Networking & Continental Farmer Forums",
    description: "Connecting farmer organisations across borders to foster collaboration and share best practices.",
    features: ["Continental organic farming forums", "Regional summit organization", "Cross-border farmer exchanges", "International partnership facilitation"],
    color: "#4c7031",
    url: "/services/networking"
  },
  {
    icon: <FaUsers size={28} />,
    title: "Marketing & Market Access Support",
    description: "Promoting agroecology producer groups in accessing regional and international markets with fair-value marketing strategies.",
    features: ["Regional market access development", "Export opportunities creation", "Fair-trade certification support", "Digital marketing for farmers"],
    color: "#4c7031",
    url: "/services/marketing"
  },
  {
    icon: <FaSeedling size={28} />,
    title: "Mentorship & Peer Exchange Programs",
    description: "Linking seasoned farmers with emerging groups through structured mentorship and peer learning initiatives.",
    features: ["Technical mentoring by experienced farmers", "Leadership development programs", "Youth & women focused mentorship", "Peer-to-peer learning networks"],
    color: "#4c7031",
    url: "/services/mentorship"
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

  // --- COMPREHENSIVE SEO ENHANCEMENTS ---

  // 1. Breadcrumbs for Services Page
  const servicesPageBreadcrumbs = useMemo(() => [
    { name: "Home", url: "https://www.inofoafrica.org/" },
    { name: "Services", url: "https://www.inofoafrica.org/services" }
  ], []);

  // 2. Enhanced Services Page FAQs (for rich snippets)
  const servicesPageFaqs = useMemo(() => [
    {
      question: "What specific services does INOFO Africa offer for organic farmer organizations?",
      answer: "INOFO Africa offers six comprehensive services: 1) Advocacy & Policy Engagement for farmer rights and sustainable legislation, 2) Training & Capacity Building with farmer-led workshops and certification guidance, 3) Knowledge Exchange with technical manuals and indigenous practices database, 4) Networking & Continental Forums connecting farmers across borders, 5) Marketing & Market Access support for regional and international markets, and 6) Mentorship & Peer Exchange programs linking experienced and emerging farmers."
    },
    {
      question: "How can African farmer organizations access INOFO Africa's training programs?",
      answer: "Farmer organizations can access our training programs through membership in INOFO Africa. We offer regional training workshops, online webinars, and mentorship programs. Contact your local regional chapter or visit our 'Membership' page to join and access scheduled training events focused on agroecology, organic certification, climate resilience, and youth leadership development."
    },
    {
      question: "What market access support does INOFO Africa provide to smallholder organic farmers?",
      answer: "We provide comprehensive market access support including: connecting farmers to regional markets, facilitating export opportunities, supporting fair-trade certification, developing digital marketing strategies, organizing trade fairs, and creating direct links between producers and buyers. Our goal is to ensure African organic farmers receive fair value for their products in local and international markets."
    },
    {
      question: "How does INOFO Africa facilitate knowledge exchange among farmers across Africa?",
      answer: "We facilitate knowledge exchange through our open-source resource library containing technical manuals, case studies, and indigenous farming practices. We organize farmer exchange programs, online forums, regional meetings, and publish success stories. Our continental network allows farmers from different regions to share experiences and solutions through both digital platforms and in-person gatherings."
    },
    {
      question: "What advocacy work does INOFO Africa do for organic farming policies in Africa?",
      answer: "INOFO Africa advocates for organic farming policies at national and continental levels by engaging with government agencies, participating in policy dialogues, submitting position papers on land rights and food sovereignty, promoting climate-resilient agriculture legislation, and representing farmer interests in international forums like the African Union and UN bodies. We work to create enabling environments for sustainable agriculture across Africa."
    }
  ], []);

  // 3. Enhanced Structured Data for Services Page
  const servicesPageCustomSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "INOFO Africa Services - Comprehensive Support for Organic Farming",
    "description": "Complete range of services for African organic farmers including training, advocacy, market access, knowledge exchange, networking, and mentorship programs to support sustainable agriculture across the continent.",
    "url": "https://www.inofoafrica.org/services",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.inofoafrica.org#organization",
      "name": "INOFO Africa",
      "url": "https://www.inofoafrica.org",
      "logo": "https://www.inofoafrica.org/assets/logo.png",
      "description": "The Indigenous Organic Farmers Federation of Africa — farmer-led, agroecological, and rooted in local knowledge.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "services@inofoafrica.org",
        "availableLanguage": ["English", "French", "Portuguese", "Swahili"]
      }
    },
    "areaServed": {
      "@type": "Continent",
      "name": "Africa"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "INOFO Africa Services Catalog for Organic Farmers",
      "description": "Complete services portfolio for supporting organic agriculture development across Africa",
      "numberOfItems": services.length,
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "Organization",
            "name": "INOFO Africa"
          },
          "serviceType": "Agricultural Support Services",
          "areaServed": "Africa",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": `https://www.inofoafrica.org${service.url}`,
            "availableLanguage": ["English", "French", "Portuguese"]
          }
        }
      }))
    },
    "audience": {
      "@type": "Audience",
      "audienceType": ["Farmers", "Farmer Organizations", "Agricultural Cooperatives", "Agricultural Researchers", "Policy Makers"],
      "geographicArea": {
        "@type": "Continent",
        "name": "Africa"
      }
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Africa",
      "description": "All African countries and regions"
    }
  }), []);

  // 4. Additional Schema for Service Details
  const servicesDetailsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Detailed Service Descriptions - INOFO Africa",
    "description": "Comprehensive details of each service offered by INOFO Africa to support organic farming",
    "numberOfItems": services.length,
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "serviceType": "Organic Farming Support",
        "provider": {
          "@type": "Organization",
          "name": "INOFO Africa"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "0",
          "priceCurrency": "USD"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Farmers and Agricultural Organizations"
        }
      }
    }))
  };

  // 5. HowTo Schema for Service Access
  const howToAccessServicesSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Access INOFO Africa Services for Organic Farming Support",
    "description": "Step-by-step guide to accessing INOFO Africa's comprehensive services for organic farmers across Africa",
    "image": {
      "@type": "ImageObject",
      "url": heroImg
    },
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Review Available Services",
        "text": "Explore our six core service areas including advocacy, training, knowledge exchange, networking, market access, and mentorship to understand what support is available."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Join INOFO Africa Network",
        "text": "Become a member through our membership page to gain full access to all services and participate in our continental network."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Contact Regional Coordinator",
        "text": "Get in touch with your regional INOFO Africa coordinator to discuss specific service needs and access tailored support."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Participate in Training & Events",
        "text": "Attend workshops, webinars, and networking events to maximize the benefits of our service offerings."
      }
    ],
    "totalTime": "PT30M"
  };

  return (
    <>
      {/* Enhanced SEO Component */}
      <SEO
        title="Our Services | INOFO Africa - Comprehensive Support for Organic Farmers"
        description="Explore INOFO Africa's complete range of services: advocacy, training, market access, knowledge exchange, networking, and mentorship programs for organic farmers across Africa. Join our continental network for sustainable agriculture support."
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
          "African farmer development programs",
          "agricultural mentorship Africa",
          "continental farmer forums",
          "indigenous farming support",
          "climate resilient agriculture training",
          "women farmer empowerment Africa",
          "youth in agriculture programs",
          "fair-trade certification Africa",
          "agricultural capacity building",
          "food sovereignty initiatives Africa"
        ]}
        image="https://www.inofoafrica.org/assets/inofo-services-share.jpg"
        type="website"
        breadcrumbs={servicesPageBreadcrumbs}
        faqData={servicesPageFaqs}
        customSchema={servicesPageCustomSchema}
      />

      {/* Additional Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(servicesDetailsSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(howToAccessServicesSchema)}
      </script>

      <motion.main
        className="services-africa"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        role="main"
        aria-labelledby="services-hero-title"
        itemScope
        itemType="https://schema.org/Service"
      >
        {/* Hero Section */}
        <motion.header
          className="service_hero-header"
          style={{ backgroundImage: `url(${heroImg})` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          itemProp="image"
          itemScope
          itemType="https://schema.org/ImageObject"
        >
          <div className="hero-overlay" role="region" aria-label="Services hero section">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hero-content"
            >
              <h1 id="services-hero-title" itemProp="headline">Our Services for African Organic Farmers</h1>
              <p className="hero-subtitle" itemProp="description">
                Comprehensive support services for sustainable agriculture across the continent
              </p>
            </motion.div>
          </div>
          <meta itemProp="url" content={heroImg} />
          <meta itemProp="caption" content="INOFO Africa Services - Supporting Organic Farmers Across Africa" />
        </motion.header>

        {/* Services Intro */}
        <motion.section 
          className="services-intro" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          itemScope
          itemType="https://schema.org/WebPageElement"
        >
          <motion.div
            className="intro-content"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            itemProp="mainEntity"
          >
            <h2 itemProp="name">Comprehensive Guide for Organic Agriculture Development</h2>
            <p itemProp="description">
              We provide holistic support to organic farmers across Africa through six key service areas. 
              Each service addresses specific challenges while building a resilient, sustainable agricultural ecosystem.
            </p>
          </motion.div>
        </motion.section>

        {/* Services Grid */}
        <motion.section 
          className="services-showcase" 
          ref={sectionRef} 
          initial="hidden" 
          animate={controls} 
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          itemScope
          itemType="https://schema.org/OfferCatalog"
        >
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
                itemScope
                itemType="https://schema.org/Service"
                itemProp="itemListElement"
              >
                <meta itemProp="position" content={String(idx + 1)} />
                <div className="card-header">
                  <div className="card-icon" style={{ color: service.color }} aria-hidden="true">
                    {service.icon}
                  </div>
                  <div className="card-number" aria-hidden="true">
                    <span>0{idx + 1}</span>
                  </div>
                </div>
                <div className="card-content">
                  <h3 id={`service-card-${idx}-title`} itemProp="name">
                    {service.title}
                  </h3>
                  <p itemProp="description">{service.description}</p>
                  <AnimatePresence>
                    {selectedService === idx && (
                      <motion.div 
                        className="card-features" 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }} 
                        transition={{ duration: 0.3 }}
                        itemProp="offers"
                        itemScope
                        itemType="https://schema.org/Offer"
                      >
                        <meta itemProp="price" content="0" />
                        <meta itemProp="priceCurrency" content="USD" />
                        <meta itemProp="availability" content="https://schema.org/InStock" />
                        <ul>
                          {service.features.map((feature, featureIdx) => (
                            <li key={featureIdx}>
                              <FaCheckCircle className="feature-icon" aria-hidden="true" /> 
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link 
                          to={service.url} 
                          className="card-link" 
                          onClick={(e) => e.stopPropagation()}
                          itemProp="url"
                        >
                          Learn more about {service.title.toLowerCase()} 
                          <FaArrowRight className="link-arrow" aria-hidden="true" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="card-footer" aria-hidden="true">
                  <span className="expand-text">
                    {selectedService === idx ? "Click to collapse" : "Click to expand details"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <meta itemProp="name" content="INOFO Africa Services Catalog" />
          <meta itemProp="description" content="Complete range of services for organic farmers across Africa" />
          <meta itemProp="numberOfItems" content={String(services.length)} />
        </motion.section>

        {/* Featured Service */}
        <motion.section 
          className="featured-service" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          itemScope
          itemType="https://schema.org/Service"
        >
          <motion.div className="featured-content">
            <motion.div 
              className="featured-text" 
              initial={{ x: -50, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              itemProp="mainEntity"
            >
              <div className="featured-badge">
                <FaStar className="badge-icon" aria-hidden="true" />
                <span>Featured Service</span>
              </div>
              <h2 itemProp="name">Customized Training Programs for African Farmers</h2>
              <p itemProp="description">
                Partnering with local agricultural hubs for in-person and virtual training tailored to regional needs, 
                focusing on sustainable practices and climate resilience.
              </p>
              <div className="featured-highlights" itemProp="serviceAudience">
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
              <Link to="/services/training" className="btn-primary featured-btn" itemProp="url">
                <span>Explore Training Programs</span>
                <FaArrowRight className="btn-icon" aria-hidden="true" />
              </Link>
            </motion.div>
            <motion.div 
              className="featured-image" 
              initial={{ x: 50, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <div className={`image-container ${isImageLoaded ? "loaded" : ""}`}>
                <img 
                  src={journeyImg} 
                  alt="African farmers participating in training workshop for sustainable agriculture" 
                  onLoad={() => setIsImageLoaded(true)} 
                  className="content-image" 
                  itemProp="url"
                  loading="lazy"
                />
              </div>
              <meta itemProp="caption" content="INOFO Africa training workshop for organic farmers" />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Impact Section */}
        <motion.section 
          className="impact-section" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <motion.div 
            className="impact-content" 
            initial={{ y: 30, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6 }}
            itemProp="mainEntity"
          >
            <h2 itemProp="name">Our Impact Across African Agriculture</h2>
            <div className="impact-grid">
              <div className="impact-card" itemProp="itemListElement">
                <meta itemProp="position" content="1" />
                <div className="impact-icon" aria-hidden="true">
                  <FaUsers />
                </div>
                <h3 itemProp="name">Community Building</h3>
                <p itemProp="description">Connecting farmers and agricultural organizations across 20+ African countries through our continental network</p>
              </div>
              <div className="impact-card" itemProp="itemListElement">
                <meta itemProp="position" content="2" />
                <div className="impact-icon" aria-hidden="true">
                  <FaLeaf />
                </div>
                <h3 itemProp="name">Sustainable Practices</h3>
                <p itemProp="description">Promoting ecological farming methods and organic certification for long-term food security and environmental health</p>
              </div>
              <div className="impact-card" itemProp="itemListElement">
                <meta itemProp="position" content="3" />
                <div className="impact-icon" aria-hidden="true">
                  <FaGlobeAfrica />
                </div>
                <h3 itemProp="name">Policy Influence</h3>
                <p itemProp="description">Advocating for farmer-friendly policies and sustainable agriculture legislation at continental level forums</p>
              </div>
            </div>
            <meta itemProp="numberOfItems" content="3" />
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="cta-section" 
          initial={{ scale: 0.98, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true, margin: "-100px" }}
          itemScope
          itemType="https://schema.org/ContactPage"
        >
          <div className="cta-content">
            <motion.div 
              className="cta-image" 
              initial={{ y: 30, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.6 }}
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <div className={`image-container ${isImageLoaded ? "loaded" : ""}`}>
                <img 
                  src={img} 
                  alt="African farmers collaborating in organic agriculture development meeting" 
                  onLoad={() => setIsImageLoaded(true)} 
                  className="content-image" 
                  itemProp="url"
                  loading="lazy"
                />
              </div>
              <meta itemProp="caption" content="INOFO Africa members collaborating on agricultural projects" />
            </motion.div>
            <motion.div 
              className="cta-text" 
              initial={{ y: 30, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              itemProp="mainEntity"
            >
              <h2 itemProp="name">Ready to Transform African Agriculture?</h2>
              <p itemProp="description">
                Join INOFO Africa as a partner, donor, or farmer representative to scale organic agriculture 
                and promote sustainable farming practices across the continent.
              </p>
              <div className="cta-buttons">
                <Link to="/membership" className="btn-secondary secondary-btn" itemProp="url">
                  <span>Join Our Continental Network</span>
                  <FaHandshake className="btn-icon" aria-hidden="true" />
                </Link>
                <Link to="/contact" className="btn-secondary secondary-btn" itemProp="url">
                  <span>Get In Touch About Services</span>
                  <FaArrowRight className="btn-icon" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Hidden structured data for all services */}
        <div style={{ display: 'none' }} itemScope itemType="https://schema.org/ItemList">
          {services.map((service, index) => (
            <div key={index} itemScope itemType="https://schema.org/ListItem">
              <meta itemProp="position" content={String(index + 1)} />
              <div itemScope itemType="https://schema.org/Service" itemProp="item">
                <meta itemProp="name" content={service.title} />
                <meta itemProp="description" content={service.description} />
                <meta itemProp="serviceType" content="Organic Farming Support" />
                <meta itemProp="provider" content="INOFO Africa" />
                <meta itemProp="areaServed" content="Africa" />
              </div>
            </div>
          ))}
        </div>

        <Newsletter />
      </motion.main>
    </>
  );
};

export default ServicesAfrica;