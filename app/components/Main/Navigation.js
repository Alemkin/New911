import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text, Button } from 'native-base'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import RootScreen from '../RootScreen'
import Directory from '../Directory'
import SituationSelect from '../SituationSelect'
import variables from '../../../native-base-theme/variables/variables_v2'
import { DIRECTORY } from '../../constants/navigation'

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
          name='Root'
          component={RootScreen}
          options={({ navigation }) => ({
            title: 'Community Connect'
          })}
        />
        <Stack.Screen
          name='SituationSelect'
          component={SituationSelect}
          options={({ navigation }) => ({
            title: 'Community Connect',
            headerRight: () => (
              <Button transparent onPress={() => navigation.navigate(DIRECTORY)}>
                <Text style={{ color: 'white' }}>Directory</Text>
              </Button>
            )
          })}
        />
        <Stack.Screen
          name='Directory'
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
