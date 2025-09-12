import React from "react";
import { motion } from "framer-motion";
import "../styles/LogoCarousel.css";

type Member = {
  name: string;
  logoUrl: string;
  website: string;
};

const members: Member[] = [
  { name: "Partner 1", logoUrl: "Black_Day.png", website: "https://partner1.com" },
  { name: "Partner 2", logoUrl: "Black_Day.png", website: "https://partner2.com" },
  { name: "Partner 3", logoUrl: "Black_Day.png", website: "https://partner3.com" },
  { name: "Partner 4", logoUrl: "empowering-women-in-agriculture-111346581.jpg", website: "https://partner4.com" },
  // Add more members
];

const LogoCarousel: React.FC = () => {
  const duplicatedMembers = [...members, ...members];

  return (
    <section className="logo-carousel">
      <div className="carousel-container">
        <motion.div
          className="carousel-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
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
              className="carousel-logo-box"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={member.logoUrl}
                alt={member.name}
                className="carousel-logo"
                loading="lazy"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoCarousel;
