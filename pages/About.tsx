import { FaSeedling, FaMapMarkedAlt, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { JSX } from 'react';
import { Leaf, Users as UsersIcon, Globe, Landmark } from "lucide-react"; 
import '../styles/AboutUsAfrica.css';
import MembersTable from '../components/LogoCarousel';
import Newsletter from '../components/Newsletter';

// Type definitions
interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Pillar {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface StatItem {
  icon: JSX.Element;
  value: string;
  label: string;
}

const AboutUsAfrica = () => {
  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] // Using easing array instead of string
      }
    }
  };

  // Leadership data with proper typing
  const leaders: Leader[] = [
    {
      name: "Daniel Wanjama",
      role: "East Africa Convenor",
      bio: "Daniel Wanjama, representing Seed Savers Network Kenya, is a dedicated advocate for seed sovereignty and food security in Eastern Africa. He has spearheaded efforts to preserve indigenous seed varieties and empower farmers to sustain their own seed systems. With a strong focus on biodiversity and sustainability, Daniel ensures smallholder farmers access locally adapted, organic seeds. As Eastern Africa's representative on the INOFO Global Council, he brings his expertise and commitment to protecting farmers' rights and promoting resilient agricultural practices.",
      image: "wanjama.jpg"
    },
        {
      name: "Raoudath Bouaima",
      role: "West Africa Convenor",
      bio: "Raoudath Bouraima, from Benin, is a prominent advocate for sustainable agriculture and organic farming in Western Africa. Through Les Jardins de l’Espoir, she has advanced community-driven organic systems focused on resilience and food security. A strong proponent of women’s involvement in agriculture, Raoudath champions initiatives that empower rural communities and protect the environment. As Western Africa's representative, she strives to amplify farmers' voices and promote organic agriculture across the region.",
      image: "Roudath.jpg"
    },
        {
      name: "Charles Mubanga",
      role: "Southern Africa Convenor",
      bio: "Charles K. Mubanga, representing the Mpongwe Bulima Cooperative in Zambia, is a committed advocate for sustainable farming and cooperative development. With extensive experience, he drives change by improving livelihoods and promoting ecological practices. As the Southern Africa Convenor, Charles will focus on strengthening cooperative systems and amplifying smallholder farmers’ voices in policy-making. His leadership aims to foster resilient agricultural communities across Southern Africa.",
      image: "charles.jpg"
    },
    // Add other leaders here
  ];

  const pillars: Pillar[] = [
    {
      icon: <UsersIcon className="pillar-icon-svg" />,
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
  ];

  const stats: StatItem[] = [
    { icon: <FaUsers className="stat-icon" />, value: "20+", label: "Member Organizations" },
    { icon: <FaMapMarkedAlt className="stat-icon" />, value: "10+", label: "African Countries" },
    { icon: <FaSeedling className="stat-icon" />, value: "500+", label: "Documented Practices" }
  ];

  return (
    <motion.main 
      className="about-africa"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.header 
        className="about_hero-header" 
        style={{ backgroundImage: 'url(/_MG_0674.jpg)' }}
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
        </div>
      </motion.header>

      {/* History Section */}
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
            20+ countries. From the baobab-dotted savannas to lush highland farms, we've woven a network that honors local 
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
            src="/_MG_0674.jpg" 
            alt="African farmers in discussion" 
            className="content-image"
          />
        </motion.div>
      </motion.section>

      {/* Governance Section */}
      <motion.section 
        className="content-section image-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="image-content" variants={itemVariants}>
          <img 
            src="/_MG_0538.jpg" 
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
          <motion.div className="text-content" variants={itemVariants}>
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

        </div>
      </motion.section>

       {/* Pillars Section */}
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
      </motion.section>

      {/* Leadership Grid */}
      <motion.section 
        className="text-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Meet Our Leadership Team</motion.h2>
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

     {/* Impact Section */}
      <motion.section 
        className="text-content"
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
          {stats.map((stat, index) => (
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

      <MembersTable />

      {/* Secretariat Section */}
<motion.section 
  className="content-section image-left"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={containerVariants}
>
  <motion.div className="text-content" variants={itemVariants}>
    <h2>Our Secretariat</h2>
    <p>
      Based at SeedSavers Network in Kenya , our <b>12-member Secretariat</b> serves as the nerve 
      centre of continental coordination, linking <b>global policy frameworks</b> 
      with <b>local implementation</b> across Africa. The team provides technical 
      guidance, advocacy leadership, and knowledge sharing for partners in every 
      region.
    </p>

    <div className="stat-card">
      <h3>Our Core Units</h3>
      <ul>
        <li>
          <b>Policy & Advocacy Unit</b> – Shapes continental positions and amplifies 
          African voices in global forums.
        </li>
        <li>
          <b>Knowledge Management Hub</b> – Curates data, research, and best practices 
          to inform evidence-based action.
        </li>
        <li>
          <b>Youth & Gender Program</b> – Ensures inclusivity and empowers the next 
          generation of leaders.
        </li>
        <li>
          <b>Regional Coordination Desk</b> – Facilitates collaboration across Africa’s 
          sub-regions for cohesive impact.
        </li>
      </ul>
    </div>

    <p>
      The Secretariat operates through <b>quarterly regional rotations</b> that bring 
      together diverse perspectives while safeguarding operational stability. 
      This model guarantees that strategies remain inclusive, agile, and firmly 
      anchored in Africa’s realities.
    </p>

    <p>
      By combining policy influence, technical expertise, and on-the-ground 
      coordination, the Secretariat drives a shared vision of <b>resilient food 
      systems, empowered communities, and sustainable futures</b> for Africa.
    </p>
  </motion.div>
</motion.section>
<Newsletter/>
    </motion.main>
  );
};

export default AboutUsAfrica;