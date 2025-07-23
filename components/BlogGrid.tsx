import { FaBookOpen, FaUserShield, FaUsers, FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/BlogGrid.css';

const BlogGrid = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "INOFO Shines at International FFORA Event 2025",
      location: "Dar es Salaam",
      excerpt: "INOFO proudly joined as the only organic international Farmer Organisation alongside partners from 9 regional farmers' organizations...",
      date: "May 2025",
      image: "networking-event-at-sunset-101213662.jpg",
      featured: true
    },
    // ... (keep your existing blogPosts array)
  ];

  return (
    <motion.section 
      className="blog-grid-impact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="blog-grid-container">
        {/* 1. Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Who We Are</h2>
          <p className="subtitle">
            Cultivating African Collaboration for Sustainable Agriculture
          </p>
          <div className="intro-text-wrapper">
            <p className="intro-text">
              Across Africa's diverse landscapes, INOFO Africa weaves together the wisdom of farmers,
              the resilience of tradition, and the power of global solidarity. Together, we're 
              cultivating more than food we're growing a movement where every community thrives
              in harmony with nature, today and for the future.
            </p>
            <p className="intro-text">
              INOFO Africa serves as the continental catalyst for organic farming, strategically 
              harmonizing grassroots initiatives, ancestral wisdom, and global partnerships to 
              build a resilient agricultural future.
            </p>
          </div>
          <div className="hero-cta-blog">
            <Link to="/about" className="btn-primary">
              Learn More <FaArrowRight className="icon-arrow" />
            </Link>
          </div>
        </motion.div>

        {/* 2. Featured Blog Highlight */}
        <div className="featured-blogs">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Latest Updates
          </motion.h3>
          <motion.div 
            className="featured-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogPosts.filter(post => post.featured).map(post => (
              <motion.div 
                className="featured-card" 
                key={post.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div 
                  className="featured-image" 
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  {post.location && (
                    <span className="location-badge">
                      <FaMapMarkerAlt /> {post.location}
                    </span>
                  )}
                </div>
                <div className="featured-content">
                  <span className="post-date">
                    <FaCalendarAlt /> {post.date}
                  </span>
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More <FaArrowRight className="icon-arrow" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3. All Blog Posts */}
        <div className="all-blogs">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Recent Activities
          </motion.h3>
          <motion.div 
            className="blog-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogPosts.map(post => (
              <motion.div 
                className="blog-card" 
                key={post.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
              >
                <div 
                  className="card-image" 
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  {post.location && (
                    <span className="location-badge">
                      <FaMapMarkerAlt /> {post.location}
                    </span>
                  )}
                </div>
                <div className="card-content">
                  <span className="post-date">
                    <FaCalendarAlt /> {post.date}
                  </span>
                  <h4>{post.title}</h4>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More <FaArrowRight className="icon-arrow" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 4. Strategic Pillars */}
        <div className="pillars-section">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Strategic Pillars
          </motion.h3>
          <motion.div 
            className="pillars-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <FaBookOpen />,
                title: "Knowledge Exchange",
                description: "Preserve ethical, sustainable organic farming through our open-source knowledge base combining traditional wisdom and modern techniques."
              },
              {
                icon: <FaUserShield />,
                title: "Farmer Advocacy",
                description: "Engage with our global activist network to address legal and environmental challenges through collective action."
              },
              {
                icon: <FaUsers />,
                title: "Global Networking",
                description: "Connect through our digital platforms and in-person forums across all continents with inclusive communication strategies."
              }
            ].map((pillar, index) => (
              <motion.div 
                className="pillar-card" 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="pillar-icon">
                  {pillar.icon}
                </div>
                <h4>{pillar.title}</h4>
                <p>{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 5. Closing About Section */}
        <motion.div 
          className="about-inofo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            The Inter-Continental Network of Organic Farmer Organisations (INOFO) Africa
            serves as a dynamic global platform that unites and amplifies the voices 
            of established organic farming associations through a grassroots, farmer-led approach.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BlogGrid;