import React from 'react'
import Card from './Card'
import styled from 'styled-components'

export default function CardList({ charList, toggleClicked }) {
  const renderCard = charList.map(char => (
    <Card key={char.id} char={char} toggleClicked={toggleClicked} />
  ))
  return <CardListWrapper>{renderCard}</CardListWrapper>
}

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 25px;
  justify-items: center;
  @media (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 530px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
