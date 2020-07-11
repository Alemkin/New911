import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container } from 'native-base'
import ButtonSelect from '../ButtonSelect'
import { Grid, Row } from 'react-native-easy-grid'
import { RESOURCESELECTMENTAL } from '../../constants/navigation'

// TODO more robust base don selection
const MentalSelect = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Grid>
        <Row size={20} />
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigationUrl={RESOURCESELECTMENTAL} navigation={navigation} name='I am thinking of hurting myself' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigationUrl={RESOURCESELECTMENTAL} navigation={navigation} name='Someone near me is having a mental breakdown' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigationUrl={RESOURCESELECTMENTAL} navigation={navigation} name='I am having trouble with my neighbor' />
        </Row>
        <Row size={20} />
      </Grid>
    </Container>
  )
}

MentalSelect.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default MentalSelect
