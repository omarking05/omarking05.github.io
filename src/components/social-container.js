import React from "react"
import styled from 'styled-components';
import posed from 'react-pose';

import Github from '../static/svg/github.svg';
import Twitter from '../static/svg/twitter.svg';
import DevTo from '../static/svg/dev-dot-to.svg';
import LinkedIn from '../static/svg/linkedin.svg';
import Gmail from '../static/svg/gmail.svg';
import WhatsApp from '../static/svg/whatsapp.svg';



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

const IconAnimation = posed.div({
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
  margin-bottom: 1.58rem;
`

const whatsAppMessage = "Knock Knock :)"

const whatsAppUrl = encodeURI(`https://wa.me/201117710932?text=${whatsAppMessage}`)

export default class SocialContainer extends React.Component {

  render() {
    return (
      <Container>
        <SocialLink href="https://github.com/omarking05" target="_blank">
          <Icon>
            <Github />
          </Icon>
        </SocialLink>
        <SocialLink href="https://twitter.com/OmarAhm3" target="_blank">
          <Icon>
            <Twitter />
          </Icon>
        </SocialLink>
        <SocialLink href="https://dev.to/mrgeek" target="_blank">
          <Icon>
            <DevTo />
          </Icon>
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/omarahmed0/" target="_blank">
          <Icon>
            <LinkedIn />
          </Icon>
        </SocialLink>
        <SocialLink href="mailto:omar.ahmed.oaaem@gmail.com" target="_blank">
          <Icon>
            <Gmail />
          </Icon>
        </SocialLink>
        <SocialLink href={whatsAppUrl} target="_blank">
          <Icon>
            <WhatsApp />
          </Icon>
        </SocialLink>
      </Container>
    )
  }
}