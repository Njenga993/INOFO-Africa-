import React, { useState } from "react";
import "../styles/MembersTable.css";

type Member = {
  name: string;
  logoUrl: string;
  website: string;
  country: string;
  subregion: string;
};

// Sample data with subregions + countries
const members: Member[] = [
  { name: "Organization 1", logoUrl: "logo1.png", website: "https://org1.com", country: "Kenya", subregion: "Eastern Africa" },
  { name: "Organization 2", logoUrl: "logo2.png", website: "https://org2.com", country: "Kenya", subregion: "Eastern Africa" },
  { name: "Organization 3", logoUrl: "logo3.png", website: "https://org3.com", country: "Uganda", subregion: "Eastern Africa" },
  { name: "Organization 4", logoUrl: "logo4.png", website: "https://org4.com", country: "Uganda", subregion: "Eastern Africa" },
  { name: "Organization 5", logoUrl: "logo5.png", website: "https://org5.com", country: "Zambia", subregion: "Southern Africa" },
  { name: "Organization 6", logoUrl: "logo6.png", website: "https://org6.com", country: "Zambia", subregion: "Southern Africa" },
  { name: "Organization 7", logoUrl: "logo7.png", website: "https://org7.com", country: "Benin", subregion: "Western Africa" },
  { name: "Organization 8", logoUrl: "logo8.png", website: "https://org8.com", country: "Ghana", subregion: "Western Africa" },
  { name: "Organization 9", logoUrl: "logo9.png", website: "https://org9.com", country: "Togo", subregion: "Western Africa" },
  { name: "Organization 10", logoUrl: "logo10.png", website: "https://org10.com", country: "Egypt", subregion: "Northern Africa" },
  { name: "Organization 11", logoUrl: "logo11.png", website: "https://org11.com", country: "Morocco", subregion: "Northern Africa" },
  { name: "Organization 12", logoUrl: "logo12.png", website: "https://org12.com", country: "DR Congo", subregion: "Central Africa" },
  { name: "Organization 13", logoUrl: "logo13.png", website: "https://org13.com", country: "Cameroon", subregion: "Central Africa" },
];

// Group by subregion → country → members
const groupByRegion = (members: Member[]) => {
  return members.reduce((regions: Record<string, Record<string, Member[]>>, member) => {
    if (!regions[member.subregion]) {
      regions[member.subregion] = {};
    }
    if (!regions[member.subregion][member.country]) {
      regions[member.subregion][member.country] = [];
    }
    regions[member.subregion][member.country].push(member);
    return regions;
  }, {});
};

const MembersTable: React.FC = () => {
  const [expandedSubregions, setExpandedSubregions] = useState<Record<string, boolean>>({});
  const [expandedCountries, setExpandedCountries] = useState<Record<string, boolean>>({});

  const regions = groupByRegion(members);

  const toggleSubregion = (subregion: string) => {
    setExpandedSubregions(prev => ({
      ...prev,
      [subregion]: !prev[subregion]
    }));
  };

  const toggleCountry = (country: string) => {
    setExpandedCountries(prev => ({
      ...prev,
      [country]: !prev[country]
    }));
  };

  return (
    <div className="text-content">
      <h2>Member Organizations by Subregions</h2>
      {Object.keys(regions).map(subregion => (
        <div key={subregion} className="subregion-card">
          <div className="subregion-header" onClick={() => toggleSubregion(subregion)}>
            <h3>{subregion}</h3>
            <span className={`expand-icon ${expandedSubregions[subregion] ? "expanded" : ""}`}>▼</span>
          </div>

          {expandedSubregions[subregion] && (
            <div className="subregion-content">
              {Object.keys(regions[subregion]).map(country => (
                <div key={country} className="country-card">
                  <div className="country-header" onClick={() => toggleCountry(country)}>
                    <span>{country}</span>
                    <span className={`expand-icon ${expandedCountries[country] ? "expanded" : ""}`}>▼</span>
                  </div>

                  {expandedCountries[country] && (
                    <div className="country-members">
                      <div className="members-grid">
                        {regions[subregion][country].map((member, idx) => (
                          <a
                            key={idx}
                            href={member.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="member-card"
                          >
                            <img src={member.logoUrl} alt={member.name} className="member-logo" />
                            <p className="member-name">{member.name}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MembersTable;
