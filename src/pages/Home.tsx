import { useMemo } from 'react';
import Hero from '../components/Herosection';
import Pillars from '../components/Pillars';
import BlogGrid from '../components/BlogGrid';
import WhoWeAre from '../components/WhoWeAre';
import MembersTable from '../components/LogoCarousel';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';

const Home = () => {
  // --- ENHANCED SEO CONFIGURATION ---
  
  // 1. Breadcrumbs for the Homepage
  const homePageBreadcrumbs = useMemo(() => [
    { name: "Home", url: "https://www.inofoafrica.org/" }
  ], []);

  // 2. Comprehensive Homepage FAQs
  const homePageFaqs = useMemo(() => [
    {
      question: "What is INOFO Africa and what does it do for organic farmers?",
      answer: "INOFO Africa is the continental body representing over 500,000 indigenous organic farmers across Africa. We unify farmer organizations, advocate for agroecology policies, promote food sovereignty, build climate resilience, and support sustainable livelihoods through farmer-led governance and capacity building programs."
    },
    {
      question: "How can African farmer organizations join INOFO Africa?",
      answer: "Farmer organizations can join INOFO Africa through our membership program. The process involves submitting an Expression of Interest, meeting eligibility criteria as a registered organic farming organization, and paying a nominal one-time membership fee. Organizations gain access to continental networking, training programs, policy advocacy platforms, and market opportunities."
    },
    {
      question: "What is agroecology and how does INOFO Africa promote it in Africa?",
      answer: "Agroecology is a sustainable farming approach that combines traditional indigenous knowledge with modern ecological science. INOFO Africa promotes agroecology through farmer training programs, seed sovereignty initiatives, soil conservation projects, and policy advocacy for climate-resilient agriculture across all African regions."
    },
    {
      question: "How many countries does INOFO Africa operate in across Africa?",
      answer: "INOFO Africa has active presence in over 20 African countries with national chapters and regional coordination. Our network spans East Africa, West Africa, Southern Africa, Central Africa, and North Africa, connecting indigenous organic farmer organizations across the entire continent."
    },
    {
      question: "What are the main services INOFO Africa provides to farmers?",
      answer: "INOFO Africa provides six core services: 1) Policy advocacy and farmer rights protection, 2) Capacity building and training programs, 3) Knowledge exchange and resource sharing, 4) Continental networking and farmer forums, 5) Market access and certification support, 6) Mentorship and peer learning opportunities."
    },
    {
      question: "How does INOFO Africa support climate-resilient farming practices?",
      answer: "We support climate resilience through agroecology training, seed banks for indigenous crop varieties, soil conservation techniques, water harvesting methods, and farmer-led adaptation strategies. Our programs help farmers build resilience against climate change impacts while maintaining sustainable productivity."
    },
    {
      question: "Can international organizations partner with INOFO Africa?",
      answer: "Yes, INOFO Africa welcomes partnerships with international NGOs, research institutions, development agencies, and ethical businesses that support our mission. We offer affiliate partnership opportunities for organizations aligned with our goals of promoting sustainable agriculture and food sovereignty in Africa."
    }
  ], []);

  // 3. Enhanced Custom Structured Data for Homepage
  const homePageCustomSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "INOFO Africa | Continental Network of Organic Farmers Uniting for Sustainable Agriculture",
    "description": "INOFO Africa homepage - Discover the continental voice for over 500,000 indigenous organic farmers. Join Africa's leading network for agroecology, food sovereignty, and farmer-led sustainable agriculture initiatives.",
    "url": "https://www.inofoafrica.org/",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.inofoafrica.org/"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://www.inofoafrica.org/assets/inofo-share.jpg",
      "width": "1200",
      "height": "630",
      "caption": "INOFO Africa - Uniting Organic Farmers Across the Continent"
    },
    "datePublished": "2008-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.inofoafrica.org#organization",
      "name": "INOFO Africa",
      "alternateName": "Indigenous Organic Farmers Federation of Africa",
      "url": "https://www.inofoafrica.org",
      "logo": "https://www.inofoafrica.org/assets/logo.png",
      "description": "The continental body representing indigenous organic farmers across Africa, advocating for agroecology, food sovereignty, and farmer-led governance.",
      "foundingDate": "2008",
      "foundingLocation": "Africa",
      "membership": {
        "@type": "ProgramMembership",
        "programName": "INOFO Africa Membership",
        "members": {
          "@type": "QuantitativeValue",
          "value": "500000",
          "unitText": "farmers"
        }
      },
      "areaServed": {
        "@type": "Continent",
        "name": "Africa"
      },
      "sameAs": [
        "https://facebook.com/inofoafrica",
        "https://twitter.com/inofoafrica",
        "https://linkedin.com/company/inofoafrica",
        "https://instagram.com/inofoafrica",
        "https://youtube.com/@inofoafrica"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@inofoafrica.org",
        "availableLanguage": ["English", "French", "Portuguese", "Swahili"],
        "areaServed": "Africa"
      }
    },
    "about": {
      "@type": "Thing",
      "name": "Indigenous Organic Farming in Africa",
      "description": "Traditional and sustainable agricultural practices of African farmers promoting biodiversity, soil health, and food sovereignty"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": ["Farmers", "Agricultural Organizations", "Researchers", "Policy Makers", "Development Partners", "Environmental Advocates", "Food Sovereignty Activists"]
    },
    "hasPart": [
      {
        "@type": "WebPageElement",
        "name": "Hero Section",
        "description": "Main introduction to INOFO Africa's mission and continental impact"
      },
      {
        "@type": "WebPageElement",
        "name": "Who We Are Section",
        "description": "Detailed information about INOFO Africa's purpose and farmer-led approach"
      },
      {
        "@type": "WebPageElement",
        "name": "Strategic Pillars",
        "description": "Core focus areas: Advocacy, Capacity Building, Knowledge Exchange, Networking, and Market Access"
      },
      {
        "@type": "WebPageElement",
        "name": "Latest Blog Articles",
        "description": "Recent updates, success stories, and agricultural insights from across Africa"
      },
      {
        "@type": "WebPageElement",
        "name": "Member Organizations",
        "description": "Network of organic farmer organizations across African countries"
      },
      {
        "@type": "WebPageElement",
        "name": "Newsletter Subscription",
        "description": "Stay updated with INOFO Africa news and organic farming developments"
      }
    ]
  }), []);

  // 4. Site Navigation Schema
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "url": "https://www.inofoafrica.org/",
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "name": "About Us",
        "url": "https://www.inofoafrica.org/about",
        "description": "Learn about our mission, governance, and leadership team"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Services",
        "url": "https://www.inofoafrica.org/services",
        "description": "Explore our comprehensive services for organic farmers"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Membership",
        "url": "https://www.inofoafrica.org/membership",
        "description": "Join our continental network of organic farmer organizations"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Resources",
        "url": "https://www.inofoafrica.org/resources",
        "description": "Access farming guides, training materials, and progress gallery"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Contact",
        "url": "https://www.inofoafrica.org/contact",
        "description": "Get in touch with our team for partnerships and inquiries"
      }
    ]
  };

  // 5. Search Box Schema
  const searchBoxSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.inofoafrica.org/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.inofoafrica.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="home">
      <SEO
        title="INOFO Africa | Continental Network of Organic Farmers - Uniting for Sustainable Agriculture & Food Sovereignty"
        description="INOFO Africa is the continental voice for over 500,000 indigenous organic farmers across Africa. We champion agroecology, advocate for farmer-led policies, promote food sovereignty, build climate resilience, and support sustainable livelihoods through our continental network."
        canonical="https://www.inofoafrica.org/"
        keywords={[
          "INOFO Africa",
          "organic farming Africa",
          "agroecology Africa",
          "food sovereignty Africa",
          "African farmer networks",
          "indigenous organic farmers",
          "sustainable agriculture Africa",
          "climate resilient farming",
          "farmer-led governance",
          "organic certification Africa",
          "seed sovereignty Africa",
          "regenerative agriculture",
          "agricultural policy Africa",
          "farmer cooperatives Africa",
          "women in agriculture Africa",
          "youth farming Africa",
          "traditional farming knowledge",
          "organic market access Africa",
          "agricultural training Africa",
          "continental farmer forum"
        ]}
        image="https://www.inofoafrica.org/assets/inofo-share.jpg"
        type="website"
        breadcrumbs={homePageBreadcrumbs}
        faqData={homePageFaqs}
        customSchema={homePageCustomSchema}
      />

      {/* Additional Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(siteNavigationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(searchBoxSchema)}
      </script>

      {/* Add structured data for page components */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": homePageBreadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url
          }))
        })}
      </script>

      <div itemScope itemType="https://schema.org/WebPage">
        <Hero />
        <WhoWeAre />
        <Pillars />
        <BlogGrid />
        <MembersTable />
        <Newsletter />

        <section className="about-section" style={{ display: 'none' }}>
          {/* Hidden structured data for search engines */}
          <div itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="INOFO Africa" />
            <meta itemProp="alternateName" content="Indigenous Organic Farmers Federation of Africa" />
            <meta itemProp="url" content="https://www.inofoafrica.org/" />
            <meta itemProp="logo" content="https://www.inofoafrica.org/assets/logo.png" />
            <meta itemProp="description" content="Continental network of indigenous organic farmers promoting agroecology and food sovereignty across Africa" />
            <meta itemProp="foundingDate" content="2008" />
            <meta itemProp="numberOfEmployees" content="50+" />
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <meta itemProp="addressCountry" content="Multiple African Countries" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;