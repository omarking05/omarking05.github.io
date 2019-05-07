import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import SocialContainer from "./social-container";
import SkillContainer from "./skill-container";
import me from '../static/me.jpg';


const ActualHeader = styled.header`
  margin: 2rem auto;
  padding: 0px .5rem 1.45rem;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Varela Round',sans-serif;
`

const Title = styled.h1`
  margin: 1rem;
  margin-bottom: 0;
  color: #333333;
  text-decoration: none;
  font-weight: bold;
  font-size: 48px;
`

const Header = ({ siteTitle }) => (
  <ActualHeader>
    <img style={{
      width: `10.89rem`,
      marginBottom: 0,
      borderRadius: `50%`
    }} src={me} alt="Me Vectorized" />

    <Title>
      {siteTitle}
    </Title>
    
    <SkillContainer />
    <SocialContainer />
    
    <div className="separator"></div>
  </ActualHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
