import { FaBookOpen, FaUserShield, FaUsers, FaArrowRight } from 'react-icons/fa';
import '../styles/BlogGrid.css'

const BlogGrid = () => {
  // Ordered blog posts - newest first
  const blogPosts = [
    {
      id: 1,
      title: "INOFO Shines at International FFORA Event 2025",
      location: "Dar es Salaam",
      excerpt: "INOFO proudly joined as the only organic international Farmer Organisation alongside partners from 9 regional farmers' organizations...",
      date: "May 2025",
      image: "/networking-event-at-sunset-101213662.jpg", 
      featured: true
    },
    {
      id: 2,
      title: "Global Assembly 2024 Concludes with Resounding Success",
      excerpt: "Successful conclusion of INOFO Global General Assembly 2024 with record participation from 42 countries...",
      date: "March 2024",
      image: "/gathering-of-friends-enjoying-a-meal-together-4789782.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Making Waves at Organic World Congress 2024",
      location: "Taiwan",
      excerpt: "INOFO delegation made significant impact through panel discussions and farmer-led workshops...",
      date: "February 2024",
      image: "/farmers.jpg",
    },
    {
      id: 4,
      title: "New Oceania Pasifika Council Convenors Announced",
      excerpt: "INOFO announces the election of new Council Convenors for Oceania Pasifika for the term 2024-2027 during the regional assembly...",
      date: "January 2024",
      image: "/hands-holding-rich-soil-338230.jpg",
    
    },
    {
      id: 5,
      title: "October 2024 Newsletter Highlights",
      excerpt: "This month's newsletter spotlights inspiring achievements from our continental networks and upcoming initiatives...",
      date: "October 2024",
      image: "/a-farmers-journey-through-the-cornfield-141617626.jpg",
    },
    {
      id: 6,
      title: "Youth in Organic Farming Initiative Launched",
      excerpt: "Our new program aims to cultivate youth involvement in professional organic farming platforms across 3 continents...",
      date: "September 2024",
      image: "/fresh-sprouts-in-agricultural-field-6165476.jpg",
    },
    {
      id: 7,
      title: "Climate Adaptation Strategies Workshop",
      location: "Nairobi",
      excerpt: "Farmer-led workshop develops practical climate adaptation strategies for small-scale organic producers...",
      date: "August 2024",
      image: "/sunrise-harvest-a-glimpse-into-rural-life-4775877.jpg",
    },
    {
      id: 8,
      title: "Policy Advocacy Training Series",
      excerpt: "New training program equips member organizations with tools for effective policy advocacy at national levels...",
      date: "July 2024",
      image: "/empowering-women-in-agriculture-111346581.jpg",
    },
    {
      id: 9,
      title: "Traditional Knowledge Documentation Project",
      excerpt: "Initiative launched to document and preserve indigenous organic farming practices across member regions...",
      date: "June 2024",
      image: "/mesmerizing-african-sunset-over-the-savanna-71028880.jpg",
    }
  ];

  return (
    <section className="blog-grid-impact-section">
      <div className="blog-grid-container">
        {/* 1. Section Header */}
        <div className="section-header">
          <h2>African Organic Synergy</h2>
          <p className="subtitle">
            Cultivating African Collaboration for Sustainable Agriculture
          </p>
          <p className="intro-text">
            Across Africa’s diverse landscapes, INOFO Africa weaves together the wisdom of farmers,
            the resilience of tradition, and the power of global solidarity. Together, we’re 
            cultivating more than food we’re growing a movement where every community thrives
            in harmony with nature, today and for the future.

            INOFO Africa serves as the continental catalyst for organic farming, strategically 
            harmonizing grassroots initiatives, ancestral wisdom, and global partnerships to 
            build a resilient agricultural future. By uniting smallholder farmers, indigenous 
            knowledge keepers, and international allies, we co-create innovative, scalable
            solutions that uphold food sovereignty ensuring communities today can nourish 
            themselves while safeguarding the land for generations to come.
          </p>
        </div>

        {/* 2. Featured Blog Highlight */}
        <div className="featured-blogs">
          <h3>Latest Updates</h3>
          <div className="featured-grid">
            {blogPosts.filter(post => post.featured).map(post => (
              <div className="featured-card" key={post.id}>
                <div className="featured-image" style={{ backgroundImage: `url(${post.image})` }}>
                  {post.location && <span className="location-badge">{post.location}</span>}
                </div>
                <div className="featured-content">
                  <span className="post-date">{post.date}</span>
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

        {/* 3. All Blog Posts */}
        <div className="all-blogs">
          <h3>Our Recent Activities</h3>
          <div className="blog-grid">
            {blogPosts.map(post => (
              <div className="blog-card" key={post.id}>
                <div className="card-image" style={{ backgroundImage: `url(${post.image})` }}>
                  {post.location && <span className="location-badge">{post.location}</span>}
                </div>
                <div className="card-content">
                  <span className="post-date">{post.date}</span>
                  <h4>{post.title}</h4>
                  <a href={`/blog/${post.id}`} className="read-more">
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Strategic Pillars */}
        <div className="pillars-section">
          <h3>Our Strategic Pillars</h3>
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">
                <FaBookOpen />
              </div>
              <h4>Knowledge Exchange</h4>
              <p>
                Preserve ethical, sustainable organic farming through our open-source knowledge base 
                combining traditional wisdom and modern techniques.
              </p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">
                <FaUserShield />
              </div>
              <h4>Farmer Advocacy</h4>
              <p>
                Engage with our global activist network to address legal and environmental challenges 
                through collective action.
              </p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">
                <FaUsers />
              </div>
              <h4>Global Networking</h4>
              <p>
                Connect through our digital platforms and in-person forums across all continents with 
                inclusive communication strategies.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Closing About Section */}
        <div className="intro-text">
          <p>
               The Inter-Continental Network of Organic Farmer Organisations (INOFO) Africa
              serves as a dynamic global platform that unites and amplifies the voices 
              of established organic farming associations through a grassroots, farmer-led approach.
              We champion transformative initiatives in food sovereignty, advocating for policies that 
              empower small-scale farmers and protect indigenous agricultural knowledge. Our work defends 
              land rights against corporate encroachment, promotes climate-resilient farming practices to
              combat environmental degradation, and actively cultivates youth engagement to ensure the
              future of sustainable agriculture. By fostering cross-continental collaboration, INOFO Africa
              bridges traditional wisdom with innovative solutions, creating a unified front for 
              ecological stewardship and equitable food systems worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};
export default BlogGrid;