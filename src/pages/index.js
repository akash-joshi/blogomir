import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"

import "./index.css"
import Image from "../components/image"
import SEO from "../components/seo"
import Base from "../components/Base"

const primaryColor = "white";

const Footer = styled.div`
left: 0;
right: 0;
`

const IndexPage = () => (
  <Base>
    <div style={{ textAlign: "center" }}>
      <video id="videoBG" poster="poster.JPG" autoPlay muted loop>
        <source src="title-video.m4v" />
      </video>
      <img src="/poster.png" id="picBG" />
      <SEO title="Home" />
      <h1 style={{ color: primaryColor, paddingTop: "40vh" }}>
        Blögomir - One Blog to Rule Them All
      </h1>
      <h2 style={{ color: primaryColor }}>Own your own Content</h2>
      <Link style={{ color: primaryColor }} to="/create">
        Get Started with your first import
      </Link>
      <Footer style={{ color: primaryColor, position: "fixed", bottom: "0px" }}>
        Forged in 🇮🇳 by{" "}
        <a
          style={{ color: primaryColor }}
          href="https://twitter.com/akashtrikon"
        >
          Akash
        </a>
      </Footer>
    </div>
  </Base>
)

export default IndexPage
