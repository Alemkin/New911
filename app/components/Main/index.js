import React from 'react'
import { AppLoading } from 'expo'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { StyleProvider, Root } from 'native-base'
import * as Font from 'expo-font'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'

import { store, persistor } from '../../store'
import getTheme from '../../../native-base-theme/components'
import materialv2 from '../../../native-base-theme/variables/variables_v2'

import Navigation from './Navigation'

import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`'
])

const Main = () => {
  const [loaded] = Font.useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
    ...FontAwesome5.font
  })

  if (!loaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<AppLoading />} persistor={persistor}>
        <StyleProvider style={{ ...getTheme(materialv2), backgroundColor: materialv2.brandDark }}>
          <Root>
            <Navigation />
          </Root>
        </StyleProvider>
      </PersistGate>
    </Provider>
  )
}

export default Main
