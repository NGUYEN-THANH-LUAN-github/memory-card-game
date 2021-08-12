import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import background from './utils/background.jpg'

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      word-wrap: break-word;
    };
   body {
      background: url(${props => props.bg});
      background-attachment: fixed;
      background-position: center;
      background-size: cover;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
  `
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle bg={background} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
