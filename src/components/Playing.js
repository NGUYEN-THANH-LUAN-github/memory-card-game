import React from 'react'
import CardList from './CardList'
import styled from 'styled-components'

export default function Playing({ charList, score, toggleClicked, countdown }) {
  return (
    <Wrapper>
      <div className='info'>
        <span>
          Score: {score.current}/ Best: {score.best}
        </span>
        <span>
          <i className='fas fa-stopwatch'></i> {countdown}s
        </span>
      </div>
      <CardList charList={charList} toggleClicked={toggleClicked} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .info {
    color: white;
    padding-block: 2rem;
    font-size: 2em;
    font-weight: bolder;
    text-align: center;
    @media (max-width: 530px) {
      font-size: 1.4em;
    }
    span {
      display: block;
      &:first-of-type {
        margin-bottom: 0.5rem;
      }
    }
  }
`
