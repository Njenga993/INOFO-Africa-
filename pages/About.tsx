import { FaSeedling, FaHandsHelping, FaNetworkWired, FaMapMarkedAlt, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/AboutUsAfrica.css';
import { Leaf, Users, Globe, Landmark } from "lucide-react"; 

const AboutUsAfrica = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Leadership data
  const leaders = [
    {
      name: "Daniel Wanjama",
      role: "East Africa Convenor",
      bio: "Daniel Wanjama, representing Seed Savers Network Kenya, is a dedicated advocate for seed sovereignty and food security in Eastern Africa. He has spearheaded efforts to preserve indigenous seed varieties and empower farmers to sustain their own seed systems. With a strong focus on biodiversity and sustainability, Daniel ensures smallholder farmers access locally adapted, organic seeds. As Eastern Africa's representative on the INOFO Global Council, he brings his expertise and commitment to protecting farmers' rights and promoting resilient agricultural practices.",
      image: "wanjama.jpg"
    },
    // ... (keep your existing leaders array)
  ];

  const pillars = [
    // ... (keep your existing pillars array)
  ];

  return (
    <motion.main 
      className="about-africa"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with Full-width Image */}
      <motion.header 
        className="hero-header" 
        style={{ backgroundImage: 'url(dedicated-farmer-tending-to-vibrant-crops-328717.jpg)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="hero-overlay">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About INOFO Africa
          </motion.h1>
          <motion.p 
            className="lead"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The continental catalyst uniting Africa's organic farming movements through strategy, innovation, and ancestral wisdom.
          </motion.p>
        </div>
      </motion.header>

      {/* History Section - Image Right */}
      <motion.section 
        className="content-section image-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-content" variants={itemVariants}>
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
        </motion.div>
        <motion.div className="image-content" variants={itemVariants}>
          <img 
            src="dedicated-farmer-tending-to-vibrant-crops-328717.jpg" 
            alt="African farmers in discussion" 
            className="content-image"
          />
        </motion.div>
      </motion.section>

      {/* Governance Section - Image Left */}
      <motion.section 
        className="content-section image-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="image-content" variants={itemVariants}>
          <img 
            src="lush-green-vegetable-field-under-a-clear-sky-4935857.jpg" 
            alt="INOFO leadership meeting" 
            className="content-image"
          />
        </motion.div>
        <motion.div className="text-content" variants={itemVariants}>
          <h2>Governance Rooted in Representation</h2>
          <p>
            Our unique structure blends continental coordination with regional autonomy. The Continental Council of 
            Convenors—elected every 3 years—guides strategy while Regional Assemblies ensure local needs shape our work.
          </p>
          <p>
            The Executive Secretariat based in Nairobi coordinates programs, while our Technical Advisory Circle 
            (45 experts across Africa) informs policy positions and training programs.
          </p>
        </motion.div>
      </motion.section>

      {/* Blog Grid Section */}
      <motion.section 
        className="blog-grid-impact-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="blog-grid-container">
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Why We Farm Organic in Africa</h2>
            <p className="subtitle">
              A regenerative approach rooted in community, culture, and climate resilience.
            </p>
            <p className="intro-text">
              Organic farming in Africa isn't just about avoiding chemicals —
              it's a people-powered solution to food security, soil regeneration,
              and economic justice. We believe in cultivating systems that nourish
              both the land and the livelihoods of those who steward it.
            </p>
          </motion.div>

          {/* Strategic Pillars */}
          <div className="pillars-section">
            <motion.h3 variants={itemVariants}>Our Pillars of Impact</motion.h3>
            <motion.div 
              className="pillars-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Users className="pillar-icon-svg" />,
                  title: "Community Resilience",
                  description: "We empower farmer cooperatives and networks to build resilient rural economies and stronger local food systems."
                },
                {
                  icon: <Leaf className="pillar-icon-svg" />,
                  title: "Ecological Stewardship",
                  description: "Our farmers are caretakers of biodiversity — preserving soils, water sources, and traditional ecological knowledge."
                },
                {
                  icon: <Landmark className="pillar-icon-svg" />,
                  title: "Policy & Voice",
                  description: "We advocate for inclusive agricultural policies that support organic farmers, youth, and women-led movements."
                },
                {
                  icon: <Globe className="pillar-icon-svg" />,
                  title: "Global Solidarity",
                  description: "We connect grassroots African farmers with regional and international allies to amplify their voices and innovations."
                }
              ].map((pillar, index) => (
                <motion.div 
                  className="pillar-card" 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="pillar-icon">
                    {pillar.icon}
                  </div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Chart Image */}
          <div className="featured-blogs">
            <motion.h3 variants={itemVariants}>Main Purposes of Organic Farmer Organizations</motion.h3>
            <motion.div 
              className="featured-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="featured-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Leadership Grid */}
      <motion.section 
        className="leaders-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Meet Our Regional Convenors</motion.h2>
        <motion.div 
          className="leaders-grid"
          variants={containerVariants}
        >
          {leaders.map((leader, index) => (
            <motion.div 
              className="leader-card" 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Pillars Section - Image Right */}
      <motion.section 
        className="content-section image-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-content" variants={itemVariants}>
          <h2>Our Strategic Pillars</h2>
          <motion.div 
            className="pillars-grid"
            variants={containerVariants}
          >
            {pillars.map((pillar, index) => (
              <motion.div 
                className="pillar-card" 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
              >
                <div className="pillar-icon">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="image-content" variants={itemVariants}>
          <img 
            src="modern-business-team-collaborating-on-data-analysis-37993.jpg" 
            alt="INOFO strategic pillars visual" 
            className="content-image"
          />
        </motion.div>
      </motion.section>

      {/* Secretariat Section - Image Left */}
      <motion.section 
        className="content-section image-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="image-content" variants={itemVariants}>
          <img 
            src="chaos-in-communication-a-call-centers-struggle-111332057.jpg" 
            alt="INOFO Africa secretariat team" 
            className="content-image"
          />
        </motion.div>
        <motion.div className="text-content" variants={itemVariants}>
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
        </motion.div>
      </motion.section>

      {/* Impact Section */}
      <motion.section 
        className="impact-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Our Continental Footprint</motion.h2>
        <motion.div 
          className="impact-stats"
          variants={containerVariants}
        >
          {[
            { icon: <FaUsers className="stat-icon" />, value: "78+", label: "Member Organizations" },
            { icon: <FaMapMarkedAlt className="stat-icon" />, value: "32", label: "African Countries" },
            { icon: <FaSeedling className="stat-icon" />, value: "500+", label: "Documented Practices" }
          ].map((stat, index) => (
            <motion.div 
              className="stat-card"
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {stat.icon}
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default AboutUsAfrica;