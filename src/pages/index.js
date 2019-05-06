import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
      <h1>Hi people</h1>
      <p>Welcome to amm.. this site!.</p>
      <p>Wann know some info? see some projects? right?</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Container>
  </Layout>
)

export default IndexPage
