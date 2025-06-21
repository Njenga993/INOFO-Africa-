import React, { useState } from 'react';
import '../styles/NewsEvents.css';
import { FaArrowRight } from 'react-icons/fa';

const newsPosts = [
  {
    id: 1,
    title: "INOFO Shines at International FFORA Event 2025",
    location: "Dar es Salaam",
    excerpt: "INOFO proudly joined as the only organic international Farmer Organisation alongside partners from 9 regional farmers' organizations...",
    date: "May 2025",
    image: "networking-event-at-sunset-101213662.jpg",
    type: "event"
  },
  {
    id: 2,
    title: "Global Assembly 2024 Concludes with Resounding Success",
    excerpt: "Successful conclusion of INOFO Global General Assembly 2024 with record participation from 42 countries...",
    date: "March 2024",
    image: "gathering-of-friends-enjoying-a-meal-together-4789782.jpg",
    type: "event"
  },
  {
    id: 3,
    title: "Making Waves at Organic World Congress 2024",
    location: "Taiwan",
    excerpt: "INOFO delegation made significant impact through panel discussions and farmer-led workshops...",
    date: "February 2024",
    image: "farmers.jpg",
    type: "event"
  },
  {
    id: 4,
    title: "New Oceania Pasifika Council Convenors Announced",
    excerpt: "INOFO announces the election of new Council Convenors for Oceania Pasifika for the term 2024-2027...",
    date: "January 2024",
    image: "hands-holding-rich-soil-338230.jpg",
    type: "news"
  },
  {
    id: 5,
    title: "October 2024 Newsletter Highlights",
    excerpt: "This month's newsletter spotlights inspiring achievements from our continental networks and upcoming initiatives...",
    date: "October 2024",
    image: "a-farmers-journey-through-the-cornfield-141617626.jpg",
    type: "news"
  },
  {
    id: 6,
    title: "Youth in Organic Farming Initiative Launched",
    excerpt: "Our new program aims to cultivate youth involvement in professional organic farming platforms across 3 continents...",
    date: "September 2024",
    image: "fresh-sprouts-in-agricultural-field-6165476.jpg",
    type: "news"
  },
  {
    id: 7,
    title: "Climate Adaptation Strategies Workshop",
    location: "Nairobi",
    excerpt: "Farmer-led workshop develops practical climate adaptation strategies for small-scale organic producers...",
    date: "August 2024",
    image: "sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg",
    type: "event"
  },
  {
    id: 8,
    title: "Policy Advocacy Training Series",
    excerpt: "New training program equips member organizations with tools for effective policy advocacy at national levels...",
    date: "July 2024",
    image: "empowering-women-in-agriculture-111346581.jpg",
    type: "news"
  },
  {
    id: 9,
    title: "Traditional Knowledge Documentation Project",
    excerpt: "Initiative launched to document and preserve indigenous organic farming practices across member regions...",
    date: "June 2024",
    image: "mesmerizing-african-sunset-over-the-savanna-71028880.jpg",
    type: "news"
  },
  // Add 21 additional dummy entries with type alternating between news and event
  ...Array.from({ length: 21 }, (_, i) => {
    const id = i + 10;
    return {
      id,
      title: `Special Feature ${id}`,
      excerpt: `Highlighting regional advancements and community engagements in Feature ${id}. Farmers, partners, and stakeholders unite...`,
      date: `2024-${(id % 12) + 1}`,
      image: `event-${id}.jpg`,
      type: id % 2 === 0 ? 'news' : 'event'
    };
  })
];

const NewsEvents = () => {
  const [filter, setFilter] = useState<'all' | 'news' | 'event'>('all');

  const filteredPosts = filter === 'all'
    ? newsPosts
    : newsPosts.filter(post => post.type === filter);

  return (
    <section className="news-events-page">
      <div className="news-container">
        <h1 className="news-title">News & Events</h1>
        <p className="news-subtitle">
          Explore the latest developments, activities, and milestones shaping organic farming across Africa.
        </p>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >All</button>
          <button 
            className={filter === 'news' ? 'active' : ''} 
            onClick={() => setFilter('news')}
          >News</button>
          <button 
            className={filter === 'event' ? 'active' : ''} 
            onClick={() => setFilter('event')}
          >Events</button>
        </div>

        {/* Grid */}
        <div className="news-grid">
          {filteredPosts.map(post => (
            <div className="news-card" key={post.id}>
              <div 
                className="news-image" 
                style={{ backgroundImage: `url(/assets/${post.image})` }}
              >
                {post.location && <span className="location-badge">{post.location}</span>}
              </div>
              <div className="news-content">
                <span className="news-date">{post.date}</span>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
                <a href={`/blog/${post.id}`} className="read-more">
                  Read More <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
