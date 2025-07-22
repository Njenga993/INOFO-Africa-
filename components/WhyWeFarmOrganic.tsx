import React from "react";
import {
  Leaf,
  Users,
  Globe,
  Landmark,
} from "lucide-react"; // Lucide icons

const WhyWeFarmOrganic: React.FC = () => {
  return (
    <section className="blog-grid-impact-section">
      <div className="blog-grid-container">
        {/* Section Header */}
        <div className="section-header">
          <h2>Why We Farm Organic in Africa</h2>
          <p className="subtitle">
            A regenerative approach rooted in community, culture, and climate resilience.
          </p>
          <p className="intro-text">
            Organic farming in Africa isn’t just about avoiding chemicals —
            it’s a people-powered solution to food security, soil regeneration,
            and economic justice. We believe in cultivating systems that nourish
            both the land and the livelihoods of those who steward it.
          </p>
        </div>

        {/* Strategic Pillars */}
        <div className="pillars-section">
          <h3>Our Pillars of Impact</h3>
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">
                <Users />
              </div>
              <h4>Community Resilience</h4>
              <p>
                We empower farmer cooperatives and networks to build resilient rural economies and stronger local food systems.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <Leaf />
              </div>
              <h4>Ecological Stewardship</h4>
              <p>
                Our farmers are caretakers of biodiversity — preserving soils, water sources, and traditional ecological knowledge.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <Landmark />
              </div>
              <h4>Policy & Voice</h4>
              <p>
                We advocate for inclusive agricultural policies that support organic farmers, youth, and women-led movements.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <Globe />
              </div>
              <h4>Global Solidarity</h4>
              <p>
                We connect grassroots African farmers with regional and international allies to amplify their voices and innovations.
              </p>
            </div>
          </div>
        </div>

        {/* Chart Image */}
        <div className="featured-blogs">
          <h3>Main Purposes of Organic Farmer Organizations</h3>
          <div className="featured-grid">
            <div className="featured-card">
              <div
                className="featured-image"
                style={{
                  backgroundImage: "url('/images/ofo-chart.png')",
                }}
              ></div>
              <div className="featured-content">
                <p>
                  The illustration above summarizes the key priorities and
                  unifying goals among African organic farming movements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeFarmOrganic;
