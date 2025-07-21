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
            <h1>🌍 Empowering Communities, Cultivating Safe Food and Defending the Earth.</h1>
            <h2>Global representation for Africa's organic farmers</h2>
            <p>
              We are Africa’s organic farmers — proud smallholder families dedicated to nurturing the land without harmful chemicals. By working with nature, not against it, we protect our soils, our food, and our environment. We are the guardians of safe, healthy food — for today and for generations to come.
            </p>
            <div className="hero-cta">
              <a><Link to="/about" className="btn-primary">Learn More <FaArrowRight /></Link>
                 
              </a>
              <a><Link to="/contact" className="btn-primary">Get Involved <FaHandshake /></Link>
                 
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
              <h3>Farmer-Centered</h3>
              <p>Putting organic farmers at the heart of everything we do</p>
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
