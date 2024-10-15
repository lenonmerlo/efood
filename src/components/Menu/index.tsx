// src/components/Menu/index.tsx
import React from 'react'
import {
  MenuItems,
  MenuItem,
  MenuItemImage,
  MenuItemTitle,
  MenuItemDescription,
  AddToCartButton
} from './styles' // Certifique-se de que este arquivo de estilo exista e tenha as definições necessárias
import menuItems from '../../data/menuItems' // A importação dos dados do menu

const Menu: React.FC = () => {
  return (
    <MenuItems>
      {menuItems.map((item) => (
        <MenuItem key={item.id}>
          <MenuItemImage src={item.imageSrc} alt={item.title} />
          <MenuItemTitle>{item.title}</MenuItemTitle>
          <MenuItemDescription>{item.description}</MenuItemDescription>
          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
        </MenuItem>
      ))}
    </MenuItems>
  )
}

export default Menu
