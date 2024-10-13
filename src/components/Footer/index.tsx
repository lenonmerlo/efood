// src/components/Footer/index.tsx
import React from 'react';
import { FooterContainer, Logo, IconList, Icon, FooterText } from './styles';

// Componente Footer
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo src="../../" alt="Logo" />
      <IconList>
        <Icon href="#"><i className="fab fa-instagram"></i></Icon>
        <Icon href="#"><i className="fab fa-twitter"></i></Icon>
        <Icon href="#"><i className="fab fa-facebook-f"></i></Icon>
      </IconList>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos e todo o atendimento é do estabelecimento contratado.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
