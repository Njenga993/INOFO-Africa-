import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "../styles/NewsEvents.css";

const newsData = [
  {
    id: 1,
    title: "Agroecology Conference 2025",
    date: "Sept 12, 2025",
    category: "Event",
    image: "_MG_0674.webp",
    excerpt: "Join experts and farmers in shaping the future of sustainable food systems.",
    link: "#"
  },
  {
    id: 2,
    title: "Seed Fair Highlights",
    date: "Aug 28, 2025",
    category: "News",
    image: "fresh-sprouts-in-agricultural-field-6165476.jpg",
    excerpt: "A vibrant gathering of seed keepers and agroecology enthusiasts.",
    link: "#"
  },
  {
    id: 3,
    title: "Policy Dialogue on Food Sovereignty",
    date: "Aug 10, 2025",
    category: "Press Release",
    image: "fresh-sprouts-in-agricultural-field-6165476.jpg",
    excerpt: "Key stakeholders discuss frameworks for resilient food systems.",
    link: "#"
  },
  {
    id: 4,
    title: "Youth in Agroecology Bootcamp",
    date: "July 30, 2025",
    category: "Story",
    image: "fresh-sprouts-in-agricultural-field-6165476.jpg",
    excerpt: "Empowering the next generation of agroecology leaders.",
    link: "#"
  }
];

export default function NewsEvents() {
  return (
    <div className="news-events-page">
      {/* Hero Section */}
      <section className="news-hero">
        <div className="news-hero-overlay">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            News & Events
          </motion.h1>
          <p>Stay updated with our latest stories, press releases, and upcoming events.</p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="featured-story">
        {newsData.slice(0, 1).map(item => (
          <motion.div
            key={item.id}
            className="featured-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={item.image} alt={item.title} />
            <div className="featured-content">
              <span className="category">{item.category}</span>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
              <a href={item.link} className="read-more">
                Read More <FaArrowRight />
              </a>
            </div>
          </motion.div>
        ))}
      </section>

      {/* News Grid */}
      <section className="news-grid">
        <h2 className="section-title">Latest Updates</h2>
        <div className="grid-container">
          {newsData.slice(1).map(item => (
            <motion.div
              key={item.id}
              className="news-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={item.image} alt={item.title} />
              <div className="news-content">
                <span className="category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <div className="news-footer">
                  <span className="date">{item.date}</span>
                  <a href={item.link} className="read-more-small">
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
