import React from "react"
import styled from 'styled-components';
import posed from 'react-pose';

import github from '../static/svg/github.svg';
import twitter from '../static/svg/twitter.svg';
import devTo from '../static/svg/dev-dot-to.svg';
import linkedIn from '../static/svg/linkedin.svg';
import gmail from '../static/svg/gmail.svg';
import whatsApp from '../static/svg/whatsapp.svg';

const Container = styled.div`
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .125rem 0;
`

const SocialLink = styled.a`
  font-size: 2rem;
  color: #333;
  margin: .25rem .5rem;
`

const IconAnimation = posed.img({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
  press: {
    scale: 1.1,
  }
});

const Icon = styled(IconAnimation)`
  width: 2rem;
  max-width: 2rem;
  max-height: 2rem;
  vertical-align: middle;
`

const whatsAppMessage = "Knock Knock :)"

const whatsAppUrl = encodeURI(`https://wa.me/01117710932?text=${whatsAppMessage}`)

const SocialContainer = () => (
  <Container>
    <SocialLink href="https://github.com/omarking05" target="_blank">
      <Icon src={github} alt="Github" />
    </SocialLink>
    <SocialLink href="https://twitter.com/OmarAhm3" target="_blank">
      <Icon src={twitter} alt="Twitter" />
    </SocialLink>
    <SocialLink href="https://dev.to/mrgeek" target="_blank">
      <Icon src={devTo} alt="Dev.to" />
    </SocialLink>
    <SocialLink href="https://www.linkedin.com/in/omarahmed0/" target="_blank">
      <Icon src={linkedIn} alt="Linked In" />
    </SocialLink>
    <SocialLink href="mailto:omar.ahmed.oaaem@gmail.com" target="_blank">
      <Icon src={gmail} alt="Gmail" />
    </SocialLink>
    <SocialLink href={whatsAppUrl} target="_blank">
      <Icon src={whatsApp} alt="WhatsApp" />
    </SocialLink>
  </Container>
)

export default SocialContainer;