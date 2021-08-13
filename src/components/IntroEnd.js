import React from 'react'
import styled from 'styled-components'

export default function IntroEnd({ game, score, startGame, returnToMain }) {
  let heading,
    info,
    button = ''
  if (game === 'intro') {
    heading = 'BB Memory Game'
    info = (
      <div className='info'>
        <ul>
          <li>
            1. You will be presented with 12 cards of 12 different Breaking Bad
            characters
          </li>
          <li>2. Click on any card, and the cards will be re-shuffled</li>
          <li>
            3. Choose another card, but you must not choose the card that has
            already been chosen
          </li>
          <li>
            4. You win the game if you manage to click on each card once in{' '}
            <strong>25 seconds</strong>
          </li>
        </ul>
      </div>
    )
    button = <button onClick={startGame}>Start Game!</button>
  } else {
    if (game === 'lost') {
      heading = 'Game Over :('
      info = (
        <div className='info'>
          <h3>
            <div className='current'>Your score: {score.current}</div>
            <div>Best: {score.best}</div>
          </h3>
        </div>
      )
      button = (
        <div>
          <button onClick={startGame}>Play Again!</button>
          <button onClick={returnToMain}>Quit</button>
        </div>
      )
    } else {
      heading = 'Congratulations! You Won!'
      info = (
        <div className='info'>
          <img
            src={'https://media.giphy.com/media/vyNg5hVvHLzCE/giphy.gif'}
            width={400}
            alt=''
          ></img>
        </div>
      )
      button = <button onClick={returnToMain}>Return to Main</button>
    }
  }
  return (
    <Wrapper game={game}>
      <h1>{heading}</h1>
      {info}
      {button}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-inline: 5rem;
  padding: 2rem;
  color: white;
  text-align: center;
  text-shadow: -1px -1px 20px #000, 1px -1px 20px #000, -1px 1px 20px #000;
  h1 {
    font-size: 2.5em;
    padding-bottom: ${props => props.game === 'won' && '1.5rem'};
  }
  .info {
    margin-top: 1.5rem;
    h3 {
      margin-bottom: 20px;
      .current {
        padding-bottom: 8px;
      }
    }
    li {
      line-height: 1.5;
      list-style: none;
    }
    img {
      box-shadow: -1px -1px 16px #fff, 1px -1px 16px #fff, -1px 1px 16px #fff;
    }
  }
  button {
    margin-top: 20px;
    margin-inline: 15px;
    color: inherit;
    font-size: 1.5em;
    background: none;
    padding: 5px 25px;
    border: 1px white solid;
    box-shadow: -1px -1px 6px #000, 1px -1px 6px #000, -1px 1px 6px #000;
    text-shadow: inherit;
    &:hover {
      background: rgb(255, 255, 255, 0.4);
      cursor: pointer;
    }
    &:active {
      font-size: 1.485em;
    }
  }
`
