import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, H1, Button, Text } from 'native-base'
import ButtonSelect from '../ButtonSelect'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { TALLAHASSEE_NON_EMERGENCY_POLICE, TALLAHASSEE_NON_EMERGENCY_FIRE } from '../../constants/contactInfo'
import { MENTALSELECT, PHYSICALSELECT, ROOT } from '../../constants/navigation'

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
        <Row size={15} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigation={navigation} navigationUrl={PHYSICALSELECT} name='Physical' infoText='You were in a car accident, Someone is exhibiting threatening behavior, etc...' />
        </Row>
        <Row size={15} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigation={navigation} navigationUrl={MENTALSELECT} name='Emotional' infoText='You are feeling depressed, Your family member is having an mental health issue, etc...' />
        </Row>
        <Row size={15} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigation={navigation} number={TALLAHASSEE_NON_EMERGENCY_FIRE} name='Non-Emergency Fire Dept' infoText='This will connect you with the non-emergency number for your fire department' />
        </Row>
        <Row size={15} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigation={navigation} number={TALLAHASSEE_NON_EMERGENCY_POLICE} name='Non-Emergency Police' infoText='This will connect you with the non-emergency number for your police department' />
        </Row>
        <Row size={10} />
        <Row size={10}>
          <Col style={{ alignContent: 'center', justifyContent: 'center' }}>
            <Button full danger onPress={() => navigation.navigate(ROOT)}>
              <Text>I have an emergency</Text>
            </Button>
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
