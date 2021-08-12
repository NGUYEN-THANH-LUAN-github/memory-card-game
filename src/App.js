import styled from 'styled-components'
import Footer from './components/Footer'
import Main from './components/Main'

export default function App() {
  return (
    <Wrapper>
      <Main />
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
