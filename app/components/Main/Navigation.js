import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text, Button } from 'native-base'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import RootScreen from '../RootScreen'
import Directory from '../Directory'
import variables from '../../../native-base-theme/variables/variables_v2'

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
            title: 'Community Connect',
            headerRight: () => (
              <Button transparent onPress={() => navigation.navigate('Directory')}>
                <Text style={{ color: 'white' }}>Directory</Text>
              </Button>
            )
          })}
        />
        <Stack.Screen
          name='Directory'
          component={Directory}
          options={{
            title: 'Directory'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
