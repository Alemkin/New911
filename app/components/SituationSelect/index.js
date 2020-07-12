import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, H1, Button, Text } from 'native-base'
import ButtonSelect from '../ButtonSelect'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { TALLAHASSEE_NON_EMERGENCY_POLICE, TALLAHASSEE_NON_EMERGENCY_FIRE } from '../../constants/contactInfo'
import { MENTALSELECT, PHYSICALSELECT, ROOT } from '../../constants/navigation'
import * as Linking from 'expo-linking'
import materialv2 from '../../../native-base-theme/variables/variables_v2'

// TODO move this stuff into a js file and auto populate
const SituationSelect = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Grid>
        <Row size={20}>
          <Col style={{ justifyContent: 'center' }}>
            <H1 style={{ textAlign: 'center' }}>Select Your Situation</H1>
          </Col>
        </Row>
        <Row size={30} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigation={navigation} navigationUrl={PHYSICALSELECT} name='Physical' infoText='You were in a car accident, Someone is exhibiting threatening behavior, etc...' />
        </Row>
        <Row size={30} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigation={navigation} navigationUrl={MENTALSELECT} name='Emotional' infoText='You are feeling depressed, Your family member is having an mental health issue, etc...' />
        </Row>
        <Row size={10}>
          <Col style={{ justifyContent: 'center', backgroundColor: materialv2.brandSuccess }}>
            <Text style={{ textAlign: 'center' }} onPress={() => Linking.openURL(TALLAHASSEE_NON_EMERGENCY_POLICE)}>Non-Emergency Police</Text>
          </Col>
          <Col style={{ justifyContent: 'center', backgroundColor: materialv2.brandSuccess, borderLeftWidth: 1 }}>
            <Text style={{ textAlign: 'center' }} onPress={() => Linking.openURL(TALLAHASSEE_NON_EMERGENCY_FIRE)}>Non-Emergency Fire Dept</Text>
          </Col>
        </Row>
        <Row size={10}>
          <Col style={{ justifyContent: 'center', backgroundColor: materialv2.brandDanger, borderTopWidth: 1 }}>
            <Text style={{ textAlign: 'center' }} onPress={() => navigation.navigate(ROOT)}>I have an emergency</Text>
          </Col>
        </Row>
      </Grid>
    </Container>
  )
}

SituationSelect.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default SituationSelect
