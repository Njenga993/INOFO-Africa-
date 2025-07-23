import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import '../styles/MembershipAfrica.css';

const MembershipAfrica = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isHandbookDownloading, setIsHandbookDownloading] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    // Smooth scroll to offset for fixed headers
    if (headerRef.current) {
      window.scrollTo({
        top: headerRef.current.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleDownload = () => {
    setIsHandbookDownloading(true);
    // Simulate download delay
    setTimeout(() => {
      setIsHandbookDownloading(false);
      // Trigger actual download
      const link = document.createElement('a');
      link.href = 'INOFO-Africa-membership-handbook.docx';
      link.download = 'INOFO-Africa-membership-handbook.docx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <main className="membership-africa">
      {/* Animated background elements */}
      <div className="bg-pattern">
        <div className="organic-shape-1"></div>
        <div className="organic-shape-2"></div>
      </div>
      
      <header className="membership-header" ref={headerRef}>
        <div className="header-content">
          <h1>
            <span className="title-gradient">Membership & Affiliates</span>
          </h1>
          <p className="lead">
            Join INOFO Africa — a collective of farmer organisations driving organic transformation across the continent.
          </p>
          <div className="scroll-indicator">
            <span>Explore options</span>
            <div className="arrow-down"></div>
          </div>
        </div>
      </header>

      <section className="membership-types">
        <div className="section-intro">
          <h2>
            <span className="section-title-decor">Choose Your Path</span>
          </h2>
          <p className="section-subtitle">Select the membership that aligns with your goals</p>
        </div>
        
        <div className="types-grid">
          <div 
            className={`type-card ${activeCard === 1 ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
            onClick={() => setActiveCard(1)}
            aria-labelledby="org-member-title"
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
            <Link to="/membership-form" className="btn-primary" aria-label="Apply for Organisational Membership">
              <span>Apply Now</span>
              <svg className="btn-icon" viewBox="0 0 24 24">
                <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
              </svg>
            </Link>
          </div>
          
          <div 
            className={`type-card ${activeCard === 2 ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
            onClick={() => setActiveCard(2)}
            aria-labelledby="affiliate-title"
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
            <Link to="/membership-form" className="btn-primary" aria-label="Become an Affiliate Partner">
              <span>Become Partner</span>
              <svg className="btn-icon" viewBox="0 0 24 24">
                <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="downloads">
        <div className="download-container">
          <div className="download-content">
            <h2>Ready to Join?</h2>
            <p>
              Get detailed information and guidelines in our Membership & Affiliate Handbook:
            </p>
            <button 
              onClick={handleDownload} 
              className={`btn-secondary ${isHandbookDownloading ? 'downloading' : ''}`}
              disabled={isHandbookDownloading}
              aria-label="Download Membership Handbook"
            >
              {isHandbookDownloading ? (
                <>
                  <span className="download-spinner"></span>
                  <span>Preparing Download...</span>
                </>
              ) : (
                <>
                  <svg className="download-icon" viewBox="0 0 24 24">
                    <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                  </svg>
                  <span>Download Handbook (DOCX)</span>
                </>
              )}
            </button>
            <div className="file-info">
              <svg className="file-icon" viewBox="0 0 24 24">
                <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
              </svg>
              <span>2.4 MB · Updated June 2023</span>
            </div>
          </div>
          <div className="download-visual">
            <div className="document-preview">
              <div className="page"></div>
              <div className="page"></div>
              <div className="page"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-contact">
        <div className="cta-container">
          <h2>Still Have Questions?</h2>
          <p>
            Our dedicated Membership Coordinator is ready to assist with guidance, bulk applications, or custom partnership agreements.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              <svg className="btn-icon" viewBox="0 0 24 24">
                <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
              </svg>
              <span>Email Us</span>
            </Link>
            <a href="tel:+1234567890" className="btn-tertiary">
              <svg className="btn-icon" viewBox="0 0 24 24">
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
              </svg>
              <span>Call +123 456 7890</span>
            </a>
          </div>
        </div>
      </section>

      <div className="floating-cta">
        <Link to="/membership-form" className="btn-primary">
          <span>Start Your Application</span>
          <svg className="btn-icon" viewBox="0 0 24 24">
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        </Link>
      </div>
    </main>
  );
};

export default MembershipAfrica;