import React, { useState } from "react";
import "../styles/MembersTable.css";

type Member = {
  name: string;
  logoUrl: string;
  website: string;
  country: string;
};

// Sample data with country information
const members: Member[] = [
  { name: "Organization 1", logoUrl: "logo1.png", website: "https://org1.com", country: "Kenya" },
  { name: "Organization 2", logoUrl: "logo2.png", website: "https://org2.com", country: "Kenya" },
  { name: "Organization 3", logoUrl: "logo3.png", website: "https://org3.com", country: "Kenya" },
  { name: "Organization 4", logoUrl: "logo4.png", website: "https://org4.com", country: "Kenya" },
  { name: "Organization 5", logoUrl: "logo5.png", website: "https://org5.com", country: "Uganda" },
  { name: "Organization 6", logoUrl: "logo6.png", website: "https://org6.com", country: "Uganda" },
  { name: "Organization 7", logoUrl: "logo7.png", website: "https://org7.com", country: "Uganda" },
  { name: "Organization 8", logoUrl: "logo8.png", website: "https://org8.com", country: "Uganda" },
  { name: "Organization 9", logoUrl: "logo9.png", website: "https://org9.com", country: "Benin" },
  { name: "Organization 10", logoUrl: "logo10.png", website: "https://org10.com", country: "Benin" },
  { name: "Organization 11", logoUrl: "logo11.png", website: "https://org11.com", country: "Benin" },
  { name: "Organization 12", logoUrl: "logo12.png", website: "https://org12.com", country: "Zambia" },
  { name: "Organization 13", logoUrl: "logo13.png", website: "https://org13.com", country: "Zambia" },
  { name: "Organization 14", logoUrl: "logo14.png", website: "https://org14.com", country: "Zambia" },
  { name: "Organization 15", logoUrl: "logo15.png", website: "https://org15.com", country: "Zambia" },
  { name: "Organization 16", logoUrl: "logo16.png", website: "https://org16.com", country: "Tanzania" },
  { name: "Organization 17", logoUrl: "logo17.png", website: "https://org17.com", country: "Tanzania" },
  { name: "Organization 18", logoUrl: "logo18.png", website: "https://org18.com", country: "Tanzania" },
  { name: "Organization 19", logoUrl: "logo19.png", website: "https://org19.com", country: "Ghana" },
  { name: "Organization 20", logoUrl: "logo20.png", website: "https://org20.com", country: "Ghana" },
  { name: "Organization 21", logoUrl: "logo21.png", website: "https://org21.com", country: "Ghana" },
  { name: "Organization 22", logoUrl: "logo22.png", website: "https://org22.com", country: "TOGO" },
  { name: "Organization 23", logoUrl: "logo23.png", website: "https://org23.com", country: "TOGO" },
];

// Group members by country
const groupByCountry = (members: Member[]) => {
  return members.reduce((groups: Record<string, Member[]>, member) => {
    const country = member.country;
    if (!groups[country]) {
      groups[country] = [];
    }
    groups[country].push(member);
    return groups;
  }, {});
};

const MembersTable: React.FC = () => {
  const [expandedCountries, setExpandedCountries] = useState<Record<string, boolean>>({});
  const countryGroups = groupByCountry(members);
  const countries = Object.keys(countryGroups);

  const toggleCountry = (country: string) => {
    setExpandedCountries(prev => ({
      ...prev,
      [country]: !prev[country]
    }));
  };

  return (
    <div className="text-content">
      <h2>Member Organizations by Country</h2>
      <div className="tables-container">
        {countries.map(country => (
          <div key={country} className="country-table">
            <div className="country-header" onClick={() => toggleCountry(country)}>
              <h3>{country}</h3>
              <span className={`expand-icon ${expandedCountries[country] ? 'expanded' : ''}`}>
                ▼
              </span>
            </div>
            {expandedCountries[country] && (
              <div className="members-grid">
                {countryGroups[country].map((member, index) => (
                  <a
                    key={index}
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="member-card"
                  >
                    <img
                      src={member.logoUrl}
                      alt={member.name}
                      className="member-logo"
                    />
                    <p className="member-name">{member.name}</p>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersTable;