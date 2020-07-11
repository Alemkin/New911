import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, Text } from 'native-base'

const RootScreen = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Text>Community Connect</Text>
    </Container>
  )
}

RootScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default RootScreen
