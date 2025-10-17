import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import '../styles/MembershipAfrica.css';
import Newsletter from '../components/Newsletter';
import MembersTable from '../components/LogoCarousel';
import heroImg from "../assets/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg";

const MembershipAfrica = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      window.scrollTo({
        top: headerRef.current.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  }, []);

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const handleEOIClick = () => {
    setShowLanguagePopup(true);
  };

  const handleLanguageSelect = (url: string) => {
    window.open(url, '_blank');
    setShowLanguagePopup(false);
  };

  return (
    <motion.main 
      className="membership-africa"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.header 
        className="member_hero-header" 
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        ref={headerRef}
      >
        <div className="hero-overlay">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Membership & Affiliates
          </motion.h1>
        </div>
      </motion.header>

      {/* Membership Process Section */}
      <motion.section 
        className="content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-content" variants={itemVariants}>
          <h2>Membership Process</h2>
          <p className="section-subtitle">Join INOFO Africa through our streamlined membership process</p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Eligibility</h3>
                <p>Membership to INOFO Africa is through a legally registered farmers' organization, group, or association that practices organic agriculture or agroecology, which is hereby referred to as an OFO. Membership is not by individual farmers.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Expression of Interest</h3>
                <p>Interested OFOs shall fill in the Expression of Interest (EOI) form electronically and submit it to the INOFO Africa Secretariat for assessment, working closely with the sub-regional and national chapters to ensure proper verification and approval.</p>
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
                <p>A mandatory one-time membership fee of ten US dollars (USD 10) or its equivalent in local currency shall be paid to the National Chapter to support the coordinating role at the national level.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Certificate & Ongoing Support</h3>
                <p>A copy of the payment shall be shared with the INOFO Africa Secretariat, which will issue a membership certificate. Voluntary periodic subscriptions and donations from members are also highly encouraged.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Membership Types Section */}
      <motion.section 
        className="content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-content" variants={itemVariants}>
          <h2>Choose Your Path</h2>
          <p className="section-subtitle">View the membership that aligns with your goals</p>
          
          <div className="types-grid">
            <motion.div 
              className={`type-card ${activeCard === 1 ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => setActiveCard(1)}
              aria-labelledby="org-member-title"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,13.6 14.1,15.3 12,15.3C9.9,15.3 8.2,13.6 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M7,18V10H17V18H7Z" />
                </svg>
              </div>
              <h3 id="org-member-title">Organisational Member</h3>
              <p>
                Ideal for farmer organisations, cooperatives, or NGOs supporting organic agriculture.
              </p>
              <div className="benefits-dropdown">
                <button className="benefits-toggle" aria-expanded={activeCard === 1}>
                  View Benefits
                  <svg className="dropdown-arrow" viewBox="0 0 24 24">
                    <path d="M7,10L12,15L17,10H7Z" />
                  </svg>
                </button>
                <ul className={`benefits-list ${activeCard === 1 ? 'visible' : ''}`}>
                  <li>
                    <svg className="check-icon" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    Access to policy advocacy platforms
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    Capacity-building training & peer learning
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    Networking with continental peers
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    Exclusive resource downloads
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className={`type-card ${activeCard === 2 ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(2)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => setActiveCard(2)}
              aria-labelledby="affiliate-title"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17V16H9V14H11V13H13V14H15V16H13V17H11M12,7A2,2 0 0,0 10,9A2,2 0 0,0 12,11A2,2 0 0,0 14,9A2,2 0 0,0 12,7Z" />
                </svg>
              </div>
              <h3 id="affiliate-title">Affiliate Partner</h3>
              <p>
                Designed for researchers, businesses, and supporters aligned with organic farming progress in Africa.
              </p>
              <div className="benefits-dropdown">
                <button className="benefits-toggle" aria-expanded={activeCard === 2}>
                  View Benefits
                  <svg className="dropdown-arrow" viewBox="0 0 24 24">
                    <path d="M7,10L12,15L17,10H7Z" />
                  </svg>
                </button>
                <ul className={`benefits-list ${activeCard === 2 ? 'visible' : ''}`}>
                  <li>
                    <svg className="check-icon" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    Invitation to partner events
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    Quarterly newsletter and reports
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    Brand visibility on INOFO platforms
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section 
        className="content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-content" variants={itemVariants}>
          <h2>Still Have Questions?</h2>
          <p>
            Our dedicated Membership Coordinator is ready to assist with guidance, bulk applications, or custom partnership agreements.
          </p>
          <div className="cta-buttons">
            <Link to="mailto:membership@inofoafrica.org" className="btn-primary">
              <svg className="btn-icon" viewBox="0 0 24 24">
                <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
              </svg>
              <span>Email Us</span>
            </Link>
            <a href="tel:+1234567890" className="btn-secondary">
              <svg className="btn-icon" viewBox="0 0 24 24">
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
              </svg>
              <span>Call +123 456 7890</span>
            </a>
          </div>
        </motion.div>
      </motion.section>

      <MembersTable />
      <Newsletter/>

      {/* Language Selection Popup */}
      {showLanguagePopup && (
        <div className="language-popup-overlay">
          <div className="language-popup">
            <div className="popup-header">
              <h3>Select EOI Form Language</h3>
              <button 
                className="close-popup" 
                onClick={() => setShowLanguagePopup(false)}
                aria-label="Close language selection"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              </button>
            </div>
            <div className="language-options">
              <button 
                className="language-option"
                onClick={() => handleLanguageSelect('https://ee.kobotoolbox.org/x/iVb7CbtM')}
              >
                <span className="language-flag">🇬🇧</span>
                <span className="language-name">English</span>
                <svg className="external-link-icon" viewBox="0 0 24 24">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                </svg>
              </button>
              <button 
                className="language-option"
                onClick={() => handleLanguageSelect('https://ee.kobotoolbox.org/x/9UG0Pyuh')}
              >
                <span className="language-flag">🇫🇷</span>
                <span className="language-name">Français</span>
                <svg className="external-link-icon" viewBox="0 0 24 24">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                </svg>
              </button>
              <button 
                className="language-option"
                onClick={() => handleLanguageSelect('https://ee.kobotoolbox.org/x/ShrPiKPH')}
              >
                <span className="language-flag">🇵🇹</span>
                <span className="language-name">Português</span>
                <svg className="external-link-icon" viewBox="0 0 24 24">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.main>
  );
};

export default MembershipAfrica;