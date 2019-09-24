import { Helmet } from "react-helmet";
import React from "react";

export default function Base({ children }) {
  return (
    <section>
      <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Spectral&display=swap" rel="stylesheet" />
      </Helmet>
      {children}
    </section>
  );
}
