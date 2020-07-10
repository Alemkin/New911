import { createStore, compose } from 'redux'
import reducers from '../reducers'
import createMiddleware from './middleware'
import { persistReducer, persistStore } from 'redux-persist'
import { AsyncStorage } from 'react-native'

/**
 * This import defaults to localStorage for web and AsyncStorage for react-native.
 *
 * Keep in mind this storage *is not secure*. Do not use it to store sensitive information
 * (like API tokens, private and sensitive data, etc.).
 *
 * If you need to store sensitive information, use redux-persist-sensitive-storage.
 * @see https://github.com/CodingZeal/redux-persist-sensitive-storage
 */

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  /**
   * Blacklist state that we do not need/want to persist
   */
  blacklist: [
    // 'auth',
  ]
}

export default () => {
  const persistedReducer = persistReducer(persistConfig, reducers)

  const store = createStore(persistedReducer, compose(createMiddleware()))
  const persistor = persistStore(store)

  return { store, persistor }
}
