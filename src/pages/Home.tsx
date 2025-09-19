import Hero from '../components/Herosection'; // Import the Hero component
import Pillars from '../components/Pillars';


import BlogGrid from '../components/BlogGrid';
import WhoWeAre from '../components/WhoWeAre';
import MembersTable from '../components/LogoCarousel';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div className="home">
      {/* Replace your simple hero with the new Hero component */}
      <Hero />
      <WhoWeAre />
      <Pillars />
      <BlogGrid />
      <MembersTable />
      <Newsletter/>
      {/* You can add additional sections below */}
      <section className="about-section">
        {/* Your other page content goes here */}
      </section>
    </div>
  )
}

export default Home;