import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Cristian Prince - Desarrollador Web Full Stack",
  description = "Portfolio de Cristian Prince, desarrollador web full stack especializado en React, Node.js y tecnologías modernas.",
  keywords = "desarrollador web, full stack, React, Node.js, JavaScript, portfolio",
  image = "https://criskop.com/img/criskop.png",
  url = "https://criskop.com",
  type = "website",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
