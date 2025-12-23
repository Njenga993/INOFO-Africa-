import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaImages, FaExpand, FaCompress, FaArrowRight, FaArrowLeft, FaPlay, FaPause } from "react-icons/fa";
import { useState, useEffect, useRef, useMemo } from "react";
import "../styles/ResourcesPage.css";
import Newsletter from "../components/Newsletter";
import SEO from "../components/SEO";

// ✅ Images
import heroImg from "../assets/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg";
import comingSoonImg from "../assets/talk.webp";

// Sample progress images
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
import progressImg16 from "../assets/A_9M.jpeg";
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
  const progressImages = useMemo(() => [
    {
      id: 1,
      src: progressImg1,
      title: "Farmer Training Workshop",
      description: "Hands-on training session with local farmers learning sustainable practices",
      category: "Training",
      alt: "African farmers participating in a workshop about organic farming techniques"
    },
    {
      id: 2,
      src: progressImg2,
      title: "Community Harvest",
      description: "Successful harvest season showcasing the results of organic farming methods",
      category: "Harvest",
      alt: "Community members harvesting organic produce together in a field"
    },
    {
      id: 3,
      src: progressImg3,
      title: "Seed Distribution",
      description: "Distribution of quality seeds to farming communities across the region",
      category: "Seeds",
      alt: "INOFO Africa volunteers distributing indigenous seeds to local farmers"
    },
    {
      id: 4,
      src: progressImg4,
      title: "Market Day Success",
      description: "Farmers showcasing their organic produce at local markets",
      category: "Market",
      alt: "Farmers displaying their organic vegetables at an African market stall"
    },
    {
      id: 5,
      src: progressImg5,
      title: "Youth Engagement",
      description: "Young farmers learning modern agricultural techniques",
      category: "Youth",
      alt: "Young African farmers learning sustainable agriculture practices"
    },
    {
      id: 6,
      src: progressImg6,
      title: "Conference Highlights",
      description: "Key moments from our annual farmers' conference",
      category: "Events",
      alt: "INOFO Africa annual conference with farmers from across the continent"
    },
    {
      id: 7,
      src: progressImg7,
      title: "Water Conservation Project",
      description: "Installing new irrigation systems to conserve water resources",
      category: "Infrastructure",
      alt: "Installation of water irrigation system for sustainable farming"
    },
    {
      id: 8,
      src: progressImg8,
      title: "Women Farmers Initiative",
      description: "Empowering women farmers through education and resources",
      category: "Community",
      alt: "Women farmers group discussion about organic agriculture"
    },
    {
      id: 9,
      src: progressImg9,
      title: "Soil Testing Workshop",
      description: "Farmers learning to test soil for optimal crop growth",
      category: "Training",
      alt: "Farmers conducting soil tests for organic farming"
    },
    {
      id: 10,
      src: progressImg10,
      title: "Organic Certification",
      description: "Celebrating our first batch of certified organic produce",
      category: "Achievement",
      alt: "Organic certification ceremony for INOFO Africa member farms"
    },
    {
      id: 11,
      src: progressImg11,
      title: "Equipment Distribution",
      description: "Providing modern farming equipment to rural communities",
      category: "Resources",
      alt: "Distribution of farming equipment to rural African communities"
    },
    {
      id: 12,
      src: progressImg12,
      title: "School Garden Program",
      description: "Teaching children about agriculture through school gardens",
      category: "Education",
      alt: "Children learning organic farming in school garden program"
    },
    {
      id: 13,
      src: progressImg13,
      title: "Pest Management Training",
      description: "Natural pest control methods to protect crops without chemicals",
      category: "Training",
      alt: "Training session on natural pest management for organic farms"
    },
    {
      id: 14,
      src: progressImg14,
      title: "Community Kitchen",
      description: "Building a community kitchen for processing farm produce",
      category: "Infrastructure",
      alt: "Community kitchen construction for processing organic produce"
    },
    {
      id: 15,
      src: progressImg15,
      title: "Digital Farming Tools",
      description: "Introducing mobile apps for weather forecasting and market prices",
      category: "Technology",
      alt: "Farmers using digital tools for agriculture management"
    },
    {
      id: 16,
      src: progressImg16,
      title: "Beekeeping Initiative",
      description: "Starting beekeeping projects to supplement farmer income",
      category: "Diversification",
      alt: "Beekeeping training as part of income diversification program"
    },
    {
      id: 17,
      src: progressImg17,
      title: "Renewable Energy Installation",
      description: "Solar panels to power irrigation systems and storage facilities",
      category: "Sustainability",
      alt: "Solar panel installation for renewable energy in farming"
    },
    {
      id: 18,
      src: progressImg18,
      title: "Farmers' Cooperative",
      description: "Establishing a cooperative for better market access and bargaining power",
      category: "Community",
      alt: "Farmers cooperative meeting for better market access"
    },
    {
      id: 19,
      src: progressImg19,
      title: "Nutrition Education",
      description: "Teaching communities about nutrition and diverse diets",
      category: "Health",
      alt: "Nutrition education workshop for farming communities"
    },
    {
      id: 20,
      src: progressImg20,
      title: "Climate Resilience Workshop",
      description: "Helping farmers adapt to changing climate patterns",
      category: "Training",
      alt: "Climate resilience workshop for African farmers"
    },
  ], []);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === progressImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
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

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // --- ENHANCED SEO FEATURES ---

  // 1. Breadcrumbs for Resources Page
  const resourcesPageBreadcrumbs = [
    { name: "Home", url: "https://www.inofoafrica.org/" },
    { name: "Resources", url: "https://www.inofoafrica.org/resources" }
  ];

  // 2. Resources Page-Specific FAQs (enhanced for better rich snippets)
  const resourcesPageFaqs = [
    {
      question: "What kind of resources does INOFO Africa offer to organic farmers?",
      answer: "INOFO Africa provides comprehensive resources including educational publications on agroecology, practical guides for organic certification, case studies on sustainable farming practices, market access tools, weather forecasting apps, and our visual progress gallery showcasing successful farmer-led initiatives across Africa."
    },
    {
      question: "How often are new farming resources added to INOFO Africa's database?",
      answer: "We continuously develop and update resources quarterly. New materials are announced through our newsletter subscription, social media channels, and directly on this Resources page. Seasonal guides are updated before each planting season to ensure relevance."
    },
    {
      question: "Can local farming cooperatives contribute their success stories to INOFO Africa's resources?",
      answer: "Yes! INOFO Africa actively encourages member organizations and farming cooperatives to submit their success stories, case studies, and traditional knowledge. All contributions are reviewed by our technical committee and can be featured in our publications, gallery, or as downloadable resources for the wider farming community."
    },
    {
      question: "Are INOFO Africa's resources available in multiple African languages?",
      answer: "We prioritize accessibility by offering key resources in English, French, Portuguese, Swahili, and major regional languages. Our goal is to make organic farming knowledge accessible to all African farmers regardless of language barriers."
    },
    {
      question: "How can farmers access INOFO Africa's training materials if they have limited internet connectivity?",
      answer: "We provide offline solutions including printed manuals, USB drives with downloadable content for community centers, and mobile-friendly PDFs that can be shared via Bluetooth. Contact your regional INOFO Africa coordinator for physical resource distribution options."
    }
  ];

  // 3. Enhanced Custom Structured Data for Resources Page
  const resourcesPageCustomSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Resources & Progress Gallery | INOFO Africa",
    "description": "Explore INOFO Africa's comprehensive farming resources and visual progress gallery. Access educational materials, organic farming guides, market tools, and see impactful images from our work promoting agroecology across Africa.",
    "url": "https://www.inofoafrica.org/resources",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.inofoafrica.org#organization",
      "name": "INOFO Africa",
      "url": "https://www.inofoafrica.org",
      "logo": "https://www.inofoafrica.org/assets/logo.png",
      "description": "The Indigenous Organic Farmers Federation of Africa — farmer-led, agroecological, and rooted in local knowledge."
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.inofoafrica.org/resources"
    },
    "image": {
      "@type": "ImageObject",
      "url": heroImg,
      "width": "1200",
      "height": "630",
      "caption": "INOFO Africa Resources - Supporting Organic Farmers Across Africa"
    },
    // Image gallery as ItemList with enhanced metadata
    "hasPart": {
      "@type": "ItemList",
      "name": "INOFO Africa Progress Gallery - Visual Documentation of Farmer Success",
      "description": "A visual journey showcasing INOFO Africa's impact across Africa through training workshops, community harvests, infrastructure projects, and farmer empowerment initiatives.",
      "numberOfItems": progressImages.length,
      "itemListElement": progressImages.map((image, index) => ({
        "@type": "ImageObject",
        "position": index + 1,
        "name": image.title,
        "description": image.description,
        "url": image.src,
        "contentUrl": image.src,
        "thumbnailUrl": image.src,
        "caption": image.description,
        "keywords": ["organic farming", "agroecology", "Africa agriculture", image.category.toLowerCase()],
        "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
        "acquireLicensePage": "https://www.inofoafrica.org/image-usage"
      }))
    },
    // Additional schema for upcoming resources
    "about": {
      "@type": "Thing",
      "name": "Organic Farming Resources",
      "description": "Educational materials and tools for sustainable agriculture in Africa"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": ["Farmers", "Agricultural Professionals", "Researchers", "Policy Makers"]
    }
  };

  // 4. Additional HowTo schema for resource usage
  const howToUseResourcesSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use INOFO Africa's Farming Resources",
    "description": "Step-by-step guide to accessing and utilizing INOFO Africa's comprehensive farming resources",
    "image": {
      "@type": "ImageObject",
      "url": heroImg
    },
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Internet Access"
      },
      {
        "@type": "HowToSupply",
        "name": "Email Address for Newsletter"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Computer or Mobile Device"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Browse Available Resources",
        "text": "Explore our resource categories including training materials, market tools, and practical guides."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Subscribe to Newsletter",
        "text": "Get notified about new resources and updates by subscribing to our mailing list."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Download Materials",
        "text": "Access downloadable PDFs, guides, and tools for offline use."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Contact for Support",
        "text": "Reach out to our regional coordinators for assistance with specific farming challenges."
      }
    ],
    "totalTime": "PT5M"
  };

  return (
    <>
      {/* Enhanced SEO component with multiple schemas */}
      <SEO
        title="Resources & Progress Gallery | INOFO Africa - Organic Farming Materials"
        description="Access INOFO Africa's comprehensive organic farming resources, educational guides, and visual progress gallery. Explore training materials, market tools, and success stories from across Africa's farming communities."
        keywords={[
          "INOFO Africa Resources",
          "Organic Farming Resources Africa",
          "Farmer Education Materials Africa",
          "Sustainable Agriculture Guides",
          "African Farming Tools",
          "Agroecology Resources",
          "Food Sovereignty Materials",
          "Organic Certification Resources",
          "Farmer Training Materials PDF",
          "Climate Resilience Farming Resources",
          "Indigenous Knowledge Resources Africa",
          "Agricultural Publications Africa",
          "Farming Workshop Materials",
          "Soil Management Guides",
          "Water Conservation Farming",
          "Market Access Tools Farmers",
          "Organic Pest Control Resources",
          "Renewable Energy Agriculture",
          "Community Farming Resources",
          "Youth Agriculture Training"
        ]}
        canonical="https://www.inofoafrica.org/resources"
        image={heroImg}
        type="website"
        breadcrumbs={resourcesPageBreadcrumbs}
        faqData={resourcesPageFaqs}
        customSchema={resourcesPageCustomSchema}
      />
      
      {/* Additional HowTo schema */}
      <script type="application/ld+json">
        {JSON.stringify(howToUseResourcesSchema)}
      </script>

      <motion.main
        className="resources-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        itemScope
        itemType="https://schema.org/CollectionPage"
      >
        {/* Hero Section with Schema markup */}
        <motion.header
          className="R-hero-header"
          style={{ backgroundImage: `url(${heroImg})` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          itemProp="image"
          itemScope
          itemType="https://schema.org/ImageObject"
        >
          <div className="hero-overlay">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              itemProp="headline"
            >
              Resources
            </motion.h1>
          </div>
          <meta itemProp="url" content={heroImg} />
          <meta itemProp="caption" content="INOFO Africa Resources - Supporting Organic Farmers Across Africa" />
        </motion.header>

        {/* Coming Soon Section */}
        <motion.section
          className="coming-soon-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          itemScope
          itemType="https://schema.org/CreativeWork"
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
              <h2 itemProp="name">Something Amazing is Coming Soon...</h2>
              <p itemProp="description">
                We're carefully cultivating valuable resources to help farmers and agricultural 
                professionals thrive. Our team is working diligently to bring you:
              </p>
              
              <ul className="resource-list" itemProp="keywords">
                <li>News & Events updates</li>
                <li>Educational Publications</li>
                <li>Practical Farmer Tools</li>
                <li>Market Insights</li>
                <li>Sustainable Practices Guides</li>
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
              <meta itemProp="datePublished" content="2024-01-01" />
              <meta itemProp="dateModified" content={new Date().toISOString().split('T')[0]} />
            </motion.div>
            
            <motion.div 
              className="coming-soon-image"
              variants={itemVariants}
            >
              <img 
                src={comingSoonImg} 
                alt="INOFO Africa resources coming soon for organic farmers" 
                itemProp="image"
                loading="lazy"
              />
              <div className="floating-tag">Coming Soon</div>
            </motion.div>
          </div>
        </motion.section>

        {/* Progress Gallery Section with enhanced Schema markup */}
        <motion.section
          className="progress-gallery-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          itemScope
          itemType="https://schema.org/ImageGallery"
        >
          <div className="gallery-header">
            <motion.div variants={itemVariants}>
              <h2 className="gallery-title" itemProp="name">
                <FaImages className="gallery-icon" />
                Our Progress Gallery
              </h2>
              <p className="gallery-subtitle" itemProp="description">
                Enjoy the pictures below as we finalize the resources. 
                These images showcase our ongoing work and the impact we're making together.
              </p>
            </motion.div>
          </div>

          {/* Main Gallery Display */}
          <motion.div 
            className="slideshow-container"
            variants={containerVariants}
            itemProp="hasPart"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <div className="main-image-container">
              <img 
                src={progressImages[currentImageIndex].src} 
                alt={progressImages[currentImageIndex].alt}
                className="main-image"
                onClick={() => openLightbox(currentImageIndex)}
                itemProp="image"
                loading="lazy"
              />
              
              <div className="image-info">
                <h3 itemProp="name">{progressImages[currentImageIndex].title}</h3>
                <p itemProp="description">{progressImages[currentImageIndex].description}</p>
                <span className="category-tag" itemProp="keywords">{progressImages[currentImageIndex].category}</span>
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
              {progressImages.map((image, index) => (
                <button
                  key={image.id}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                  aria-label={`View image: ${image.title}`}
                />
              ))}
            </div>
            
            <div className="image-counter" itemProp="numberOfItems">
              {currentImageIndex + 1} / {progressImages.length}
            </div>
          </motion.div>
          
          {/* Hidden Schema markup for all images */}
          <div style={{ display: 'none' }} itemProp="itemListElement">
            {progressImages.map((image, index) => (
              <div key={image.id} itemScope itemType="https://schema.org/ImageObject">
                <meta itemProp="position" content={String(index + 1)} />
                <meta itemProp="name" content={image.title} />
                <meta itemProp="description" content={image.description} />
                <meta itemProp="url" content={image.src} />
                <meta itemProp="contentUrl" content={image.src} />
                <meta itemProp="thumbnailUrl" content={image.src} />
                <meta itemProp="keywords" content={image.category} />
              </div>
            ))}
          </div>
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
                  alt={progressImages[currentImageIndex].alt}
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
            </motion.div>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <Newsletter />
      </motion.main>
    </>
  );
};

export default ResourcesPage;