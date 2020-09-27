import { openDB } from 'idb'
import { DB_NAME, DB_STORE_CHARACTERS, DB_STORE_LOCATIONS } from './app-constants'

const dbPromise = openDB(DB_NAME, 1, {
  upgrade (db) {
    db.createObjectStore(DB_STORE_CHARACTERS)
    db.createObjectStore(DB_STORE_LOCATIONS)
  }
})

export default {
  async get (dbStore, key) {
    return (await dbPromise).get(dbStore, key)
  },
  async set (dbStore, key, val) {
    return (await dbPromise).put(dbStore, val, key)
  },
  async delete (dbStore, key) {
    return (await dbPromise).delete(dbStore, key)
  },
  async clear (dbStore) {
    return (await dbPromise).clear(dbStore)
  },
  async keys (dbStore) {
    return (await dbPromise).getAllKeys(dbStore)
  }
}
