import styled from 'styled-components'
import { cores } from '../../styles'
import banner from '../../assets/images/imagem_de_fundo.png'

// Container geral do header
export const HeaderContainer = styled.header`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

// Parte superior do header (185px de altura)
export const HeaderTop = styled.div`
  height: 185px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

// Estilização do link "Restaurantes"
export const NavLink = styled.a`
  font-size: 18px;
  color: ${cores.corTexto};
  text-decoration: none;
  font-weight: bold;
`

// Logo no centro do header superior
export const Logo = styled.img`
  height: 80px;
`

// Informações do carrinho à direita
export const CartInfo = styled.div`
  font-size: 16px;
  color: ${cores.corTexto};
  font-weight: bold;
`

// Parte inferior do header (279px de altura)
export const HeaderBottom = styled.div`
  height: 279px;
  position: relative;
`

// **Adicione o estilo do BannerImage aqui**
export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`

// Categoria do restaurante
export const RestaurantCategory = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  color: ${cores.corTexto};
`

// Título do restaurante
export const RestaurantTitle = styled.h1`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 32px;
  color: ${cores.corTexto};
  font-weight: bold;
`
