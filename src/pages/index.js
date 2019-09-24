import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div style={{padding:"2em", textAlign: "center"}}>
    <SEO title="Home" />
    <h1>Blögomir - One Blog to Rule Them All</h1>
    <p>Own your own Content</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/create">Get Started with your first import</Link>
  </div>
)

export default IndexPage
