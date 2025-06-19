// src/components/BlogGrid.tsx
import '../styles/BlogGrid.css';
import BlogCard from './BlogCard';

const BlogGrid = () => {
  const blogData = [
    {
      id: 1,
      title: 'INOFO at FFORA 2025 – Dar es Salaam',
      summary: 'INOFO proudly joined the first international FFORA event as the only organic farmers’ network present...',
      image: 'assets/blog1.jpg',
      link: '/blog/ffora-2025',
    },
    {
      id: 2,
      title: 'Global General Assembly 2024 Success',
      summary: 'The INOFO General Assembly brought together farmers’ voices from across the globe to shape organic policy...',
      image: 'assets/blog2.jpg',
      link: '/blog/general-assembly-2024',
    },
    {
      id: 3,
      title: 'Organic World Congress 2024 – Taiwan',
      summary: 'INOFO delegates participated in the world’s biggest organic congress to represent Africa’s farmer concerns...',
      image: 'assets/blog3.jpg',
      link: '/blog/owc-taiwan-2024',
    },
    {
      id: 4,
      title: 'Our Newsletter – October 2024',
      summary: 'Get a roundup of our key activities, events and partnerships in our vibrant October newsletter...',
      image: 'assets/blog4.jpg',
      link: '/blog/newsletter-oct-2024',
    },
    {
      id: 5,
      title: 'Advocacy for Organic Farmer Rights',
      summary: 'A deep dive into how INOFO is fighting for land rights and policy recognition across African states...',
      image: 'assets/blog5.jpg',
      link: '/blog/farmer-rights',
    },
    {
      id: 6,
      title: 'Youth in Organic Agriculture',
      summary: 'INOFO is encouraging youth inclusion in policy platforms and technical farming education programs...',
      image: 'assets/blog6.jpg',
      link: '/blog/youth-engagement',
    },
    {
      id: 7,
      title: 'Knowledge Base Launch',
      summary: 'Access our growing open-source farmer knowledge base — traditional techniques, tips, and training...',
      image: 'assets/blog7.jpg',
      link: '/blog/knowledge-base',
    },
    {
      id: 8,
      title: 'Climate Adaptation for Smallholders',
      summary: 'How African organic farmers are adapting to changing weather and soil conditions through innovation...',
      image: 'assets/blog8.jpg',
      link: '/blog/climate-adaptation',
    },
    {
      id: 9,
      title: 'Intercontinental Partnerships',
      summary: 'Forging global alliances to amplify the voice of African farmers on international platforms...',
      image: 'assets/blog9.jpg',
      link: '/blog/intercontinental-partnerships',
    },
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="blog-title">Our Work & Global Participation</h2>
        <p className="blog-description">
          From international congresses to local farmer training — INOFO Africa is actively shaping organic
          farming strategy across borders. Explore our latest efforts and milestones.
        </p>

        <div className="blog-grid">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
