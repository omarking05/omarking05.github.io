import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentContainer from "../components/content-container";
import ProjectContainer from "../components/projects-container";

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

const projects = [
  {
    link: 'https://github.com/omarking05/linux-init-script',
    title: 'LazySquirrel',
    desc: 'Python script to run all of daily routine development servers/programs '
  },
  {
    link: 'https://car-rental-sys.herokuapp.com',
    title: 'Car Rental System',
    desc: 'API and dashboard for a mobile App used to rent cars based on customers locations.'
  },
  {
    link: 'https://levari-tracking-app.firebaseapp.com',
    title: 'Levari Tracking App (LTA)',
    desc: 'Hyprid mobile app, used by lawyers to add what they\'re working on, so they can track their hours.'
  },
  {
    link: 'https://lawyers-platform.herokuapp.com',
    title: 'Levari Dashboard',
    desc: 'Its LTA dashboard, which is used by partners/clients to track all/certain lawyers hours.'
  }
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={metaKeywords} />
    <ContentContainer>
      <h1>Currently...</h1>
      <p>
        I'm working as full-time Software Engineer <a href='https://botme.com' rel="noopener noreferrer" target='_blank'>@Botme</a>. Which is a chat bot building platform, 
        that makes building and managing your chatbot hassle free.
      </p>
      <blockquote>
        I'm both happy, and lucky to be one of the early team members <span className='highlight-yellow'>(it was like 5 members..)</span> who built
        and maintained this project, and got it where it is so far.
      </blockquote>
      {/* <Link to="/page-2/">Go to page 2</Link> */}

    </ContentContainer>

    <div className="separator"></div>

    <ContentContainer>
      <h1>Previously...</h1>
      <p>
        I was working as full-stack developer <a href='https://levarilaw.com' rel="noopener noreferrer" target='_blank'>@Levari</a>. Which is basically a law firm that 
        specialized in buisness more than any other stuff <span className="highlight-yellow">(Nope, I saw no crimes there)</span>.
        I was the only developer there, so I was responsible for developing Levari's website, implement new apps to make the process easier.
      </p>
      <blockquote>
        Although being the only developer in the company, really sucks :( but working <a href='https://levarilaw.com' rel="noopener noreferrer" target='_blank'>@Levari</a> made me work directly with the firm's partners and other companies' owners as well,
        Also working there made me more familiar with the Startup scene, knowing more about startup legalities and actually seeing some of them grow.
      </blockquote>
      {/* <Link to="/page-2/">Go to page 2</Link> */}

    </ContentContainer>

    <div className="separator"></div>
    
    <ContentContainer>
      <h1>What have i done?</h1>
      <p>
        When it doesn't feel like gaming, hanging out, or simply lying down the code will pop into the head, results in unfinished projects, ideas, or 
        scripts. Those are the ones which survived so far.
      </p>
      <ProjectContainer projects={projects} />
    </ContentContainer>
    
  </Layout>
)

export default IndexPage
