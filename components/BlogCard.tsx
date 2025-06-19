// src/components/BlogCard.tsx
import { Link } from 'react-router-dom';
import '../styles/BlogCard.css';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={blog.image} alt={blog.title} />
      </div>
      <div className="blog-card-content">
        <h3>{blog.title}</h3>
        <p>{blog.summary}</p>
        <Link to={blog.link} className="blog-read-more">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
