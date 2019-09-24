import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Background = styled.div`
position: fixed; z-index: -99; width: 100%; height: 100%
`

const IndexPage = () => (
  <div style={{ textAlign: "center" }}>
    <Background>
      <iframe
        frameborder="0"
        height="100%"
        width="100%"
        src="https://www.youtube.com/embed/F6Fr0Ip38pA?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1"
      ></iframe>
    </Background>
    <SEO title="Home" />
    <h1 style={{color:'white'}}>Blögomir - One Blog to Rule Them All</h1>
    <p style={{color:'white'}}>Own your own Content</p>
    <Link style={{color:'white'}} to="/create">Get Started with your first import</Link>
  </div>
)

export default IndexPage
