import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container } from 'native-base'
import ButtonSelect from '../ButtonSelect'
import { Grid, Row } from 'react-native-easy-grid'
import { TALLAHASSEE_NON_EMERGENCY_POLICE, WOMENS_HOTLINE, PATHWAYSTOSAFETY } from '../../constants/contactInfo'

const ResourceSelectPhysical = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Grid>
        <Row size={20} />
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect number={TALLAHASSEE_NON_EMERGENCY_POLICE} navigation={navigation} name='Non-Emergency Police Line' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect number={WOMENS_HOTLINE} navigation={navigation} name='Domestic Violence Hotline' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect number={PATHWAYSTOSAFETY} navigation={navigation} name='Pathways To Safety Hotline' />
        </Row>
        <Row size={20} />
      </Grid>
    </Container>
  )
}

ResourceSelectPhysical.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default ResourceSelectPhysical
