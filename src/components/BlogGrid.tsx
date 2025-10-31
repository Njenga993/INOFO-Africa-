import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaNewspaper, FaClock, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "../styles/BlogGrid.css";

// Import images from assets
import farmersTraining from "../assets/african.webp";

interface BlogPost {
  id: number;
  title: string;
  location: string;
  excerpt: string;
  date: string;
  image: string;
  featured: boolean;
  category?: string;
  readTime?: string;
}

const BlogGrid = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  // Enhanced blog data with more details
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "INOFO AFRICA Shines at the 5th African Organic Conference",
      location: "Kigali, Rwanda",
      excerpt: "The 5th African Organic Conference brought together over 500 participants from 40 countries to discuss the future of organic agriculture in Africa. INOFO Africa's delegation presented groundbreaking research on seed sovereignty and climate-resilient farming practices.",
      date: "December 12th - 15th, 2023",
      image: farmersTraining,
      featured: true,
      category: "Conference",
      readTime: "5 min read"
    },
    
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <motion.section
      className="nexus-blog-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="nexus-blog-container">
        {/* Section Header */}
        <motion.div
          className="nexus-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="nexus-header-icon">
            <FaNewspaper />
          </div>
          <h2 className="nexus-header-title">Updates</h2>
          <p className="nexus-header-subtitle">
            Stay informed about our activities, achievements, and impact across Africa
          </p>
        </motion.div>

        {/* Featured Article */}
        {featuredPost && (
          <motion.div
            className="nexus-featured-article"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="nexus-featured-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
            >
              <div className="nexus-featured-visual">
                <div 
                  className="nexus-featured-image"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                >
                  <div className="nexus-image-overlay">
                    <div className="nexus-featured-meta">
                      <span className="nexus-category-badge">
                        <FaTag /> {featuredPost.category}
                      </span>
                      <span className="nexus-location-badge">
                        <FaMapMarkerAlt /> {featuredPost.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="nexus-featured-content">
                <div className="nexus-article-meta">
                  <span className="nexus-date-info">
                    <FaCalendarAlt /> {featuredPost.date}
                  </span>
                  <span className="nexus-read-time">
                    <FaClock /> {featuredPost.readTime}
                  </span>
                </div>
                
                <h3 className="nexus-featured-title">
                  {featuredPost.title}
                </h3>
                
                <p className="nexus-featured-excerpt">
                  {featuredPost.excerpt}
                </p>
                
                <Link 
                  to={`#`} 
                  className="nexus-featured-link"
                >
                  <span>Read Full Article</span>
                  <FaArrowRight className="nexus-link-arrow" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Recent Articles Grid */}
        <div className="nexus-recent-section">
          <motion.div
            className="nexus-recent-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="nexus-recent-title"></h3>
            <div className="nexus-header-divider"></div>
          </motion.div>

          <motion.div
            className="nexus-articles-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {regularPosts.map((post) => (
              <motion.article
                key={post.id}
                className="nexus-article-card"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
                }}
              >
                <div className="nexus-card-visual">
                  <div 
                    className="nexus-card-image"
                    style={{ backgroundImage: `url(${post.image})` }}
                  >
                    <div className="nexus-card-overlay">
                      <span className="nexus-card-category">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="nexus-card-content">
                  <div className="nexus-card-meta">
                    <span className="nexus-card-date">
                      <FaCalendarAlt /> {post.date}
                    </span>
                    <span className="nexus-card-location">
                      <FaMapMarkerAlt /> {post.location}
                    </span>
                  </div>
                  
                  <h4 className="nexus-card-title">
                    {post.title}
                  </h4>
                  
                  <p className="nexus-card-excerpt">
                    {post.excerpt}
                  </p>
                  
                  <div className="nexus-card-footer">
                    <span className="nexus-card-read-time">
                      <FaClock /> {post.readTime}
                    </span>
                    <Link 
                      to={`#`} 
                      className="nexus-card-link"
                    >
                      Read More
                      <FaArrowRight className="nexus-card-arrow" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
        {/* Call to Action */}
      </div>
    </motion.section>
  );
};

export default BlogGrid;