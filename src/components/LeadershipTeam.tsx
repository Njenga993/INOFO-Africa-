import React, { useMemo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "../styles/LeadershipTeam.css";

// Import leader images (adjust paths as needed)
import wanjamaImg from "../assets/wanjama.jpg";
import raoudathImg from "../assets/Roudath.jpg";
import charlesImg from "../assets/charles.jpg";

export interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
  region?: string;
  level: 1 | 2 | 3 | 4;
  expertise?: string[];
}

interface LeadershipTeamProps {
  title?: string;
  showBio?: boolean;
}

const LeadershipTeam: React.FC<LeadershipTeamProps> = ({
  title = "INOFO Africa Leadership Team",
  showBio = true,
}) => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const levelTitleVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  // Leadership data with levels
  const leaders: Leader[] = useMemo(() => [
    // Level 1 - Top Leadership (3 cards)
    {
      name: "Daniel Wanjama",
      role: "East Africa Regional Convenor",
      region: "East Africa",
      level: 1,
      expertise: ["Seed Sovereignty", "Food Security", "Indigenous Seeds"],
      bio: "Daniel Wanjama (Seed Savers Network Kenya) champions seed sovereignty and food security in Eastern Africa. He leads initiatives to preserve indigenous seed varieties, strengthen biodiversity, and empower farmers with locally adapted, organic seed systems.",
      image: wanjamaImg
    },
    {
      name: "Raoudath Bouaima",
      role: "West Africa Regional Convenor",
      region: "West Africa",
      level: 1,
      expertise: ["Women in Agriculture", "Community Development", "Organic Farming"],
      bio: "Raoudath Bouraima (Benin) advances sustainable agriculture and organic farming across West Africa through community-driven projects. A strong advocate for women's leadership in agriculture, she supports resilience-building programs that amplify rural voices.",
      image: raoudathImg
    },
    {
      name: "Charles Mubanga",
      role: "Southern Africa Regional Convenor",
      region: "Southern Africa",
      level: 1,
      expertise: ["Cooperatives", "Policy Advocacy", "Smallholder Support"],
      bio: "Charles K. Mubanga (Mpongwe Bulima Cooperative, Zambia) promotes cooperative development and ecological farming practices. He focuses on strengthening farmer cooperatives, advocacy, and policy engagement to improve livelihoods.",
      image: charlesImg
    },
    // Level 2 - Second Tier (2 cards)
    {
      name: "Amina Okonkwo",
      role: "Central Africa Regional Coordinator",
      region: "Central Africa",
      level: 2,
      expertise: ["Forest Conservation", "Indigenous Knowledge", "Women's Leadership"],
      bio: "Amina Okonkwo leads Central African initiatives focused on forest conservation and indigenous knowledge integration. With over 15 years of experience in community organizing, she bridges traditional farming practices with modern agroecology.",
      image: wanjamaImg // Using placeholder - replace with actual image
    },
    {
      name: "John Mbeki",
      role: "North Africa Regional Coordinator",
      region: "North Africa",
      level: 2,
      expertise: ["Desert Agriculture", "Water Conservation", "Youth Engagement"],
      bio: "John Mbeki coordinates North African programs specializing in desert agriculture and water conservation techniques. His work focuses on engaging youth in sustainable farming practices across arid regions.",
      image: charlesImg // Using placeholder - replace with actual image
    },
    // Level 3 - Third Tier (4 cards)
    {
      name: "Grace Ndlovu",
      role: "Policy & Advocacy Lead",
      region: "Southern Africa",
      level: 3,
      expertise: ["Policy Analysis", "Farmer Rights", "Legal Advocacy"],
      bio: "Grace Ndlovu leads policy advocacy initiatives, representing farmer interests at national and regional levels. She has successfully lobbied for farmer-friendly legislation in multiple countries.",
      image: raoudathImg // Using placeholder - replace with actual image
    },
    {
      name: "Samuel Osei",
      role: "Programs Coordinator",
      region: "West Africa",
      level: 3,
      expertise: ["Program Management", "Capacity Building", "M&E"],
      bio: "Samuel Osei coordinates training programs and capacity-building initiatives across West Africa. His participatory approach ensures programs are farmer-led and context-appropriate.",
      image: wanjamaImg // Using placeholder - replace with actual image
    },
    {
      name: "Fatima Hassan",
      role: "Research & Documentation Lead",
      region: "East Africa",
      level: 3,
      expertise: ["Research", "Documentation", "Knowledge Management"],
      bio: "Fatima Hassan leads research initiatives documenting traditional farming knowledge and indigenous seed systems. Her work preserves critical agricultural heritage for future generations.",
      image: raoudathImg // Using placeholder - replace with actual image
    },
    {
      name: "Pierre Kagame",
      role: "Communications Director",
      region: "Central Africa",
      level: 3,
      expertise: ["Communications", "Digital Media", "Storytelling"],
      bio: "Pierre Kagame manages communications strategy, amplifying farmer voices through digital media and traditional channels. He develops compelling narratives that showcase farmer innovations.",
      image: charlesImg // Using placeholder - replace with actual image
    },
    // Level 4 - Fourth Tier (3 cards)
    {
      name: "Elizabeth Mwangi",
      role: "Women's Leadership Coordinator",
      region: "East Africa",
      level: 4,
      expertise: ["Gender Equality", "Women's Empowerment", "Leadership Development"],
      bio: "Elizabeth Mwangi coordinates programs focused on women's leadership in agriculture. She mentors emerging women leaders and advocates for gender-equitable agricultural policies.",
      image: raoudathImg // Using placeholder - replace with actual image
    },
    {
      name: "Theophilus Abebe",
      role: "Youth Programs Manager",
      region: "Horn of Africa",
      level: 4,
      expertise: ["Youth Engagement", "Agripreneurship", "Digital Agriculture"],
      bio: "Theophilus Abebe leads youth engagement initiatives, promoting agripreneurship and digital agriculture among young farmers. He connects youth with resources and mentorship opportunities.",
      image: wanjamaImg // Using placeholder - replace with actual image
    },
    {
      name: "Catherine Mumba",
      role: "Seed Sovereignty Coordinator",
      region: "Southern Africa",
      level: 4,
      expertise: ["Seed Banks", "Biodiversity", "Farmer Training"],
      bio: "Catherine Mumba coordinates seed sovereignty programs, managing community seed banks and training farmers in seed saving techniques. She champions biodiversity conservation through farmer-managed seed systems.",
      image: charlesImg // Using placeholder - replace with actual image
    }
  ], []);

  // Group leaders by level
  const leadersByLevel = {
    1: leaders.filter(l => l.level === 1),
    2: leaders.filter(l => l.level === 2),
    3: leaders.filter(l => l.level === 3),
    4: leaders.filter(l => l.level === 4)
  };

  // Level titles and descriptions
  const levelInfo = {
    1: { title: "Regional Convenors", description: "Continental Leadership Council" },
    2: { title: "Regional Coordinators", description: "Program Coordination Team" },
    3: { title: "Technical Leads", description: "Specialized Program Management" },
    4: { title: "Program Coordinators", description: "Grassroots Implementation" }
  };

  return (
    <motion.section
      className="leadership-team"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      aria-labelledby="leadership-title"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {title && (
        <motion.div className="leadership-header" variants={itemVariants}>
          <h2 id="leadership-title" itemProp="name">
            {title}
          </h2>
          <div className="leadership-underline"></div>
          <p className="leadership-subtitle">
            Multi-level governance structure rooted in farmer representation
          </p>
        </motion.div>
      )}

      <div className="leadership-levels-container">
        {/* Level 1 - 3 cards */}
        <motion.div 
          className="leadership-level level-1"
          variants={levelTitleVariants}
        >
          <div className="level-header">
            <span className="level-badge level-1-badge">Level 1</span>
            <h3 className="level-title">{levelInfo[1].title}</h3>
            <p className="level-description">{levelInfo[1].description}</p>
          </div>
          <motion.div 
            className="leaders-grid grid-3"
            variants={containerVariants}
          >
            {leadersByLevel[1].map((leader, index) => (
              <motion.article
                className="leader-card level-1-card"
                key={`level1-${index}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(76, 112, 49, 0.15)",
                  transition: { duration: 0.2 }
                }}
                aria-labelledby={`leader-name-1-${index}`}
                role="article"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Person"
              >
                <meta itemProp="position" content={String(index + 1)} />
                
                <div className="leader-image-wrapper">
                  <div className="leader-image">
                    <img
                      src={leader.image}
                      alt={`${leader.name} — ${leader.role}`}
                      loading="lazy"
                      itemProp="url"
                    />
                  </div>
                  <div className="leader-level-indicator">Level 1</div>
                </div>

                <div className="leader-info">
                  <h3 id={`leader-name-1-${index}`} itemProp="name">
                    {leader.name}
                  </h3>
                  <p className="leader-role" itemProp="jobTitle">{leader.role}</p>
                  {leader.region && (
                    <p className="leader-region">
                      <span className="region-badge">{leader.region}</span>
                    </p>
                  )}
                  
                  {showBio && (
                    <div className="leader-bio">
                      <p itemProp="description">{leader.bio}</p>
                    </div>
                  )}

                  <div className="leader-expertise">
                    {leader.expertise?.map((skill, i) => (
                      <span key={i} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                  
                  <meta itemProp="worksFor" content="INOFO Africa" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        {/* Level 2 - 2 cards */}
        <motion.div 
          className="leadership-level level-2"
          variants={levelTitleVariants}
        >
          <div className="level-header">
            <span className="level-badge level-2-badge">Level 2</span>
            <h3 className="level-title">{levelInfo[2].title}</h3>
            <p className="level-description">{levelInfo[2].description}</p>
          </div>
          <motion.div 
            className="leaders-grid grid-2"
            variants={containerVariants}
          >
            {leadersByLevel[2].map((leader, index) => (
              <motion.article
                className="leader-card level-2-card"
                key={`level2-${index}`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="leader-image-wrapper">
                  <div className="leader-image">
                    <img src={leader.image} alt={leader.name} loading="lazy" />
                  </div>
                  <div className="leader-level-indicator">Level 2</div>
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p className="leader-role">{leader.role}</p>
                  {leader.region && (
                    <p className="leader-region">
                      <span className="region-badge">{leader.region}</span>
                    </p>
                  )}
                  {showBio && (
                    <div className="leader-bio">
                      <p>{leader.bio}</p>
                    </div>
                  )}
                  <div className="leader-expertise">
                    {leader.expertise?.map((skill, i) => (
                      <span key={i} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        {/* Level 3 - 4 cards */}
        <motion.div 
          className="leadership-level level-3"
          variants={levelTitleVariants}
        >
          <div className="level-header">
            <span className="level-badge level-3-badge">Level 3</span>
            <h3 className="level-title">{levelInfo[3].title}</h3>
            <p className="level-description">{levelInfo[3].description}</p>
          </div>
          <motion.div 
            className="leaders-grid grid-4"
            variants={containerVariants}
          >
            {leadersByLevel[3].map((leader, index) => (
              <motion.article
                className="leader-card level-3-card"
                key={`level3-${index}`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="leader-image-wrapper">
                  <div className="leader-image">
                    <img src={leader.image} alt={leader.name} loading="lazy" />
                  </div>
                  <div className="leader-level-indicator">Level 3</div>
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p className="leader-role">{leader.role}</p>
                  {leader.region && (
                    <p className="leader-region">
                      <span className="region-badge">{leader.region}</span>
                    </p>
                  )}
                  {showBio && (
                    <div className="leader-bio compact-bio">
                      <p>{leader.bio.substring(0, 80)}...</p>
                    </div>
                  )}
                  <div className="leader-expertise">
                    {leader.expertise?.slice(0, 2).map((skill, i) => (
                      <span key={i} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        {/* Level 4 - 3 cards */}
        <motion.div 
          className="leadership-level level-4"
          variants={levelTitleVariants}
        >
          <div className="level-header">
            <span className="level-badge level-4-badge">Level 4</span>
            <h3 className="level-title">{levelInfo[4].title}</h3>
            <p className="level-description">{levelInfo[4].description}</p>
          </div>
          <motion.div 
            className="leaders-grid grid-3"
            variants={containerVariants}
          >
            {leadersByLevel[4].map((leader, index) => (
              <motion.article
                className="leader-card level-4-card"
                key={`level4-${index}`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="leader-image-wrapper">
                  <div className="leader-image">
                    <img src={leader.image} alt={leader.name} loading="lazy" />
                  </div>
                  <div className="leader-level-indicator">Level 4</div>
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p className="leader-role">{leader.role}</p>
                  {leader.region && (
                    <p className="leader-region">
                      <span className="region-badge">{leader.region}</span>
                    </p>
                  )}
                  {showBio && (
                    <div className="leader-bio compact-bio">
                      <p>{leader.bio.substring(0, 70)}...</p>
                    </div>
                  )}
                  <div className="leader-expertise">
                    {leader.expertise?.slice(0, 2).map((skill, i) => (
                      <span key={i} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <meta itemProp="numberOfItems" content={String(leaders.length)} />
    </motion.section>
  );
};

export default LeadershipTeam;