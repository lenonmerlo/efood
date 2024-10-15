// src/components/Restaurant/index.tsx
import React from 'react'
import {
  RestaurantContainer,
  RestaurantHeader,
  RestaurantInfo,
  RestaurantTitle,
  RestaurantCategory,
  MenuItems,
  MenuItem,
  MenuItemImage,
  MenuItemTitle,
  MenuItemDescription,
  AddToCartButton
} from './styles'

import pizzaImage from '../../assets/images/pizza.png' // Ajuste o caminho conforme necessário

const RestaurantPage = () => {
  return (
    <RestaurantContainer>
      <RestaurantHeader>
        <RestaurantInfo>
          <RestaurantTitle>La Dolce Vita Trattoria</RestaurantTitle>
          <RestaurantCategory>Italiana</RestaurantCategory>
        </RestaurantInfo>
      </RestaurantHeader>

      <MenuItems>
        <MenuItem>
          <MenuItemImage src={pizzaImage} alt="Pizza Marguerita" />
          <MenuItemTitle>Pizza Marguerita</MenuItemTitle>
          <MenuItemDescription>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite.
          </MenuItemDescription>
          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
        </MenuItem>

        {/* Adicione outros cards aqui */}
      </MenuItems>
    </RestaurantContainer>
  )
}

export default RestaurantPage
