import React from "react";
import { Helmet } from "react-helmet-async";



interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  type?: string;
  schema?: object; // optional page-level structured data
}

const SEO: React.FC<SEOProps> = ({
  title = "INOFO Africa | Indigenous Organic Farmers Federation of Africa",
  description = "INOFO Africa unites indigenous organic farmers across Africa, promoting agroecology, food sovereignty, climate resilience, and farmer-led governance through country networks and regional programs.",
  keywords = [
    "INOFO Africa",
    "Indigenous Organic Farmers Africa",
    "Organic Agriculture Africa",
    "IFOAM Africa",
    "Agroecology Africa",
    "Indigenous Food Systems Africa",
    "African Farmer Networks",
    "Organic Farmers Federation Africa",
    "Food Sovereignty Africa",
    "Regenerative Agriculture Africa",
    "Climate Resilient Farming Africa",
    "Organic Certification Africa",
    "Agroecology Training Africa",
    "African Organic Markets",
    "Traditional Seed Systems Africa",
    "Indigenous Knowledge Africa",
    "African Agriculture Governance",
    "Organic Farming Support Africa",
    "Farmer-Led Organizations Africa",
    "Sustainable Agriculture Africa"
  ],
  canonical = "https://www.inofoafrica.org/",
  image = "https://www.inofoafrica.org/assets/inofo-share.jpg",
  type = "website",
  schema = {}
}) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "INOFO Africa",
    "url": "https://www.inofoafrica.org",
    "logo": "https://www.inofoafrica.org/assets/logo.png",
    "description": "The Indigenous Organic Farmers Federation of Africa supporting smallholder farmers, agroecology, and food sovereignty.",
    "sameAs": [
      "https://facebook.com/inofoafrica",
      "https://twitter.com/inofoafrica",
      "https://linkedin.com/company/inofoafrica"
    ]
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "url": canonical,
    "description": description
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <link rel="canonical" href={canonical} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="INOFO Africa" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@inofoafrica" />

      {/* Structured Data: Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Structured Data: Page */}
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>

      {/* Optional: Page-level custom schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
