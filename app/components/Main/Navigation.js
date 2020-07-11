import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text, Button } from 'native-base'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import RootScreen from '../RootScreen'
import Directory from '../Directory'
import SituationSelect from '../SituationSelect'
import ResourceSelectMental from '../ResourceSelectMental'
import ResourceSelectPhysical from '../ResourceSelectPhysical'
import MentalSelect from '../MentalSelect'
import PhysicalSelect from '../PhysicalSelect'
import variables from '../../../native-base-theme/variables/variables_v2'
import { DIRECTORY, RESOURCESELECTMENTAL, RESOURCESELECTPHYSICAL, MENTALSELECT, PHYSICALSELECT, SITUATIONSELECT, ROOT } from '../../constants/navigation'

const Stack = createStackNavigator()

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
            title: 'Community Connect'
          })}
        />
        <Stack.Screen
          name={SITUATIONSELECT}
          component={SituationSelect}
          options={({ navigation }) => ({
            title: 'Select Your Situation',
            headerRight: () => (
              <Button transparent onPress={() => navigation.navigate(DIRECTORY)}>
                <Text style={{ color: 'white' }}>Directory</Text>
              </Button>
            )
          })}
        />
        <Stack.Screen
          name={MENTALSELECT}
          component={MentalSelect}
          options={({ navigation }) => ({
            title: 'Emotional Selection',
            headerRight: () => (
              <Button transparent onPress={() => navigation.navigate(DIRECTORY)}>
                <Text style={{ color: 'white' }}>Directory</Text>
              </Button>
            )
          })}
        />
        <Stack.Screen
          name={PHYSICALSELECT}
          component={PhysicalSelect}
          options={({ navigation }) => ({
            title: 'Physical Selection',
            headerRight: () => (
              <Button transparent onPress={() => navigation.navigate(DIRECTORY)}>
                <Text style={{ color: 'white' }}>Directory</Text>
              </Button>
            )
          })}
        />
        <Stack.Screen
          name={RESOURCESELECTMENTAL}
          component={ResourceSelectMental}
          options={({ navigation }) => ({
            title: 'Call Someone',
            headerRight: () => (
              <Button transparent onPress={() => navigation.navigate(DIRECTORY)}>
                <Text style={{ color: 'white' }}>Directory</Text>
              </Button>
            )
          })}
        />
        <Stack.Screen
          name={RESOURCESELECTPHYSICAL}
          component={ResourceSelectPhysical}
          options={({ navigation }) => ({
            title: 'Call Someone',
            headerRight: () => (
              <Button transparent onPress={() => navigation.navigate(DIRECTORY)}>
                <Text style={{ color: 'white' }}>Directory</Text>
              </Button>
            )
          })}
        />
        <Stack.Screen
          name={DIRECTORY}
          component={Directory}
          options={{
            title: 'Community Connect - Directory'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
