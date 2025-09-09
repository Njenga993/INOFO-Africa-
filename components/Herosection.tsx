import { FaArrowRight, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../styles/Herosection.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "./fresh-sprouts-in-agricultural-field-6165476.jpg",
      title: "Empowering communities, cultivating safe food & nurturing mother earth. ",
      highlight: "Representation for Africa's organic farmers,",
      description: "We are Africa’s organic farmers  proud smallholder agroecological farmer owned organizations dedicated to nurturing the land without harmful chemicals. By working...",
      cta: "Get Involved"
    },
    {
      image: "./mesmerizing-african-sunset-over-the-savanna-71028880.jpg",
      title: "Farmer-led policy advocacy ",
      highlight: "Building resilience through organic farming practices",
      description: "Together, we strengthen food sovereignty, protect biodiversity, and create better livelihoods for millions of farming families across Africa.",
      cta: "Get Involved"
    },
   {
    image: "./joyful-harvest-in-the-fields-101239609.jpg",
    title: "Agroecology for Resilient Futures",
    highlight: "Farming in harmony with nature",
    description: "Agroecology integrates traditional knowledge with modern practices to build climate-resilient farms, restore ecosystems, and strengthen community food sovereignty.",
    cta: "Learn More"
   }
  ];

  // Auto-advance slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="hero">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          className="hero-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="image-overlay"></div>
        </motion.div>
      </AnimatePresence>

      <div className="hero-content">
        <div className="container">
          <div className="hero-blur-overlay">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="hero-text-content"
              >
                <h1 className="main-title">
                  {slides[currentSlide].title}
                </h1>
                
                <motion.div 
                  className="highlight-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <span className="highlight-text">
                    {slides[currentSlide].highlight}
                  </span>
                </motion.div>

                <motion.div
                  className="description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                  {slides[currentSlide].description}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      
        <motion.div 
          className="h-hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Link to="/about" className="btn-primary">
            Learn More <FaArrowRight />
          </Link>
          <Link to="/contact" className="btn-primary">
            {slides[currentSlide].cta} <FaHandshake />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;