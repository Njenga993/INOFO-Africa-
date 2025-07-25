import { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaLeaf, FaUsers, FaHandshake, FaSeedling, FaBook, FaGlobeAfrica } from 'react-icons/fa';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import '../styles/ServicesAfrica.css';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <FaHandshake size={28} />,
    title: 'Advocacy & Policy Support',
    description: 'Championing organic agriculture policies at national & continental forums, including land rights, certification standards, and climate justice.',
    color: '#3a7d44'
  },
  {
    icon: <FaLeaf size={28} />,
    title: 'Training & Capacity Building',
    description: 'Farmer-led workshops, webinars, and mentorship programs focused on agroecology, organic certification, value addition, and youth leadership.',
    color: '#4CAF50'
  },
  {
    icon: <FaBook size={28} />,
    title: 'Knowledge Exchange',
    description: 'Developer and maintainer of an open-source knowledge library: manuals, case studies, indigenous practices and research for African farmers.',
    color: '#8BC34A'
  },
  {
    icon: <FaGlobeAfrica size={28} />,
    title: 'Networking & Events',
    description: 'Organizing continental forums, regional summits and cross-border learning exchanges to connect farmer organisations.',
    color: '#CDDC39'
  },
  {
    icon: <FaUsers size={28} />,
    title: 'Marketing & Market Access',
    description: 'Supporting organic producer groups in accessing regional, intercontinental, & export markets through fair-value marketing.',
    color: '#FFC107'
  },
  {
    icon: <FaSeedling size={28} />,
    title: 'Mentorship & Peer Exchange',
    description: 'Linking seasoned farmer leaders with emerging youth and women farmer groups for technical & leadership mentoring.',
    color: '#FF9800'
  }
];

const ServicesAfrica = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.main 
      className="services-africa"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Organic background elements */}
      <div className="services-bg-pattern">
        <div className="organic-leaf-1"></div>
        <div className="organic-leaf-2"></div>
      </div>

      <header className="services-hero">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1>
            <span className="title-gradient">Our Services</span>
          </h1>
          <p className="lead">
            INOFO Africa strengthens organic farming through policy, training, networking, market access and inclusive support.
          </p>
          <div className="scroll-hint">
            <span>Explore our offerings</span>
            <div className="bouncing-arrow"></div>
          </div>
        </motion.div>
      </header>

      <motion.section 
        className="services-grid"
        ref={sectionRef}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className={`service-card ${hoveredCard === idx ? 'active' : ''}`}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { 
                y: 0, 
                opacity: 1,
                transition: { duration: 0.5 }
              }
            }}
          >
            <div 
              className="card-icon"
              style={{ color: service.color }}
            >
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="card-hover-content">
              <Link 
                to="/services" 
                className="card-link"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn more
                <FaArrowRight className="link-arrow" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.section>

      <section className="featured-services">
        <motion.div 
          className="featured-image"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={`image-container ${isImageLoaded ? 'loaded' : ''}`}>
            <img 
              src="women-cultivating-crops-in-green-fields-4771650.jpg" 
              alt="African women farmers participating in training"
              onLoad={() => setIsImageLoaded(true)}
            />
            <div className="image-overlay"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="featured-content"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>Customized Training Programs</h2>
          <p>
            We partner with local hubs to conduct in-person and virtual training tailored to regional needs—covering composting, 
            agroforestry, value chain development, and organic certification processes.
          </p>
          <Link 
            to="/about" 
            className="btn-primary"
            aria-label="Learn more about training programs"
          >
            <span>Learn More</span>
            <FaArrowRight className="btn-icon" />
          </Link>
        </motion.div>
      </section>

      <motion.section 
        className="cta-involved"
        initial={{ scale: 0.98, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="cta-container">
          <h2>Want to Collaborate?</h2>
          <p>
            Join us as an implementing partner, donor, or farmer representative. Help us scale organic agriculture for food security,
            climate adaptation, and youth empowerment across Africa.
          </p>
          <Link 
            to="/contact" 
            className="btn-primary"
            aria-label="Get involved with INOFO Africa"
          >
            <span>Get Involved</span>
            <FaHandshake className="btn-icon" />
          </Link>
        </div>
      </motion.section>

      <div className="floating-cta">
        <Link to="/contact" className="btn-primary">
          <span>Start Partnership</span>
          <FaHandshake className="btn-icon" />
        </Link>
      </div>
    </motion.main>
  );
};

export default ServicesAfrica;