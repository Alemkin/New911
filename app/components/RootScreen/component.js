import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, Text, Button, H1, Toast } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import * as Linking from 'expo-linking'
import { EMERGENCY } from '../../constants/contactInfo'
import { SITUATIONSELECT } from '../../constants/navigation'
import materialv2 from '../../../native-base-theme/variables/variables_v2'

const RootScreen = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Grid>
        <Row size={40} style={{ alignItems: 'center', justifyContent: 'center' }}>
          <H1>Do you have an </H1>
          <H1
            onPress={() =>
              Toast.show({
                text: 'Example Emergencies: Fire, Someone has passed out, Violence in progress, Serious car accident, etc...',
                buttonText: 'Got it!',
                style: { height: 200, backgroundColor: materialv2.brandInfo, margin: 20 },
                duration: 5000
              })}
            style={{ textDecorationLine: 'underline' }}
          >
            emergency?
          </H1>
        </Row>
        <Row size={60}>
          <Col style={{ alignItems: 'center' }}>
            <Button
              full light large style={{ margin: 20 }}
              onPress={() => {
                Toast.show({
                  text: 'Glad you are safe! Let us try to find some different help.',
                  buttonText: 'Thanks!',
                  style: { height: 100, backgroundColor: materialv2.brandSuccess, margin: 20 },
                  duration: 3000,
                  position: 'top'
                })
                navigation.navigate(SITUATIONSELECT)
              }}
            >
              <Text>No</Text>
            </Button>
          </Col>
          <Col style={{ alignItems: 'center' }}>
            <Button full danger large style={{ margin: 20 }} onPress={() => Linking.openURL(EMERGENCY)}>
              <Text>Call 911</Text>
            </Button>
          </Col>
        </Row>
      </Grid>
    </Container>
  )
}

RootScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default RootScreen
