import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/WhoWeAre.css";
import WhoWeAreImage from "../assets/busi.webp";

const WhoWeAre = () => {
  const stats = [
    { label: "Farmers Reached", value: "15K+" },
    { label: "Countries Engaged", value: "10+" },
    { label: "Projects Implemented", value: "150+" },
    { label: "Years of Impact", value: "10+" },
  ];

  return (
    <section className="nwa-section">
      <div className="nwa-wrapper">
        {/* Left Image */}
        <div className="nwa-image-wrapper">
          <div className="nwa-image-card">
            <img src={WhoWeAreImage} alt="African farmers collaborating in sustainable agriculture" loading="lazy" />
          </div>
        </div>

        {/* Right Content */}
        <div className="nwa-content">
          <h2 className="nwa-title">Who We Are</h2>
          <p className="nwa-subtitle">
            Cultivating African Collaboration for Sustainable Agriculture
          </p>

          <p className="nwa-text">
            Across Africa's diverse landscapes, INOFO Africa connects farmer wisdom,
            indigenous knowledge, and collective strength to build sustainable futures.
          </p>

          <p className="nwa-text">
            Together, we are cultivating more than food—we are nurturing a movement
            that allows every community to thrive in harmony with nature.
          </p>

          <div className="nwa-btn-wrapper">
            <Link to="/about" className="nwa-btn">
              Learn More <FaArrowRight className="nwa-icon" />
            </Link>
          </div>

          {/* Stats */}
          <div className="nwa-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="nwa-stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;