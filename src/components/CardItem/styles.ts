import styled from 'styled-components'

export const CardItemContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 350px;
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const Title = styled.h2`
  font-size: 1.2rem;
  color: #e66767;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Rating = styled.span`
  font-size: 1rem;
  color: #f39c12;
  display: flex;
  align-items: center;
`

export const Description = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin-top: 8px;
`

export const Button = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #e66767;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d55656;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: #e66767;
  color: white;
  padding: 4px 8px;
  font-size: 0.8rem;
  border-radius: 4px;
`
