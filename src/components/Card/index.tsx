import React from 'react'
import {
  CardContainer,
  Image,
  Title,
  Description,
  Rating,
  Button,
  DivDescription
} from './styles'

interface CardProps {
  title: string
  description: string
  rating: number
  imageSrc: string
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  rating,
  imageSrc
}) => (
  <CardContainer>
    <Image src={imageSrc} alt={title} />
    <DivDescription>
      <Title>
        {title}
        <Rating>⭐ {rating}</Rating>
      </Title>
      <Description>{description}</Description>
      <Button>Saiba mais</Button>
    </DivDescription>
  </CardContainer>
)

export default Card
