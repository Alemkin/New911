
import React from 'react'
import { Text, Button } from 'native-base'
import { Col } from 'react-native-easy-grid'
import * as Linking from 'expo-linking'

const ButtonSelect = ({ name, number = '', handlePress }) => {
  return (
    <>
      <Col style={{ alignContent: 'center', justifyContent: 'center', marginLeft: 10 }}>
        <Button
          full
          info={number ? null : true}
          success={number ? true : null}
          large
          style={{ marginLeft: 20, marginRight: 20, height: 80 }}
          onPress={number ? () => Linking.openURL(number) : handlePress}
        >
          <Text>{name}</Text>
        </Button>
      </Col>
    </>
  )
}

export default ButtonSelect
