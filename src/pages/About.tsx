import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { JSX } from 'react';
import { Leaf, Users as UsersIcon, Globe, Landmark } from "lucide-react"; 
import '../styles/AboutUsAfrica.css';
import MembersTable from '../components/LogoCarousel';
import Newsletter from '../components/Newsletter';

// ✅ Import leader images from assets
import wanjamaImg from "../assets/wanjama.jpg";
import raoudathImg from "../assets/Roudath.jpg";
import charlesImg from "../assets/charles.jpg";

// ✅ Import section images from assets
import journeyImg from "../assets/p.webp";
import governance from "../assets/uganda.jpg";
import governanceImg from "../assets/all.webp";
import heroImg from "../assets/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg";

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
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  // Leadership data with proper typing
  const leaders: Leader[] = [
    {
      name: "Daniel Wanjama",
      role: "East Africa Convenor",
      bio: "Daniel Wanjama, representing Seed Savers Network Kenya, is a dedicated advocate for seed sovereignty and food security in Eastern Africa. He has spearheaded efforts to preserve indigenous seed varieties and empower farmers to sustain their own seed systems. With a strong focus on biodiversity and sustainability, Daniel ensures smallholder farmers access locally adapted, organic seeds. As Eastern Africa's representative on the INOFO Global Council, he brings his expertise and commitment to protecting farmers' rights and promoting resilient agricultural practices.",
      image: wanjamaImg
    },
    {
      name: "Raoudath Bouaima",
      role: "West Africa Convenor",
      bio: "Raoudath Bouraima, from Benin, is a prominent advocate for sustainable agriculture and organic farming in Western Africa. Through Les Jardins de l'Espoir, she has advanced community-driven organic systems focused on resilience and food security. A strong proponent of women's involvement in agriculture, Raoudath champions initiatives that empower rural communities and protect the environment. As Western Africa's representative, she strives to amplify farmers' voices and promote organic agriculture across the region.",
      image: raoudathImg
    },
    {
      name: "Charles Mubanga",
      role: "Southern Africa Convenor",
      bio: "Charles K. Mubanga, representing the Mpongwe Bulima Cooperative in Zambia, is a committed advocate for sustainable farming and cooperative development. With extensive experience, he drives change by improving livelihoods and promoting ecological practices. As the Southern Africa Convenor, Charles will focus on strengthening cooperative systems and amplifying smallholder farmers' voices in policy-making. His leadership aims to foster resilient agricultural communities across Southern Africa.",
      image: charlesImg
    },
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
        style={{ backgroundImage: `url(${heroImg})` }}
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
            Born in 2008 under the global INOFO umbrella, INOFO Africa has blossomed into an
             autonomous regional entity  with its membership currently present in
              20+ countries . From the baobab-dotted savannas to lush highland farms, 
             we've woven a network that honors local knowledge while
             confronting continental challenges in solidarity.
          </p>
          <p>
            Our journey is one of resilience, innovation, and unwavering commitment to 
            organic farmers across Africa. Together, we cultivate not just crops, but hope,
            empowerment, and a sustainable future for generations to come.
          </p>
          <p>
            Today, INOFO Africa stands as a vibrant coalition of farmer organizations,
            NGOs, and advocates united by a shared vision: to champion organic agriculture
            as a catalyst for social justice, environmental stewardship, and economic resilience
            across the continent.
          </p>
          <p>
            Through collaborative projects, policy advocacy, and capacity-building initiatives,
            we strive to uplift smallholder farmers, preserve biodiversity, and promote food sovereignty
            in every corner of Africa.
          </p>
        </motion.div>
        <motion.div className="image-content" variants={itemVariants}>
          <img 
            src={journeyImg}
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
            src={governanceImg} 
            alt="INOFO leadership meeting" 
            className="content-image"
          />
        </motion.div>
        <motion.div className="text-content" variants={itemVariants}>
          <h2>Governance Rooted in Representation</h2>
          <p>
            Our unique structure blends continental coordination with regional autonomy. The Continental Council of 
            Convenors elected every 3 years guides strategy while Regional Assemblies ensure local needs shape our work.
          </p>
          <p>
            The Executive Secretariat based in East Africa coordinates programs, while our Technical Advisory Circle 
             informs policy positions and training programs.
          </p>
          <p>
            This multi-layered governance model ensures that every voice from the grassroots to the continental level
            is heard and valued in our collective mission to advance organic agriculture across Africa.
          </p>
          <p>
            Through transparent decision-making and inclusive leadership, we remain accountable to our members
            and the communities we serve.
          </p>
        </motion.div>
      </motion.section>

      {/* Blog Grid Section */}
      <motion.section 
        className="content-section image-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="image-content-1" variants={itemVariants}>
          <img 
            src={governance} 
            alt="INOFO leadership meeting" 
            className="content-image-1"
          />
        </motion.div>
        <motion.div className="text-content" variants={itemVariants}>
           <h2>Why We Farm Organic in Africa</h2>
            <p className="subtitle">
              A regenerative approach rooted in community, culture, and climate resilience.
            </p>
            <p className="intro-text">
              Organic farming in Africa isn't just about avoiding chemicals 
              it's a people-powered solution to food security, soil regeneration,
              and economic justice. We believe in cultivating systems that nourish
              both the land and the livelihoods of those who steward it.
            </p>
            <p>
              By embracing traditional knowledge alongside innovative practices,
              our farmers are restoring ecosystems, enhancing biodiversity,
              and building resilient communities capable of withstanding climate shocks.
            </p>
            <p>
              Through organic agriculture, we're not only growing food but also
              cultivating hope for a healthier, more equitable future for Africa's
              farmers and their families.
            </p>
            <p>
              Join us as we explore the transformative power of organic farming
              across the continent  from soil to soul.
            </p>
        </motion.div>
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

      {/* ================================
         UPDATED Governance Structure Section
         ================================ */}
      <motion.section
        className="governance-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>INOFO Africa Organizational Structure</motion.h2>

        <motion.div className="governance-container" variants={containerVariants}>
          
          {/* Level 1 */}
          <motion.div className="governance-level" variants={itemVariants}>
            <div className="level-content">
              <div className="title-box">
                <h3>The African General Assembly (A.G.A) of OFOS at community level</h3>
              </div>
              <div className="desc-box">
                <p>OFO's form a National Chapter with an elected coordinating team led by the National Convenor.</p>
              </div>
            </div>
            
            {/* Dual Arrows */}
            <div className="arrows-container">
              <div className="arrow-left">
                <div className="arrow-down">↓</div>
              </div>
              <div className="arrow-right">
                <div className="arrow-up">↑</div>
              </div>
            </div>
          </motion.div>

          {/* Level 2 */}
          <motion.div className="governance-level" variants={itemVariants}>
            <div className="level-content">
              <div className="title-box">
                <h3>The African Council of Convenors (A.C.C) represented by a National Convenor from each Active Country.</h3>
              </div>
              <div className="desc-box">
                <p>The A.C.C is the principle governance oversight body between the African General Assembly Sessions</p>
              </div>
            </div>
            
            {/* Dual Arrows */}
            <div className="arrows-container">
              <div className="arrow-left">
                <div className="arrow-down">↓</div>
              </div>
              <div className="arrow-right">
                <div className="arrow-up">↑</div>
              </div>
            </div>
          </motion.div>

          {/* Level 3 */}
          <motion.div className="governance-level" variants={itemVariants}>
            <div className="level-content">
              <div className="title-box">
                <h3>The Executive Committee of the African Council of Convenors<p>5 representatives from 5 Regions of Africa</p></h3>
              </div>
              <div className="desc-box">
                <p>Representatives from this committee elected by the (A.G.A) connects the Regional Body to INOFO Global in the Global Council of Convenors.</p>
              </div>
              <div className="desc-box">
                <p>This Committee supports the INOFO Africa Secretariats to Execute the Decisions taken by the (A.G.A) and the (A.C.C) by providing the governance Oversight Role.</p>
              </div>
            </div>
            
            {/* Dual Arrows */}
            <div className="arrows-container">
              <div className="arrow-left">
                <div className="arrow-down">↓</div>
              </div>
              <div className="arrow-right">
                <div className="arrow-up">↑</div>
              </div>
            </div>
          </motion.div>

          {/* Level 4 */}
          <motion.div className="governance-level" variants={itemVariants}>
            <div className="level-content">
              <div className="title-box">
                <h3>The secretariat<p> led by the Executive Director </p></h3>
              </div>
              <div className="desc-box">
                <div className="secretariat-roles">
                  <div className="role-item">
                    <span className="role-title">The Secretariate Performs the following functions: </span>
                  </div>
                  <div className="role-item">
                    <span className="role-title">. Admin & Finance Role</span>
                  </div>
                  <div className="role-item">
                    <span className="role-title">. Sub region Coordinating Role (5 sub regions)</span>
                  </div>
                  <div className="role-item">
                    <span className="role-title">. Communications & IT Role</span>
                  </div>
                </div>
              </div>
            </div>
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

      <MembersTable />
      <Newsletter/>
    </motion.main>
  );
};

export default AboutUsAfrica;