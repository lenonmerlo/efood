import styled from 'styled-components'
import { cores } from '../../styles'

// Container do Card
export const CardItemContainer = styled.div`
  background-color: ${cores.corFundoCards};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 350px;
  position: relative;
`

// Imagem do Card
export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

// Título do Card
export const Title = styled.h2`
  font-size: 1.2rem;
  color: ${cores.corTexto};
  display: flex;
  justify-content: space-between; /* Garante o espaço entre os elementos dentro do Title */
  align-items: center;
  margin: 8px 16px 0;
`

// Classificação do Card
export const Rating = styled.span`
  font-size: 1rem;
  color: #f39c12;
`

// Descrição do Card
export const Description = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin: 8px 16px; /* Margem lateral */
`

// Botão do Card
export const Button = styled.button`
  margin: 16px;
  padding: 8px 16px;
  background-color: ${cores.corBotao};
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${cores.corBotaoClicado};
  }
`

// Tags do Card
export const Tags = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  gap: 8px;
  z-index: 1;
`

// Tag individual
export const Tag = styled.span`
  background-color: ${cores.corTexto};
  color: white;
  padding: 4px 8px;
  font-size: 0.8rem;
  border-radius: 4px;
`
