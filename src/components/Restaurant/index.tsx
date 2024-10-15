// src/components/Restaurant/index.tsx
import React from 'react'
import Menu from '../Menu'
import Header from '../Header' // Importando o Header separado
import { RestaurantContainer } from './styles'

const RestaurantPage = () => {
  return (
    <RestaurantContainer>
      {/* Usando o Header já criado */}
      <Header />

      {/* Aqui renderizamos o Menu */}
      <Menu />
    </RestaurantContainer>
  )
}

export default RestaurantPage
