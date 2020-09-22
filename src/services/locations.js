import { fetchWrapper } from '../utils/service-wrapper'

export const locationsapi = {
  getLocations
}

const query = `
      query {
        locations(page: 1) {
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

const url = process.env.VUE_APP_GRAPHQL_BASE_URL

function getLocations () {
  return fetchWrapper.post(url, JSON.stringify({ query }))
    .then(data => data.data.locations.results)
}
