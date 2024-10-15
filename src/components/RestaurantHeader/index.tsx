import React from 'react'
import {
  HeaderContainer,
  HeaderTop,
  HeaderBottom,
  Logo,
  NavLink,
  CartInfo,
  BannerImage,
  RestaurantTitle,
  RestaurantCategory
} from './styles'
import imagem_de_fundo from '../../assets/images/imagem_de_fundo.png' // Correto

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderTop>
        <NavLink>Restaurantes</NavLink>
        <Logo src="/path/to/logo.png" alt="Logo" />
        <CartInfo>0 produto(s) no carrinho</CartInfo>
      </HeaderTop>

      <HeaderBottom>
        {/* Aqui usamos a variável da imagem importada */}
        <BannerImage src={imagem_de_fundo} alt="Imagem do Restaurante" />
        <RestaurantCategory>Italiana</RestaurantCategory>
        <RestaurantTitle>La Dolce Vita Trattoria</RestaurantTitle>
      </HeaderBottom>
    </HeaderContainer>
  )
}

export default Header
