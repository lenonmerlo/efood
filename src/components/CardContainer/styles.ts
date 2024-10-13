import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  padding: 171px;
  width: 100%;
  height: 100%;


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
