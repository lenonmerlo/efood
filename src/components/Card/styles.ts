import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  margin: 0; /* Removendo margem */
  padding: 0; /* Removendo padding */
  width: 100%; /* Largura do card */
  box-sizing: border-box; /* Incluindo padding e borda no cálculo de largura */
`

export const Image = styled.img`
  width: 100%; /* Imagem ocupa toda a largura do card */
  height: auto; /* Mantém a proporção da imagem */
  border-bottom: 1px solid #ddd;
  margin: 0; /* Removendo margem */
  padding: 0; /* Removendo padding */
`

export const DivDescription = styled.div`
  padding: 16px; /* Espaçamento interno do conteúdo do card */
  box-sizing: border-box; /* Incluindo padding no cálculo de largura */
  margin: 0; /* Removendo margem */
`

export const Title = styled.h3`
  font-size: 1.25rem;
  margin: 0.75rem 0; /* Ajuste se precisar de espaço entre o título e o texto */
`

export const Description = styled.p`
  font-size: 1rem;
  color: ${cores.corTexto};
  margin: 0; /* Removendo margem */
`

export const Rating = styled.span`
  font-size: 1rem;
  color: #f39c12;
`

export const Button = styled.button`
  background-color: ${cores.corTexto};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  display: block; /* Para que o botão ocupe toda a largura possível */

  &:hover {
    background-color: #c0392b;
  }
`
