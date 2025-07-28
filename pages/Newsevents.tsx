import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaFilter, FaSearch } from 'react-icons/fa';
import '../styles/NewsEvents.css';

interface NewsPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  type: 'news' | 'event';
  location?: string;
  // Add any additional fields you need
}

const newsPosts: NewsPost[] = [
  // Add your actual news posts here
  {
    id: 1,
    title: "INOFO Africa Annual Conference 2023",
    excerpt: "Join us for the biggest gathering of organic farmers in Africa",
    date: "2023-11-15",
    image: "conference.jpg",
    type: "event",
    location: "Nairobi, Kenya"
  },
  // Add more posts as needed
];

const NewsEvents = () => {
  const [filter, setFilter] = useState<'all' | 'news' | 'event'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<NewsPost | null>(null);
  const [activeYear, setActiveYear] = useState('All');

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = newsPosts
    .filter(post => filter === 'all' || post.type === filter)
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.location && post.location.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .filter(post => activeYear === 'All' || post.date.includes(activeYear));

  const years = ['All', ...Array.from(new Set(newsPosts.map(post => post.date.split('-')[0])))];

  const openModal = (post: NewsPost) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <motion.section 
      className="news-events-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <div className="news-hero">
        <motion.div 
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="news-title">
            <span className="title-gradient">News & Events</span>
          </h1>
          <p className="news-subtitle">
            Explore the latest developments, activities, and milestones shaping organic farming across Africa.
          </p>
        </motion.div>
        <div className="hero-pattern"></div>
      </div>

      {/* Controls Section */}
      <motion.div 
        className="controls-section"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="search-filter-container">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search news & events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="filter-controls">
            <div className="filter-group">
              <FaFilter className="filter-icon" />
              <span>Filter by:</span>
              <button 
                className={filter === 'all' ? 'active' : ''} 
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={filter === 'news' ? 'active' : ''} 
                onClick={() => setFilter('news')}
              >
                News
              </button>
              <button 
                className={filter === 'event' ? 'active' : ''} 
                onClick={() => setFilter('event')}
              >
                Events
              </button>
            </div>

            <div className="year-filter">
              <span>Year:</span>
              <select 
                value={activeYear} 
                onChange={(e) => setActiveYear(e.target.value)}
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </motion.div>

      {/* News Grid */}
      {isLoading ? (
        <div className="loading-grid">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="news-card-skeleton"></div>
          ))}
        </div>
      ) : (
        <motion.div 
          className="news-grid"
          layout
        >
          <AnimatePresence>
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <motion.div
                  key={post.id}
                  className={`news-card ${post.type}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  onClick={() => openModal(post)}
                >
                  <div className="card-image-container">
                    <div 
                      className="news-image"
                      style={{ backgroundImage: `url(${post.image})` }}
                    >
                      {post.location && (
                        <span className="location-badge">
                          <FaMapMarkerAlt /> {post.location}
                        </span>
                      )}
                      <span className={`type-badge ${post.type}`}>
                        {post.type === 'event' ? 'Event' : 'News'}
                      </span>
                    </div>
                    <span className="date-badge">
                      <FaCalendarAlt /> {post.date}
                    </span>
                  </div>
                  <div className="news-content">
                    <h4>{post.title}</h4>
                    <p>{post.excerpt}</p>
                    <div className="card-footer">
                      <span className="read-more">
                        Read More <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3>No results found</h3>
                <p>Try adjusting your search or filters</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
          <>
            <motion.div 
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            <motion.div 
              className="news-modal"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              <button className="close-modal" onClick={closeModal}>
                &times;
              </button>
              <div className="modal-image" style={{ backgroundImage: `url(${selectedPost.image})` }}>
                <div className="modal-image-overlay">
                  <span className="modal-location">
                    <FaMapMarkerAlt /> {selectedPost.location || 'Global'}
                  </span>
                  <span className={`modal-type ${selectedPost.type}`}>
                    {selectedPost.type === 'event' ? 'Event' : 'News'}
                  </span>
                </div>
              </div>
              <div className="modal-content">
                <div className="modal-header">
                  <span className="modal-date">
                    <FaCalendarAlt /> {selectedPost.date}
                  </span>
                  <h2>{selectedPost.title}</h2>
                </div>
                <div className="modal-body">
                  <p>{selectedPost.excerpt}</p>
                  <p className="modal-full-content">
                    {`This is a detailed view of "${selectedPost.title}". In a real implementation, this would contain the full article content with images, paragraphs, and possibly embedded media. The content would be fetched from a CMS or backend API based on the post ID.`}
                  </p>
                  <div className="modal-actions">
                    <button className="btn-primary">Share</button>
                    <button className="btn-secondary">Save for Later</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default NewsEvents;