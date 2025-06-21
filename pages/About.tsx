import React from 'react';
import { FaSeedling, FaHandsHelping, FaNetworkWired, FaMapMarkedAlt, FaUsers } from 'react-icons/fa';
import '../styles/AboutUsAfrica.css';

const AboutUsAfrica = () => {
  // Leadership data
  const leaders = [
    {
      name: "Daniel Wanjama",
      role: "East Africa Convenor",
      bio: "Daniel Wanjama, representing Seed Savers Network Kenya, is a dedicated advocate for seed sovereignty and food security in Eastern Africa. He has spearheaded efforts to preserve indigenous seed varieties and empower farmers to sustain their own seed systems. With a strong focus on biodiversity and sustainability, Daniel ensures smallholder farmers access locally adapted, organic seeds. As Eastern Africa's representative on the INOFO Global Council, he brings his expertise and commitment to protecting farmers' rights and promoting resilient agricultural practices.",
      image: "../assets/wanjama.jpg"
    },
    {
      name: "Raoudath Bouaima",
      role: "West Africa Convenor",
      bio: "Raoudath Bouraima, from Benin, is a prominent advocate for sustainable agriculture and organic farming in Western Africa. Through Les Jardins de l’Espoir, she has advanced community-driven organic systems focused on resilience and food security. A strong proponent of women’s involvement in agriculture, Raoudath champions initiatives that empower rural communities and protect the environment. As Western Africa's representative, she strives to amplify farmers' voices and promote organic agriculture across the region.",
      image: "../assets/Roudath.jpg"
    },
    {
      name: "Charles Mubanga",
      role: "Southern Africa Convenor",
      bio: "Charles K. Mubanga, representing the Mpongwe Bulima Cooperative in Zambia, is a committed advocate for sustainable farming and cooperative development. With extensive experience, he drives change by improving livelihoods and promoting ecological practices. As the Southern Africa Convenor, Charles will focus on strengthening cooperative systems and amplifying smallholder farmers’ voices in policy-making.",
      image: "../assets/charles.jpg"
    }
  ];

  const pillars = [
    {
      icon: <FaHandsHelping />,
      title: "Farmer Advocacy",
      description: "Empowering farmers to influence environmental and land-use policies across 42 African nations through our continental policy task force."
    },
    {
      icon: <FaSeedling />,
      title: "Knowledge Sharing",
      description: "Curating open-source tools & ancestral wisdom through our digital library with 500+ documented traditional practices."
    },
    {
      icon: <FaNetworkWired />,
      title: "Continental Networking",
      description: "Connecting 78 organizations across Africa's 5 agroecological zones through regional assemblies and digital platforms."
    }
  ];

  return (
    <main className="about-africa">
      {/* Hero Section with Full-width Image */}
      <header className="hero-header" style={{ backgroundImage: 'url(/assets/about-hero.jpg)' }}>
        <div className="hero-overlay">
          <h1>About INOFO Africa</h1>
          <p className="lead">
            The continental catalyst uniting Africa's organic farming movements through strategy, innovation, and ancestral wisdom.
          </p>
        </div>
      </header>

      {/* History Section - Image Right */}
      <section className="content-section image-right">
        <div className="text-content">
          <h2>Our African Journey</h2>
          <p>
            Born in 2008 under the global INOFO umbrella, INOFO Africa has blossomed into an independent force representing 
            32 countries. From the baobab-dotted savannas to lush highland farms, we've woven a network that honors local 
            knowledge while confronting continental challenges.
          </p>
          <p>
            Our milestones include establishing regional hubs in East (2012), West (2015), and Southern Africa (2018), 
            and launching the Pan-African Organic Policy Forum in 2020. Through assemblies, digital platforms, and 
            farmer exchanges, we've amplified grassroots voices at AU and UN levels.
          </p>
        </div>
        <div className="image-content">
          <img src="../assets/dedicated-farmer-tending-to-vibrant-crops-328717.jpg" alt="African farmers in discussion" />
        </div>
      </section>

      {/* Governance Section - Image Left */}
      <section className="content-section image-left">
        <div className="image-content">
          <img src="../assets/lush-green-vegetable-field-under-a-clear-sky-4935857.jpg" alt="INOFO leadership meeting" />
        </div>
        <div className="text-content">
          <h2>Governance Rooted in Representation</h2>
          <p>
            Our unique structure blends continental coordination with regional autonomy. The Continental Council of 
            Convenors—elected every 3 years—guides strategy while Regional Assemblies ensure local needs shape our work.
          </p>
          <p>
            The Executive Secretariat based in Nairobi coordinates programs, while our Technical Advisory Circle 
            (45 experts across Africa) informs policy positions and training programs.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="leaders-section">
        <h2>Meet Our Regional Convenors</h2>
        <div className="leaders-grid">
          {leaders.map((leader, index) => (
            <div className="leader-card" key={index}>
              <div className="leader-image">
                <img src={leader.image} alt={leader.name} />
                <div className="leader-overlay">
                  <h4>{leader.name}</h4>
                  <p>{leader.role}</p>
                </div>
              </div>
              <div className="leader-bio">
                <p>{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars Section - Image Right */}
      <section className="content-section image-right">
        <div className="text-content">
          <h2>Our Strategic Pillars</h2>
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <div className="pillar-card" key={index}>
                <div className="pillar-icon">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="image-content">
          <img src="../assets/modern-business-team-collaborating-on-data-analysis-37993.jpg" alt="INOFO strategic pillars visual" />
        </div>
      </section>

      {/* Secretariat Section - Image Left */}
      <section className="content-section image-left">
        <div className="image-content">
          <img src="../assets/chaos-in-communication-a-call-centers-struggle-111332057.jpg" alt="INOFO Africa secretariat team" />
        </div>
        <div className="text-content">
          <h2>The Nairobi Secretariat</h2>
          <p>
            Our 12-member team coordinates continental strategy from Kenya, bridging global policy with local implementation. 
            The secretariat houses:
          </p>
          <div className="stat-card">
          <ul>
            <li><b>Policy & Advocacy Unit</b></li>
            <li><b>Knowledge Management Hub</b></li>
            <li><b>Youth & Gender Program</b></li>
            <li><b>Regional Coordination Desk</b></li>
          </ul>
          </div>
          <p>
            Through quarterly regional rotations, we ensure all voices inform our work while maintaining operational 
            continuity.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <h2>Our Continental Footprint</h2>
        <div className="impact-stats">
          <div className="stat-card">
            <FaUsers className="stat-icon" />
            <h3>78+</h3>
            <p>Member Organizations</p>
          </div>
          <div className="stat-card">
            <FaMapMarkedAlt className="stat-icon" />
            <h3>32</h3>
            <p>African Countries</p>
          </div>
          <div className="stat-card">
            <FaSeedling className="stat-icon" />
            <h3>500+</h3>
            <p>Documented Practices</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsAfrica;