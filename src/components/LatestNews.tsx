import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { JSX } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCoffee,
  FaSeedling,
  FaEnvelope,
  FaArrowRight,
  FaVideo,
  FaClock,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "../styles/LatestNews.css";

import ocfsuPoster from "../assets/congras.jpeg";
import seedBootcampImg from "../assets/seedschool26.jpeg";
import meetingInviteImg from "../assets/meeting-invite.png";

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  brief: string;
  badge: { label: string; icon: JSX.Element; variant: string };
  tags?: string[];
  stats?: { number: string; label: string }[];
  cta?: { text: string; link: string; icon: JSX.Element };
  meetingId?: string;
  time?: string;
}

const LatestNews: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const articles: NewsArticle[] = [
    {
      id: 1,
      title: "Oromia Coffee Farmers' Cooperative Union — 25 Years of Excellence",
      date: "Established June 1, 1999",
      location: "Oromia, Ethiopia",
      image: ocfsuPoster,
      badge: { label: "25 Years", icon: <FaCoffee />, variant: "gold" },
      tags: ["Anniversary", "Coffee", "Cooperatives"],
      brief:
        "Founded in 1999, OCFCU started with 34 primary cooperatives representing 22,500 households. Today, it brings together around 400 cooperatives, supporting over 500,000 coffee farmers across Oromia — specializing in high-quality Arabica coffee exports, championing sustainable and organic practices, and empowering communities to improve livelihoods.",
      stats: [
        { number: "500K+", label: "Farmers Supported" },
        { number: "400", label: "Cooperatives" },
        { number: "25", label: "Years of Impact" },
      ],
    },
    {
      id: 2,
      title: "Seed Bootcamp Scholarship Opportunity – Apply Now!",
      date: "April 13th – 26th, 2026",
      location: "Seed Savers Network, Kenya",
      image: seedBootcampImg,
      badge: { label: "Scholarship", icon: <FaSeedling />, variant: "green" },
      tags: ["Scholarship", "Training", "Eastern Africa"],
      brief:
        "INOFO Africa, in partnership with Seed Savers Network, announces a fully-sponsored scholarship for the Seed Bootcamp — a 2-week intensive training on seed saving, agroecology, and community empowerment. Open to OFO representatives from Rwanda and Ethiopia. Covers training, accommodation, and meals. Participants cover their own transport to Kenya.",
      cta: {
        text: "Send Expression of Interest",
        link: "mailto:info@inofoafrica.org",
        icon: <FaEnvelope />,
      },
    },
    {
      id: 3,
      title: "INOFO Africa National Convenors' Meeting",
      date: "June 29, 2026",
      location: "Zoom Virtual Meeting",
      image: meetingInviteImg,
      badge: { label: "Meeting", icon: <FaVideo />, variant: "blue" },
      tags: ["Governance", "Virtual"],
      time: "3:00 PM – 4:30 PM (EAT)",
      meetingId: "898 2006 2241",
      brief:
        "Join the upcoming National Convenors' Meeting to discuss continental coordination, regional updates, and strategic priorities for INOFO Africa's farmer-led governance across all sub-regions.",
      cta: {
        text: "Join Zoom Meeting",
        link: "https://zoom.us/j/89820062241",
        icon: <FaExternalLinkAlt />,
      },
    },
  ];

  return (
    <motion.section
      className="latest-news-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <motion.div className="latest-news-header" variants={itemVariants}>
        <span className="section-badge">Stay Updated</span>
        <h2 className="latest-news-title">Latest News & Opportunities</h2>
        <p className="latest-news-subtitle">
          Discover impactful stories, milestones, and opportunities from our
          partner organizations across Africa
        </p>
      </motion.div>

      <div className="news-grid">
        {articles.map((article) => (
          <motion.article
            key={article.id}
            className="news-card"
            variants={itemVariants}
            itemScope
            itemType="https://schema.org/Article"
          >
            {/* Poster Area */}
            <div className="news-card__poster">
              <img
                src={article.image}
                alt={article.title}
                className="news-card__image"
                loading="lazy"
                itemProp="image"
              />
              <div className={`news-card__badge badge--${article.badge.variant}`}>
                {article.badge.icon}
                <span>{article.badge.label}</span>
              </div>
            </div>

            {/* Content Area */}
            <div className="news-card__content">
              <div className="news-card__meta">
                <span className="meta-item">
                  <FaCalendarAlt /> {article.date}
                </span>
                <span className="meta-item">
                  <FaMapMarkerAlt /> {article.location}
                </span>
              </div>

              <h3 className="news-card__title" itemProp="headline">
                {article.title}
              </h3>

              {article.tags && (
                <div className="news-card__tags">
                  {article.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              )}

              <p className="news-card__brief" itemProp="description">
                {article.brief}
              </p>

              {/* Meeting-specific details */}
              {article.time && (
                <div className="news-card__meeting-details">
                  <div className="meeting-detail">
                    <FaClock className="meeting-icon" />
                    <span>{article.time}</span>
                  </div>
                  {article.meetingId && (
                    <div className="meeting-detail">
                      <FaVideo className="meeting-icon" />
                      <span>Meeting ID: {article.meetingId}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Stats (OCFCU card) */}
              {article.stats && (
                <div className="news-card__stats">
                  {article.stats.map((stat) => (
                    <div className="stat" key={stat.label}>
                      <span className="stat-number">{stat.number}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA button */}
              {article.cta && (
                <div className="news-card__cta">
                  <a
                    href={article.cta.link}
                    target={article.cta.link.startsWith("http") ? "_blank" : undefined}
                    rel={article.cta.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`cta-button ${article.id === 3 ? "cta-button--gold" : ""}`}
                  >
                    {article.cta.icon}
                    <span>{article.cta.text}</span>
                    <FaArrowRight className="cta-arrow" />
                  </a>
                  {article.id === 2 && (
                    <p className="cta-email">info@inofoafrica.org</p>
                  )}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Hidden Schema markup */}
      <div style={{ display: "none" }} itemProp="itemListElement">
        {articles.map((article, index) => (
          <div key={article.id} itemScope itemType="https://schema.org/Article">
            <meta itemProp="position" content={String(index + 1)} />
            <meta itemProp="headline" content={article.title} />
            <meta itemProp="description" content={article.brief} />
            <meta itemProp="datePublished" content={article.date} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default LatestNews;