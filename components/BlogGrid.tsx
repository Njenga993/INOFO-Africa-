import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "../styles/BlogGrid.css";

interface BlogPost {
  id: number;
  title: string;
  location: string;
  excerpt: string;
  date: string;
  image: string;
  featured: boolean;
}

const BlogGrid = () => {
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

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "INOFO Shines at International FFORA Event 2025",
      location: "Dar es Salaam",
      excerpt:
        "INOFO proudly joined as the only organic international Farmer Organisation alongside partners from 9 regional farmers' organizations...",
      date: "May 2025",
      image: "networking-event-at-sunset-101213662.jpg",
      featured: true,
    },
    // Add more blog posts
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
        {/* Featured Blog Highlight */}
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
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <motion.div
                  className="featured-card"
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
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

        {/* All Blog Posts */}
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
            {blogPosts.map((post) => (
              <motion.div
                className="blog-card"
                key={post.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
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
      </div>
    </motion.section>
  );
};

export default BlogGrid;
