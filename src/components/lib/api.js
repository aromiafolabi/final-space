import Axios from 'axios'

const baseUrl = 'https://finalspaceapi.com/api/v0'
// const characterId = 'https://finalspaceapi.com/api/v0/character/1'

export function getAllCharacters () {
  return Axios.get(`${baseUrl}/character`)
}

export function getSingleCharacter (characterId) {
  return Axios.get(`${baseUrl}/character/${characterId}`)
}

// Get Episodes

export function getAllEpisodes () {
  return Axios.get(`${baseUrl}/episode`)
}

// Get Quotes

export function getAllQuotes () {
  return Axios.get(`${baseUrl}/quote`)
}