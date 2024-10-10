import styled from 'styled-components'
import { cores } from '../../styles'
import Vector from '../../assets/images/Vector.png' // Imagem de fundo

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-image: url(${Vector}); // Imagem de fundo
  background-size: cover;
  background-position: center;
  height: 300px;
  width: 100%;
  text-align: center;
`

export const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-top: 20px;
`

export const Message = styled.h2`
  margin-top: auto;
  font-size: 2rem;
  color: ${cores.corTexto};
  font-family: Roboto, sans-serif;
  text-align: center;  // Garante que o texto esteja centralizado
`
