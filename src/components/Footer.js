import styled from 'styled-components'

export default function Footer() {
 return (
  <FooterWrapper>
   made by n.t.luan
   <a
    target='_blank'
    href='https://github.com/NGUYEN-THANH-LUAN-github/memory-card-game'
    rel='noreferrer'
   >
    <i className='fab fa-github text'></i>
   </a>
  </FooterWrapper>
 )
}

const FooterWrapper = styled.footer`
 position: absolute;
 bottom: 0;
 width: 100%;
 padding-block: 0.5em;
 color: #eee;
 font-weight: bold;
 text-align: center;
 i {
  color: #eee;
  transition: all ease 0.3s;
  margin-left: 0.6em;
  &:hover {
   transform: translateY(-0.1em);
   text-shadow: 0px 0px 5px white;
  }
 }
`
