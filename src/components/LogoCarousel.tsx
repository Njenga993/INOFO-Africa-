import React, { useState } from "react";
import { FaSearch, FaFilter, FaTimes, FaGlobeAfrica, FaUsers, FaSeedling, FaCheckCircle } from "react-icons/fa";
import "../styles/MembersTable.css";

type Member = {
  id: string;
  name: string;
  website: string;
  country: string;
  subregion: string;
  category: string;
  location: string;
  membersCount: number;
  acreage: number;
  hasDelegate: boolean;
};

// Helper function to generate unique IDs
const generateId = (name: string, country: string) => {
  return `${country}-${name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`;
};

// Complete extracted data from Excel (keeping all your existing data)
const members: Member[] = [
  // Western Africa - Benin
  { id: generateId("Agbagodo", "Benin"), name: "Agbagodo",  website: "", country: "Benin", subregion: "Western Africa", category: "Association des agriculteurs biologiques", location: "ADJOHOUN/Azowlissè", membersCount: 12, acreage: 2, hasDelegate: true },
  { id: generateId("ANaF-BENIN", "Benin"), name: "Association Nationale des femmes agricultrices du Bénin (ANaF-BENIN)",website: "", country: "Benin", subregion: "Western Africa", category: "Association des agriculteurs biologiques", location: "Bénin,Bohicon, Honmého", membersCount: 205853, acreage: 12355, hasDelegate: false },
  { id: generateId("APESS Benin", "Benin"), name: "APESS Benin",website: "", country: "Benin", subregion: "Western Africa", category: "", location: "Parakou, Benin", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("CeVAD", "Benin"), name: "Centre de Valorisation pour l'Agriculture Durable (CeVAD)",website: "", country: "Benin", subregion: "Western Africa", category: "Association des agriculteurs biologiques", location: "Ouidah", membersCount: 10, acreage: 24, hasDelegate: true },
  { id: generateId("Convivium Mangeons Sain", "Benin"), name: "Convivium Mangeons Sain du Bénin", website: "", country: "Benin", subregion: "Western Africa", category: "Coopérative d'agriculteurs biologiques", location: "C/1476 Gounouko, Djègan-Daho (Porto-Novo)", membersCount: 27, acreage: 5, hasDelegate: false },
  { id: generateId("Fifonsi", "Benin"), name: "Fifonsi",  website: "", country: "Benin", subregion: "Western Africa", category: "Coopérative d'agriculteurs biologiques", location: "Savalou GOBADA", membersCount: 17, acreage: 20, hasDelegate: true },
  { id: generateId("FNC/CEVASTE", "Benin"), name: "FNC/CEVASTE",  website: "", country: "Benin", subregion: "Western Africa", category: "", location: "BENIN", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("Interprofession Poisson", "Benin"), name: "Interprofession Poisson d'élevage du Bénin", website: "", country: "Benin", subregion: "Western Africa", category: "Association des agriculteurs biologiques", location: "Abomey-calavi, Bénin", membersCount: 1600, acreage: 190, hasDelegate: true },
  { id: generateId("JINUKUN", "Benin"), name: "JINUKUN", website: "", country: "Benin", subregion: "Western Africa", category: "Association des agriculteurs biologiques", location: "Abomey-calavi", membersCount: 10, acreage: 10000, hasDelegate: true },
  { id: generateId("LE TRAVAIL LIBERE L'HOMME", "Benin"), name: "LE TRAVAIL LIBERE L'HOMME",  website: "", country: "Benin", subregion: "Western Africa", category: "Coopérative d'agriculteurs biologiques", location: "ATHIÉMÉ", membersCount: 22, acreage: 5, hasDelegate: true },
  { id: generateId("LES JARDINS DE L'ESPOIR", "Benin"), name: "LES JARDINS DE L'ESPOIR",  website: "", country: "Benin", subregion: "Western Africa", category: "Association des agriculteurs biologiques", location: "Abomey-calavi", membersCount: 12, acreage: 50000, hasDelegate: true },
  { id: generateId("ONG Eco-care", "Benin"), name: "ONG Eco-care", website: "", country: "Benin", subregion: "Western Africa", category: "Coopérative d'agriculteurs biologiques", location: "Zongo, Parakou", membersCount: 4, acreage: 4, hasDelegate: true },

  // West Africa - Togo
  { id: generateId("ANA-BIO TOGO", "Togo"), name: "ANA-BIO TOGO", website: "", country: "Togo", subregion: "Western Africa", category: "Association des agriculteurs biologiques", location: "Togo", membersCount: 83, acreage: 186739, hasDelegate: true },

  // West Africa - Mali
  { id: generateId("AMSD", "Mali"), name: "Association Malienne pour la Solidarité et le Développement (AMSD)", website: "", country: "Mali", subregion: "Western Africa", category: "Association de producteurs en agroécologie et biologique", location: "Bamako, Mali kalaban Coro", membersCount: 1134, acreage: 195, hasDelegate: true },

  // West Africa - Ghana
  { id: generateId("NABOF AGRO", "Ghana"), name: "NABOF AGRO SERVICES AND TRAINING ASSOCIATION",  website: "", country: "Ghana", subregion: "Western Africa", category: "Association of Training experts", location: "P.O.BOX 360 TECHIMAN BONO EAST GHANA", membersCount: 100, acreage: 120, hasDelegate: true },
  { id: generateId("ABOFAP", "Ghana"), name: "Abrono Organic Farming Project - ABOFAP", website: "", country: "Ghana", subregion: "Western Africa", category: "Organic Farmers' Association", location: "P.O.BOX 360 TECHIMAN BONO EAST GHANA", membersCount: 10500, acreage: 1200000, hasDelegate: false },

  // Central Africa - Chad
  { id: generateId("FAES", "Chad"), name: "Ferme Agroecologie (FAES)", website: "", country: "Chad", subregion: "Central Africa", category: "Association des farme agroecologie", location: "Milegana, Tchad", membersCount: 0, acreage: 0, hasDelegate: true },

  // North Africa - Mauritania
  { id: generateId("CAJA MAURITANIE", "Mauritania"), name: "CAJA MAURITANIE",  website: "", country: "Mauritania", subregion: "Northern Africa", category: "Coopérative multidimensionnelle", location: "Noukachott, Mauritanie", membersCount: 0, acreage: 100, hasDelegate: true },

  // Eastern Africa - Ethiopia
  { id: generateId("Dire Cooperative", "Ethiopia"), name: "Dire Multipurpose Farmers' Cooperative Societies Union",  website: "", country: "Ethiopia", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Dire Dawa Administration", membersCount: 11000, acreage: 100000, hasDelegate: false },
  { id: generateId("Guangua", "Ethiopia"), name: "Guangua",  website: "", country: "Ethiopia", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "oromia w/guji guangua", membersCount: 712, acreage: 2500, hasDelegate: false },
  { id: generateId("Homa Cooperative", "Ethiopia"), name: "Homa Multipurpose Farmers Cooperative (HMPFC)",  website: "", country: "Ethiopia", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "West Guji Zone, Abaya district, Logge Kebele, Oromia", membersCount: 2000, acreage: 1585.44, hasDelegate: false },
  { id: generateId("Kelecha Gudina", "Ethiopia"), name: "Kelecha Gudina praymar cooperative",  website: "", country: "Ethiopia", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Oromia . Bule Hora", membersCount: 511, acreage: 600, hasDelegate: true },
  { id: generateId("Koba Mulatu", "Ethiopia"), name: "Koba Mulatu", website: "", country: "Ethiopia", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Oromia region, west guji zone kercha woreda, suke chiga kebele", membersCount: 654, acreage: 1962, hasDelegate: false },
  { id: generateId("Oromia Coffee", "Ethiopia"), name: "Oromia coffee farmers cooperative union", website: "", country: "Ethiopia", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Oromia, Gelan", membersCount: 35000, acreage: 30900, hasDelegate: false },
  { id: generateId("Yirgacheffe Coffee", "Ethiopia"), name: "yirgacheffe coffee farmers cooperatives union", website: "", country: "Ethiopia", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Addis Ababa Akaki kality sub city woreda 05", membersCount: 44736, acreage: 92592, hasDelegate: false },

  // Eastern Africa - Kenya
  { id: generateId("Arithi Dairy", "Kenya"), name: "Arithi Dairy Farmers' Cooperative",  website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Mutuati, Amwathi Ward", membersCount: 1120, acreage: 3.8, hasDelegate: true },
  { id: generateId("Big Organics", "Kenya"), name: "Big Organics amd Naturals",  website: "", country: "Kenya", subregion: "Eastern Africa", category: "Community Based Organisation", location: "Matungulu Machakosi County", membersCount: 400, acreage: 25.6, hasDelegate: true },
  { id: generateId("CISDP", "Kenya"), name: "Community Initiatives for Sustainable Development Program",website: "", country: "Kenya", subregion: "Eastern Africa", category: "Community Based Organisation", location: "P.O.BOX 4781-01002 Madaraka", membersCount: 60, acreage: 6, hasDelegate: true },
  { id: generateId("COFA", "Kenya"), name: "Community Organic Farmers' Association (COFA)", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "P.O.BOX 10306 64 Kirinyaga-Kagio", membersCount: 200, acreage: 100, hasDelegate: true },
  { id: generateId("Edge wood SHG", "Kenya"), name: "Edge wood Self Help Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Subukia, Nakuru County", membersCount: 27, acreage: 6, hasDelegate: true },
  { id: generateId("Githioro SHG", "Kenya"), name: "Githioro Self Help Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Subukia, Nakuru County", membersCount: 15, acreage: 4, hasDelegate: true },
  { id: generateId("Good Will Women", "Kenya"), name: "Good Will Women Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Embu Town", membersCount: 12, acreage: 18, hasDelegate: true },
  { id: generateId("Green Silver", "Kenya"), name: "Green Silver Self Help Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "OL Jororok, Nyandarua County", membersCount: 25, acreage: 5, hasDelegate: true },
  { id: generateId("Hope and Victory", "Kenya"), name: "Hope and Victory Foundation", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Muranga County", membersCount: 28, acreage: 7.2, hasDelegate: true },
  { id: generateId("Kahuho SHG", "Kenya"), name: "Kahuho Self Help Group",website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Subukia, Nakuru County", membersCount: 18, acreage: 4.5, hasDelegate: true },
  { id: generateId("Kakanga Disability", "Kenya"), name: "Kakanga Disability Self Help Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Kandala, Muranga County", membersCount: 25, acreage: 5, hasDelegate: true },
  { id: generateId("Kapkero women", "Kenya"), name: "Kapkero women group",  website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Baringo", membersCount: 22, acreage: 4, hasDelegate: true },
  { id: generateId("Karinga Banana", "Kenya"), name: "Karinga Tissue Culture Banana Group",  website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Kirinyaga, Kirinyaga Central", membersCount: 20, acreage: 10, hasDelegate: true },
  { id: generateId("Kiandu Agriprenuers", "Kenya"), name: "Kiandu Agriprenuers",website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Tetu, Nyeri County", membersCount: 12, acreage: 3.5, hasDelegate: true },
  { id: generateId("Kiawaihiga Catholic", "Kenya"), name: "Kiawaihiga Catholic Women Group",  website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Gatang, Muranga", membersCount: 21, acreage: 0, hasDelegate: true },
  { id: generateId("Kieni SHG", "Kenya"), name: "Kieni Self Help Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Subukia, Nakuru County", membersCount: 25, acreage: 5, hasDelegate: true },
  { id: generateId("Kihunguro Farmers", "Kenya"), name: "Kihunguro Farmers Self Help Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Thika Township, Kiambu", membersCount: 43, acreage: 7, hasDelegate: true },
  { id: generateId("Kirathimo SHG", "Kenya"), name: "Kirathimo Self Help Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Subukia, Nakuru County", membersCount: 22, acreage: 0, hasDelegate: true },
  { id: generateId("Kongasis Youth", "Kenya"), name: "Kongasis Youth Group",  website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Nakuru", membersCount: 21, acreage: 0.25, hasDelegate: true },
  { id: generateId("Kumatha SHG", "Kenya"), name: "Kumatha Self Help Group",  website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Embu County, Manyata Sub county, Mbeti North Ward", membersCount: 12, acreage: 4, hasDelegate: true },
  { id: generateId("Maximillian Women", "Kenya"), name: "Maximillian Women Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Baringo", membersCount: 25, acreage: 5, hasDelegate: true },
  { id: generateId("Meru Herbs", "Kenya"), name: "Meru Herbs", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "Tharaka Nithi", membersCount: 100, acreage: 25, hasDelegate: true },
  { id: generateId("Mukuyuni TeechGaa", "Kenya"), name: "Mukuyuni TeechGaa Self Help Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "", membersCount: 15, acreage: 0, hasDelegate: false },
  { id: generateId("Munanda A", "Kenya"), name: "Munanda A Self Help Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Subukia, Nakuru County", membersCount: 21, acreage: 4, hasDelegate: false },
  { id: generateId("MUNEP", "Kenya"), name: "Murang'a Network Program (MUNEP)",  website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "", membersCount: 1000, acreage: 0, hasDelegate: false },
  { id: generateId("Mwamko Mpya", "Kenya"), name: "Mwamko Mpya Self Help Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Ithanga, Muranga", membersCount: 23, acreage: 10, hasDelegate: true },
  { id: generateId("Ndondori Youth", "Kenya"), name: "Ndondori Youth Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Nakuru County", membersCount: 16, acreage: 3, hasDelegate: false },
  { id: generateId("Njukiri Tumaini", "Kenya"), name: "Njukiri Tumaini Self Help Group",  website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Embu", membersCount: 12, acreage: 0.5, hasDelegate: true },
  { id: generateId("Nyakio SHG", "Kenya"), name: "Nyakio Self-Help Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Mbeti North, Embu County", membersCount: 14, acreage: 5, hasDelegate: true },
  { id: generateId("Nyakazi Organics", "Kenya"), name: "Nyakazi Organics Kenya",  website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Enterprise Association", location: "Gilgil, Nakuru County", membersCount: 122, acreage: 0, hasDelegate: false },
  { id: generateId("Riverside SHG", "Kenya"), name: "Riverside Self-Help Group",  website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Oldonyo Sabuk, Machakos county", membersCount: 15, acreage: 0, hasDelegate: true },
  { id: generateId("Seed Savers Network", "Kenya"), name: "Seed Savers Network", website: "", country: "Kenya", subregion: "Eastern Africa", category: "National Grassroot Organisation", location: "Gilgil, Kenya", membersCount: 105000, acreage: 960000, hasDelegate: true },
  { id: generateId("Teechgaa SHG", "Kenya"), name: "Teechgaa Self-Help Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Baringo", membersCount: 15, acreage: 3, hasDelegate: true },
  { id: generateId("Tigania Organic", "Kenya"), name: "Tigania Organic Farmers Group", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Tigania East, Meru", membersCount: 20, acreage: 10, hasDelegate: true },
  { id: generateId("Wangu Reformed Youth", "Kenya"), name: "Wangu Reformed Youth CBO", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Community Based Organisation", location: "Kahuro, Muranga", membersCount: 300, acreage: 4, hasDelegate: true },

  // Eastern Africa - Rwanda
  { id: generateId("ABAKUNDUMURIMO", "Rwanda"), name: "ABAKUNDUMURIMO", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "KINIGI, MUSANZE, RWANDA", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("AGASARO ORGANIC", "Rwanda"), name: "AGASARO ORGANIC Ltd",website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Northern, Musanze,Rwanda", membersCount: 120, acreage: 456, hasDelegate: false },
  { id: generateId("BAHONEZA INDIGENOUS", "Rwanda"), name: "BAHONEZA INDIGENOUS COOPERATIVE", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "SUSA, MUSANZE, RWANDA", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("BAHONEZA Organic", "Rwanda"), name: "BAHONEZA Organic Farmers", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers Association", location: "Gicumbi District, Rwanda", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("COOPERATIVE ABAJYANANIGIHE", "Rwanda"), name: "COOPERATIVE ABAJYANANIGIHE",website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "North Province/ Musanze District/ Rwandan Country", membersCount: 118, acreage: 3, hasDelegate: true },
  { id: generateId("COOPERATIVE AGASARO", "Rwanda"), name: "COOPERATIVE AGASARO",website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "BUHINGA, NYAMASHEKE, RWANDA", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("COOPERATIVE COVAFGA", "Rwanda"), name: "COOPERATIVE COVAFGA",website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "GAKENGE, GAKENGE, RWANDA", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("COODEFEM", "Rwanda"), name: "Coopérative des distributeurs des fraises de Muhanga(COODEFEM)",  website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Rwanda,Southern Province, Muhanga District, Nyamabuye Sector, Gahogo cell.", membersCount: 18, acreage: 80, hasDelegate: true },
  { id: generateId("Cooperative KOAIGI", "Rwanda"), name: "Cooperative KOAIGI", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Northern -Gicumbi-Mukarange", membersCount: 22, acreage: 2.5, hasDelegate: true },
  { id: generateId("Cooperative KOHIMUMA", "Rwanda"), name: "Cooperative KOHIMUMA", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Ouest,Nyamasheke,Rwanda,Macuba,Wimana", membersCount: 400, acreage: 13, hasDelegate: true },
  { id: generateId("COOPPF", "Rwanda"), name: "COOPPF", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Musanze", membersCount: 109, acreage: 10, hasDelegate: true },
  { id: generateId("IMPUHWE ZA BUGESHI", "Rwanda"), name: "IMPUHWE ZA BUGESHI", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' association", location: "WEST RWANDA RUBAVU DISTRICT BUGESHI CECTOR RUSIZA CELL", membersCount: 30, acreage: 90, hasDelegate: true },
  { id: generateId("KABUGA Agriculture PGS", "Rwanda"), name: "KABUGA Agriculture PGS", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' association", location: "MBAZI, HUYE, RWANDA", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("PGS TABA", "Rwanda"), name: "PGS TABA", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "North province,Gakenke district,Gashenyi sector,Taba cell,Murambi village", membersCount: 30, acreage: 365, hasDelegate: true },
  { id: generateId("RFHC", "Rwanda"), name: "Rwanda Federation Of Horticulture Cooperative (RFHC)",  website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Kigali Rwanda-Nyarugenge District Nyakabanda Secteur", membersCount: 3000, acreage: 40000, hasDelegate: true },
  { id: generateId("UCOOPROF Tubehoneza", "Rwanda"), name: "UCOOPROF Tubehoneza",website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Terimbere Village -Cyivigiza Cell - Nyange Sector -Musanze District in Northern Province of Rwanda", membersCount: 81, acreage: 9883.86, hasDelegate: true },
  { id: generateId("WIDICO", "Rwanda"), name: "WIDICO",  website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' association", location: "RUHANGO", membersCount: 70, acreage: 8000, hasDelegate: false },

  // Eastern Africa - Tanzania
  { id: generateId("ARANGA COOPERATIVE", "Tanzania"), name: "ARANGA COOPERATIVE",  website: "", country: "Tanzania", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Nkoaranga village", membersCount: 78, acreage: 100, hasDelegate: false },
  { id: generateId("MACOA", "Tanzania"), name: "MASASI COMMUNITY OF ORGANIC AGRICULTURE (MACOA)",website: "", country: "Tanzania", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "MIGONGO,MASASI,MTWARA,TANZANIA", membersCount: 232, acreage: 812, hasDelegate: true },
  { id: generateId("SHDA", "Tanzania"), name: "SOUTHERN HIGHLANDS DEVELOPMENT ALLIANCE (SHDA)", website: "", country: "Tanzania", subregion: "Eastern Africa", category: "Organic Farmers' association", location: "NJOMBE", membersCount: 5200, acreage: 1200, hasDelegate: true },
  { id: generateId("SHIWAKUTA", "Tanzania"), name: "SHIRIKISHO LA VYAMA VYA WAKULIMA WADOGO TANZANIA - (SHIWAKUTA)", website: "", country: "Tanzania", subregion: "Eastern Africa", category: "Farmer Association promoting Agroecological farming", location: "Arusha, Njiro, Tanzania P.O BOX 1677", membersCount: 55290, acreage: 0, hasDelegate: true },
  { id: generateId("UWAMWIMA", "Tanzania"), name: "UWAMWIMA",  website: "", country: "Tanzania", subregion: "Eastern Africa", category: "Organic Farmers' association", location: "Mwanakwerekwe, north 'B' Unguja Zanzibar", membersCount: 1109, acreage: 350, hasDelegate: true },

  // Eastern Africa - Uganda
  { id: generateId("Abagalana Organic", "Uganda"), name: "Abagalana Organic Association", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "Kijjabijjo Village, Kira Sub County, Wakiso District", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("Ankole coffee", "Uganda"), name: "Ankole coffee producers cooperative union limited",  website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Kabwohe Division, Sheema Municipality", membersCount: 18165, acreage: 6246, hasDelegate: false },
  { id: generateId("Buyege Organic", "Uganda"), name: "Buyege Organic Farmers Group", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Kasanje, Wakiso District", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("BOFA", "Uganda"), name: "BOFA", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Mbale, Uganda", membersCount: 894, acreage: 1200, hasDelegate: false },
  { id: generateId("Freshveggies PGS", "Uganda"), name: "Freshveggies PGS", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' association", location: "Gombe A, Wakiso", membersCount: 12, acreage: 5, hasDelegate: true },
  { id: generateId("Kamu Kamu", "Uganda"), name: "Kamu Kamu - Wakiso",  website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Gombe B, Wakiso", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("KYOFA - Mubende", "Uganda"), name: "KYOFA - Mubende", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "Kibalinga Sub County, Mubende", membersCount: 46, acreage: 69, hasDelegate: true },
  { id: generateId("Lira organic", "Uganda"), name: "Lira organic horticulture and grains cooperative society", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Lira city east, adekokwok, angwetangwet", membersCount: 1000, acreage: 700, hasDelegate: true },
  { id: generateId("Mirembe Development", "Uganda"), name: "Mirembe Development Group",  website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Nalweyo Village, Kasanje Sub County, Wakiso", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("Mount Elgon Coffee", "Uganda"), name: "Mount Elgon Coffee And Honey Co-Operative Society", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Mbale, Uganda", membersCount: 535, acreage: 289, hasDelegate: true },
  { id: generateId("Nalubugo Organic", "Uganda"), name: "Nalubugo Organic Farmers Group",website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Nalubugo Village, Bujuuko, Mpigi District", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("Wakiso organic", "Uganda"), name: "Wakiso organic farmer's association", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "Masutiita, Wakiso District", membersCount: 92, acreage: 4500, hasDelegate: true },
  { id: generateId("Wakiso Women's Guild", "Uganda"), name: "Wakiso Women's Guild Organic Producers",  website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "Kisimbiri Village, Wakiso District", membersCount: 0, acreage: 0, hasDelegate: true },

  // Southern Africa - Namibia
  { id: generateId("ZAHOPA", "Namibia"), name: "Zambezi Horticulture Producers Association (ZAHOPA)", website: "", country: "Namibia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Katima Mulilo, Zambezi Region", membersCount: 65, acreage: 12, hasDelegate: false },

  // Southern Africa - South Africa
  { id: generateId("ECAFA", "South Africa"), name: "ECAFA - Eastern Cape Agroecology Farmers Association", website: "", country: "South Africa", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Mthatha, Eastern Cape Province South Africa", membersCount: 250, acreage: 1000, hasDelegate: false },
  { id: generateId("MBM FAMILIES", "South Africa"), name: "MBM FAMILIES NPC",  website: "", country: "South Africa", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Buffalo City, Eastern Cape, South Africa", membersCount: 30, acreage: 2000, hasDelegate: false },
  { id: generateId("Palm Ridge", "South Africa"), name: "Palm Ridge Multipurpose Primary Co-op LTD", website: "", country: "South Africa", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "50 Elliot street ECDA Building Mthatha 5099", membersCount: 5, acreage: 30, hasDelegate: false },
  { id: generateId("Togu and Zizi", "South Africa"), name: "Togu and Zizi Agricultural Cooperative", website: "", country: "South Africa", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Ncise Administrative Area Zigadini Location Mthatha 5099", membersCount: 6, acreage: 48, hasDelegate: false },
  { id: generateId("Xhamla Mzantsi", "South Africa"), name: "Xhamla Mzantsi Farming Cooperative", website: "", country: "South Africa", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Eastern Cape Amathole District", membersCount: 6, acreage: 6000, hasDelegate: false },

  // Southern Africa - Zambia
  { id: generateId("Chansa cooperative", "Zambia"), name: "Chansa cooperative", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "743 East Coast Resorts, Kwelera, East London 5952,Eastern Cape", membersCount: 180, acreage: 2300, hasDelegate: true },
  { id: generateId("Chansa woman Group", "Zambia"), name: "Chansa woman Group", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Lambwe chomba", membersCount: 120, acreage: 1400, hasDelegate: false },
  { id: generateId("Chawama Women's", "Zambia"), name: "Chawama Women's Tailoring and Cooperative", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Kaputa Boma", membersCount: 22, acreage: 5, hasDelegate: true },
  { id: generateId("Chimbi icishile", "Zambia"), name: "Chimbi icishile nutrition society", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Chikoye Village - Kaputa - Northern province", membersCount: 14, acreage: 7, hasDelegate: false },
  { id: generateId("Copperbelt Avocado", "Zambia"), name: "Copperbelt Organic Avocado Growers Cooperative",website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Farm No. LS/45/Luanshya", membersCount: 324, acreage: 65, hasDelegate: true },
  { id: generateId("Fili uko tuya", "Zambia"), name: "Fili uko tuya",  website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Kalaba village", membersCount: 30, acreage: 12, hasDelegate: true },
  { id: generateId("Ibala organic", "Zambia"), name: "Ibala organic cooperative",  website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Mpongwe, Copperbelt", membersCount: 25, acreage: 12, hasDelegate: true },
  { id: generateId("Kakunama woman", "Zambia"), name: "Kakunama woman Group",website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Lambwe chomba", membersCount: 100, acreage: 1300, hasDelegate: false },
  { id: generateId("Kalumolumo", "Zambia"), name: "Kalumolumo small scale farmers Group",  website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Lambwe chomba", membersCount: 150, acreage: 2500, hasDelegate: true },
  { id: generateId("Kansampa farming", "Zambia"), name: "Kansampa farming group", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Lambwe chomba", membersCount: 120, acreage: 120, hasDelegate: true },
  { id: generateId("Lambwe chomba", "Zambia"), name: "Lambwe chomba cooperative", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Lambwe chomba", membersCount: 200, acreage: 3000, hasDelegate: true },
  { id: generateId("Lubendwe", "Zambia"), name: "Lubendwe cooperative",website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Kaleulu - Kaputa District - Northern Province", membersCount: 22, acreage: 15, hasDelegate: true },
  { id: generateId("Mbweche Multipurpose", "Zambia"), name: "Mbweche Multipurpose Cooperative Society", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Ndandamani village sinda", membersCount: 26, acreage: 250, hasDelegate: true },
  { id: generateId("Mikwela multi purpose", "Zambia"), name: "Mikwela multi purpose cooperative",website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Lambwe chomba", membersCount: 200, acreage: 2500, hasDelegate: true },
  { id: generateId("Mpongwe Bulima", "Zambia"), name: "Mpongwe Bulima Organic Coop", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Off Machiya Road, Mpongwe", membersCount: 800, acreage: 100, hasDelegate: true },
  { id: generateId("Mwafwe youth", "Zambia"), name: "Mwafwe youth multipurpose cooperative limited", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Kapaka village, kaputa district/Nothern", membersCount: 17, acreage: 10, hasDelegate: true },
  { id: generateId("NABBCMULTPURPOSE", "Zambia"), name: "NABBCMULTPURPOSE COOPERATIVE SOCIETY",website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Kaputa boma village kaputa district Nothern", membersCount: 14, acreage: 7, hasDelegate: true },
  { id: generateId("Nakila cooperative", "Zambia"), name: "Nakila cooperative",website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Lambwe chomba", membersCount: 160, acreage: 2000, hasDelegate: true },
  { id: generateId("Ngulechi avocado", "Zambia"), name: "Ngulechi avocado multipurpose cooperative", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Kasisi", membersCount: 24, acreage: 100, hasDelegate: true },
  { id: generateId("Talwaka Lumo", "Zambia"), name: "Talwaka Lumo cooperative",  website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Kasungwe village - Kaputa - Northern province", membersCount: 24, acreage: 10, hasDelegate: true },
  { id: generateId("Thukuta Niyathu", "Zambia"), name: "Thukuta Niyathu multipurpose cooperative society", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Petauke", membersCount: 15, acreage: 45, hasDelegate: true },
  { id: generateId("Tigwirizane", "Zambia"), name: "Tigwirizane Multipurpose Cooperative Society/Twigwirizane Women Development Club", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Mtuta village chief Kalindawalo Petauke", membersCount: 108, acreage: 500, hasDelegate: true },
  { id: generateId("Twapokelela Kaputa", "Zambia"), name: "Twapokelela Kaputa multipurpose cooperative", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Malitati - Kaputa District- Northern", membersCount: 15, acreage: 10, hasDelegate: true },
  { id: generateId("Twikatane farming", "Zambia"), name: "Twikatane farming group", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Lambwe chomba", membersCount: 130, acreage: 1500, hasDelegate: false },
  { id: generateId("Twishibane youth", "Zambia"), name: "Twishibane youth group", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Kaputa", membersCount: 120, acreage: 1500, hasDelegate: false },
];

// Function to group members by region and country
const groupByRegion = (members: Member[]) => {
  return members.reduce((regions, member) => {
    if (!regions[member.subregion]) {
      regions[member.subregion] = {};
    }
    if (!regions[member.subregion][member.country]) {
      regions[member.subregion][member.country] = [];
    }
    regions[member.subregion][member.country].push(member);
    return regions;
  }, {} as Record<string, Record<string, Member[]>>);
};

// Helper function to get country flag emoji
const getCountryFlag = (country: string) => {
  const flagEmojis: Record<string, string> = {
    'Benin': '🇧🇯', 'Togo': '🇹🇬', 'Mali': '🇲🇱', 'Ghana': '🇬🇭',
    'Chad': '🇹🇩', 'Mauritania': '🇲🇷', 'Ethiopia': '🇪🇹', 'Kenya': '🇰🇪',
    'Rwanda': '🇷🇼', 'Tanzania': '🇹🇿', 'Uganda': '🇺🇬', 'Namibia': '🇳🇦',
    'South Africa': '🇿🇦', 'Zambia': '🇿🇲'
  };
  return flagEmojis[country] || '🇦🇫';
};

const MembersTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Group members by region
  const regions = React.useMemo(() => groupByRegion(members), []);

  // Get unique regions and countries for filters
  const uniqueRegions = React.useMemo(() => {
    return Array.from(new Set(members.map(m => m.subregion))).sort();
  }, []);

  const uniqueCountries = React.useMemo(() => {
    if (selectedRegion === 'all') {
      return Array.from(new Set(members.map(m => m.country))).sort();
    }
    return Array.from(new Set(members.filter(m => m.subregion === selectedRegion).map(m => m.country))).sort();
  }, [selectedRegion]);

  // Filter members based on search and filters
  const filteredMembers = React.useMemo(() => {
    let filtered = members;

    if (searchTerm) {
      filtered = filtered.filter(member => 
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedRegion !== 'all') {
      filtered = filtered.filter(member => member.subregion === selectedRegion);
    }

    if (selectedCountry !== 'all') {
      filtered = filtered.filter(member => member.country === selectedCountry);
    }

    if (activeTab !== 'all') {
      filtered = filtered.filter(member => member.subregion === activeTab);
    }

    return filtered;
  }, [searchTerm, selectedRegion, selectedCountry, activeTab]);

  // Group filtered members by region
  const filteredRegions = React.useMemo(() => {
    return groupByRegion(filteredMembers);
  }, [filteredMembers]);

  const formatNumber = (num: number): string => {
    if (num === 0) return '-';
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'K';
    }
    return num.toString();
  };

  // Calculate total statistics
  const totalMembers = filteredMembers.reduce((sum, member) => sum + member.membersCount, 0);
  const totalAcreage = filteredMembers.reduce((sum, member) => sum + member.acreage, 0);
  const totalDelegates = filteredMembers.filter(member => member.hasDelegate).length;

  // Clear filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedRegion('all');
    setSelectedCountry('all');
    setActiveTab('all');
  };

  // Check if any filters are active
  const hasActiveFilters = searchTerm || selectedRegion !== 'all' || selectedCountry !== 'all' || activeTab !== 'all';

  // Get statistics for each region
  const getRegionStats = (regionName: string) => {
    const regionMembers = members.filter(m => m.subregion === regionName);
    const totalMembers = regionMembers.reduce((sum, member) => sum + member.membersCount, 0);
    const totalAcreage = regionMembers.reduce((sum, member) => sum + member.acreage, 0);
    const totalDelegates = regionMembers.filter(member => member.hasDelegate).length;
    const countries = new Set(regionMembers.map(m => m.country)).size;
    
    return {
      organizations: regionMembers.length,
      members: totalMembers,
      acreage: totalAcreage,
      delegates: totalDelegates,
      countries
    };
  };

  return (
    <div className="text-content">
      <div className="header-section">
        <h2>INOFO Africa Member Organizations since 2017</h2>
        <div className="header-subtitle">
          <FaGlobeAfrica className="header-icon" />
          <span>Connecting organic farming communities across Africa</span>
        </div>
      </div>
      
      {/* Filter Controls */}
      <div className="filter-controls">
        <div className="filter-header">
          <div className="filter-title">
            <FaFilter />
            <span>Filter Organizations</span>
            {hasActiveFilters && (
              <button className="clear-filters" onClick={clearFilters}>
                <FaTimes /> Clear All
              </button>
            )}
          </div>
          <button 
            className="toggle-filters"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {showFilters && (
          <div className="filter-options">
            <div className="filter-group">
              <label htmlFor="search">Search</label>
              <div className="search-input-wrapper">
                <FaSearch className="search-icon" />
                <input
                  id="search"
                  type="text"
                  placeholder="Search organizations, countries, locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            <div className="filter-group">
              <label htmlFor="region">Region</label>
              <select 
                id="region"
                value={selectedRegion} 
                onChange={(e) => {
                  setSelectedRegion(e.target.value);
                  setSelectedCountry('all'); // Reset country when region changes
                }}
                className="filter-select"
              >
                <option value="all">All Regions</option>
                {uniqueRegions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="country">Country</label>
              <select 
                id="country"
                value={selectedCountry} 
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="filter-select"
                disabled={selectedRegion === 'all'}
              >
                <option value="all">All Countries</option>
                {uniqueCountries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats Overview */}
      <div className="quick-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <FaUsers />
          </div>
          <div className="stat-number">+{filteredMembers.length}</div>
          <div className="stats-label">Organizations</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FaUsers />
          </div>
          <div className="stat-number">+{formatNumber(totalMembers)}</div>
          <div className="stats-label">Total Members</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FaSeedling />
          </div>
          <div className="stat-number">+{formatNumber(totalAcreage)}</div>
          <div className="stats-label">Total Acreage</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FaCheckCircle />
          </div>
          <div className="stat-number">+{totalDelegates}</div>
          <div className="stats-label">2024 GA Delegates</div>
        </div>
      </div>

      <p className="members-summary">
        {hasActiveFilters && (
          <span className="filter-indicator">
            Showing filtered results: {filteredMembers.length} of {members.length} organizations
          </span>
        )}
        {!hasActiveFilters && (
          <span>Representing {Object.keys(regions).length} regions across Africa</span>
        )}
      </p>
      
      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Regions
        </button>
        {uniqueRegions.map(region => {
          const stats = getRegionStats(region);
          return (
            <button 
              key={region}
              className={`tab-button ${activeTab === region ? 'active' : ''}`}
              onClick={() => setActiveTab(region)}
            >
              {region}
              <span className="tab-badge">{stats.organizations}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'all' ? (
          // All regions view - show region cards
          <div className="regions-grid">
            {Object.keys(filteredRegions).map(region => {
              const stats = getRegionStats(region);
              return (
                <div key={region} className="region-card">
                  <div className="region-header">
                    <h3>{region}</h3>
                    <div className="region-stats">
                      <span className="stat-badge">
                        {stats.countries} countries
                      </span>
                      <span className="stat-badge">
                        {stats.organizations} organizations
                      </span>
                    </div>
                  </div>
                  <div className="region-details">
                    <div className="detail-row">
                      <span>Members:</span>
                      <span className="detail-value">{formatNumber(stats.members)}</span>
                    </div>
                    <div className="detail-row">
                      <span>Acreage:</span>
                      <span className="detail-value">{formatNumber(stats.acreage)}</span>
                    </div>
                    <div className="detail-row">
                      <span>Delegates:</span>
                      <span className="detail-value">{stats.delegates}</span>
                    </div>
                  </div>
                  <div className="region-countries">
                    {Object.keys(filteredRegions[region]).map(country => (
                      <div key={country} className="country-tag">
                        <span className="country-flag">{getCountryFlag(country)}</span>
                        <span>{country}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Single region view - show country cards with member details
          <div className="region-content">
            <h3 className="region-title">{activeTab}</h3>
            {Object.keys(filteredRegions).length === 0 ? (
              <div className="no-results">
                <p>No organizations found for the selected filters.</p>
              </div>
            ) : (
              Object.keys(filteredRegions).map(region => (
                <div key={region}>
                  {Object.keys(filteredRegions[region]).map(country => {
                    const countryMembers = filteredRegions[region][country];
                    return (
                      <div key={country} className="country-section">
                        <div className="country-header">
                          <h4>
                            <span className="country-flag">{getCountryFlag(country)}</span>
                            {country}
                          </h4>
                          <span className="country-org-count">{countryMembers.length} organizations</span>
                        </div>
                        <div className="members-grid">
                          {countryMembers.map((member) => (
                            <div key={member.id} className="member-card">
                              <div className="member-header">
                                <h5 className="member-name">{member.name}</h5>
                                {member.hasDelegate && (
                                  <span className="delegate-badge" title="Has delegate for 2024 GA">
                                    <FaCheckCircle />
                                  </span>
                                )}
                              </div>
                              {member.category && (
                                <p className="member-category">{member.category}</p>
                              )}
                              <p className="member-location">
                                📍 {member.location}
                              </p>
                              <div className="member-stats">
                                <div className="stat">
                                  <FaUsers />
                                  <span className="stat-value">{formatNumber(member.membersCount)}</span>
                                  <span className="stat-label">members</span>
                                </div>
                                <div className="stat">
                                  <FaSeedling />
                                  <span className="stat-value">{formatNumber(member.acreage)}</span>
                                  <span className="stat-label">acres</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MembersTable;