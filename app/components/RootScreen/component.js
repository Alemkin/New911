import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, Text, Button, H1 } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import * as Linking from 'expo-linking'
import { EMERGENCY } from '../../constants/contactInfo'
import { SITUATIONSELECT } from '../../constants/navigation'

const RootScreen = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Grid>
        <Row size={40} style={{ alignItems: 'center', justifyContent: 'center' }}>
          <H1>Are you in Imminent Danger?</H1>
        </Row>
        <Row size={60}>
          <Col style={{ alignItems: 'center' }}>
            <Button full light large style={{ margin: 20 }} onPress={() => navigation.navigate(SITUATIONSELECT)}>
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
