import { registerRootComponent } from 'expo'

import Main from './components/Main'

import 'react-native-gesture-handler'

import './service'
import './sagas'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Main)
