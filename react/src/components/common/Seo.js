import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const SEO = ({ title = "", description = "", keywords = "", schema = "" }) => {
  const { pathname } = useLocation();

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title || "MyPunjabi"}</title>
      <meta
        name="description"
        content={description || "Best News channel in the area"}
      />
      <meta property="og:title" content={title || "MyPunjabi"} />
      <meta property="og:description" content={description || "Best News channel in the are"} />
      <link rel="canonical" href={`https://demo.mypunjabi.in${pathname}`} />
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
};

export default SEO;
