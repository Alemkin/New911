import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, H1, Button, Text } from 'native-base'
import ButtonSelect from '../ButtonSelect'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { TALLAHASSEE_NON_EMERGENCY_POLICE, WOMENS_HOTLINE, PATHWAYSTOSAFETY } from '../../constants/contactInfo'
import { ROOT } from '../../constants/navigation'

const ResourceSelectPhysical = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Grid>
        <Row size={20}>
          <Col style={{ justifyContent: 'center' }}>
            <H1 style={{ textAlign: 'center' }}>Select who to call</H1>
          </Col>
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect number={TALLAHASSEE_NON_EMERGENCY_POLICE} navigation={navigation} name='Non-Emergency Police Line' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect number={WOMENS_HOTLINE} navigation={navigation} name='Domestic Violence Hotline' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect number={PATHWAYSTOSAFETY} navigation={navigation} name='Pathways To Safety Hotline' />
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

ResourceSelectPhysical.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default ResourceSelectPhysical
