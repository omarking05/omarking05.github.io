import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

const Container = styled.div`
  margin: .5rem 0;
  h1 {
    margin: 0;
    margin-bottom: .5rem;
    font-size: 1.4rem;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
  }
`

const metaKeywords = [
  'omar',
  'ahmed',
  'omar ahmed',
  'omarking05',
  'mrgeek',
  'MrGeek',
  'symfony',
  'nodejs',
  'node.js',
  'software engineer',
  'web developer'
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={metaKeywords} />
    <Container>
      <h1>Currently...</h1>
      <p>
        I'm working as full-time Software engineer <a href='https://botme.com' target='_blank'>@Botme</a>. Which is a chat bot building platform, 
        that makes building and managing your chatbot hassle free.
      </p>
      <blockquote>
        I'm both happy, and lucky to be one of the early team members <span className='highlight-yellow'>(it was 5 members.. i think)</span> who built
        and maintained this project, and got it where it is so far.
      </blockquote>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Container>
  </Layout>
)

export default IndexPage
