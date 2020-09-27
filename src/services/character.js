import { fetchWrapper } from '../utils/service-wrapper'
import { DB_STORE_CHARACTERS } from '../utils/app-constants'
import idb from '../utils/idb-wrapper'

export const characterapi = {
  getCharacter
}

const url = process.env.VUE_APP_API_BASE_URL
const subPath = 'character'

function getCharacter (getCharacterID) {
  const characterID = parseInt(getCharacterID)
  const getCharacterURL = `${url}${subPath}/${characterID}`
  return fetchWrapper.get(getCharacterURL)
    .then(data => {
      idb.set(DB_STORE_CHARACTERS, characterID, data)
      return data
    }).catch(err => {
      console.log(`logging offline ${err}`)
      return idb.get(DB_STORE_CHARACTERS, characterID).then(characters => {
        return characters || []
      })
    })
}
