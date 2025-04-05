import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  canonical,
  type,
  schema = {},
}) => {
  const siteTitle = title ? `${title} | Giganxt Solutions` : 'Giganxt Solutions - Web, App, Software & AI Development';
  const siteDescription = description || 'Innovating Web, App, Software, and AI Solutions to Empower Businesses for the Digital Future.';
  const siteKeywords = keywords || 'web development, app development, software solutions, AI development, digital marketing, IT services, Giganxt, Giganext, GIGANXT, GiganxtSolution, Giganxt Solutions, web development, app development, software solutions, AI development, digital marketing, IT services, Giganxt, Giganext, GIGANXT, GiganxtSolution, Giganxt Solutions, custom web development services, responsive website design, ecommerce website development, enterprise web solutions, website redesign agency, full-stack web development company, mobile app development company, Android & iOS app development, cross-platform app developers, Flutter app development, on-demand app development services, UI/UX design for mobile apps, custom software development, SaaS product development, enterprise software development, cloud-based software solutions, business automation software, CRM & ERP software development, AI development company, chatbot development services, AI-powered business solutions, machine learning development services, NLP and computer vision solutions, generative AI apps for business, performance-based digital marketing, SEO and SEM services, PPC advertising agency, social media marketing services, content marketing strategy, lead generation for startups, managed IT services provider, IT consulting for startups, cloud infrastructure management, network security services, remote IT support services, DevOps and CI/CD solutions, web development company in India, app development company in Pune, app development company in Bangalore, AI solutions for Indian startups, digital marketing agency in Maharashtra, top IT company in India, Giganxt Technologies, Giganxt Tech, Giganxt India, custom AI solutions, business automation with AI, modern IT infrastructure services, Giganext';
  const siteImage = image || 'https://giganxt.com/assets/newlogo-removebg-preview.png';
  const siteUrl = url || 'https://www.giganxt.com';
  const siteCanonical = canonical || siteUrl;
  const siteType = type || 'website';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={siteCanonical} />
      
      {/* Open Graph Meta Tags for Social Media */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={siteType} />
      <meta property="og:site_name" content="GigaNXT Solutions" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="GigaNXT Solutions" />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': 'GigaNXT Solutions',
          'url': siteUrl,
          'logo': siteImage,
          'description': siteDescription,
          'address': {
            '@type': 'PostalAddress',
            'addressCountry': 'IN'
          },
          'sameAs': [
            'https://www.linkedin.com/company/giganxt',
            'https://twitter.com/giganxt',
            'https://facebook.com/giganxt'
          ],
          ...schema
        })}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  canonical: PropTypes.string,
  type: PropTypes.string,
  schema: PropTypes.object,
};

export default SEO;