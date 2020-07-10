import React from 'react'
import RootScreen from './component'
import getPokemonService from '../../service/getPokemon'
import { useAsync } from 'react-async-hook'
import * as Speech from 'expo-speech'

const words = ['wumbo', 'totalitarian', 'godzilla', 'gravy', 'jimminy', 'bandicoot', 'hackery', 'razzle', 'dazzle']
const RootScreenContainer = ({ navigation }) => {
  // TODO hook into redux
  const asyncPokemon = useAsync(getPokemonService, [])
  const asyncVoices = useAsync(Speech.getAvailableVoicesAsync, [])

  const speak = index => () => {
    const options = {}
    if (asyncVoices.result && asyncVoices.result.length) {
      const result = asyncVoices.result
      options.voice = result[Math.floor(Math.random() * result.length)].identifier
    }
    Speech.speak(words[index], options)
  }

  return (
    <RootScreen navigation={navigation} asyncPokemon={asyncPokemon} speak={speak} />
  )
}

export default RootScreenContainer
