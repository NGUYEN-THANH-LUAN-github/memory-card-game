import React from 'react'
import CardList from './CardList'
import styled from 'styled-components'

export default function Playing({
  charList,
  score,
  toggleClicked,
}) {
  return (
    <Wrapper>
      <h1>
        <span className='current'>Score: {score.current}</span>/
        <span className='best'>Best: {score.best}</span>
      </h1>
      <CardList
        charList={charList}
        toggleClicked={toggleClicked}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    color: white;
    text-align: center;
    padding-block: 3rem;
    @media (max-width: 530px) {
      font-size: 1.4em;
    }
    .current {
      margin-right: 1.5rem;
    }
    .best {
      margin-left: 1.5rem;
    }
  }
`
