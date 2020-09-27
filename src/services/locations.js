import { fetchWrapper } from '../utils/service-wrapper'
import { DB_STORE_LOCATIONS } from '../utils/app-constants'
import idb from '../utils/idb-wrapper'

export const locationsapi = {
  getLocations
}

const url = process.env.VUE_APP_GRAPHQL_BASE_URL

function getLocations (pageNo) {
  const query = `
      query {
        locations(page: ${pageNo}) {
          info {
            count,
            pages,
            next,
            prev
          }
          results {
            id,
            name,
            residents { 
              id,
              name,
              image,
              status
            }
          }
        }
      }
    `

  return fetchWrapper.post(url, JSON.stringify({ query }))
    .then(data => {
      const locations = data.data.locations
      idb.set(DB_STORE_LOCATIONS, pageNo, locations)
      return locations
    }).catch(err => {
      console.log(`logging offline ${err}`)
      return idb.get(DB_STORE_LOCATIONS, pageNo).then(items => {
        return items || []
      })
    })
}
