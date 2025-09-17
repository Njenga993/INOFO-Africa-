// src/App.tsx
import { useState, useEffect } from 'react';
import AfricaLoader from '../components/AfricaLoader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MembershipForm from '../pages/MembershipForm';
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import ServicesAfrica from '../pages/ServicesAfrica';
import MembershipAfrica from '../pages/MembershipAfrica';
import Contact from '../pages/Contact';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ResourcesPage from '../pages/ResourcesPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (replace with your actual loading logic)
    const timer = setTimeout(() => setLoading(false), 3000);
    
    // For real apps, use this instead:
    // window.addEventListener('load', () => setLoading(false));
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <AfricaLoader />
      ) : (
       <div className="App">
          {/* Main Application Layout */}
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<MembershipAfrica />} />
            <Route path="/membership-form" element={<MembershipForm />} />
            <Route path="/services" element={<ServicesAfrica />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<Contact />} />
            

            {/* Add more routes as needed */}
          </Routes>
          <ScrollToTopButton />
          <Footer/>
        </div>
      )}
    </>
  );
}

export default App;