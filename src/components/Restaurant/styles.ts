// src/components/Restaurant/styles.ts
import styled from 'styled-components'

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
  background-image: url('../assets/macarrao.png'); // Ajuste o caminho conforme necessário
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`

// Informações do restaurante
export const RestaurantInfo = styled.div`
  text-align: center;
`

// Título do restaurante
export const RestaurantTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`

// Categoria do restaurante
export const RestaurantCategory = styled.span`
  background-color: #f0b20a;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 1.2rem;
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
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 300px;
  margin: 20px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

// Imagem do item do menu
export const MenuItemImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`

// Título do item do menu
export const MenuItemTitle = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
`

// Descrição do item do menu
export const MenuItemDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
`

// Botão de adicionar ao carrinho
export const AddToCartButton = styled.button`
  background-color: #ff6f61;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #ff4c3b;
  }
`
