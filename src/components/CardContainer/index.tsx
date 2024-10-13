import Card from '../Card'
import { Container } from './styles'

import sushi from '../../assets/images/sushi.png'
import image1 from '../../assets/images/image1.png'

const CardContainer = () => {
  return (
    <Container>
      <Card
        title="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.
        Experimente o Japão sem sair do lar com nosso delivery!"
        rating={4.9}
        imageSrc={sushi}
      />
      <Card
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        rating={4.6}
        imageSrc={image1}
      />
      {/* Adicione mais Card aqui conforme necessário */}
    </Container>
  )
}

export default CardContainer
