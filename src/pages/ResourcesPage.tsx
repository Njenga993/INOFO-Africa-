import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaImages, FaExpand, FaCompress, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import "../styles/ResourcesPage.css";
import Newsletter from "../components/Newsletter";
import heroImg from "../assets/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg";
import comingSoonImg from "../assets/talk.webp";

// Sample progress images - you can replace these with your actual images
import progressImg1 from "../assets/african.webp";
import progressImg2 from "../assets/feet.webp";
import progressImg3 from "../assets/uganda.jpg";
import progressImg4 from "../assets/p.webp";
import progressImg5 from "../assets/all.webp";
import progressImg6 from "../assets/Tshawekazi_.jpg";

const ResourcesPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [_isExpanded, setIsExpanded] = useState(false);

  // Animation variants
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
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  // Progress gallery images
  const progressImages = [
    {
      id: 1,
      src: progressImg1,
      title: "Farmer Training Workshop",
      description: "Hands-on training session with local farmers learning sustainable practices",
      category: "Training"
    },
    {
      id: 2,
      src: progressImg2,
      title: "Community Harvest",
      description: "Successful harvest season showcasing the results of organic farming methods",
      category: "Harvest"
    },
    {
      id: 3,
      src: progressImg3,
      title: "Seed Distribution",
      description: "Distribution of quality seeds to farming communities across the region",
      category: "Seeds"
    },
    {
      id: 4,
      src: progressImg4,
      title: "Market Day Success",
      description: "Farmers showcasing their organic produce at local markets",
      category: "Market"
    },
    {
      id: 5,
      src: progressImg5,
      title: "Youth Engagement",
      description: "Young farmers learning modern agricultural techniques",
      category: "Youth"
    },
    {
      id: 6,
      src: progressImg6,
      title: "Conference Highlights",
      description: "Key moments from our annual farmers' conference",
      category: "Events"
    }
  ];

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    setIsExpanded(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsExpanded(false);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = progressImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? progressImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === progressImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(progressImages[newIndex].id);
  };

  return (
    <motion.main
      className="resources-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
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
        </div>
      </motion.header>

      {/* Coming Soon Section */}
      <motion.section
        className="coming-soon-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="coming-soon-container">
          <motion.div 
            className="coming-soon-content"
            variants={itemVariants}
          >
            <div className="coming-soon-icon">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10 Z" fill="none" stroke="var(--primary-green)" strokeWidth="8"/>
                <path d="M30,50 L45,65 L70,35" fill="none" stroke="var(--accent-gold)" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </div>
            <h2> Something Amazing is Coming Soon...</h2>
            <p>
              We're carefully cultivating valuable resources to help farmers and agricultural 
              professionals thrive. Our team is working diligently to bring you:
            </p>
            
            <ul className="resource-list">
              <li> News & Events updates</li>
              <li> Educational Publications</li>
              <li> Practical Farmer Tools</li>
              <li> Market Insights</li>
              <li> Sustainable Practices Guides</li>
            </ul>
            
            <p className="coming-soon-message">
              <strong>Check back soon!</strong> We're planting the seeds for your success 
              and can't wait to share these resources with you.
            </p>
            
            <div className="progress-container">
              <div className="progress-text">Resource development in progress</div>
              <div className="progress-bar">
                <motion.div 
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </div>
              <div className="progress-percentage">65% done</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="coming-soon-image"
            variants={itemVariants}
          >
            <img src={comingSoonImg} alt="Resources coming soon" />
            <div className="floating-tag">Coming Soon</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Progress Gallery Section */}
      <motion.section
        className="progress-gallery-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="gallery-header">
          <motion.div variants={itemVariants}>
            <h2 className="gallery-title">
              <FaImages className="gallery-icon" />
              Our Progress Gallery
            </h2>
            <p className="gallery-subtitle">
              Enjoy the pictures below as we finalize on the resources. 
              These images showcase our ongoing work and the impact we're making together.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="gallery-grid"
          variants={containerVariants}
        >
          {progressImages.map((image) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              onClick={() => openLightbox(image.id)}
            >
              <div className="gallery-image-container">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="gallery-image"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                    <span className="category-tag">{image.category}</span>
                  </div>
                </div>
                <div className="view-indicator">
                  <FaExpand />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div 
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <motion.div 
            className="lightbox-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-header">
              <h3>{progressImages.find(img => img.id === selectedImage)?.title}</h3>
              <button 
                className="close-lightbox"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <FaCompress />
              </button>
            </div>
            
            <div className="lightbox-image-container">
              <img 
                src={progressImages.find(img => img.id === selectedImage)?.src} 
                alt={progressImages.find(img => img.id === selectedImage)?.title}
                className="lightbox-image"
              />
            </div>
            
            <div className="lightbox-info">
              <p className="lightbox-description">
                {progressImages.find(img => img.id === selectedImage)?.description}
              </p>
              <div className="lightbox-meta">
                <span className="lightbox-category">
                  {progressImages.find(img => img.id === selectedImage)?.category}
                </span>
                <span className="lightbox-counter">
                  {progressImages.findIndex(img => img.id === selectedImage) + 1} / {progressImages.length}
                </span>
              </div>
            </div>
            
            <div className="lightbox-navigation">
              <button 
                className="nav-btn prev-btn"
                onClick={() => navigateImage('prev')}
                aria-label="Previous image"
              >
                <FaArrowRight />
              </button>
              <button 
                className="nav-btn next-btn"
                onClick={() => navigateImage('next')}
                aria-label="Next image"
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Newsletter Signup */}
      <Newsletter />
    </motion.main>
  );
};

export default ResourcesPage;