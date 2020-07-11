
import React from 'react'
import materialv2 from '../../../native-base-theme/variables/variables_v2'
import { Text, Button, Toast } from 'native-base'
import { Col } from 'react-native-easy-grid'
import * as Linking from 'expo-linking'

const ButtonSelect = ({ name, infoText = '', number = '', navigation, navigationUrl = '' }) => {
  return (
    <>
      <Col size={infoText ? 85 : 100} style={{ alignContent: 'center', justifyContent: 'center' }}>
        <Button full info large style={{ marginLeft: 20, marginRight: 20, height: 80 }} onPress={number ? () => Linking.openURL(number) : () => navigation.navigate(navigationUrl)}>
          <Text>{name}</Text>
        </Button>
      </Col>
      {!!infoText &&
        <Col size={15} style={{ alignContent: 'center', justifyContent: 'center' }}>
          <Button
            bordered
            light
            onPress={() =>
              Toast.show({
                text: infoText,
                buttonText: 'Got it!',
                style: { height: 200, backgroundColor: materialv2.brandPrimary, margin: 20 },
                duration: 30000
              })}
          >
            <Text style={{ fontWeight: 'bold' }}>?</Text>
          </Button>
        </Col>}
    </>
  )
}

export default ButtonSelect
