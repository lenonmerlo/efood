import Card from '../Card'
import { Container } from './styles'

import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'
import cafe from '../../assets/images/cafe.jpg' // Novas imagens
import pizza from '../../assets/images/pizza.png'
import sobremesa from '../../assets/images/sobremsa.jpg'
import burguer from '../../assets/images/hamburguer.jpg'

const cardData = [
  {
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    rating: 4.9,
    imageSrc: sushi
  },
  {
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    imageSrc: macarrao
  },
  {
    title: 'Café do Mercado',
    description:
      'Venha saborear o melhor café da cidade! Com grãos selecionados e um ambiente acolhedor, o Café do Mercado oferece uma experiência única. Peça nossas tortas e sanduíches especiais e tenha um momento delicioso!',
    rating: 4.8,
    imageSrc: cafe
  },
  {
    title: 'Pizzaria do Chef',
    description:
      'A Pizzaria do Chef traz para você pizzas artesanais feitas com ingredientes frescos e de alta qualidade. Experimente nossas combinações exclusivas e tenha uma refeição incrível sem sair de casa!',
    rating: 4.7,
    imageSrc: pizza
  },
  {
    title: 'Doce lembrança',
    description:
      'Aprecie nossas sobremesas feitos com carinho! Temos uma variedade de opções que vão agradar todos os paladares. Ideal para festas ou para um lanche especial em casa!',
    rating: 4.5,
    imageSrc: sobremesa
  },
  {
    title: 'Burger Haven',
    description:
      'No Burger Haven, cada mordida é uma explosão de sabor! Oferecemos hambúrgueres artesanais feitos com ingredientes frescos e de alta qualidade, em um ambiente acolhedor. Venha desfrutar de uma experiência gastronômica única, com opções para todos os paladares!',
    rating: 4.7,
    imageSrc: burguer
  }
]

const CardContainer = () => {
  return (
    <Container>
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          rating={card.rating}
          imageSrc={card.imageSrc}
        />
      ))}
    </Container>
  )
}

export default CardContainer
