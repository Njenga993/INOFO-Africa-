import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaImages, FaExpand, FaCompress, FaArrowRight, FaArrowLeft, FaPlay, FaPause } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
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
import progressImg7 from "../assets/AM.jpeg";
import progressImg8 from "../assets/AM_1.jpeg";
import progressImg9 from "../assets/AM_2.jpeg";
import progressImg10 from "../assets/AM_3.jpeg";
import progressImg11 from "../assets/AM_4.jpeg";
import progressImg12 from "../assets/AM_5.jpeg";
import progressImg13 from "../assets/AM_6.jpeg";
import progressImg14 from "../assets/AM_7.jpeg";
import progressImg15 from "../assets/AM_8.jpeg";
import progressImg16 from "../assets/AM_11.jpeg";
import progressImg17 from "../assets/AM_10.jpeg";
import progressImg18 from "../assets/AM_11.jpeg";
import progressImg19 from "../assets/AM_12.jpeg";
import progressImg20 from "../assets/A_9M.jpeg";


const ResourcesPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<number | null>(null);

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

  // Extended progress gallery images with 20+ photos
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
    },
    // Adding more images to reach 20+
    {
      id: 7,
      src: progressImg7,
      title: "Water Conservation Project",
      description: "Installing new irrigation systems to conserve water resources",
      category: "Infrastructure"
    },
    {
      id: 8,
      src: progressImg8,
      title: "Women Farmers Initiative",
      description: "Empowering women farmers through education and resources",
      category: "Community"
    },
    {
      id: 9,
      src: progressImg9,
      title: "Soil Testing Workshop",
      description: "Farmers learning to test soil for optimal crop growth",
      category: "Training"
    },
    {
      id: 10,
      src: progressImg10,
      title: "Organic Certification",
      description: "Celebrating our first batch of certified organic produce",
      category: "Achievement"
    },
    {
      id: 11,
      src: progressImg11,
      title: "Equipment Distribution",
      description: "Providing modern farming equipment to rural communities",
      category: "Resources"
    },
    {
      id: 12,
      src: progressImg12,
      title: "School Garden Program",
      description: "Teaching children about agriculture through school gardens",
      category: "Education"
    },
    {
      id: 13,
      src: progressImg13,
      title: "Pest Management Training",
      description: "Natural pest control methods to protect crops without chemicals",
      category: "Training"
    },
    {
      id: 14,
      src: progressImg14,
      title: "Community Kitchen",
      description: "Building a community kitchen for processing farm produce",
      category: "Infrastructure"
    },
    {
      id: 15,
      src: progressImg15,
      title: "Digital Farming Tools",
      description: "Introducing mobile apps for weather forecasting and market prices",
      category: "Technology"
    },
    {
      id: 16,
      src: progressImg16,
      title: "Beekeeping Initiative",
      description: "Starting beekeeping projects to supplement farmer income",
      category: "Diversification"
    },
    {
      id: 17,
      src: progressImg17,
      title: "Renewable Energy Installation",
      description: "Solar panels to power irrigation systems and storage facilities",
      category: "Sustainability"
    },
    {
      id: 18,
      src: progressImg18,
      title: "Farmers' Cooperative",
      description: "Establishing a cooperative for better market access and bargaining power",
      category: "Community"
    },
    {
      id: 19,
      src: progressImg19,
      title: "Nutrition Education",
      description: "Teaching communities about nutrition and diverse diets",
      category: "Health"
    },
    {
      id: 20,
      src: progressImg20,
      title: "Climate Resilience Workshop",
      description: "Helping farmers adapt to changing climate patterns",
      category: "Training"
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === progressImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, progressImages.length]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setIsPlaying(false);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(currentImageIndex === 0 ? progressImages.length - 1 : currentImageIndex - 1);
    } else {
      setCurrentImageIndex(currentImageIndex === progressImages.length - 1 ? 0 : currentImageIndex + 1);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Get visible thumbnails (current, 3 before, 3 after)
  const getVisibleThumbnails = () => {
    const thumbnails = [];
    const range = 3;
    
    for (let i = -range; i <= range; i++) {
      let index = currentImageIndex + i;
      
      // Handle wrap-around
      if (index < 0) {
        index = progressImages.length + index;
      } else if (index >= progressImages.length) {
        index = index % progressImages.length;
      }
      
      thumbnails.push({
        index,
        isActive: i === 0
      });
    }
    
    return thumbnails;
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

      {/* Progress Gallery Section - Redesigned */}
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

        {/* Main Gallery Display */}
        <motion.div 
          className="slideshow-container"
          variants={itemVariants}
        >
          <div className="main-image-container">
            <img 
              src={progressImages[currentImageIndex].src} 
              alt={progressImages[currentImageIndex].title}
              className="main-image"
              onClick={() => openLightbox(currentImageIndex)}
            />
            
            <div className="image-info">
              <h3>{progressImages[currentImageIndex].title}</h3>
              <p>{progressImages[currentImageIndex].description}</p>
              <span className="category-tag">{progressImages[currentImageIndex].category}</span>
            </div>
            
            <div className="view-indicator" onClick={() => openLightbox(currentImageIndex)}>
              <FaExpand />
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="slideshow-controls">
            <button 
              className="nav-btn prev-btn"
              onClick={() => navigateImage('prev')}
              aria-label="Previous image"
            >
              <FaArrowLeft />
            </button>
            
            <div className="play-pause-container">
              <button 
                className="play-pause-btn"
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
            
            <button 
              className="nav-btn next-btn"
              onClick={() => navigateImage('next')}
              aria-label="Next image"
            >
              <FaArrowRight />
            </button>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="thumbnail-container">
            <div className="thumbnail-scroll">
              {getVisibleThumbnails().map((thumb) => (
                <div
                  key={thumb.index}
                  className={`thumbnail ${thumb.isActive ? 'active' : ''}`}
                  onClick={() => goToImage(thumb.index)}
                >
                  <img 
                    src={progressImages[thumb.index].src} 
                    alt={progressImages[thumb.index].title}
                  />
                </div>
              ))}
            </div>
            
            <div className="thumbnail-indicators">
              {progressImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="image-counter">
            {currentImageIndex + 1} / {progressImages.length}
          </div>
        </motion.div>
      </motion.section>

      {/* Lightbox */}
      {isLightboxOpen && (
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
              <h3>{progressImages[currentImageIndex].title}</h3>
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
                src={progressImages[currentImageIndex].src} 
                alt={progressImages[currentImageIndex].title}
                className="lightbox-image"
              />
            </div>
            
            <div className="lightbox-info">
              <p className="lightbox-description">
                {progressImages[currentImageIndex].description}
              </p>
              <div className="lightbox-meta">
                <span className="lightbox-category">
                  {progressImages[currentImageIndex].category}
                </span>
                <span className="lightbox-counter">
                  {currentImageIndex + 1} / {progressImages.length}
                </span>
              </div>
            </div>
            
            <div className="lightbox-navigation">
              <button 
                className="nav-btn prev-btn"
                onClick={() => navigateImage('prev')}
                aria-label="Previous image"
              >
                <FaArrowLeft />
              </button>
              
              <button 
                className="play-pause-btn"
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              
              <button 
                className="nav-btn next-btn"
                onClick={() => navigateImage('next')}
                aria-label="Next image"
              >
                <FaArrowRight />
              </button>
            </div>
            
            {/* Thumbnail Navigation in Lightbox */}
            <div className="lightbox-thumbnails">
              {progressImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`lightbox-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.title}
                  />
                </div>
              ))}
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