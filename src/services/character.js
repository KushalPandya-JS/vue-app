import { fetchWrapper } from '../utils/service-wrapper'

export const characterapi = {
  getCharacter
}

const url = process.env.VUE_APP_API_BASE_URL
const subPath = 'character'

function getCharacter (characterID) {
  const getCharacterURL = `${url}${subPath}/${characterID}`
  return fetchWrapper.get(getCharacterURL)
    .then(data => data)
}
