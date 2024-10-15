// src/components/Restaurant/styles.ts
import styled from 'styled-components'
import { cores } from '../../styles'
import imagem_de_fundo from '../../assets/images/imagem_de_fundo.png'

// Container do restaurante
export const RestaurantContainer = styled.div`
  width: 100%;
  height: auto;
`

// Cabeçalho do restaurante
export const RestaurantHeader = styled.header`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url(${imagem_de_fundo});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: reight;
  color: white;
  font-size: 2rem;
`

// Informações do restaurante
export const RestaurantInfo = styled.div`
  text-align: reight;
`

// Título do restaurante
export const RestaurantTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  padding: 170px;
  margin-top: 100px;
`

// Categoria do restaurante
export const RestaurantCategory = styled.span`
  color: rgba(255, 255, 255, 0.7);
  margin-top: 25px;
  margin-reight: 170px;
  font-size: 28px;
`

// Seção dos itens do menu
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
  width: 300px;
  margin: 8px;
  padding: 8px;
  text-align: reight;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

// Imagem do item do menu
export const MenuItemImage = styled.img`
  width: 100%;
  height: auto;
`

// Título do item do menu
export const MenuItemTitle = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
  color: ${cores.corTextoPage};
`

// Descrição do item do menu
export const MenuItemDescription = styled.p`
  font-size: 1rem;
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
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #ff4c3b;
  }
`
