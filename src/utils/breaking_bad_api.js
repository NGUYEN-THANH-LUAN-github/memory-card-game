import { v4 as uuid } from 'uuid'

export default async function getRndChars() {
  const response = await fetch(
    'https://www.breakingbadapi.com/api/character/random?limit=6'
  )
  const json = await response.json()
  const rnd_chars = []
  json.forEach(char => {
    rnd_chars.push({
      id: uuid(),
      name: char.name,
      nickname: char.nickname,
      img: char.img,
      clicked: false,
    })
  })
  return rnd_chars
}
