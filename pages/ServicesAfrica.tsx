// src/pages/ServicesAfrica.tsx
import React from 'react';
import { FaArrowRight, FaLeaf, FaUsers, FaHandshake } from 'react-icons/fa';
import '../styles/ServicesAfrica.css';

const services = [
  {
    icon: <FaArrowRight/>, // replace with React icon
    title: 'Advocacy & Policy Support',
    description:
      'Championing organic agriculture policies at national & continental forums, including land rights, certification standards, and climate justice.'
  },
  {
    icon: <FaLeaf/>,
    title: 'Training & Capacity Building',
    description:
      'Farmer-led workshops, webinars, and mentorship programs focused on agroecology, organic certification, value addition, and youth leadership.'
  },
  {
    icon: <FaUsers/>,
    title: 'Knowledge Exchange',
    description:
      'Developer and maintainer of an open-source knowledge library: manuals, case studies, indigenous practices and research for African farmers.'
  },
  {
    icon: <FaLeaf/>,
    title: 'Networking & Events',
    description:
      'Organizing continental forums, regional summits and cross-border learning exchanges to connect farmer organisations.'
  },
  {
    icon: <FaUsers/>,
    title: 'Marketing & Market Access',
    description:
      'Supporting organic producer groups in accessing regional, intercontinental, & export markets through fair-value marketing.'
  },
  {
    icon: <FaArrowRight/>,
    title: 'Mentorship & Peer Exchange',
    description:
      'Linking seasoned farmer leaders with emerging youth and women farmer groups for technical & leadership mentoring.'
  }
];

const ServicesAfrica = () => (
  <main className="services-africa">
    <header className="services-hero">
      <h1>Our Services</h1>
      <p className="lead">
        INOFO Africa strengthens organic farming through policy, training, networking, market access and inclusive support.
      </p>
    </header>

    <section className="services-grid">
      {services.map((service, idx) => (
        <div key={idx} className="service-card">
          <i>{service.icon}</i>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>

    <section className="featured-services">
      <div className="featured-image">
        <img src="../assets/women-cultivating-crops-in-green-fields-4771650.jpg" alt="Training farmers" />
      </div>
      <div className="featured-content">
        <h2>Customized Training Programs</h2>
        <p>
          We partner with local hubs to conduct in-person and virtual training tailored to regional needs—covering composting, 
          agroforestry, value chain development, and organic certification processes.
        </p>
        <a href="/about" className="btn-primary">Learn About Training</a>
      </div>
    </section>

    <section className="cta-involved">
      <h2>Want to Collaborate?</h2>
      <p>
        Join us as an implementing partner, donor, or farmer representative. Help us scale organic agriculture for food security,
        climate adaptation, and youth empowerment across Africa.
      </p>
      <a href="/contact" className="btn-secondary">Get in Touch</a>
    </section>
  </main>
);

export default ServicesAfrica;
