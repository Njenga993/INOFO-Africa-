import { FaArrowRight, FaLeaf, FaUsers, FaHandshake } from 'react-icons/fa';
import '../styles/Herosection.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="container hero-layout">
          {/* Text Section */}
          <div className="hero-text">
            <h1>Coordinating Africa's Continent Strategies for Organic Farming</h1>
            <h2>Global representation for Africa's organic farmers</h2>
            <p>
              INOFO Africa connects organic farmer organisations on the ground, to represent them on international platforms. Grow the voice of farmers by joining our global community today.
            </p>
            <div className="hero-cta">
              <a><Link to="/about" className="btn-primary">Learn More <FaArrowRight /></Link>
                 
              </a>
              <a><Link to="/about" className="btn-primary">Get Involved <FaHandshake /></Link>
                 
              </a>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="hero-features">
            <div className="feature-card">
              <div className="feature-icon">
                <FaLeaf />
              </div>
              <h3>Organic Advocacy</h3>
              <p>Championing organic policies worldwide</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>Global Network</h3>
              <p>Connecting farmers across continents</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
