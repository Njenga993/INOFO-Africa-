import Hero from '../components/Herosection'; // Import the Hero component
import Pillars from '../components/Pillars';
import ContactSection from '../components/ContactSection';
import LogoCarousel from "../components/LogoCarousel";
import BlogGrid from '../components/BlogGrid';

const Home = () => {
  return (
    <div className="home">
      {/* Replace your simple hero with the new Hero component */}
      <Hero />
      <Pillars />
      <BlogGrid />
      <div>
      <h2 style={{ textAlign: "center", margin: "2rem 0" }}>Our Members</h2>
      <LogoCarousel />
    </div>
      <ContactSection />
      
      
      {/* You can add additional sections below */}
      <section className="about-section">
        {/* Your other page content goes here */}
      </section>
    </div>
  )
}

export default Home;