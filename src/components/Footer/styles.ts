// src/components/Footer/styles.ts
import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: #ffecd1; /* Cor de fundo */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 300px;
  width: 100%;
`

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 10px;
`

export const IconList = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`

export const Icon = styled.a`
  margin: 0 10px;
  margin-bottom: 44px;
  font-size: 24px;
  color: #ff6f61;
  text-decoration: none;

  &:hover {
    color: #ff3b2f; /* Cor ao passar o mouse */
  }
`

export const FooterText = styled.p`
  font-size: 12px;
  color: ${cores.corTexto};
  text-align: center;
  max-width: 800px;
  margin-top: 10px;
`
