import styled from 'styled-components'
import { cores } from '../../styles'

// Container do menu
export const MenuItems = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 30px auto;
  max-width: 1200px;
`

// Item do menu
export const MenuItem = styled.div`
  background-color: ${cores.corFundoCardPage};
  color: ${cores.corTextoPage};
  border: 1px solid #ddd;
  width: 320px;
  height: 340px;
  margin: 8px;
  padding: 8px;
  text-align: right;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

// Imagem do item do menu
export const MenuItemImage = styled.img`
  width: 100%;
  height: auto;
`

// Título do item do menu
export const MenuItemTitle = styled.h3`
  font-size: 16px;
  margin: 10px 0;
  color: ${cores.corTextoPage};
`

// Descrição do item do menu
export const MenuItemDescription = styled.p`
  font-size: 14px;
  color: ${cores.corTextoPage};
  margin-bottom: 10px;
`

// Botão de adicionar ao carrinho
export const AddToCartButton = styled.button`
  background-color: ${cores.corBotaoPage};
  color: ${cores.corTextoBotaoPage};
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 300px;

  &:hover {
    background-color: #fff8f2;
  }
`
