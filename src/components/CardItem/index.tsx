import React from 'react'
import {
  CardItemContainer,
  Image,
  Title,
  Description,
  Rating,
  Button,
  Tags,
  Tag
} from './styles'

interface CardItemProps {
  title: string
  description: string
  rating: number
  imageSrc: string
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  description,
  rating,
  imageSrc
}) => (
  <CardItemContainer>
    <Image src={imageSrc} alt={title} />
    {/* Adicionando as tags */}
    <Tags>
      <Tag>Destaque da semana</Tag>
      <Tag>Japonesa</Tag>
    </Tags>
    <Title>
      {title}
      <Rating>⭐ {rating}</Rating>
    </Title>
    <Description>{description}</Description>
    <Button>Saiba mais</Button>
  </CardItemContainer>
)

export default CardItem
