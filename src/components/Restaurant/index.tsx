// src/components/Restaurant/index.tsx
import React from 'react'
import {
  RestaurantContainer,
  RestaurantHeader,
  RestaurantInfo,
  RestaurantTitle,
  RestaurantCategory
} from './styles' // Removidos os estilos do Menu, pois já está em um componente separado
import Menu from '../Menu' // Importando o componente Menu

import pizzaImage from '../../assets/images/pizza.png' // Ajuste o caminho conforme necessário

const RestaurantPage = () => {
  return (
    <RestaurantContainer>
      <RestaurantHeader>
        <RestaurantInfo>
          <RestaurantCategory>Italiana</RestaurantCategory>
          <RestaurantTitle>La Dolce Vita Trattoria</RestaurantTitle>
        </RestaurantInfo>
      </RestaurantHeader>

      {/* Aqui renderizamos o Menu */}
      <Menu />
    </RestaurantContainer>
  )
}

export default RestaurantPage
