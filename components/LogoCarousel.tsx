import React from "react";
import { motion } from "framer-motion";
import "../styles/LogoCarousel.css";

type Member = {
  name: string;
  logoUrl: string;
  website: string;
};

const members: Member[] = [
  {
    name: "Partner 1",
    logoUrl: "Black_Day.png",
    website: "https://partner1.com",
  },
  {
    name: "Partner 2",
    logoUrl: "Black_Day.png",
    website: "https://partner2.com",
  },
  {
    name: "Partner 3",
    logoUrl: "Black_Day.png",
    website: "https://partner3.com",
  },
  {
    name: "Partner 4",
    logoUrl: "empowering-women-in-agriculture-111346581.jpg",
    website: "https://partner4.com",
  },
  // Add more members as needed
];

const LogoCarousel: React.FC = () => {
  // Duplicate members for seamless looping
  const duplicatedMembers = [...members, ...members];
  
  return (
    <div className="carousel-section">
      <div className="carousel-wrapper">
        <motion.div 
          className="carousel-track"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedMembers.map((member, index) => (
            <motion.a
              key={index}
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="carousel-item"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1
              }}
            >
              <img
                src={member.logoUrl}
                alt={member.name}
                className="carousel-logo"
                loading="lazy"
              />
              <span className="partner-name">{member.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoCarousel;