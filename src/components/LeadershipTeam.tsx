import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import type {Variants} from 'framer-motion';
import wanjamaImg from '../assets/wanjama.jpg';
import raoudathImg from '../assets/Roudath.jpg';
import charlesImg from '../assets/Charles_profile.jpeg';
import JuliaImg from '../assets/Julia_admin.png';
import MatovuImg from '../assets/Matovu_image.png';
import NanaImg from '../assets/Nana_image.png';
import BusiImg from '../assets/Bus_image.png';
import NeemaImg from '../assets/Neema_image.png';
import Derejeimg from '../assets/Black_Day.png';
import '../styles/LeadershipTeam.css';

interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
  region?: string;
  level: 1 | 2 | 3;
  expertise?: string[];
  hierarchyPosition?: 'top' | 'bottom'; // For Level 1 hierarchy
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

  // Leadership data with levels and hierarchy positions
  const leaders: Leader[] = useMemo(() => [
    // Level 1 - Top Leadership with hierarchy (3 top, 2 bottom)
    {
      name: "Daniel Wanjama",
      role: "East Africa Regional Convenor",
      region: "East Africa",
      level: 1,
      hierarchyPosition: 'top', // Top row
      expertise: ["Seed Sovereignty", "Food Security", "Indigenous Seeds"],
      bio: "Daniel Wanjama (Seed Savers Network Kenya) champions seed sovereignty and food security in Eastern Africa. He leads initiatives to preserve indigenous seed varieties, strengthen biodiversity, and empower farmers with locally adapted, organic seed systems.",
      image: wanjamaImg
    },
    {
      name: "Raoudath Bouraima",
      role: "West Africa Regional Convenor",
      region: "West Africa",
      level: 1,
      hierarchyPosition: 'top', // Top row
      expertise: ["Women in Agriculture", "Community Development", "Organic Farming"],
      bio: "Raoudath Bouraima (Benin) advances sustainable agriculture and organic farming across West Africa through community-driven projects. A strong advocate for women's leadership in agriculture, she supports resilience-building programs that amplify rural voices.",
      image: raoudathImg
    },
    {
      name: "Charles Mubanga",
      role: "Southern Africa Regional Convenor",
      region: "Southern Africa",
      level: 1,
      hierarchyPosition: 'top', // Top row
      expertise: ["Cooperatives", "Policy Advocacy", "Smallholder Support"],
      bio: "Charles K. Mubanga (Mpongwe Bulima Cooperative, Zambia) promotes cooperative development and ecological farming practices. He focuses on strengthening farmer cooperatives, advocacy, and policy engagement to improve livelihoods.",
      image: charlesImg
    },
    {
      name: "Julia Kamau",
      role: "Administrative Coordinator",
      region: "East Africa",
      level: 1,
      hierarchyPosition: 'bottom', // Bottom row
      expertise: ["Forest Conservation", "Indigenous Knowledge", "Women's Leadership"],
      bio: "Julia Kamau is a seasoned agronomist with vast experience in coordination and implementation of farmer-led initiatives both at local and international levels. She is the programs lead for Seed Savers Network (Host organization for INOFO AFRICA)and the admin support for INOFO AFRICA ensuring smooth administration of INOFO AFRICA operations.",
      image: JuliaImg // Using placeholder - replace with actual image
    },
    {
      name: "Julie Matovu",
      role: "Executive Secretary, INOFO Africa Council",
      region: "East Africa",
      level: 1,
      hierarchyPosition: 'bottom', // Bottom row
      expertise: [" Organic Farming", "Agroecology", "Sustainable Development"],
      bio: "Julie is a daughter of a farmer, hails from a farming family near Kampala city, the Capital of Uganda, East Africa. She’s passionate about organic farming as a true source of life, health and sustainable socio-economic transformation. She has studied Aquaculture, Agriculture and has a Master’s Degree in Agro-ecology. She is both a Practitioner and a Professional in the field of Organic Agriculture and Sustainable Community Development as a vegetable farmer, farmer leader, trainer, author, researcher and consultant.",
      image: MatovuImg // Using placeholder - replace with actual image
    },
    // Level 2 - Task Team (4 cards)
    {
      name: "Nana Kwaw Adams",
      role: "A member of the INOFO Africa Taskforce team",
      region: "Western Africa",
      level: 2,
      expertise: ["Agroecology Training", "Sacred Groves Promotion", "Food Sovereignty"],
      bio: "Nana Kwaw Adams is a Farmer and Agroecology Trainer. Promoter of Sacred groves, Indigenous Knowledge, Organic Food production, Food Sovereignty and Ecotourism development in Ghana. He is the Executive Director of Abrono Organic Farming Project (ABOFAP). INOFO National Convenor for Ghana and a member of INOFO Africa Taskforce.",
      image: NanaImg // Using placeholder - replace with actual image
    },
    {
      name: "Busisiwe Mgangxela",
      role: "A member of the INOFO Africa Taskforce team",
      region: "Southern Africa",
      level: 2,
      expertise: [" Agroecology Farming", "PGS Coordination", "Information Sharing"],
      bio: "Agroecology farmer in South Africa using agroforest as a sustainable food system. PGS Pollinator Country Convener for INOFO Member of Task Force INOFO Africa who piloted organizational development of INOFO AFRICA, Passionate about sharing of information about care, health, fairness and ecology for the environment, people and animals including wild life.",
      image: BusiImg // Using placeholder - replace with actual image
    },
    {
      name: "Dereje Hirpa",
      role: "Outgoing Taskforce representative, Ethiopia",
      region: "East Africa",
      level: 2,
      expertise: ["Organic Farming Advocacy", "Farmer Representation", "Strategic Planning"],
      bio: "A dedicated leader in organic farming advocacy and one of the founding members of INOFO Africa. Representing Ethiopia and the Oromia Coffee Farmers Cooperatives Union (OCFCU), Dereje has played a pivotal role in shaping the vision and strategic direction of INOFO Africa, ensuring that the voices of organic farmers are heard at national and international levels.",
      image:  Derejeimg // Using placeholder - replace with actual image
    },
    {
      name: "Pierre Kagame",
      role: "Communications Director",
      region: "Central Africa",
      level: 2,
      expertise: ["Communications", "Digital Media", "Storytelling"],
      bio: "Manages communications strategy, amplifying farmer voices through digital media.",
      image: Derejeimg // Using placeholder - replace with actual image
    },
    // Level 3 - National Convenors (15 cards)
    {
      name: "Neema ",
      role: "Mozambique Contact Person",
      region: "Mozambique",
      level: 3,
      expertise: ["Organic Farming", "Seed Saving", "Community Mobilization"],
      bio: "I’m a dedicated organic farmer and women's leader in sustainable agriculture, championing eco-friendly practices, and empowering rural communities. Iam a farmer leader in Missão da Misericórdia Abrangente em Moçambique (MIMAMO), located at Sanjala, Lichinga city, Niassa Pronvice in Mozambique.",
      image: NeemaImg // Using placeholder - replace with actual image
    },
    {
      name: "Theophilus Abebe",
      role: "Ethiopia National Convenor",
      region: "Ethiopia",
      level: 3,
      expertise: ["Youth Engagement", "Agripreneurship", "Digital Agriculture"],
      bio: "Leads youth engagement initiatives, promoting agripreneurship and digital agriculture.",
      image: Derejeimg // Using placeholder - replace with actual image
    },
    {
      name: "Catherine Mumba",
      role: "Zambia National Convenor",
      region: "Zambia",
      level: 3,
      expertise: ["Seed Banks", "Biodiversity", "Farmer Training"],
      bio: "Coordinates seed sovereignty programs, managing community seed banks.",
      image: Derejeimg // Using placeholder - replace with actual image
    },
    {
      name: "Mohamed Al-Farouq",
      role: "Egypt National Convenor",
      region: "Egypt",
      level: 3,
      expertise: ["Water Management", "Desert Farming", "Irrigation Systems"],
      bio: "Specializes in water conservation and sustainable farming in arid regions.",
      image: Derejeimg // Using placeholder - replace with actual image
    },
    {
      name: "Ngozi Okoro",
      role: "Nigeria National Convenor",
      region: "Nigeria",
      level: 3,
      expertise: ["Agroforestry", "Land Rights", "Community Organizing"],
      bio: "Leads community-based agroforestry initiatives and land rights advocacy.",
      image: Derejeimg // Using placeholder - replace with actual image
    },
    {
      name: "Ahmed Diallo",
      role: "Mali National Convenor",
      region: "Mali",
      level: 3,
      expertise: ["Sustainable Farming", "Food Security", "Indigenous Knowledge"],
      bio: "Focuses on preserving traditional farming practices and ensuring food security.",
      image: Derejeimg // Using placeholder - replace with actual image
    },
    {
      name: "Fatoumata Bah",
      role: "Senegal National Convenor",
      region: "Senegal",
      level: 3,
      expertise: ["Organic Farming", "Cooperatives", "Market Access"],
      bio: "Supports organic farming cooperatives and improves market access for farmers.",
      image: Derejeimg // Using placeholder - replace with actual image
    },
    {
      name: "Thabo Mokoena",
      role: "South Africa National Convenor",
      region: "South Africa",
      level: 3,
      expertise: ["Policy Reform", "Land Reform", "Agricultural Economics"],
      bio: "Advocates for policy and land reform to support smallholder farmers.",
      image: Derejeimg // Using placeholder - replace with actual image
    },
    {
      name: "Mariam Kamara",
      role: "Niger National Convenor",
      region: "Niger",
      level: 3,
      expertise: ["Pastoral Systems", "Climate Resilience", "Livestock Management"],
      bio: "Specializes in pastoral systems and climate resilience for livestock farmers.",
      image: Derejeimg // Using placeholder - replace with actual image
    },
    {
      name: "Joseph Kikwete",
      role: "Tanzania National Convenor",
      region: "Tanzania",
      level: 3,
      expertise: ["Coffee Farming", "Export Crops", "Fair Trade"],
      bio: "Supports coffee farmers and promotes fair trade practices.",
      image: Derejeimg // Using placeholder - replace with actual image
    },
    {
      name: "Yaa Asantewaa",
      role: "Ghana National Convenor",
      region: "Ghana",
      level: 3,
      expertise: ["Cocoa Production", "Women Farmers", "Value Addition"],
      bio: "Empowers women cocoa farmers and promotes value addition in cocoa production.",
      image: Derejeimg // Using placeholder - replace with actual image
    },
    {
      name: "Jean-Pierre Mbebe",
      role: "Cameroon National Convenor",
      region: "Cameroon",
      level: 3,
      expertise: ["Forest Farming", "Biodiversity", "Agroecology"],
      bio: "Promotes forest-friendly farming practices and biodiversity conservation.",
      image: Derejeimg // Using placeholder - replace with actual image
    },
    {
      name: "Aisha Mohammed",
      role: "Sudan National Convenor",
      region: "Sudan",
      level: 3,
      expertise: ["Sorghum Production", "Smallholder Support", "Irrigation"],
      bio: "Focuses on sorghum production and improving irrigation for smallholders.",
      image: Derejeimg // Using placeholder - replace with actual image
    },
    {
      name: "Miriam Makeba",
      role: "Zimbabwe National Convenor",
      region: "Zimbabwe",
      level: 3,
      expertise: ["Conservation Agriculture", "Seed Systems", "Farmer Training"],
      bio: "Promotes conservation agriculture and strengthens local seed systems.",
      image: Derejeimg // Using placeholder - replace with actual image
    },
    {
      name: "Omar Hassan",
      role: "Morocco National Convenor",
      region: "Morocco",
      level: 3,
      expertise: ["Mediterranean Farming", "Traditional Crops", "Water Conservation"],
      bio: "Specializes in Mediterranean farming systems and traditional crop varieties.",
      image: Derejeimg // Using placeholder - replace with actual image
    }
  ], []);

  // Group leaders by level
  const leadersByLevel = {
    1: leaders.filter(l => l.level === 1),
    2: leaders.filter(l => l.level === 2),
    3: leaders.filter(l => l.level === 3)
  };

  // Further split Level 1 by hierarchy position
  const level1TopRow = leadersByLevel[1].filter(l => l.hierarchyPosition === 'top');
  const level1BottomRow = leadersByLevel[1].filter(l => l.hierarchyPosition === 'bottom');

  // Level titles and descriptions
  const levelInfo = {
    1: { title: "Regional Convenors", description: "Continental Leadership Council" },
    2: { title: "TaskForce Team", description: " Coordination Team" },
    3: { title: "National Convenors / Contact Person's ", description: "Country Leadership Representatives" }
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
        {/* Level 1 - Hierarchy Layout (3 top, 2 bottom) */}
        <motion.div 
          className="leadership-level level-1"
          variants={levelTitleVariants}
        >
          <div className="level-header">
            <span className="level-badge level-1-badge"></span>
            <h3 className="level-title">{levelInfo[1].title}</h3>
            <p className="level-description">{levelInfo[1].description}</p>
          </div>
          
          {/* Top Row - 3 cards */}
          <motion.div 
            className="leaders-grid grid-hierarchy-top"
            variants={containerVariants}
          >
            {level1TopRow.map((leader, index) => (
              <motion.article
                className="leader-card level-1-card hierarchy-top"
                key={`level1-top-${index}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(76, 112, 49, 0.15)",
                  transition: { duration: 0.2 }
                }}
                aria-labelledby={`leader-name-1-top-${index}`}
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
                  <div className="leader-level-indicator hierarchy-badge-top"></div>
                </div>

                <div className="leader-info">
                  <h3 id={`leader-name-1-top-${index}`} itemProp="name">
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

          {/* Bottom Row - 2 cards */}
          <motion.div 
            className="leaders-grid grid-hierarchy-bottom"
            variants={containerVariants}
          >
            {level1BottomRow.map((leader, index) => (
              <motion.article
                className="leader-card level-1-card hierarchy-bottom"
                key={`level1-bottom-${index}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(76, 112, 49, 0.15)",
                  transition: { duration: 0.2 }
                }}
                aria-labelledby={`leader-name-1-bottom-${index}`}
                role="article"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Person"
              >
                <meta itemProp="position" content={String(index + 4)} />
                
                <div className="leader-image-wrapper">
                  <div className="leader-image">
                    <img
                      src={leader.image}
                      alt={`${leader.name} — ${leader.role}`}
                      loading="lazy"
                      itemProp="url"
                    />
                  </div>
                  <div className="leader-level-indicator hierarchy-badge-bottom">Secretariat</div>
                </div>

                <div className="leader-info">
                  <h3 id={`leader-name-1-bottom-${index}`} itemProp="name">
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

        {/* Level 2 - Task Team - 4 cards */}
        <motion.div 
          className="leadership-level level-2"
          variants={levelTitleVariants}
        >
          <div className="level-header">
            <span className="level-badge level-2-badge"></span>
            <h3 className="level-title">{levelInfo[2].title}</h3>
            <p className="level-description">{levelInfo[2].description}</p>
          </div>
          <motion.div 
            className="leaders-grid grid-4"
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
                  <div className="leader-level-indicator"></div>
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

        {/* Level 3 - National Convenors - 15 cards */}
        <motion.div 
          className="leadership-level level-3"
          variants={levelTitleVariants}
        >
          <div className="level-header">
            <span className="level-badge level-3-badge"></span>
            <h3 className="level-title">{levelInfo[3].title}</h3>
            <p className="level-description">{levelInfo[3].description}</p>
          </div>
          <motion.div 
            className="leaders-grid grid-5"
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
                  <div className="leader-level-indicator"></div>
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
                      <p>{leader.bio}</p>
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