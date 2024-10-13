import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  padding: 20px;
`

export const Image = styled.img`
  width: 472px;
  height: 217px;
  border-bottom: 1px solid #ddd;
`

export const DivDescription = styled.div`
  width: 472px;
  height: 181px;
`

export const Title = styled.h3`
  font-size: 1.25rem;
  margin: 0.75rem 0;
`

export const Description = styled.p`
  font-size: 1rem;
  color: #555;
`

export const Rating = styled.span`
  font-size: 1rem;
  color: #f39c12;
`

export const Button = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #c0392b;
  }
`
