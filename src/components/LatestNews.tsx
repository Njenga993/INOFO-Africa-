import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCoffee,
  FaSeedling,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import "../styles/LatestNews.css";

// Images (update paths as needed)
import ocfsuPoster from "../assets/congras.jpeg";
// For the second article, add your image path
import seedBootcampImg from "../assets/seedschool26.jpeg"; // Update with your actual image path

interface NewsArticle {
  id: number;
  title: string;
  date?: string;
  location?: string;
  image: string;
  brief: string;
  ctaText?: string;
  ctaLink?: string;
  tags?: string[];
  highlight?: boolean;
}

const LatestNews = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const articles: NewsArticle[] = [
    {
      id: 1,
      title:
        "Oromia Coffee Farmers' Cooperative Union - 25 Years of Excellence",
      date: "Established June 1, 1999",
      location: "Oromia, Ethiopia",
      image: ocfsuPoster,
      tags: ["Anniversary", "Coffee", "Cooperatives"],
      highlight: true,
      brief:
        "Founded in 1999, OCFCU started with 34 primary cooperatives representing 22,500 households. Today, it brings together around 400 cooperatives, supporting over 500,000 coffee farmers across Oromia. We specialize in high-quality Arabica coffee exports, champion sustainable and organic practices, and empower communities to improve livelihoods. Celebrating 25 years of growth and lasting impact in the coffee sector.",
    },
    {
      id: 2,
      title: "Seed Bootcamp Scholarship Opportunity – Apply Now!",
      date: "April 13th - 26th, 2026",
      location: "Seed Savers Network, Kenya",
      image: seedBootcampImg,
      tags: ["Scholarship", "Training", "Eastern Africa"],
      highlight: true,
      brief:
        "**Transform Your Farming Community!**\n\nINOFO Africa, in partnership with **Seed Savers Network**, is proud to announce an exclusive **fully-sponsored scholarship** for the highly anticipated **Seed Bootcamp** — a life-changing 2-week intensive training running from **April 13th to 26th, 2026**, at the renowned Seed Savers Network in Kenya.\n\n**Who should apply?**\nThis opportunity targets passionate representatives of **Organic/Agroecology Farmers' Organizations (OFOs)** from **Rwanda and Ethiopia** — especially those working hands-on with farmers and rural communities.\n\n**What's covered?**\nThe scholarship covers **full onsite training**, including accommodation, meals, and learning materials.\n\n**What's NOT covered?**\nParticipants (or their OFOs) are expected to cover their own **transportation** (bus or air tickets) to and from Kenya.\n\n**Apply on a first-come-first-serve basis!**\nIf you're ready to gain cutting-edge knowledge in seed saving, agroecology, and community empowerment, **don't wait** — secure your spot today!\n\n**Send your expression of interest to: info@inofoafrica.org**",
      ctaText: "Apply Now via Email",
      ctaLink: "mailto:info@inofoafrica.org",
    },
  ];

  return (
    <motion.section
      className="latest-news-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="latest-news-header">
        <motion.div variants={itemVariants} className="section-title-wrapper">
          <span className="section-badge">Stay Updated</span>
          <h2 className="latest-news-title">Latest News & Opportunities</h2>
          <p className="latest-news-subtitle">
            Discover impactful stories, milestones, and opportunities from our
            partner organizations across Africa
          </p>
        </motion.div>
      </div>

      <div className="news-grid">
        {/* Article 1 - OCFCU 25th Anniversary */}
        <motion.article
          className="news-card news-card--large"
          variants={itemVariants}
          itemScope
          itemType="https://schema.org/Article"
        >
          <div className="news-card__image-wrapper">
            <img
              src={articles[0].image}
              alt="OCFCU 25th Anniversary Celebration Poster"
              className="news-card__image"
              loading="lazy"
              itemProp="image"
            />
            <div className="news-card__badge anniversary-badge">
              <FaCoffee /> 25 Years
            </div>
          </div>

          <div className="news-card__content">
            <div className="news-card__meta">
              <span className="meta-item">
                <FaCalendarAlt /> {articles[0].date}
              </span>
              <span className="meta-item">
                <FaMapMarkerAlt /> {articles[0].location}
              </span>
            </div>

            <h3 className="news-card__title" itemProp="headline">
              {articles[0].title}
            </h3>

            <div className="news-card__tags">
              {articles[0].tags?.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <p className="news-card__brief" itemProp="description">
              {articles[0].brief}
            </p>

            <div className="news-card__stats">
              <div className="stat">
                <span className="stat-number">500K+</span>
                <span className="stat-label">Farmers Supported</span>
              </div>
              <div className="stat">
                <span className="stat-number">400</span>
                <span className="stat-label">Cooperatives</span>
              </div>
              <div className="stat">
                <span className="stat-number">25</span>
                <span className="stat-label">Years of Impact</span>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Article 2 - Seed Bootcamp Scholarship */}
        <motion.article
          className="news-card news-card--highlight"
          variants={itemVariants}
          itemScope
          itemType="https://schema.org/Article"
        >
          <div className="news-card__image-wrapper">
            <img
              src={articles[1].image}
              alt="Seed Bootcamp Scholarship Training Program"
              className="news-card__image"
              loading="lazy"
              itemProp="image"
            />
            <div className="news-card__badge scholarship-badge">
              <FaSeedling /> Scholarship
            </div>
          </div>

          <div className="news-card__content">
            <div className="news-card__meta">
              <span className="meta-item">
                <FaCalendarAlt /> {articles[1].date}
              </span>
              <span className="meta-item">
                <FaMapMarkerAlt /> {articles[1].location}
              </span>
            </div>

            <h3 className="news-card__title" itemProp="headline">
              {articles[1].title}
            </h3>

            <div className="news-card__tags">
              {articles[1].tags?.map((tag) => (
                <span key={tag} className="tag tag--urgent">
                  {tag}
                </span>
              ))}
            </div>

            <div className="news-card__brief--enhanced" itemProp="description">
              {/* Split the brief into sections for better display */}
              <p className="highlight-text">
                <strong>Transform Your Farming Community!</strong>
              </p>
              <p>
                INOFO Africa, in partnership with{" "}
                <strong>
                  <a
                    href="https://www.seedsaverskenya.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="seed-savers-link"
                  >
                    Seed Savers Network
                  </a>
                </strong>
                , is proud to announce an exclusive
                <strong className="highlight-green">
                  {" "}
                  fully-sponsored scholarship
                </strong>{" "}
                for the highly anticipated
                <strong> Seed Bootcamp</strong> — a life-changing 2-week
                intensive training running from
                <strong> April 13th to 26th, 2026</strong>, at the renowned Seed
                Savers Network in Kenya.
              </p>

              <div className="info-box who-should-apply">
                <h4>Who should apply?</h4>
                <p>
                  This opportunity targets passionate representatives of{" "}
                  <strong>
                    Organic/Agroecology Farmers' Organizations (OFOs)
                  </strong>
                  from <strong>Rwanda and Ethiopia</strong> — especially those
                  working hands-on with farmers and rural communities.
                </p>
              </div>

              <div className="info-box what-covered">
                <h4>What's covered?</h4>
                <p>
                  The scholarship covers <strong>full onsite training</strong>,
                  including accommodation, meals, and learning materials.
                </p>
              </div>

              <div className="info-box what-not-covered">
                <h4>What's NOT covered?</h4>
                <p>
                  Participants (or their OFOs) are expected to cover their own{" "}
                  <strong>transportation</strong> (bus or air tickets) to and
                  from Kenya.
                </p>
              </div>

              <div className="info-box deadline">
                <h4>Apply on a first-come-first-serve basis!</h4>
                <p>
                  If you're ready to gain cutting-edge knowledge in seed saving,
                  agroecology, and community empowerment,
                  <strong> don't wait</strong> — secure your spot today!
                </p>
              </div>
            </div>

            <div className="news-card__cta">
              <a href={articles[1].ctaLink} className="cta-button">
                <FaEnvelope /> Send Expression of Interest
                <FaArrowRight className="arrow-icon" />
              </a>
              <p className="cta-email">info@inofoafrica.org</p>
            </div>
          </div>
        </motion.article>
      </div>

      {/* Hidden Schema markup */}
      <div style={{ display: "none" }} itemProp="itemListElement">
        {articles.map((article, index) => (
          <div key={article.id} itemScope itemType="https://schema.org/Article">
            <meta itemProp="position" content={String(index + 1)} />
            <meta itemProp="headline" content={article.title} />
            <meta itemProp="description" content={article.brief} />
            <meta
              itemProp="datePublished"
              content={article.date || "2026-04-02"}
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default LatestNews;
