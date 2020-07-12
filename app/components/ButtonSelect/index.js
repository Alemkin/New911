
import React from 'react'
import materialv2 from '../../../native-base-theme/variables/variables_v2'
import { Text, Button, Toast, Icon } from 'native-base'
import { Col } from 'react-native-easy-grid'
import * as Linking from 'expo-linking'

const ButtonSelect = ({ name, infoText = '', number = '', navigation, navigationUrl = '' }) => {
  return (
    <>
      <Col size={infoText ? 90 : 100} style={{ alignContent: 'center', justifyContent: 'center', marginLeft: infoText ? 0 : 10 }}>
        <Button full info={number ? null : true} success={number ? true : null} large style={{ marginLeft: 20, marginRight: 20, height: 80 }} onPress={number ? () => Linking.openURL(number) : () => navigation.navigate(navigationUrl)}>
          <Text>{name}</Text>
        </Button>
      </Col>
      {!!infoText &&
        <Col size={10} style={{ alignContent: 'center', justifyContent: 'center' }}>
          <Icon
            ios='ios-information-circle-outline'
            android='md-information-circle-outline'
            style={{ color: 'white' }}
            fontSize={32}
            onPress={() =>
              Toast.show({
                text: infoText,
                buttonText: 'Got it!',
                style: { height: 200, backgroundColor: materialv2.brandPrimary, margin: 20 },
                duration: 30000
              })}
          />
        </Col>}
    </>
  )
}

export default ButtonSelect
