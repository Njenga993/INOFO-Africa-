import Hero from '../components/Herosection'; // Import the Hero component
import Pillars from '../components/Pillars';

import LogoCarousel from "../components/LogoCarousel";
import BlogGrid from '../components/BlogGrid';
import WhoWeAre from '../components/WhoWeAre';

const Home = () => {
  return (
    <div className="home">
      {/* Replace your simple hero with the new Hero component */}
      <Hero />
      <WhoWeAre />
      <Pillars />
      <BlogGrid />
      
      
      <div>
      <h2 style={{ textAlign: "center", margin: "2rem 0" }}>Our Members</h2>
      <LogoCarousel />
    </div>
      
      
      
      {/* You can add additional sections below */}
      <section className="about-section">
        {/* Your other page content goes here */}
      </section>
    </div>
  )
}

export default Home;