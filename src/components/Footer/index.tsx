import React from 'react'
import { FooterContainer, Logo, IconList, Icon, FooterText } from './styles'

import instagramImg from '../../assets/images/instagram.png'
import twitterImg from '../../assets/images/Group.png'
import facebookImg from '../../assets/images/facebook.png'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Logo" />
      <IconList>
        <Icon href="#">
          <img
            src={instagramImg}
            alt="Instagram"
            style={{ width: '24px', height: '24px' }}
          />
        </Icon>
        <Icon href="#">
          <img
            src={twitterImg}
            alt="Twitter"
            style={{ width: '24px', height: '24px' }}
          />
        </Icon>
        <Icon href="#">
          <img
            src={facebookImg}
            alt="Facebook"
            style={{ width: '24px', height: '24px' }}
          />
        </Icon>
      </IconList>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
