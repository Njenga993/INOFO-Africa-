import React from "react";
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
    logoUrl: "Black_Day.png",
    website: "https://partner4.com",
  },
  // Add more members
];

const LogoCarousel: React.FC = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {[...members, ...members].map((member, index) => (
          <a
            key={index}
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            className="carousel-item"
          >
            <img
              src={member.logoUrl}
              alt={member.name}
              className="carousel-logo"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
