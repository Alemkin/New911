import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container } from 'native-base'
import ButtonSelect from '../ButtonSelect'
import { Grid, Row } from 'react-native-easy-grid'
import { SAMSI, NATIONALALLIANCE, SUICIDE_HOTLINE } from '../../constants/contactInfo'

// TODO use redux to store selection and show resources
const ResourceSelectMental = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Grid>
        <Row size={20} />
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect number={SUICIDE_HOTLINE} navigation={navigation} name='Suicide Hotline' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect number={SAMSI} navigation={navigation} name='Substance Abuse and Mental Health Hotline' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect number={NATIONALALLIANCE} navigation={navigation} name='National Alliance On Mental Health Hotline' />
        </Row>
        <Row size={20} />
      </Grid>
    </Container>
  )
}

ResourceSelectMental.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default ResourceSelectMental
