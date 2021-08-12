import React from 'react'
import styled, { keyframes } from 'styled-components'
import Holly_White from '../utils/Holly_White.jpg'

export default function Card({ char, toggleClicked }) {
  const handleClick = () => {
    toggleClicked(char.id)
  }
  return (
    <CardWrapper onClick={handleClick}>
      <img
        src={char.name === 'Holly White' ? Holly_White : char.img}
        alt={char.name}
      />
      <figcaption>
        {char.name}
        <small> ({char.nickname})</small>
      </figcaption>
    </CardWrapper>
  )
}

const blink = keyframes`
		0% {}
		100% {
			text-shadow: 0 0 4px white, 0 0 12px #0ba9ca;
		}
	`

const CardWrapper = styled.figure`
  position: relative;
  width: 200px;
  aspect-ratio: 3/4;
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px white;
    img {
      transform: scale(1.1);
      opacity: 0.9;
    }
    figcaption {
      visibility: visible;
    }
  }
  img {
    width: 100%;
    height: 100%;
    transition: 0.2s ease-in;
  }
  figcaption {
    visibility: hidden;
    transition: 0.2s ease-in;
    animation: ${blink} 0.7s infinite alternate;
    color: white;
    font-weight: bold;
    text-align: center;
    text-shadow: -1px -1px #000, 1px -1px #000, -1px 1px #000, 1px 1px #000;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
`
