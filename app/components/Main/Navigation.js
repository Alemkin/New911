import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text, Button } from 'native-base'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import RootScreen from '../RootScreen'
import Directory from '../Directory'
import DirectoryInfo from '../DirectoryInfo'
import SituationSelect from '../SituationSelect'
import ResourceSelect from '../ResourceSelect'
import MentalSelect from '../MentalSelect'
import PhysicalSelect from '../PhysicalSelect'
import variables from '../../../native-base-theme/variables/variables_v2'
import { DIRECTORY, DIRECTORYINFO, RESOURCESELECT, MENTALSELECT, PHYSICALSELECT, SITUATIONSELECT, ROOT } from '../../constants/navigation'

const Stack = createStackNavigator()

const appTitle = 'Community Connect'

const SharedButton = ({ navigation }) =>
  <Button transparent onPress={() => navigation.navigate(DIRECTORY)}>
    <Text style={{ color: 'white' }}>Directory</Text>
  </Button>

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: variables.brandDark
          },
          headerTintColor: 'white',
          ...TransitionPresets.SlideFromRightIOS
        }}
      >
        <Stack.Screen
          name={ROOT}
          component={RootScreen}
          options={({ navigation }) => ({
            title: appTitle
          })}
        />
        <Stack.Screen
          name={SITUATIONSELECT}
          component={SituationSelect}
          options={({ navigation }) => ({
            title: appTitle,
            headerRight: () => (
              <SharedButton navigation={navigation} />
            )
          })}
        />
        <Stack.Screen
          name={MENTALSELECT}
          component={MentalSelect}
          options={({ navigation }) => ({
            title: appTitle,
            headerRight: () => (
              <SharedButton navigation={navigation} />
            )
          })}
        />
        <Stack.Screen
          name={PHYSICALSELECT}
          component={PhysicalSelect}
          options={({ navigation }) => ({
            title: appTitle,
            headerRight: () => (
              <SharedButton navigation={navigation} />
            )
          })}
        />
        <Stack.Screen
          name={RESOURCESELECT}
          component={ResourceSelect}
          options={({ navigation }) => ({
            title: appTitle,
            headerRight: () => (
              <SharedButton navigation={navigation} />
            )
          })}
        />
        <Stack.Screen
          name={DIRECTORY}
          component={Directory}
          options={{
            title: `${appTitle} - Directory`
          }}
        />
        <Stack.Screen
          name={DIRECTORYINFO}
          component={DirectoryInfo}
          options={{
            title: 'Directory Info'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
