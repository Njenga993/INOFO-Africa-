import Hero from '../components/Herosection'; // Import the Hero component
import React from 'react';
import Pillars from '../components/Pillars';
import ContactSection from '../components/ContactSection';
import BlogGrid from '../components/BlogGrid';

const Home = () => {
  return (
    <div className="home">
      {/* Replace your simple hero with the new Hero component */}
      <Hero />
      <Pillars />
      <BlogGrid />
      <ContactSection />
      
      
      {/* You can add additional sections below */}
      <section className="about-section">
        {/* Your other page content goes here */}
      </section>
    </div>
  )
}

export default Home;