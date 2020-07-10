import { BASE_API_URL } from '../constants/url'
import { defaultOptions, throwExceptionErrors, deserializeJsonResponse } from '../utils/fetch'

export const GET_POKEMON = 'GET_POKEMON_SERVICE'

const service = async () => {
  const url = BASE_API_URL + '/pokemon/' + 'ditto' + '/'
  const options = {
    ...defaultOptions,
    method: 'GET'
  }
  const response = await window.fetch(url, options)
  const pokemon = await deserializeJsonResponse(response)
  throwExceptionErrors(pokemon)
  return pokemon
}

export default service
