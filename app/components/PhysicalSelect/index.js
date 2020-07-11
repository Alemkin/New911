import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container } from 'native-base'
import ButtonSelect from '../ButtonSelect'
import { Grid, Row } from 'react-native-easy-grid'
import { RESOURCESELECTPHYSICAL } from '../../constants/navigation'

// TODO more robust base don selection
const PhysicalSelect = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Grid>
        <Row size={20} />
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigationUrl={RESOURCESELECTPHYSICAL} navigation={navigation} name='I am hurt and I can not move' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigationUrl={RESOURCESELECTPHYSICAL} navigation={navigation} name='I have been in a car accident' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigationUrl={RESOURCESELECTPHYSICAL} navigation={navigation} name='I am in a household where I am being abused' />
        </Row>
        <Row size={20} />
      </Grid>
    </Container>
  )
}

PhysicalSelect.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default PhysicalSelect
