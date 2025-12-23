import React from "react";
import { Helmet } from "react-helmet-async";

// --- Define interfaces for structured data for better type safety ---
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Enhanced SEO Props Interface ---
interface SEOProps {
  title?: string;
  description?: string;
  // The 'keywords' meta tag is largely ignored by Google now, but kept for other search engines.
  keywords?: string[]; 
  canonical?: string;
  image?: string;
  // The page type: 'website' for homepage/pages, 'article' for blog posts.
  type?: "website" | "article"; 
  // For blog posts and articles
  author?: string;
  articleSection?: string;
  articleTags?: string[];
  // For controlling search engine crawling
  robots?: string;
  // For generating BreadcrumbList schema
  breadcrumbs?: BreadcrumbItem[];
  // For generating FAQPage schema
  faqData?: FAQItem[];
  // Optional: For any other custom schema you want to add
  customSchema?: object; 
}

const SEO: React.FC<SEOProps> = ({
  title = "INOFO Africa | Intercontinental Network of Organic Farmer Organizations in Africa (INOFO Africa)",
  description = "INOFO Africa unites indigenous organic farmers across the continent, promoting agroecology, food sovereignty, and climate resilience through a powerful, farmer-led network.",
  keywords = [
    "INOFO Africa",
    "Intercontinental Network of Organic Farmer Organizations in Africa (INOFO Africa)",
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
  author,
  articleSection,
  articleTags,
  robots = "index, follow",
  breadcrumbs,
  faqData,
  customSchema = {}
}) => {

  // --- 1. Core Organization Schema (Enhanced) ---
  // This schema is consistent across the site and defines your organization.
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "INOFO Africa",
    "url": "https://www.inofoafrica.org",
    "logo": "https://www.inofoafrica.org/assets/logo.png",
    "description": "The continental body representing indigenous organic farmers across Africa, advocating for agroecology, food sovereignty, and farmer-led governance.",
    "sameAs": [
      "https://facebook.com/inofoafrica",
      "https://twitter.com/inofoafrica",
      "https://linkedin.com/company/inofoafrica"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "information",
      "url": "https://www.inofoafrica.org/contact"
    }
  };

  // --- 2. Dynamic WebPage / Article Schema ---
  // This schema changes based on the page type.
  const pageSchema: any = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    "name": title,
    "url": canonical,
    "description": description,
    "image": image,
    "publisher": {
      "@type": "Organization",
      "name": "INOFO Africa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.inofoafrica.org/assets/logo.png"
      }
    }
  };

  // Add article-specific properties if the type is 'article'
  if (type === "article" && author) {
    pageSchema.author = {
      "@type": "Person",
      "name": author
    };
    pageSchema.dateModified = new Date().toISOString();
    if (articleSection) pageSchema.articleSection = articleSection;
    if (articleTags) pageSchema.keywords = articleTags.join(", ");
  }

  // --- 3. BreadcrumbList Schema (New Feature) ---
  // Generates breadcrumbs for search results. Great for UX and SEO.
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  // --- 4. FAQPage Schema (As Requested) ---
  // This can generate FAQ rich snippets in Google.
  const faqSchema = faqData && faqData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // --- 5. Combine all schemas into one array ---
  const allSchemas = [
    organizationSchema,
    pageSchema,
    breadcrumbSchema,
    faqSchema,
    customSchema
  ].filter(Boolean); // .filter(Boolean) removes any null schemas

  return (
    <Helmet>
      {/* --- Primary Meta Tags --- */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {/* --- Open Graph / Facebook --- */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="INOFO Africa" />
      <meta property="og:locale" content="en_ke" />

      {/* --- Twitter Card --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@inofoafrica" />
      {author && <meta name="twitter:creator" content={`@${author.replace(/\s+/g, '')}`} />}

      {/* --- Structured Data (JSON-LD) --- */}
      {allSchemas.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;