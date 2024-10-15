import React from 'react'
import Card from '../Card'
import { cardData } from '../../data/cardData'
import { Container } from './styles'

const CardContainer: React.FC = () => {
  return (
    <Container>
      {cardData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
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
