import Hero from '../components/Herosection';
import Pillars from '../components/Pillars';
import BlogGrid from '../components/BlogGrid';
import WhoWeAre from '../components/WhoWeAre';
import MembersTable from '../components/LogoCarousel';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';

const Home = () => {
  // Schema for the home page
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "INOFO Africa | Indigenous Organic Farmers Federation of Africa",
    "description": "INOFO Africa is the continental body representing indigenous organic farmers across Africa. We promote agroecology, food sovereignty, climate resilience, and farmer-led governance through regional country networks.",
    "url": "https://www.inofoafrica.org/",
    "mainEntity": {
      "@type": "Organization",
      "name": "INOFO Africa",
      "url": "https://www.inofoafrica.org",
      "logo": "https://www.inofoafrica.org/assets/logo.png",
      "description": "The Indigenous Organic Farmers Federation of Africa supporting smallholder farmers, agroecology, and food sovereignty.",
      "sameAs": [
        "https://facebook.com/inofoafrica",
        "https://twitter.com/inofoafrica",
        "https://linkedin.com/company/inofoafrica"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "information",
        "url": "https://www.inofoafrica.org/contact"
      }
    }
  };

  return (
    <div className="home">
      <SEO
        title="INOFO Africa | Indigenous Organic Farmers Federation of Africa"
        description="INOFO Africa is the continental body representing indigenous organic farmers across Africa. We promote agroecology, food sovereignty, climate resilience, and farmer-led governance through regional country networks."
        canonical="https://www.inofoafrica.org/"
        keywords={[
          "INOFO Africa",
          "Indigenous Organic Farmers Africa",
          "Organic Farming Africa",
          "Agroecology Africa",
          "Food Sovereignty Africa",
          "IFOAM Africa",
          "Farmer Networks Africa",
          "Indigenous Knowledge Africa",
          "Regenerative Agriculture Africa",
          "Climate Resilient Farming Africa",
          "Organic Certification Africa",
          "African Organic Producers",
          "Traditional Seed Systems Africa",
          "African Organic Movements",
          "Farmer-Led Organizations Africa"
        ]}
        image="https://www.inofoafrica.org/assets/inofo-share.jpg"
        type="website"
        schema={homePageSchema} // Add the custom schema
      />

      <Hero />
      <WhoWeAre />
      <Pillars />
      <BlogGrid />
      <MembersTable />
      <Newsletter />

      <section className="about-section">
        {/* Additional content if needed */}
      </section>
    </div>
  );
};

export default Home;