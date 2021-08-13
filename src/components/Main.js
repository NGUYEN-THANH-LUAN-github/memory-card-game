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
  const [countdown, setCountDown] = useState(25)

  useEffect(() => {
    let countdownID
    if (game === 'playing') {
      ;(async () => {
        setCharList(await getRndChars())
      })()
      countdownID = setInterval(() => {
        setCountDown(countdown => countdown - 1)
      }, 1000)
    }
    return () => {
      setCharList([])
      clearInterval(countdownID)
    }
  }, [game])

  useEffect(() => {
    if (score.current === 12) setGame('won')
  }, [score])

  useEffect(() => {
    if (countdown < 0) {
      setGame('lost')
      setScore(score =>
        score.best < score.current ? { ...score, best: score.current } : score
      )
    }
  }, [countdown])

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
      setScore(score =>
        score.best < score.current ? { ...score, best: score.current } : score
      )
    }
  }

  const startGame = () => {
    if (game === 'lost') {
      setScore({ ...score, current: 0 })
    }
    setGame('playing')
    setCountDown(25)
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
          countdown={countdown}
        />
      ) : (
        <IntroEnd
          game={game}
          score={score}
          startGame={startGame}
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
