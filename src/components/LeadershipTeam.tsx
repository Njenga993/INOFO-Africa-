import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import wanjamaImg from '../assets/wanjama.jpg';
import raoudathImg from '../assets/Roudath.jpg';
import charlesImg from '../assets/Charles_profile.jpeg';
import JuliaImg from '../assets/Julia_admin.png';
import MatovuImg from '../assets/juli_ogo.png';
import NanaImg from '../assets/nana_ogo.png';
import BusiImg from '../assets/Bus_image.png';
import NeemaImg from '../assets/Neema_image.png';
import Derejeimg1 from '../assets/dereje.jpeg';
import '../styles/LeadershipTeam.css';

interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
  region?: string;
  level: 1 | 2 | 3;
  expertise?: string[];
  hierarchyPosition?: 'top' | 'bottom';
  country?: string;
}

interface LeadershipTeamProps {
  title?: string;
}

const LeadershipTeam: React.FC<LeadershipTeamProps> = ({
  title = "INOFO Africa Leadership Team",
}) => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Leadership data with levels and hierarchy positions
  const leaders: Leader[] = useMemo(() => [
    // Level 1 - Top Leadership
    {
      name: "Daniel Wanjama",
      role: "East Africa Regional Convenor",
      region: "East Africa",
      country: "Kenya",
      level: 1,
      hierarchyPosition: 'top',
      expertise: ["Seed Sovereignty", "Food Security", "Indigenous Seeds"],
      bio: "Daniel Wanjama (Seed Savers Network Kenya) champions seed sovereignty and food security in Eastern Africa. He leads initiatives to preserve indigenous seed varieties, strengthen biodiversity, and empower farmers with locally adapted, organic seed systems.",
      image: wanjamaImg
    },
    {
      name: "Raoudath Bouraima",
      role: "West Africa Regional Convenor",
      region: "West Africa",
      country: "Benin",
      level: 1,
      hierarchyPosition: 'top',
      expertise: ["Agroecology", "organic farming"],
      bio: "Raoudath Bouraima (Benin) advances sustainable agriculture and organic farming across West Africa through community-driven projects. A strong advocate for women's leadership in agriculture, she supports resilience-building programs that amplify rural voices.",
      image: raoudathImg
    },
    {
      name: "Charles K Mubanga",
      role: "Southern Africa Regional Convenor",
      region: "Southern Africa",
      country: "Zambia",
      level: 1,
      hierarchyPosition: 'top',
      expertise: ["Cooperatives", "Policy Advocacy", "Smallholder Support"],
      bio: "Charles K. Mubanga (Mpongwe Bulima Cooperative, Zambia) promotes cooperative development and ecological farming practices. He focuses on strengthening farmer cooperatives, advocacy, and policy engagement to improve livelihoods.",
      image: charlesImg
    },
    {
      name: "Julia Kamau",
      role: "Administrative Coordinator",
      region: "East Africa",
      country: "Kenya",
      level: 1,
      hierarchyPosition: 'bottom',
      expertise: ["Forest Conservation", "Indigenous Knowledge", "Women's Leadership"],
      bio: "Julia Kamau is A seasoned food systems leader with vast experience in coordination and implementation of farmer-led initiatives both at local and international levels. She is the programs lead for Seed Savers Network (Host organization for INOFO AFRICA) and the admin support for INOFO AFRICA ensuring smooth administration of INOFO AFRICA operations.",
      image: JuliaImg
    },
    {
      name: "Julie Matovu",
      role: "Executive Secretary, INOFO Africa Council",
      region: "East Africa",
      country: "Uganda",
      level: 1,
      hierarchyPosition: 'bottom',
      expertise: ["Organic Farming", "Agroecology", "Sustainable Development"],
      bio: "Julie is a daughter of a farmer, hails from a farming family near Kampala city, the Capital of Uganda, East Africa. She's passionate about organic farming as a true source of life, health and sustainable socio-economic transformation. She has studied Aquaculture, Agriculture and has a Master's Degree in Agro-ecology. She is both a Practitioner and a Professional in the field of Organic Agriculture and Sustainable Community Development as a vegetable farmer, farmer leader, trainer, author, researcher and consultant.",
      image: MatovuImg
    },
    // Level 2 - Task Team
    {
      name: "Nana Kwaw Adams",
      role: "Taskforce Team Member",
      region: "Western Africa",
      country: "Ghana",
      level: 2,
      expertise: ["Agroecology Training", "Sacred Groves Promotion", "Food Sovereignty"],
      bio: "Nana Kwaw Adams is a Farmer and Agroecology Trainer. Promoter of Sacred groves, Indigenous Knowledge, Organic Food production, Food Sovereignty and Ecotourism development in Ghana. He is the Executive Director of Abrono Organic Farming Project (ABOFAP). INOFO National Convenor for Ghana and a member of INOFO Africa Taskforce.",
      image: NanaImg
    },
    {
      name: "Busisiwe Mgangxela",
      role: "Taskforce Team Member",
      region: "Southern Africa",
      country: "South Africa",
      level: 2,
      expertise: ["Agroecology Farming", "PGS Coordination", "Information Sharing"],
      bio: "Agroecology farmer in South Africa using agroforest as a sustainable food system. PGS Pollinator Country Convener for INOFO Member of Task Force INOFO Africa who piloted organizational development of INOFO AFRICA, Passionate about sharing of information about care, health, fairness and ecology for the environment, people and animals including wild life.",
      image: BusiImg
    },
    {
      name: "Dereje Hirpa Angasa",
      role: "Taskforce Team Member",
      region: "East Africa",
      country: "Ethiopia",
      level: 2,
      expertise: ["Organic Farming Advocacy", "Farmer Representation", "Strategic Planning"],
      bio: "A dedicated leader in organic farming advocacy and one of the founding members of INOFO Africa. Representing Ethiopia and the Oromia Coffee Farmers Cooperatives Union (OCFCU), Dereje has played a pivotal role in shaping the vision and strategic direction of INOFO Africa, ensuring that the voices of organic farmers are heard at national and international levels.",
      image: Derejeimg1
    },
    {
      name: "Neema",
      role: "Taskforce Team Member",
      region: "Mozambique",
      country: "Mozambique",
      level: 2,
      expertise: ["Organic Farming", "Seed Saving", "Community Mobilization"],
      bio: "I'm a dedicated organic farmer and women's leader in sustainable agriculture, championing eco-friendly practices, and empowering rural communities. I am a farmer leader in Missão da Misericórdia Abrangente em Moçambique (MIMAMO), located at Sanjala, Lichinga city, Niassa Province in Mozambique.",
      image: NeemaImg
    },
    // Level 3 - National Convenors (Country Leaders)
    {
      name: "Neema",
      role: "Mozambique Contact Person",
      region: "Mozambique",
      country: "Mozambique",
      level: 3,
      expertise: ["Organic Farming", "Seed Saving", "Community Mobilization"],
      bio: "I'm a dedicated organic farmer and women's leader in sustainable agriculture, championing eco-friendly practices, and empowering rural communities. I am a farmer leader in Missão da Misericórdia Abrangente em Moçambique (MIMAMO), located at Sanjala, Lichinga city, Niassa Province in Mozambique.",
      image: NeemaImg
    },
    {
      name: "Dereje Hirpa Angasa",
      role: "Kenya National Convenor",
      region: "East Africa",
      country: "Kenya",
      level: 3,
      expertise: ["Organic Certification", "Farmer Training"],
      bio: "John Mwangi leads organic farming initiatives in Kenya, focusing on certification and training programs for smallholder farmers.",
      image: wanjamaImg
    },
    {
      name: "Busisiwe Mgangxela",
      role: "Tanzania National Convenor",
      region: "East Africa",
      country: "Tanzania",
      level: 3,
      expertise: ["Women's Cooperatives", "Sustainable Agriculture"],
      bio: "Amina Suleiman coordinates organic farming cooperatives across Tanzania, with special focus on women's participation and leadership.",
      image: raoudathImg
    },
    {
      name: "Nana Kwaw Adams",
      role: "Zimbabwe National Convenor",
      region: "Southern Africa",
      country: "Zimbabwe",
      level: 3,
      expertise: ["Seed Saving", "Community Organizing"],
      bio: "Grace Moyo works with rural communities in Zimbabwe to preserve traditional seed varieties and promote organic farming methods.",
      image: BusiImg
    },
    {
      name: "Julie Matovu",
      role: "Senegal National Convenor",
      region: "West Africa",
      country: "Senegal",
      level: 3,
      expertise: ["Agroforestry", "Food Sovereignty"],
      bio: "Oumar Diallo promotes agroforestry and food sovereignty initiatives across Senegal, working with local farming communities.",
      image: charlesImg
    },
    {
      name: "Daniel Wanjama",
      role: "Senegal National Convenor",
      region: "West Africa",
      country: "Senegal",
      level: 3,
      expertise: ["Agroforestry", "Food Sovereignty"],
      bio: "Oumar Diallo promotes agroforestry and food sovereignty initiatives across Senegal, working with local farming communities.",
      image: charlesImg
    },
    {
      name: "Raoudath Bouraima",
      role: "Senegal National Convenor",
      region: "West Africa",
      country: "Senegal",
      level: 3,
      expertise: ["Agroforestry", "Food Sovereignty"],
      bio: "Oumar Diallo promotes agroforestry and food sovereignty initiatives across Senegal, working with local farming communities.",
      image: charlesImg
    },
    {
      name: "Charles Mubanga",
      role: "Senegal National Convenor",
      region: "West Africa",
      country: "Senegal",
      level: 3,
      expertise: ["Agroforestry", "Food Sovereignty"],
      bio: "Oumar Diallo promotes agroforestry and food sovereignty initiatives across Senegal, working with local farming communities.",
      image: charlesImg
    },
  ], []);

  // Get all country leaders (Level 3)
  const countryLeaders = useMemo(() => {
    return leaders.filter(l => l.level === 3);
  }, [leaders]);

  // Pagination logic
  const totalPages = Math.ceil(countryLeaders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLeaders = countryLeaders.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Group leaders by level for levels 1 and 2
  const leadersByLevel = {
    1: leaders.filter(l => l.level === 1),
    2: leaders.filter(l => l.level === 2)
  };

  const level1TopRow = leadersByLevel[1].filter(l => l.hierarchyPosition === 'top');
  const level1BottomRow = leadersByLevel[1].filter(l => l.hierarchyPosition === 'bottom');

  const levelInfo = {
    1: { 
      title: "Regional Convenors", 
      description: "Continental Leadership Council",
      fullDescription: "The Regional Convenors form the core leadership team, guiding INOFO Africa's strategic direction and representing farmers across East, West, and Southern Africa."
    },
    2: { 
      title: "TaskForce Team", 
      description: "Coordination Team",
      fullDescription: "The TaskForce team comprises of 9 Members 3 from the Regional convenors, 2 from the Secretariate and the other 4 from the task form cards below. The Task Force coordinates day-to-day operations, implements strategic initiatives, and ensures effective communication across all levels of the organization."
    },
    3: { 
      title: "National Convenors", 
      description: "National Convenors and Contact Persons",
      fullDescription: "Please Note that a few names appear here at the National Convenors and also other section of the leadership eg Regional Convenors. The National Convenors lead organic farming initiatives in their respective countries, mobilizing farmers and advocating for policies that support agroecology and food sovereignty."
    }
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const levelTitleVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  const handleShowBio = (leader: Leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedLeader(null), 200);
  };

  return (
    <>
      <motion.section
        className="leadership-team"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        aria-labelledby="leadership-title"
      >
        {title && (
          <motion.div className="leadership-header" variants={itemVariants}>
            <h2 id="leadership-title">
              {title}
            </h2>
            <div className="leadership-underline"></div>
            <p className="leadership-subtitle">
              Multi-level governance structure rooted in farmer representation
            </p>
          </motion.div>
        )}

        <div className="leadership-levels-container">
          {/* Level 1 - Hierarchy Layout */}
          <motion.div 
            className="leadership-level level-1"
            variants={levelTitleVariants}
          >
            <div className="level-header">
              <span className="level-badge level-1-badge">Leadership Council</span>
              <h3 className="level-title">{levelInfo[1].title}</h3>
              <p className="level-description">{levelInfo[1].description}</p>
              <p className="level-full-description">{levelInfo[1].fullDescription}</p>
            </div>
            
            <div className="level-1-hierarchy">
              <motion.div 
                className="leaders-grid grid-hierarchy-top"
                variants={containerVariants}
              >
                {level1TopRow.map((leader, index) => (
                  <LeaderCard 
                    key={`level1-top-${index}`}
                    leader={leader}
                    variants={itemVariants}
                    onShowBio={handleShowBio}
                    cardType="hierarchy-top"
                  />
                ))}
              </motion.div>

              <motion.div 
                className="leaders-grid grid-hierarchy-bottom"
                variants={containerVariants}
              >
                {level1BottomRow.map((leader, index) => (
                  <LeaderCard 
                    key={`level1-bottom-${index}`}
                    leader={leader}
                    variants={itemVariants}
                    onShowBio={handleShowBio}
                    cardType="hierarchy-bottom"
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Level 2 - Task Team */}
          <motion.div 
            className="leadership-level level-2"
            variants={levelTitleVariants}
          >
            <div className="level-header">
              <span className="level-badge level-2-badge">Task Force</span>
              <h3 className="level-title">{levelInfo[2].title}</h3>
              <p className="level-description">{levelInfo[2].description}</p>
              <p className="level-full-description">{levelInfo[2].fullDescription}</p>
            </div>
            <motion.div 
              className="leaders-grid grid-4"
              variants={containerVariants}
            >
              {leadersByLevel[2].map((leader, index) => (
                <LeaderCard 
                  key={`level2-${index}`}
                  leader={leader}
                  variants={itemVariants}
                  onShowBio={handleShowBio}
                  cardType="level-2"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Level 3 - National Convenors with paginated list and placeholder cards */}
          <motion.div 
            className="leadership-level level-3"
            variants={levelTitleVariants}
          >
            <div className="level-header">
              <span className="level-badge level-3-badge">Country Leaders</span>
              <h3 className="level-title">{levelInfo[3].title}</h3>
              <p className="level-description">{levelInfo[3].description}</p>
              <p className="level-full-description">{levelInfo[3].fullDescription}</p>
            </div>
            
            <div className="level-3-split-layout">
              {/* Left side - Paginated list of country leaders */}
              <motion.div 
                className="level-3-list"
                variants={containerVariants}
              >
                <h4 className="list-title">Country Leaders Directory</h4>
                <p className="list-count">Showing {startIndex + 1}-{Math.min(endIndex, countryLeaders.length)} of {countryLeaders.length} leaders</p>
                <ul className="convenors-list">
                  {currentLeaders.map((leader, index) => (
                    <motion.li 
                      key={`list-${startIndex + index}`}
                      variants={itemVariants}
                      className="convenor-list-item"
                    >
                      <span className="list-name">{leader.name}</span>
                      <span className="list-country">{leader.country}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="pagination-controls">
                    <button 
                      className="pagination-button"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    <span className="page-indicator">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button 
                      className="pagination-button"
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                )}
              </motion.div>

              {/* Right side - Placeholder cards for future use */}
              <motion.div 
                className="level-3-placeholder-grid"
                variants={containerVariants}
              >
                <div className="placeholder-card">
                  <div className="placeholder-image"></div>
                  <div className="placeholder-content">
                    <div className="placeholder-line"></div>
                    <div className="placeholder-line short"></div>
                    <div className="placeholder-button"></div>
                  </div>
                </div>
                <div className="placeholder-card">
                  <div className="placeholder-image"></div>
                  <div className="placeholder-content">
                    <div className="placeholder-line"></div>
                    <div className="placeholder-line short"></div>
                    <div className="placeholder-button"></div>
                  </div>
                </div>
                <div className="placeholder-note">Additional featured cards coming soon</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Bio Modal - No image */}
      <AnimatePresence>
        {isModalOpen && selectedLeader && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div 
              className="modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <button 
                className="modal-close"
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                ×
              </button>
              
              <div className="modal-body">
                <div className="modal-info">
                  <h3 id="modal-title">{selectedLeader.name}</h3>
                  <p className="modal-role">{selectedLeader.role}</p>
                  
                  {selectedLeader.region && (
                    <p className="modal-region">
                      <span className="modal-region-badge">
                        {selectedLeader.region}
                      </span>
                    </p>
                  )}
                  
                  {selectedLeader.country && (
                    <p className="modal-country">
                      <strong>Country:</strong> {selectedLeader.country}
                    </p>
                  )}
                  
                  <div className="modal-bio">
                    <h4>Biography</h4>
                    <p>{selectedLeader.bio}</p>
                  </div>
                  
                  {selectedLeader.expertise && selectedLeader.expertise.length > 0 && (
                    <div className="modal-expertise">
                      <h4>Areas of Expertise</h4>
                      <div className="modal-expertise-tags">
                        {selectedLeader.expertise.map((skill, i) => (
                          <span key={i} className="modal-expertise-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Extracted LeaderCard component for reusability
interface LeaderCardProps {
  leader: Leader;
  variants: Variants;
  onShowBio: (leader: Leader) => void;
  cardType: 'hierarchy-top' | 'hierarchy-bottom' | 'level-2' | 'level-3';
}

const LeaderCard: React.FC<LeaderCardProps> = ({ leader, variants, onShowBio, cardType }) => {
  return (
    <motion.article
      className={`leader-card ${cardType}`}
      variants={variants}
      whileHover={{ y: -3 }}
      aria-labelledby={`leader-name-${leader.name}`}
    >
      <div className="leader-image-wrapper">
        <div className="leader-image">
          <img
            src={leader.image}
            alt={leader.name}
            loading="lazy"
          />
        </div>
      </div>

      <div className="leader-info">
        <h3 id={`leader-name-${leader.name}`}>
          {leader.name}
        </h3>
        <p className="leader-role">{leader.role}</p>
        
        {leader.region && (
          <p className="leader-region">
            <span className="region-badge">{leader.region}</span>
          </p>
        )}
        
        <button 
          className="show-bio-button"
          onClick={() => onShowBio(leader)}
          aria-label={`Show biography for ${leader.name}`}
        >
          Show Bio
        </button>
      </div>
    </motion.article>
  );
};

export default LeadershipTeam;