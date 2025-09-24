import { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaLeaf, FaUsers, FaHandshake, FaSeedling, FaBook, FaGlobeAfrica } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import type { JSX } from 'react';
import '../styles/ServicesAfrica.css';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import heroImg from "../assets/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

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
      {/* Hero Section */}
      <motion.header 
        className="service_hero-header" 
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
            Our Services
          </motion.h1>
        </div>
      </motion.header>

      {/* Services Grid Section */}
      <motion.section 
        className="content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="text-content">
          <h2>Our Offerings</h2>
          <p>
            We provide comprehensive support to organic farmers across Africa through these key services, 
            designed to build capacity, create market opportunities, and advocate for favorable policies.
          </p>
        </motion.div>
        
        <motion.div 
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
        </motion.div>
      </motion.section>

      {/* Featured Services Section */}
      <motion.section 
        className="content-section image-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="image-content">
          <div className={`image-container ${isImageLoaded ? 'loaded' : ''}`}>
            <picture>
              {/* ✅ WebP first */}
              <source srcSet="/_MG_0824.webp" type="image/webp" />
              {/* ✅ Fallback for older browsers */}
              <img 
                src="/_MG_0824.jpg" 
                alt="African women farmers participating in training"
                onLoad={() => setIsImageLoaded(true)}
                className="content-image"
              />
            </picture>
          </div>
        </motion.div>
        
        <motion.div className="text-content">
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
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="content-section"
        initial={{ scale: 0.98, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-content centered-content">
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
            <span>Get Involved Today!</span>
            <FaHandshake className="btn-icon" />
          </Link>
        </div>
      </motion.section>

      <Newsletter/>
    </motion.main>
  );
};

export default ServicesAfrica;
