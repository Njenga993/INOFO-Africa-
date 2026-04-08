import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import wanjamaImg from "../assets/wanjama.jpg";
import raoudathImg from "../assets/Roudath.jpg";
import charlesImg from "../assets/Charles_profile.jpeg";
import JuliaImg from "../assets/Julia_admin.png";
import MatovuImg from "../assets/juli_ogo.png";
import NanaImg from "../assets/nana_ogo.png";
import BusiImg from "../assets/Bus_image.png";
import NeemaImg from "../assets/Neema_image.png";
import Derejeimg1 from "../assets/dereje.jpeg";
import "../styles/LeadershipTeam.css";

interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
  region?: string;
  country?: string;
  organization?: string;
  language?: string;
  level: 1 | 2 | 3;
  expertise?: string[];
  hierarchyPosition?: "top" | "bottom";
  sn?: number;
  subRegion?: string;
  gender?: string;
}

interface LeadershipTeamProps {
  title?: string;
}

const LeadershipTeam: React.FC<LeadershipTeamProps> = ({
  title = "INOFO Africa Leadership Team",
}) => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSubRegion, setFilterSubRegion] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Country Leaders Data from the Word document (as a table)
  const countryLeadersData: Leader[] = useMemo(
    () => [
      {
        sn: 1,
        name: "Samba Doulo FOFANA",
        subRegion: "North Africa",
        country: "Mauritania",
        gender: "Male",
        organization:
          "CAJA MAURITANIE (COOPERATIVE AGRICOLE DES JEUNES AFRICAINS - MAURITANIE)",
        language: "French",
        level: 3,
        role: "Country Contact Person - Mauritania",
        expertise: [
          "Agricultural Cooperatives",
          "Youth in Agriculture",
          "French-speaking Africa",
        ],
        bio: "Samba Doulo FOFANA serves as the INOFO National Convenor for Mauritania, leading CAJA MAURITANIE, a cooperative focused on empowering young African farmers in Mauritania through sustainable agricultural practices and cooperative development.",
        image: wanjamaImg,
      },
      {
        sn: 2,
        name: "Raoudath Bouraima",
        subRegion: "West Africa",
        country: "Benin",
        gender: "Female",
        organization: "LES JARDINS DE L'ESPOIR",
        language: "French",
        level: 3,
        role: "Country Contact Person - Benin",
        expertise: [
          "Agroecology",
          "Organic Farming",
          "Women's Leadership",
          "Community Gardens",
        ],
        bio: "Raoudath Bouraima (Benin) advances sustainable agriculture and organic farming across West Africa through community-driven projects. A strong advocate for women's leadership in agriculture, she supports resilience-building programs that amplify rural voices.",
        image: raoudathImg,
      },
      {
        sn: 3,
        name: "Hamidou A Diowora",
        subRegion: "West Africa",
        country: "Mali",
        gender: "Male",
        organization:
          "Association Malienne pour la Solidarité et le Développement (AMSD)",
        language: "French",
        level: 3,
        role: "Country Contact Person - Mali",
        expertise: [
          "Solidarity Economics",
          "Community Development",
          "Food Sovereignty",
        ],
        bio: "Hamidou A Diowora leads the Malian Association for Solidarity and Development (AMSD) as the INOFO National Convenor for Mali, working to promote sustainable development and solidarity-based initiatives across the country.",
        image: raoudathImg,
      },
      {
        sn: 4,
        name: "Dr ANANI Combé",
        subRegion: "West Africa",
        country: "Togo",
        gender: "Male",
        organization: "ANA-BIO TOGO",
        language: "French",
        level: 3,
        role: "Country Contact Person - Togo",
        expertise: [
          "Organic Certification",
          "Biodynamic Farming",
          "Agricultural Research",
        ],
        bio: "Dr. ANANI Combé serves as the INOFO National Convenor for Togo, leading ANA-BIO TOGO in promoting organic farming standards, certification, and sustainable agricultural practices throughout the country.",
        image: charlesImg,
      },
      {
        sn: 5,
        name: "Adams Nana Kwaw",
        subRegion: "West Africa",
        country: "Ghana",
        gender: "Male",
        organization: "NABOF AGRO SERVICES AND TRAINING ASSOCIATION",
        language: "English",
        level: 3,
        role: "Country Contact Person - Ghana",
        expertise: [
          "Agroecology Training",
          "Sacred Groves Promotion",
          "Food Sovereignty",
        ],
        bio: "Nana Kwaw Adams is a Farmer and Agroecology Trainer. Promoter of Sacred groves, Indigenous Knowledge, Organic Food production, Food Sovereignty and Ecotourism development in Ghana. He is the Executive Director of Abrono Organic Farming Project (ABOFAP). INOFO National Convenor for Ghana and a member of INOFO Africa Taskforce.",
        image: NanaImg,
      },
      {
        sn: 6,
        name: "JOUS CLEMENT",
        subRegion: "Central Africa",
        country: "Chad",
        gender: "Male",
        organization: "Ferme Agroecologie (FAES)",
        language: "French",
        level: 3,
        role: "Country Contact Person - Chad",
        expertise: [
          "Agroecology",
          "Farm Management",
          "Sustainable Agriculture",
        ],
        bio: "JOUS CLEMENT leads the Agroecology Farm (FAES) in Chad as the INOFO National Convenor, working to establish resilient farming systems and promote ecological agriculture practices in Central Africa.",
        image: charlesImg,
      },
      {
        sn: 7,
        name: "Dereje Hirpa Angasa",
        subRegion: "East Africa",
        country: "Ethiopia",
        gender: "Male",
        organization: "Oromia Coffee Farmers Cooperatives Union",
        language: "English",
        level: 3,
        role: "Country Contact Person - Ethiopia",
        expertise: [
          "Organic Farming Advocacy",
          "Coffee Cooperatives",
          "Strategic Planning",
        ],
        bio: "A dedicated leader in organic farming advocacy and one of the founding members of INOFO Africa. Representing Ethiopia and the Oromia Coffee Farmers Cooperatives Union (OCFCU), Dereje has played a pivotal role in shaping the vision and strategic direction of INOFO Africa, ensuring that the voices of organic farmers are heard at national and international levels.",
        image: Derejeimg1,
      },
      {
        sn: 8,
        name: "Wanjama Daniel",
        subRegion: "East Africa",
        country: "Kenya",
        gender: "Male",
        organization: "Seed Savers Network Kenya",
        language: "English",
        level: 3,
        role: "Country Contact Person - Kenya",
        expertise: [
          "Seed Sovereignty",
          "Food Security",
          "Indigenous Seeds",
          "Biodiversity",
        ],
        bio: "Daniel Wanjama (Seed Savers Network Kenya) champions seed sovereignty and food security in Eastern Africa. He leads initiatives to preserve indigenous seed varieties, strengthen biodiversity, and empower farmers with locally adapted, organic seed systems.",
        image: wanjamaImg,
      },
      {
        sn: 9,
        name: "UWINGABIRE Marie Louise",
        subRegion: "East Africa",
        country: "Rwanda",
        gender: "Female",
        organization: "BAHONEZA INDIGENOUS COOPERATIVE",
        language: "English and French",
        level: 3,
        role: "Country Contact Person - Rwanda",
        expertise: [
          "Indigenous Knowledge",
          "Cooperative Development",
          "Women's Empowerment",
        ],
        bio: "UWINGABIRE Marie Louise leads BAHONEZA INDIGENOUS COOPERATIVE as the INOFO National Convenor for Rwanda, promoting indigenous farming practices, cooperative development, and women's leadership in agriculture.",
        image: raoudathImg,
      },
      {
        sn: 10,
        name: "Brighitta Didas M",
        subRegion: "East Africa",
        country: "Tanzania",
        gender: "Female",
        organization: "TOAM (Tanzania Organic Agriculture Movement)",
        language: "English",
        level: 3,
        role: "Country Contact Person - Tanzania",
        expertise: [
          "Organic Agriculture Movement",
          "Policy Advocacy",
          "Farmer Networks",
        ],
        bio: "Brighitta Didas M represents TOAM (Tanzania Organic Agriculture Movement) as the INOFO National Convenor for Tanzania, working to strengthen organic farming networks and advocate for supportive agricultural policies.",
        image: BusiImg,
      },
      {
        sn: 11,
        name: "Akullo Lucy",
        subRegion: "East Africa",
        country: "Uganda",
        gender: "Female",
        organization:
          "Lira Organic Horticulture and Grains Cooperative Society",
        language: "English",
        level: 3,
        role: "Country Contact Person - Uganda",
        expertise: [
          "Organic Horticulture",
          "Grains Production",
          "Cooperative Management",
        ],
        bio: "Akullo Lucy leads the Lira Organic Horticulture and Grains Cooperative Society in Uganda, promoting organic vegetable and grain production through cooperative structures that benefit smallholder farmers.",
        image: MatovuImg,
      },
      {
        sn: 12,
        name: "Manoj Seeborun",
        subRegion: "East Africa",
        country: "Mauritius",
        gender: "Male",
        organization: "F.A.L.C.O.N Association",
        language: "French and English",
        level: 3,
        role: "Country Contact Person - Mauritius",
        expertise: [
          "Organic Farming",
          "Association Management",
          "Sustainable Development",
        ],
        bio: "Manoj Seeborun serves as the INOFO National Convenor for Mauritius, leading the F.A.L.C.O.N Association in promoting organic farming and sustainable development initiatives across the island nation.",
        image: charlesImg,
      },
      {
        sn: 13,
        name: "Charles K. Mubanga",
        subRegion: "Southern Africa",
        country: "Zambia",
        gender: "Male",
        organization: "Mpongwe Bulima Organic Cooperative",
        language: "English",
        level: 3,
        role: "Country Contact Person - Zambia",
        expertise: [
          "Cooperatives",
          "Policy Advocacy",
          "Smallholder Support",
          "Organic Certification",
        ],
        bio: "Charles K. Mubanga (Mpongwe Bulima Cooperative, Zambia) promotes cooperative development and ecological farming practices. He focuses on strengthening farmer cooperatives, advocacy, and policy engagement to improve livelihoods.",
        image: charlesImg,
      },
      {
        sn: 14,
        name: "Busisiwe Mgangxela",
        subRegion: "Southern Africa",
        country: "South Africa",
        gender: "Female",
        organization: "Eastern Cape Agroecology Farmers Association",
        language: "English",
        level: 3,
        role: "Country Contact Person - South Africa",
        expertise: [
          "Agroecology Farming",
          "PGS Coordination",
          "Information Sharing",
          "Agroforestry",
        ],
        bio: "Agroecology farmer in South Africa using agroforest as a sustainable food system. PGS Pollinator Country Convener for INOFO Member of Task Force INOFO Africa who piloted organizational development of INOFO AFRICA, Passionate about sharing of information about care, health, fairness and ecology for the environment, people and animals including wild life.",
        image: BusiImg,
      },
      {
        sn: 15,
        name: "Neema Kwagwanji Chilalika",
        subRegion: "Southern Africa",
        country: "Mozambique",
        gender: "Female",
        organization: "Mbetazigone Women's Group",
        language: "English and Portuguese",
        level: 3,
        role: "Country Contact Person - Mozambique",
        expertise: [
          "Organic Farming",
          "Seed Saving",
          "Community Mobilization",
          "Women's Leadership",
        ],
        bio: "I'm a dedicated organic farmer and women's leader in sustainable agriculture, championing eco-friendly practices, and empowering rural communities. I am a farmer leader in Missão da Misericórdia Abrangente em Moçambique (MIMAMO), located at Sanjala, Lichinga city, Niassa Province in Mozambique.",
        image: NeemaImg,
      },
    ],
    [],
  );

  // Level 1 and Level 2 leaders (Regional Convenors and Taskforce)
  const regionalAndTaskforceLeaders: Leader[] = useMemo(
    () => [
      // Level 1 - Top Leadership (Regional Convenors)
      {
        name: "Daniel Wanjama",
        role: "East Africa Regional Convenor",
        region: "East Africa",
        country: "Kenya",
        level: 1,
        hierarchyPosition: "top",
        expertise: ["Seed Sovereignty", "Food Security", "Indigenous Seeds"],
        bio: "Daniel Wanjama (Seed Savers Network Kenya) champions seed sovereignty and food security in Eastern Africa. He leads initiatives to preserve indigenous seed varieties, strengthen biodiversity, and empower farmers with locally adapted, organic seed systems.",
        image: wanjamaImg,
      },
      {
        name: "Raoudath Bouraima",
        role: "West Africa Regional Convenor",
        region: "West Africa",
        country: "Benin",
        level: 1,
        hierarchyPosition: "top",
        expertise: ["Agroecology", "Organic Farming"],
        bio: "Raoudath Bouraima (Benin) advances sustainable agriculture and organic farming across West Africa through community-driven projects. A strong advocate for women's leadership in agriculture, she supports resilience-building programs that amplify rural voices.",
        image: raoudathImg,
      },
      {
        name: "Charles K Mubanga",
        role: "President of the African Council",
        region: "Southern Africa",
        country: "Zambia",
        level: 1,
        hierarchyPosition: "top",
        expertise: ["Cooperatives", "Policy Advocacy", "Smallholder Support"],
        bio: "Charles K. Mubanga (Mpongwe Bulima Cooperative, Zambia) promotes cooperative development and ecological farming practices. He focuses on strengthening farmer cooperatives, advocacy, and policy engagement to improve livelihoods.",
        image: charlesImg,
      },
      {
        name: "Julia Kamau",
        role: "Administrative Coordinator",
        region: "East Africa",
        country: "Kenya",
        level: 1,
        hierarchyPosition: "bottom",
        expertise: [
          "Forest Conservation",
          "Indigenous Knowledge",
          "Women's Leadership",
        ],
        bio: "Julia Kamau is a seasoned food systems leader with vast experience in coordination and implementation of farmer-led initiatives both at local and international levels. She is the programs lead for Seed Savers Network (Host organization for INOFO AFRICA) and the admin support for INOFO AFRICA ensuring smooth administration of INOFO AFRICA operations.",
        image: JuliaImg,
      },
      {
        name: "Julie Matovu",
        role: "Executive Secretary, INOFO Africa Council",
        region: "East Africa",
        country: "Uganda",
        level: 1,
        hierarchyPosition: "bottom",
        expertise: [
          "Organic Farming",
          "Agroecology",
          "Sustainable Development",
        ],
        bio: "Julie is a daughter of a farmer, hails from a farming family near Kampala city, the Capital of Uganda, East Africa. She's passionate about organic farming as a true source of life, health and sustainable socio-economic transformation. She has studied Aquaculture, Agriculture and has a Master's Degree in Agro-ecology. She is both a Practitioner and a Professional in the field of Organic Agriculture and Sustainable Community Development as a vegetable farmer, farmer leader, trainer, author, researcher and consultant.",
        image: MatovuImg,
      },
      // Level 2 - Taskforce Team Members
      {
        name: "Nana Kwaw Adams",
        role: "Taskforce Team Member",
        region: "Western Africa",
        country: "Ghana",
        level: 2,
        expertise: [
          "Agroecology Training",
          "Sacred Groves Promotion",
          "Food Sovereignty",
        ],
        bio: "Nana Kwaw Adams is a Farmer and Agroecology Trainer. Promoter of Sacred groves, Indigenous Knowledge, Organic Food production, Food Sovereignty and Ecotourism development in Ghana. He is the Executive Director of Abrono Organic Farming Project (ABOFAP). INOFO National Convenor for Ghana and a member of INOFO Africa Taskforce.",
        image: NanaImg,
      },
      {
        name: "Busisiwe Mgangxela",
        role: "Taskforce Team Member",
        region: "Southern Africa",
        country: "South Africa",
        level: 2,
        expertise: [
          "Agroecology Farming",
          "PGS Coordination",
          "Information Sharing",
        ],
        bio: "Agroecology farmer in South Africa using agroforest as a sustainable food system. PGS Pollinator Country Convener for INOFO Member of Task Force INOFO Africa who piloted organizational development of INOFO AFRICA, Passionate about sharing of information about care, health, fairness and ecology for the environment, people and animals including wild life.",
        image: BusiImg,
      },
      {
        name: "Dereje Hirpa Angasa",
        role: "Taskforce Team Member",
        region: "East Africa",
        country: "Ethiopia",
        level: 2,
        expertise: [
          "Organic Farming Advocacy",
          "Farmer Representation",
          "Strategic Planning",
        ],
        bio: "A dedicated leader in organic farming advocacy and one of the founding members of INOFO Africa. Representing Ethiopia and the Oromia Coffee Farmers Cooperatives Union (OCFCU), Dereje has played a pivotal role in shaping the vision and strategic direction of INOFO Africa, ensuring that the voices of organic farmers are heard at national and international levels.",
        image: Derejeimg1,
      },
      {
        name: "Neema Kwagwanji Chilalika",
        role: "Taskforce Team Member",
        region: "Southern Africa",
        country: "Mozambique",
        level: 2,
        expertise: ["Organic Farming", "Seed Saving", "Community Mobilization"],
        bio: "I'm a dedicated organic farmer and women's leader in sustainable agriculture, championing eco-friendly practices, and empowering rural communities. I am a farmer leader in Missão da Misericórdia Abrangente em Moçambique (MIMAMO), located at Sanjala, Lichinga city, Niassa Province in Mozambique.",
        image: NeemaImg,
      },
    ],
    [],
  );

  // Get unique sub-regions for filter
  const subRegions = useMemo(() => {
    const regions = new Set(countryLeadersData.map((l) => l.subRegion));
    return ["all", ...Array.from(regions).sort()];
  }, [countryLeadersData]);

  // Filter and search logic
  const filteredLeaders = useMemo(() => {
    return countryLeadersData.filter((leader) => {
      const matchesSearch =
        searchTerm === "" ||
        leader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        leader.country?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        leader.organization?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRegion =
        filterSubRegion === "all" || leader.subRegion === filterSubRegion;

      return matchesSearch && matchesRegion;
    });
  }, [countryLeadersData, searchTerm, filterSubRegion]);

  // Pagination logic
  const totalPages = Math.ceil(filteredLeaders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLeaders = filteredLeaders.slice(startIndex, endIndex);

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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSubRegion(e.target.value);
    setCurrentPage(1);
  };

  // Group leaders by level for levels 1 and 2
  const leadersByLevel = {
    1: regionalAndTaskforceLeaders.filter((l) => l.level === 1),
    2: regionalAndTaskforceLeaders.filter((l) => l.level === 2),
  };

  const level1TopRow = leadersByLevel[1].filter(
    (l) => l.hierarchyPosition === "top",
  );
  const level1BottomRow = leadersByLevel[1].filter(
    (l) => l.hierarchyPosition === "bottom",
  );

  const levelInfo = {
    1: {
      title: "Regional Convenors",
      description: "Continental Leadership Council",
      fullDescription:
        "The Regional Convenors form the core leadership team, guiding INOFO Africa's strategic direction and representing farmers across East, West, and Southern Africa.",
    },
    2: {
      title: "TaskForce Team",
      description: "Coordination Team",
      fullDescription:
        "The TaskForce team comprises 4 members who coordinate day-to-day operations, implement strategic initiatives, and ensure effective communication across all levels of the organization.",
    },
    3: {
      title: "National Convenors",
      description: "Country Contact Persons Directory",
      fullDescription:
        "The National Convenors lead organic farming initiatives in their respective countries, mobilizing farmers and advocating for policies that support agroecology and food sovereignty.",
    },
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const levelTitleVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  const handleShowBio = (leader: Leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
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
            <h2 id="leadership-title">{title}</h2>
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
              <span className="level-badge level-1-badge">
                Leadership Council
              </span>
              <h3 className="level-title">{levelInfo[1].title}</h3>
              <p className="level-description">{levelInfo[1].description}</p>
              <p className="level-full-description">
                {levelInfo[1].fullDescription}
              </p>
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
              <p className="level-full-description">
                {levelInfo[2].fullDescription}
              </p>
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

          {/* Level 3 - National Convenors Table Design */}
          <motion.div
            className="leadership-level level-3"
            variants={levelTitleVariants}
          >
            <div className="level-header">
              <span className="level-badge level-3-badge">Country Leaders</span>
              <h3 className="level-title">{levelInfo[3].title}</h3>
              <p className="level-description">{levelInfo[3].description}</p>
              <p className="level-full-description">
                {levelInfo[3].fullDescription}
              </p>
            </div>

            {/* Search and Filter Controls */}
            <div className="table-controls">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search by name, country, or organization..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="search-input"
                />
                <span className="search-icon">🔍</span>
              </div>
              <div className="filter-box">
                <select
                  value={filterSubRegion}
                  onChange={handleFilterChange}
                  className="filter-select"
                >
                  {subRegions.map((region) => (
                    <option key={region} value={region}>
                      {region === "all" ? "All Sub-Regions" : region}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="table-results-count">
              Showing {filteredLeaders.length} of {countryLeadersData.length}{" "}
              leaders
            </div>

            {/* Data Table */}
            <div className="data-table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Sub Region</th>
                    <th>Country</th>
                    <th>Convener/Contact Person</th>
                    <th>Gender</th>
                    <th>Name of OFO</th>
                    <th>Language Preference</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentLeaders.map((leader) => (
                    <tr key={leader.sn} className="data-table-row">
                      <td data-label="S/N">{leader.sn}</td>
                      <td data-label="Sub Region">{leader.subRegion}</td>
                      <td data-label="Country">{leader.country}</td>
                      <td data-label="Convener/Contact Person">
                        <strong>{leader.name}</strong>
                      </td>
                      <td data-label="Gender">
                        <span
                          className={`gender-badge ${leader.gender === "Female" ? "gender-female" : "gender-male"}`}
                        >
                          {leader.gender}
                        </span>
                      </td>
                      <td data-label="Name of OFO" className="ofo-cell">
                        {leader.organization}
                      </td>
                      <td data-label="Language Preference">
                        <span className="language-badge">
                          {leader.language}
                        </span>
                      </td>
                      <td data-label="Action">
                        <button
                          className="view-bio-btn"
                          onClick={() => handleShowBio(leader)}
                        >
                          View Bio
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

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
        </div>
      </motion.section>

      {/* Bio Modal */}
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

                  {selectedLeader.subRegion && (
                    <p className="modal-region">
                      <span className="modal-region-badge">
                        {selectedLeader.subRegion}
                      </span>
                    </p>
                  )}

                  {selectedLeader.country && (
                    <p className="modal-country">
                      <strong>Country:</strong> {selectedLeader.country}
                    </p>
                  )}

                  {selectedLeader.gender && (
                    <p className="modal-gender">
                      <strong>Gender:</strong> {selectedLeader.gender}
                    </p>
                  )}

                  {selectedLeader.organization && (
                    <p className="modal-organization">
                      <strong>Organization:</strong>{" "}
                      {selectedLeader.organization}
                    </p>
                  )}

                  {selectedLeader.language && (
                    <p className="modal-language">
                      <strong>Language:</strong> {selectedLeader.language}
                    </p>
                  )}

                  <div className="modal-bio">
                    <h4>Biography</h4>
                    <p>{selectedLeader.bio}</p>
                  </div>

                  {selectedLeader.expertise &&
                    selectedLeader.expertise.length > 0 && (
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
  cardType: "hierarchy-top" | "hierarchy-bottom" | "level-2" | "level-3";
}

const LeaderCard: React.FC<LeaderCardProps> = ({
  leader,
  variants,
  onShowBio,
  cardType,
}) => {
  return (
    <motion.article
      className={`leader-card ${cardType}`}
      variants={variants}
      whileHover={{ y: -3 }}
      aria-labelledby={`leader-name-${leader.name}`}
    >
      <div className="leader-image-wrapper">
        <div className="leader-image">
          <img src={leader.image} alt={leader.name} loading="lazy" />
        </div>
      </div>

      <div className="leader-info">
        <h3 id={`leader-name-${leader.name}`}>{leader.name}</h3>
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
