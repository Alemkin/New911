import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text, Button } from 'native-base'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import RootScreen from '../RootScreen'
import ProfileScreen from '../ProfileScreen'
import variables from '../../../native-base-theme/variables/platform'

const Stack = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: variables.brandSuccess
          },
          headerTintColor: 'white',
          ...TransitionPresets.SlideFromRightIOS
        }}
      >
        <Stack.Screen
          name='Root'
          component={RootScreen}
          options={({ navigation }) => ({
            title: 'Boilerplate',
            headerRight: () => (
              <Button transparent onPress={() => navigation.navigate('Profile')}>
                <Text style={{ color: 'white' }}>Profile</Text>
              </Button>
            )
          })}
        />
        <Stack.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            title: 'Profile'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
