import React from 'react'
import { useNavigate } from 'react-router-dom'
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
  id: number // Adicionei o id para navegar
  title: string
  description: string
  rating: number
  imageSrc: string
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  rating,
  imageSrc
}) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/restaurant/${id}`) // Navega para a página do restaurante usando o id
  }

  return (
    <CardContainer>
      <Image src={imageSrc} alt={title} />
      <DivDescription>
        <Title>
          {title}
          <Rating>⭐ {rating}</Rating>
        </Title>
        <Description>{description}</Description>
        <Button onClick={handleNavigate}>Saiba mais</Button>
      </DivDescription>
    </CardContainer>
  )
}

export default Card
