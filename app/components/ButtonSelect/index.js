
import React from 'react'
import materialv2 from '../../../native-base-theme/variables/variables_v2'
import { Text, Button, Toast } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import { Col } from 'react-native-easy-grid'
import * as Linking from 'expo-linking'

const ButtonSelect = ({ name, infoText = '', number = '', navigation, navigationUrl = '' }) => {
  return (
    <>
      <Col size={infoText ? 85 : 100}>
        <Button full info large style={{ marginLeft: 20, marginRight: 20, height: 100 }} onPress={number ? () => Linking.openURL(number) : () => navigation.navigate(navigationUrl)}>
          <Text>{name}</Text>
        </Button>
      </Col>
      {!!infoText &&
        <Col size={15}>
          <FontAwesome5
            name='info-circle' size={32} color='white' onPress={() =>
              Toast.show({
                text: infoText,
                buttonText: 'Got it!',
                style: { height: 200, backgroundColor: materialv2.brandInfo, margin: 20 },
                duration: 30000
              })}
          />
        </Col>}
    </>
  )
}

export default ButtonSelect
