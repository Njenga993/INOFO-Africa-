import React, { useState } from "react";
import "../styles/MembersTable.css";

type Member = {
  id: string;
  name: string;
  logoUrl: string;
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

// Complete extracted data from Excel
const members: Member[] = [
  // West Africa - Benin
  { id: generateId("Agbagodo", "Benin"), name: "Agbagodo", logoUrl: "/logos/agbagodo.png", website: "", country: "Benin", subregion: "West Africa", category: "Association des agriculteurs biologiques", location: "ADJOHOUN/Azowlissè", membersCount: 12, acreage: 2, hasDelegate: true },
  { id: generateId("ANaF-BENIN", "Benin"), name: "Association Nationale des femmes agricultrices du Bénin (ANaF-BENIN)", logoUrl: "/logos/anaf-benin.png", website: "", country: "Benin", subregion: "West Africa", category: "Association des agriculteurs biologiques", location: "Bénin,Bohicon, Honmého", membersCount: 205853, acreage: 12355, hasDelegate: false },
  { id: generateId("APESS Benin", "Benin"), name: "APESS Benin", logoUrl: "/logos/apess-benin.png", website: "", country: "Benin", subregion: "West Africa", category: "", location: "Parakou, Benin", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("CeVAD", "Benin"), name: "Centre de Valorisation pour l'Agriculture Durable (CeVAD)", logoUrl: "/logos/cevad.png", website: "", country: "Benin", subregion: "West Africa", category: "Association des agriculteurs biologiques", location: "Ouidah", membersCount: 10, acreage: 24, hasDelegate: true },
  { id: generateId("Convivium Mangeons Sain", "Benin"), name: "Convivium Mangeons Sain du Bénin", logoUrl: "/logos/convivium.png", website: "", country: "Benin", subregion: "West Africa", category: "Coopérative d'agriculteurs biologiques", location: "C/1476 Gounouko, Djègan-Daho (Porto-Novo)", membersCount: 27, acreage: 5, hasDelegate: false },
  { id: generateId("Fifonsi", "Benin"), name: "Fifonsi", logoUrl: "/logos/fifonsi.png", website: "", country: "Benin", subregion: "West Africa", category: "Coopérative d'agriculteurs biologiques", location: "Savalou GOBADA", membersCount: 17, acreage: 20, hasDelegate: true },
  { id: generateId("FNC/CEVASTE", "Benin"), name: "FNC/CEVASTE", logoUrl: "/logos/fnc-cevaste.png", website: "", country: "Benin", subregion: "West Africa", category: "", location: "BENIN", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("Interprofession Poisson", "Benin"), name: "Interprofession Poisson d'élevage du Bénin", logoUrl: "/logos/interprofession-poisson.png", website: "", country: "Benin", subregion: "West Africa", category: "Association des agriculteurs biologiques", location: "Abomey-calavi, Bénin", membersCount: 1600, acreage: 190, hasDelegate: true },
  { id: generateId("JINUKUN", "Benin"), name: "JINUKUN", logoUrl: "/logos/jinukun.png", website: "", country: "Benin", subregion: "West Africa", category: "Association des agriculteurs biologiques", location: "Abomey-calavi", membersCount: 10, acreage: 10000, hasDelegate: true },
  { id: generateId("LE TRAVAIL LIBERE L'HOMME", "Benin"), name: "LE TRAVAIL LIBERE L'HOMME", logoUrl: "/logos/travail-libere.png", website: "", country: "Benin", subregion: "West Africa", category: "Coopérative d'agriculteurs biologiques", location: "ATHIÉMÉ", membersCount: 22, acreage: 5, hasDelegate: true },
  { id: generateId("LES JARDINS DE L'ESPOIR", "Benin"), name: "LES JARDINS DE L'ESPOIR", logoUrl: "/logos/jardins-espoir.png", website: "", country: "Benin", subregion: "West Africa", category: "Association des agriculteurs biologiques", location: "Abomey-calavi", membersCount: 12, acreage: 50000, hasDelegate: true },
  { id: generateId("ONG Eco-care", "Benin"), name: "ONG Eco-care", logoUrl: "/logos/eco-care.png", website: "", country: "Benin", subregion: "West Africa", category: "Coopérative d'agriculteurs biologiques", location: "Zongo, Parakou", membersCount: 4, acreage: 4, hasDelegate: true },

  // West Africa - Togo
  { id: generateId("ANA-BIO TOGO", "Togo"), name: "ANA-BIO TOGO", logoUrl: "/logos/ana-bio-togo.png", website: "", country: "Togo", subregion: "West Africa", category: "Association des agriculteurs biologiques", location: "Togo", membersCount: 83, acreage: 186739, hasDelegate: true },

  // West Africa - Mali
  { id: generateId("AMSD", "Mali"), name: "Association Malienne pour la Solidarité et le Développement (AMSD)", logoUrl: "/logos/amsd.png", website: "", country: "Mali", subregion: "West Africa", category: "Association de producteurs en agroécologie et biologique", location: "Bamako, Mali kalaban Coro", membersCount: 1134, acreage: 195, hasDelegate: true },

  // West Africa - Ghana
  { id: generateId("NABOF AGRO", "Ghana"), name: "NABOF AGRO SERVICES AND TRAINING ASSOCIATION", logoUrl: "/logos/nabof.png", website: "", country: "Ghana", subregion: "West Africa", category: "Association of Training experts", location: "P.O.BOX 360 TECHIMAN BONO EAST GHANA", membersCount: 100, acreage: 120, hasDelegate: true },
  { id: generateId("ABOFAP", "Ghana"), name: "Abrono Organic Farming Project - ABOFAP", logoUrl: "/logos/abofap.png", website: "", country: "Ghana", subregion: "West Africa", category: "Organic Farmers' Association", location: "P.O.BOX 360 TECHIMAN BONO EAST GHANA", membersCount: 10500, acreage: 1200000, hasDelegate: false },

  // Central Africa - Chad
  { id: generateId("FAES", "Chad"), name: "Ferme Agroecologie (FAES)", logoUrl: "/logos/faes.png", website: "", country: "Chad", subregion: "Central Africa", category: "Association des farme agroecologie", location: "Milegana, Tchad", membersCount: 0, acreage: 0, hasDelegate: true },

  // North Africa - Mauritania
  { id: generateId("CAJA MAURITANIE", "Mauritania"), name: "CAJA MAURITANIE", logoUrl: "/logos/caja-mauritanie.png", website: "", country: "Mauritania", subregion: "North Africa", category: "Coopérative multidimensionnelle", location: "Noukachott, Mauritanie", membersCount: 0, acreage: 100, hasDelegate: true },

  // Eastern Africa - Ethiopia
  { id: generateId("Dire Cooperative", "Ethiopia"), name: "Dire Multipurpose Farmers' Cooperative Societies Union", logoUrl: "/logos/dire-cooperative.png", website: "", country: "Ethiopia", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Dire Dawa Administration", membersCount: 11000, acreage: 100000, hasDelegate: false },
  { id: generateId("Guangua", "Ethiopia"), name: "Guangua", logoUrl: "/logos/guangua.png", website: "", country: "Ethiopia", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "oromia w/guji guangua", membersCount: 712, acreage: 2500, hasDelegate: false },
  { id: generateId("Homa Cooperative", "Ethiopia"), name: "Homa Multipurpose Farmers Cooperative (HMPFC)", logoUrl: "/logos/homa-cooperative.png", website: "", country: "Ethiopia", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "West Guji Zone, Abaya district, Logge Kebele, Oromia", membersCount: 2000, acreage: 1585.44, hasDelegate: false },
  { id: generateId("Kelecha Gudina", "Ethiopia"), name: "Kelecha Gudina praymar cooperative", logoUrl: "/logos/kelecha-gudina.png", website: "", country: "Ethiopia", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Oromia . Bule Hora", membersCount: 511, acreage: 600, hasDelegate: true },
  { id: generateId("Koba Mulatu", "Ethiopia"), name: "Koba Mulatu", logoUrl: "/logos/koba-mulatu.png", website: "", country: "Ethiopia", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Oromia region, west guji zone kercha woreda, suke chiga kebele", membersCount: 654, acreage: 1962, hasDelegate: false },
  { id: generateId("Oromia Coffee", "Ethiopia"), name: "Oromia coffee farmers cooperative union", logoUrl: "/logos/oromia-coffee.png", website: "", country: "Ethiopia", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Oromia, Gelan", membersCount: 35000, acreage: 30900, hasDelegate: false },
  { id: generateId("Yirgacheffe Coffee", "Ethiopia"), name: "yirgacheffe coffee farmers cooperatives union", logoUrl: "/logos/yirgacheffe-coffee.png", website: "", country: "Ethiopia", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Addis Ababa Akaki kality sub city woreda 05", membersCount: 44736, acreage: 92592, hasDelegate: false },

  // Eastern Africa - Kenya
  { id: generateId("Arithi Dairy", "Kenya"), name: "Arithi Dairy Farmers' Cooperative", logoUrl: "/logos/arithi-dairy.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Mutuati, Amwathi Ward", membersCount: 1120, acreage: 3.8, hasDelegate: true },
  { id: generateId("Big Organics", "Kenya"), name: "Big Organics amd Naturals", logoUrl: "/logos/big-organics.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Community Based Organisation", location: "Matungulu Machakosi County", membersCount: 400, acreage: 25.6, hasDelegate: true },
  { id: generateId("CISDP", "Kenya"), name: "Community Initiatives for Sustainable Development Program", logoUrl: "/logos/cisdp.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Community Based Organisation", location: "P.O.BOX 4781-01002 Madaraka", membersCount: 60, acreage: 6, hasDelegate: true },
  { id: generateId("COFA", "Kenya"), name: "Community Organic Farmers' Association (COFA)", logoUrl: "/logos/cofa.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "P.O.BOX 10306 64 Kirinyaga-Kagio", membersCount: 200, acreage: 100, hasDelegate: true },
  { id: generateId("Edge wood SHG", "Kenya"), name: "Edge wood Self Help Group", logoUrl: "/logos/edgewood.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Subukia, Nakuru County", membersCount: 27, acreage: 6, hasDelegate: true },
  { id: generateId("Githioro SHG", "Kenya"), name: "Githioro Self Help Group", logoUrl: "/logos/githioro.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Subukia, Nakuru County", membersCount: 15, acreage: 4, hasDelegate: true },
  { id: generateId("Good Will Women", "Kenya"), name: "Good Will Women Group", logoUrl: "/logos/good-will.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Embu Town", membersCount: 12, acreage: 18, hasDelegate: true },
  { id: generateId("Green Silver", "Kenya"), name: "Green Silver Self Help Group", logoUrl: "/logos/green-silver.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "OL Jororok, Nyandarua County", membersCount: 25, acreage: 5, hasDelegate: true },
  { id: generateId("Hope and Victory", "Kenya"), name: "Hope and Victory Foundation", logoUrl: "/logos/hope-victory.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Muranga County", membersCount: 28, acreage: 7.2, hasDelegate: true },
  { id: generateId("Kahuho SHG", "Kenya"), name: "Kahuho Self Help Group", logoUrl: "/logos/kahuho.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Subukia, Nakuru County", membersCount: 18, acreage: 4.5, hasDelegate: true },
  { id: generateId("Kakanga Disability", "Kenya"), name: "Kakanga Disability Self Help Group", logoUrl: "/logos/kakanga.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Kandala, Muranga County", membersCount: 25, acreage: 5, hasDelegate: true },
  { id: generateId("Kapkero women", "Kenya"), name: "Kapkero women group", logoUrl: "/logos/kapkero.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Baringo", membersCount: 22, acreage: 4, hasDelegate: true },
  { id: generateId("Karinga Banana", "Kenya"), name: "Karinga Tissue Culture Banana Group", logoUrl: "/logos/karinga.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Kirinyaga, Kirinyaga Central", membersCount: 20, acreage: 10, hasDelegate: true },
  { id: generateId("Kiandu Agriprenuers", "Kenya"), name: "Kiandu Agriprenuers", logoUrl: "/logos/kiandu.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Tetu, Nyeri County", membersCount: 12, acreage: 3.5, hasDelegate: true },
  { id: generateId("Kiawaihiga Catholic", "Kenya"), name: "Kiawaihiga Catholic Women Group", logoUrl: "/logos/kiawaihiga.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Gatang, Muranga", membersCount: 21, acreage: 0, hasDelegate: true },
  { id: generateId("Kieni SHG", "Kenya"), name: "Kieni Self Help Group", logoUrl: "/logos/kieni.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Subukia, Nakuru County", membersCount: 25, acreage: 5, hasDelegate: true },
  { id: generateId("Kihunguro Farmers", "Kenya"), name: "Kihunguro Farmers Self Help Group", logoUrl: "/logos/kihunguro.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Thika Township, Kiambu", membersCount: 43, acreage: 7, hasDelegate: true },
  { id: generateId("Kirathimo SHG", "Kenya"), name: "Kirathimo Self Help Group", logoUrl: "/logos/kirathimo.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Subukia, Nakuru County", membersCount: 22, acreage: 0, hasDelegate: true },
  { id: generateId("Kongasis Youth", "Kenya"), name: "Kongasis Youth Group", logoUrl: "/logos/kongasis.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Nakuru", membersCount: 21, acreage: 0.25, hasDelegate: true },
  { id: generateId("Kumatha SHG", "Kenya"), name: "Kumatha Self Help Group", logoUrl: "/logos/kumatha.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Embu County, Manyata Sub county, Mbeti North Ward", membersCount: 12, acreage: 4, hasDelegate: true },
  { id: generateId("Maximillian Women", "Kenya"), name: "Maximillian Women Group", logoUrl: "/logos/maximillian.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Baringo", membersCount: 25, acreage: 5, hasDelegate: true },
  { id: generateId("Meru Herbs", "Kenya"), name: "Meru Herbs", logoUrl: "/logos/meru-herbs.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "Tharaka Nithi", membersCount: 100, acreage: 25, hasDelegate: true },
  { id: generateId("Mukuyuni TeechGaa", "Kenya"), name: "Mukuyuni TeechGaa Self Help Group", logoUrl: "/logos/mukuyuni.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "", membersCount: 15, acreage: 0, hasDelegate: false },
  { id: generateId("Munanda A", "Kenya"), name: "Munanda A Self Help Group", logoUrl: "/logos/munanda.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Subukia, Nakuru County", membersCount: 21, acreage: 4, hasDelegate: false },
  { id: generateId("MUNEP", "Kenya"), name: "Murang'a Network Program (MUNEP)", logoUrl: "/logos/munep.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "", membersCount: 1000, acreage: 0, hasDelegate: false },
  { id: generateId("Mwamko Mpya", "Kenya"), name: "Mwamko Mpya Self Help Group", logoUrl: "/logos/mwamko-mpya.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Ithanga, Muranga", membersCount: 23, acreage: 10, hasDelegate: true },
  { id: generateId("Ndondori Youth", "Kenya"), name: "Ndondori Youth Group", logoUrl: "/logos/ndondori.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Nakuru County", membersCount: 16, acreage: 3, hasDelegate: false },
  { id: generateId("Njukiri Tumaini", "Kenya"), name: "Njukiri Tumaini Self Help Group", logoUrl: "/logos/njukiri.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Embu", membersCount: 12, acreage: 0.5, hasDelegate: true },
  { id: generateId("Nyakio SHG", "Kenya"), name: "Nyakio Self-Help Group", logoUrl: "/logos/nyakio.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Mbeti North, Embu County", membersCount: 14, acreage: 5, hasDelegate: true },
  { id: generateId("Nyakazi Organics", "Kenya"), name: "Nyakazi Organics Kenya", logoUrl: "/logos/nyakazi.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Enterprise Association", location: "Gilgil, Nakuru County", membersCount: 122, acreage: 0, hasDelegate: false },
  { id: generateId("Riverside SHG", "Kenya"), name: "Riverside Self-Help Group", logoUrl: "/logos/riverside.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Oldonyo Sabuk, Machakos county", membersCount: 15, acreage: 0, hasDelegate: true },
  { id: generateId("Seed Savers Network", "Kenya"), name: "Seed Savers Network", logoUrl: "/logos/seed-savers.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "National Grassroot Organisation", location: "Gilgil, Kenya", membersCount: 105000, acreage: 960000, hasDelegate: true },
  { id: generateId("Teechgaa SHG", "Kenya"), name: "Teechgaa Self-Help Group", logoUrl: "/logos/teechgaa.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Baringo", membersCount: 15, acreage: 3, hasDelegate: true },
  { id: generateId("Tigania Organic", "Kenya"), name: "Tigania Organic Farmers Group", logoUrl: "/logos/tigania.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Tigania East, Meru", membersCount: 20, acreage: 10, hasDelegate: true },
  { id: generateId("Wangu Reformed Youth", "Kenya"), name: "Wangu Reformed Youth CBO", logoUrl: "/logos/wangu.png", website: "", country: "Kenya", subregion: "Eastern Africa", category: "Community Based Organisation", location: "Kahuro, Muranga", membersCount: 300, acreage: 4, hasDelegate: true },

  // Eastern Africa - Rwanda
  { id: generateId("ABAKUNDUMURIMO", "Rwanda"), name: "ABAKUNDUMURIMO", logoUrl: "/logos/abakundumurimo.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "KINIGI, MUSANZE, RWANDA", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("AGASARO ORGANIC", "Rwanda"), name: "AGASARO ORGANIC Ltd", logoUrl: "/logos/agasaro.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Northern, Musanze,Rwanda", membersCount: 120, acreage: 456, hasDelegate: false },
  { id: generateId("BAHONEZA INDIGENOUS", "Rwanda"), name: "BAHONEZA INDIGENOUS COOPERATIVE", logoUrl: "/logos/bahoneza-indigenous.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "SUSA, MUSANZE, RWANDA", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("BAHONEZA Organic", "Rwanda"), name: "BAHONEZA Organic Farmers", logoUrl: "/logos/bahoneza-organic.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers Association", location: "Gicumbi District, Rwanda", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("COOPERATIVE ABAJYANANIGIHE", "Rwanda"), name: "COOPERATIVE ABAJYANANIGIHE", logoUrl: "/logos/abajyananigihe.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "North Province/ Musanze District/ Rwandan Country", membersCount: 118, acreage: 3, hasDelegate: true },
  { id: generateId("COOPERATIVE AGASARO", "Rwanda"), name: "COOPERATIVE AGASARO", logoUrl: "/logos/cooperative-agasaro.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "BUHINGA, NYAMASHEKE, RWANDA", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("COOPERATIVE COVAFGA", "Rwanda"), name: "COOPERATIVE COVAFGA", logoUrl: "/logos/covafga.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "GAKENGE, GAKENGE, RWANDA", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("COODEFEM", "Rwanda"), name: "Coopérative des distributeurs des fraises de Muhanga(COODEFEM)", logoUrl: "/logos/coodefem.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Rwanda,Southern Province, Muhanga District, Nyamabuye Sector, Gahogo cell.", membersCount: 18, acreage: 80, hasDelegate: true },
  { id: generateId("Cooperative KOAIGI", "Rwanda"), name: "Cooperative KOAIGI", logoUrl: "/logos/koaigi.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Northern -Gicumbi-Mukarange", membersCount: 22, acreage: 2.5, hasDelegate: true },
  { id: generateId("Cooperative KOHIMUMA", "Rwanda"), name: "Cooperative KOHIMUMA", logoUrl: "/logos/kohimuma.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Ouest,Nyamasheke,Rwanda,Macuba,Wimana", membersCount: 400, acreage: 13, hasDelegate: true },
  { id: generateId("COOPPF", "Rwanda"), name: "COOPPF", logoUrl: "/logos/cooppf.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Musanze", membersCount: 109, acreage: 10, hasDelegate: true },
  { id: generateId("IMPUHWE ZA BUGESHI", "Rwanda"), name: "IMPUHWE ZA BUGESHI", logoUrl: "/logos/impuhwe.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' association", location: "WEST RWANDA RUBAVU DISTRICT BUGESHI CECTOR RUSIZA CELL", membersCount: 30, acreage: 90, hasDelegate: true },
  { id: generateId("KABUGA Agriculture PGS", "Rwanda"), name: "KABUGA Agriculture PGS", logoUrl: "/logos/kabuga.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' association", location: "MBAZI, HUYE, RWANDA", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("PGS TABA", "Rwanda"), name: "PGS TABA", logoUrl: "/logos/pgs-taba.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "North province,Gakenke district,Gashenyi sector,Taba cell,Murambi village", membersCount: 30, acreage: 365, hasDelegate: true },
  { id: generateId("RFHC", "Rwanda"), name: "Rwanda Federation Of Horticulture Cooperative (RFHC)", logoUrl: "/logos/rfhc.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Kigali Rwanda-Nyarugenge District Nyakabanda Secteur", membersCount: 3000, acreage: 40000, hasDelegate: true },
  { id: generateId("UCOOPROF Tubehoneza", "Rwanda"), name: "UCOOPROF Tubehoneza", logoUrl: "/logos/ucooprof.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Terimbere Village -Cyivigiza Cell - Nyange Sector -Musanze District in Northern Province of Rwanda", membersCount: 81, acreage: 9883.86, hasDelegate: true },
  { id: generateId("WIDICO", "Rwanda"), name: "WIDICO", logoUrl: "/logos/widico.png", website: "", country: "Rwanda", subregion: "Eastern Africa", category: "Organic Farmers' association", location: "RUHANGO", membersCount: 70, acreage: 8000, hasDelegate: false },

  // Eastern Africa - Tanzania
  { id: generateId("ARANGA COOPERATIVE", "Tanzania"), name: "ARANGA COOPERATIVE", logoUrl: "/logos/aranga.png", website: "", country: "Tanzania", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Nkoaranga village", membersCount: 78, acreage: 100, hasDelegate: false },
  { id: generateId("MACOA", "Tanzania"), name: "MASASI COMMUNITY OF ORGANIC AGRICULTURE (MACOA)", logoUrl: "/logos/macoa.png", website: "", country: "Tanzania", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "MIGONGO,MASASI,MTWARA,TANZANIA", membersCount: 232, acreage: 812, hasDelegate: true },
  { id: generateId("SHDA", "Tanzania"), name: "SOUTHERN HIGHLANDS DEVELOPMENT ALLIANCE (SHDA)", logoUrl: "/logos/shda.png", website: "", country: "Tanzania", subregion: "Eastern Africa", category: "Organic Farmers' association", location: "NJOMBE", membersCount: 5200, acreage: 1200, hasDelegate: true },
  { id: generateId("SHIWAKUTA", "Tanzania"), name: "SHIRIKISHO LA VYAMA VYA WAKULIMA WADOGO TANZANIA - (SHIWAKUTA)", logoUrl: "/logos/shiwakuta.png", website: "", country: "Tanzania", subregion: "Eastern Africa", category: "Farmer Association promoting Agroecological farming", location: "Arusha, Njiro, Tanzania P.O BOX 1677", membersCount: 55290, acreage: 0, hasDelegate: true },
  { id: generateId("UWAMWIMA", "Tanzania"), name: "UWAMWIMA", logoUrl: "/logos/uwamwima.png", website: "", country: "Tanzania", subregion: "Eastern Africa", category: "Organic Farmers' association", location: "Mwanakwerekwe, north 'B' Unguja Zanzibar", membersCount: 1109, acreage: 350, hasDelegate: true },

  // Eastern Africa - Uganda
  { id: generateId("Abagalana Organic", "Uganda"), name: "Abagalana Organic Association", logoUrl: "/logos/abagalana.png", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "Kijjabijjo Village, Kira Sub County, Wakiso District", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("Ankole coffee", "Uganda"), name: "Ankole coffee producers cooperative union limited", logoUrl: "/logos/ankole-coffee.png", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Kabwohe Division, Sheema Municipality", membersCount: 18165, acreage: 6246, hasDelegate: false },
  { id: generateId("Buyege Organic", "Uganda"), name: "Buyege Organic Farmers Group", logoUrl: "/logos/buyege.png", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Kasanje, Wakiso District", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("BOFA", "Uganda"), name: "BOFA", logoUrl: "/logos/bofa.png", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Mbale, Uganda", membersCount: 894, acreage: 1200, hasDelegate: false },
  { id: generateId("Freshveggies PGS", "Uganda"), name: "Freshveggies PGS", logoUrl: "/logos/freshveggies.png", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' association", location: "Gombe A, Wakiso", membersCount: 12, acreage: 5, hasDelegate: true },
  { id: generateId("Kamu Kamu", "Uganda"), name: "Kamu Kamu - Wakiso", logoUrl: "/logos/kamu-kamu.png", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Gombe B, Wakiso", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("KYOFA - Mubende", "Uganda"), name: "KYOFA - Mubende", logoUrl: "/logos/kyofa.png", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "Kibalinga Sub County, Mubende", membersCount: 46, acreage: 69, hasDelegate: true },
  { id: generateId("Lira organic", "Uganda"), name: "Lira organic horticulture and grains cooperative society", logoUrl: "/logos/lira-organic.png", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Lira city east, adekokwok, angwetangwet", membersCount: 1000, acreage: 700, hasDelegate: true },
  { id: generateId("Mirembe Development", "Uganda"), name: "Mirembe Development Group", logoUrl: "/logos/mirembe.png", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Nalweyo Village, Kasanje Sub County, Wakiso", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("Mount Elgon Coffee", "Uganda"), name: "Mount Elgon Coffee And Honey Co-Operative Society", logoUrl: "/logos/mount-elgon.png", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Cooperative", location: "Mbale, Uganda", membersCount: 535, acreage: 289, hasDelegate: true },
  { id: generateId("Nalubugo Organic", "Uganda"), name: "Nalubugo Organic Farmers Group", logoUrl: "/logos/nalubugo.png", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Group", location: "Nalubugo Village, Bujuuko, Mpigi District", membersCount: 0, acreage: 0, hasDelegate: true },
  { id: generateId("Wakiso organic", "Uganda"), name: "Wakiso organic farmer's association", logoUrl: "/logos/wakiso-organic.png", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "Masutiita, Wakiso District", membersCount: 92, acreage: 4500, hasDelegate: true },
  { id: generateId("Wakiso Women's Guild", "Uganda"), name: "Wakiso Women's Guild Organic Producers", logoUrl: "/logos/wakiso-women.png", website: "", country: "Uganda", subregion: "Eastern Africa", category: "Organic Farmers' Association", location: "Kisimbiri Village, Wakiso District", membersCount: 0, acreage: 0, hasDelegate: true },

  // Southern Africa - Namibia
  { id: generateId("ZAHOPA", "Namibia"), name: "Zambezi Horticulture Producers Association (ZAHOPA)", logoUrl: "/logos/zahopa.png", website: "", country: "Namibia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Katima Mulilo, Zambezi Region", membersCount: 65, acreage: 12, hasDelegate: false },

  // Southern Africa - South Africa
  { id: generateId("ECAFA", "South Africa"), name: "ECAFA - Eastern Cape Agroecology Farmers Association", logoUrl: "/logos/ecafa.png", website: "", country: "South Africa", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Mthatha, Eastern Cape Province South Africa", membersCount: 250, acreage: 1000, hasDelegate: false },
  { id: generateId("MBM FAMILIES", "South Africa"), name: "MBM FAMILIES NPC", logoUrl: "/logos/mbm-families.png", website: "", country: "South Africa", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Buffalo City, Eastern Cape, South Africa", membersCount: 30, acreage: 2000, hasDelegate: false },
  { id: generateId("Palm Ridge", "South Africa"), name: "Palm Ridge Multipurpose Primary Co-op LTD", logoUrl: "/logos/palm-ridge.png", website: "", country: "South Africa", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "50 Elliot street ECDA Building Mthatha 5099", membersCount: 5, acreage: 30, hasDelegate: false },
  { id: generateId("Togu and Zizi", "South Africa"), name: "Togu and Zizi Agricultural Cooperative", logoUrl: "/logos/togu-zizi.png", website: "", country: "South Africa", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Ncise Administrative Area Zigadini Location Mthatha 5099", membersCount: 6, acreage: 48, hasDelegate: false },
  { id: generateId("Xhamla Mzantsi", "South Africa"), name: "Xhamla Mzantsi Farming Cooperative", logoUrl: "/logos/xhamla.png", website: "", country: "South Africa", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Eastern Cape Amathole District", membersCount: 6, acreage: 6000, hasDelegate: false },

  // Southern Africa - Zambia
  { id: generateId("Chansa cooperative", "Zambia"), name: "Chansa cooperative", logoUrl: "/logos/chansa-coop.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "743 East Coast Resorts, Kwelera, East London 5952,Eastern Cape", membersCount: 180, acreage: 2300, hasDelegate: true },
  { id: generateId("Chansa woman Group", "Zambia"), name: "Chansa woman Group", logoUrl: "/logos/chansa-women.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Lambwe chomba", membersCount: 120, acreage: 1400, hasDelegate: false },
  { id: generateId("Chawama Women's", "Zambia"), name: "Chawama Women's Tailoring and Cooperative", logoUrl: "/logos/chawama.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Kaputa Boma", membersCount: 22, acreage: 5, hasDelegate: true },
  { id: generateId("Chimbi icishile", "Zambia"), name: "Chimbi icishile nutrition society", logoUrl: "/logos/chimbi.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Chikoye Village - Kaputa - Northern province", membersCount: 14, acreage: 7, hasDelegate: false },
  { id: generateId("Copperbelt Avocado", "Zambia"), name: "Copperbelt Organic Avocado Growers Cooperative", logoUrl: "/logos/copperbelt-avocado.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Farm No. LS/45/Luanshya", membersCount: 324, acreage: 65, hasDelegate: true },
  { id: generateId("Fili uko tuya", "Zambia"), name: "Fili uko tuya", logoUrl: "/logos/fili-uko.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Kalaba village", membersCount: 30, acreage: 12, hasDelegate: true },
  { id: generateId("Ibala organic", "Zambia"), name: "Ibala organic cooperative", logoUrl: "/logos/ibala.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Mpongwe, Copperbelt", membersCount: 25, acreage: 12, hasDelegate: true },
  { id: generateId("Kakunama woman", "Zambia"), name: "Kakunama woman Group", logoUrl: "/logos/kakunama.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Lambwe chomba", membersCount: 100, acreage: 1300, hasDelegate: true },
  { id: generateId("Kalumolumo", "Zambia"), name: "Kalumolumo small scale farmers Group", logoUrl: "/logos/kalumolumo.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Lambwe chomba", membersCount: 150, acreage: 2500, hasDelegate: true },
  { id: generateId("Kansampa farming", "Zambia"), name: "Kansampa farming group", logoUrl: "/logos/kansampa.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Lambwe chomba", membersCount: 120, acreage: 120, hasDelegate: true },
  { id: generateId("Lambwe chomba", "Zambia"), name: "Lambwe chomba cooperative", logoUrl: "/logos/lambwe.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Lambwe chomba", membersCount: 200, acreage: 3000, hasDelegate: true },
  { id: generateId("Lubendwe", "Zambia"), name: "Lubendwe cooperative", logoUrl: "/logos/lubendwe.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Kaleulu - Kaputa District - Northern Province", membersCount: 22, acreage: 15, hasDelegate: true },
  { id: generateId("Mbweche Multipurpose", "Zambia"), name: "Mbweche Multipurpose Cooperative Society", logoUrl: "/logos/mbweche.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Ndandamani village sinda", membersCount: 26, acreage: 250, hasDelegate: true },
  { id: generateId("Mikwela multi purpose", "Zambia"), name: "Mikwela multi purpose cooperative", logoUrl: "/logos/mikwela.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Lambwe chomba", membersCount: 200, acreage: 2500, hasDelegate: true },
  { id: generateId("Mpongwe Bulima", "Zambia"), name: "Mpongwe Bulima Organic Coop", logoUrl: "/logos/mpongwe-bulima.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Off Machiya Road, Mpongwe", membersCount: 800, acreage: 100, hasDelegate: true },
  { id: generateId("Mwafwe youth", "Zambia"), name: "Mwafwe youth multipurpose cooperative limited", logoUrl: "/logos/mwafwe.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Kapaka village, kaputa district/Nothern", membersCount: 17, acreage: 10, hasDelegate: true },
  { id: generateId("NABBCMULTPURPOSE", "Zambia"), name: "NABBCMULTPURPOSE COOPERATIVE SOCIETY", logoUrl: "/logos/nabbc.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Kaputa boma village kaputa district Nothern", membersCount: 14, acreage: 7, hasDelegate: true },
  { id: generateId("Nakila cooperative", "Zambia"), name: "Nakila cooperative", logoUrl: "/logos/nakila.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Lambwe chomba", membersCount: 160, acreage: 2000, hasDelegate: true },
  { id: generateId("Ngulechi avocado", "Zambia"), name: "Ngulechi avocado multipurpose cooperative", logoUrl: "/logos/ngulechi.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Kasisi", membersCount: 24, acreage: 100, hasDelegate: true },
  { id: generateId("Talwaka Lumo", "Zambia"), name: "Talwaka Lumo cooperative", logoUrl: "/logos/talwaka.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Kasungwe village - Kaputa - Northern province", membersCount: 24, acreage: 10, hasDelegate: true },
  { id: generateId("Thukuta Niyathu", "Zambia"), name: "Thukuta Niyathu multipurpose cooperative society", logoUrl: "/logos/thukuta.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Petauke", membersCount: 15, acreage: 45, hasDelegate: true },
  { id: generateId("Tigwirizane", "Zambia"), name: "Tigwirizane Multipurpose Cooperative Society/Twigwirizane Women Development Club", logoUrl: "/logos/tigwirizane.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Mtuta village chief Kalindawalo Petauke", membersCount: 108, acreage: 500, hasDelegate: true },
  { id: generateId("Twapokelela Kaputa", "Zambia"), name: "Twapokelela Kaputa multipurpose cooperative", logoUrl: "/logos/twapokelela.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' Cooperative", location: "Malitati - Kaputa District- Northern", membersCount: 15, acreage: 10, hasDelegate: true },
  { id: generateId("Twikatane farming", "Zambia"), name: "Twikatane farming group", logoUrl: "/logos/twikatane.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Lambwe chomba", membersCount: 130, acreage: 1500, hasDelegate: false },
  { id: generateId("Twishibane youth", "Zambia"), name: "Twishibane youth group", logoUrl: "/logos/twishibane.png", website: "", country: "Zambia", subregion: "Southern Africa", category: "Organic Farmers' association", location: "Kaputa", membersCount: 120, acreage: 1500, hasDelegate: true },
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
}

// Helper function to get country flag emoji
const getCountryFlag = (country: string) => {
  const flagEmojis: Record<string, string> = {
    'Benin': '🇧🇯',
    'Togo': '🇹🇬',
    'Mali': '🇲🇱',
    'Ghana': '🇬🇭',
    'Chad': '🇹🇩',
    'Mauritania': '🇲🇷',
    'Ethiopia': '🇪🇹',
    'Kenya': '🇰🇪',
    'Rwanda': '🇷🇼',
    'Tanzania': '🇹🇿',
    'Uganda': '🇺🇬',
    'Namibia': '🇳🇦',
    'South Africa': '🇿🇦',
    'Zambia': '🇿🇲'
  };
  return flagEmojis[country] || '🇦🇫';
};

const MembersTable: React.FC = () => {
  const regions = React.useMemo(() => groupByRegion(members), []);
  
  // Initialize all regions as collapsed
  const [expandedRegions, setExpandedRegions] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    Object.keys(regions).forEach(region => {
      initial[region] = false; // Changed to false - starts collapsed
    });
    return initial;
  });

  const [expandedCountries, setExpandedCountries] = useState<Record<string, boolean>>({});

  const toggleRegion = (region: string) => {
    setExpandedRegions(prev => ({
      ...prev,
      [region]: !prev[region]
    }));
  };

  const toggleCountry = (region: string, country: string) => {
    const uniqueKey = `${region}-${country}`;
    setExpandedCountries(prev => ({
      ...prev,
      [uniqueKey]: !prev[uniqueKey]
    }));
  };

  const isCountryExpanded = (region: string, country: string): boolean => {
    const uniqueKey = `${region}-${country}`;
    return expandedCountries[uniqueKey] || false;
  };

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
  const totalMembers = members.reduce((sum, member) => sum + member.membersCount, 0);
  const totalAcreage = members.reduce((sum, member) => sum + member.acreage, 0);
  const totalDelegates = members.filter(member => member.hasDelegate).length;

  return (
    <div className="text-content">
      <h2>INOFO Africa Member Organizations 2024</h2>
      
      {/* Quick Stats Overview */}
      <div className="quick-stats">
        <div className="stat-card">
          <div className="stat-number">{members.length}</div>
          <div className="stat-label">Total Organizations</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{formatNumber(totalMembers)}</div>
          <div className="stat-label">Total Members</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{formatNumber(totalAcreage)}</div>
          <div className="stat-label">Total Acreage</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{totalDelegates}</div>
          <div className="stat-label">2024 GA Delegates</div>
        </div>
      </div>

      <p className="members-summary">
        Representing {Object.keys(regions).length} regions across Africa
      </p>
      
      {/* Regions Grid */}
      <div className="regions-grid">
        {Object.keys(regions).map(region => (
          <div key={region} className="region-card">
            <div 
              className="region-header" 
              onClick={() => toggleRegion(region)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleRegion(region);
                }
              }}
            >
              <div className="region-title">
                {region}
                <span className={`expand-icon ${expandedRegions[region] ? "expanded" : ""}`}>
                  ▼
                </span>
              </div>
              <div className="region-stats">
                <span className="stat-badge">
                  {Object.keys(regions[region]).length} countries
                </span>
                <span className="stat-badge">
                  {Object.values(regions[region]).flat().length} organizations
                </span>
              </div>
            </div>

            <div className={`countries-list ${expandedRegions[region] ? "expanded" : ""}`}>
              {Object.keys(regions[region]).map(country => {
                const countryKey = `${region}-${country}`;
                const isExpanded = isCountryExpanded(region, country);
                const countryMembers = regions[region][country];
                
                return (
                  <div key={countryKey} className="country-item">
                    <div 
                      className="country-header" 
                      onClick={() => toggleCountry(region, country)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleCountry(region, country);
                        }
                      }}
                    >
                      <span className="country-name">
                        <span className="country-flag">{getCountryFlag(country)}</span>
                        {country}
                      </span>
                      <span className="country-org-count">
                        {countryMembers.length} orgs
                      </span>
                    </div>

                    <div className={`members-grid ${isExpanded ? "expanded" : ""}`}>
                      {countryMembers.map((member) => (
                        <div key={member.id} className="member-card">
                          <div className="member-logo-container">
                            <img 
                              src={member.logoUrl || "/logos/default-org.png"} 
                              alt={member.name} 
                              className="member-logo" 
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "/logos/default-org.png";
                              }}
                            />
                            {member.hasDelegate && (
                              <span className="delegate-badge" title="Has delegate for 2024 GA">✓</span>
                            )}
                          </div>
                          <div className="member-info">
                            <h4 className="member-name">{member.name}</h4>
                            {member.category && (
                              <p className="member-category">{member.category}</p>
                            )}
                            <p className="member-location">
                              📍 {member.location}
                            </p>
                            <div className="member-stats">
                              <span className="stat">
                                👥 <strong>{formatNumber(member.membersCount)}</strong> members
                              </span>
                              <span className="stat">
                                🌱 <strong>{formatNumber(member.acreage)}</strong> acres
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersTable;