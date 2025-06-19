import { FaLeaf, FaUsers, FaHandshake, FaGlobeAfrica } from 'react-icons/fa';
import '../styles/pillars.css'; // Ensure you have this CSS file for styling

const MissionVision = () => {
  return (
    <section className="mv-section">
      <div className="mv-container">
        {/* Left Column - Mission */}
        <div className="mv-block mission-block">
          <div className="mv-icon">
            <FaLeaf />
          </div>
          <h2 className="mv-title">Our Mission</h2>
          <p className="mv-text">
            To unite organic farmers and support their voices at all levels of food systems 
            development towards producing healthy, nutritious food and preserving Mother Earth.
          </p>
        </div>

        {/* Right Column - Vision */}
        <div className="mv-block vision-block">
          <div className="mv-icon">
            <FaGlobeAfrica />
          </div>
          <h2 className="mv-title">Our Vision</h2>
          <p className="mv-text">
            A world of regenerative and sustainable food systems for all.
          </p>
        </div>
      </div>

      {/* Values Section Below */}
      <div className="values-section">
        <h3 className="values-title">Our Values</h3>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">
              <FaUsers />
            </div>
            <h4>Farmer-Centered</h4>
            <p>Putting organic farmers at the heart of everything we do</p>
          </div>
          <div className="value-item">
            <div className="value-icon">
              <FaHandshake />
            </div>
            <h4>Collaboration</h4>
            <p>Working together for greater impact</p>
          </div>
          <div className="value-item">
            <div className="value-icon">
              <FaGlobeAfrica />
            </div>
            <h4>Sustainability</h4>
            <p>Commitment to ecological balance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;