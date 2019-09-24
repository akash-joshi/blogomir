import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "./index.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const primaryColor = "white";

const IndexPage = () => (
  <div style={{ textAlign: "center" }}>
      <video id="videoBG" poster="poster.JPG" autoPlay muted loop>
        <source src="title-video.m4v" />
      </video>
    <SEO title="Home" />
    <h1 style={{color:primaryColor, paddingTop:"40vh"}}>Blögomir - One Blog to Rule Them All</h1>
    <p style={{color:primaryColor}}>Own your own Content</p>
    <Link style={{color:primaryColor}} to="/create">Get Started with your first import</Link>
  </div>
)

export default IndexPage
