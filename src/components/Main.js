import React, { useState, useEffect } from 'react'
import getRndChars from '../utils/breaking_bad_api'
import shuffleArray from '../utils/shuffleArray'
import styled from 'styled-components'
import Playing from './Playing'
import IntroEnd from './IntroEnd'

export default function Main() {
  const [charList, setCharList] = useState([])
  const [game, setGame] = useState('intro')
  const [score, setScore] = useState({ current: 0, best: 0 })

  useEffect(() => {
    if (game === 'playing') {
      ;(async () => {
        setCharList(await getRndChars())
      })()
    }
  }, [game])

  useEffect(() => {
    if (score.current === 6) setGame('won')
  }, [score])

  const startGame = () => {
    setGame('playing')
    setScore({ ...score, current: 0 })
  }

  const shuffleCards = () => {
    const shuffled = [...charList]
    shuffleArray(shuffled)
    setCharList(shuffled)
  }

  const toggleClicked = id => {
    const char = charList.find(char => char.id === id)
    if (!char.clicked) {
      setCharList(charList =>
        charList.map(char => (char.id === id ? (char.clicked = true) : char))
      )
      shuffleCards()
      setScore({ ...score, current: score.current + 1 })

      return
    } else {
      setGame('lost')
      if (score.best < score.current) {
        setScore({ ...score, best: score.current })
      }
    }
  }

  const replay = () => {
    setScore({ ...score, current: 0 })
    setGame('playing')
  }

  const returnToMain = () => {
    setScore({ current: 0, best: 0 })
    setGame('intro')
  }

  return (
    <Wrapper>
      {game === 'playing' ? (
        <Playing
          charList={charList}
          score={score}
          toggleClicked={toggleClicked}
        />
      ) : (
        <IntroEnd
          game={game}
          score={score}
          startGame={startGame}
          replay={replay}
          returnToMain={returnToMain}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 5rem;
`
