// src/data/menuItems.ts
import pizzaImage from '../assets/images/pizza.png' // ajuste conforme o seu caminho

const menuItems = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    imageSrc: pizzaImage // Certifique-se de que a imagem existe
  },
  {
    id: 2,
    title: 'Pizza Calabresa',
    description: 'Deliciosa pizza com calabresa, cebola e azeitonas.',
    imageSrc: pizzaImage // substitua pela imagem correspondente se tiver
  },
  {
    id: 3,
    title: 'Pizza Quattro Formaggi',
    description: 'Uma combinação irresistível de queijos!',
    imageSrc: pizzaImage // substitua pela imagem correspondente se tiver
  }
  // Adicione mais itens conforme necessário
]

export default menuItems
