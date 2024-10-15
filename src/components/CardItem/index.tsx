import React from 'react'
import {
  CardItemContainer,
  Image,
  Title,
  Rating,
  Description,
  Button,
  Tags,
  Tag
} from './styles' // Importa os estilos do arquivo styles.ts

interface CardProps {
  title: string
  description: string
  rating: number
  imageSrc: string
  tags?: string[] // Tags são opcionais
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  rating,
  imageSrc,
  tags
}) => {
  return (
    <CardItemContainer>
      <Image src={imageSrc} alt={title} />
      <Title>
        {title}
        <Rating>{rating}</Rating>
      </Title>
      <Description>{description}</Description>
      {tags && (
        <Tags>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
      )}
      <Button>Peça agora!</Button>
    </CardItemContainer>
  )
}

export default Card
