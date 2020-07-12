import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, H1, Button, Text } from 'native-base'
import ButtonSelect from '../ButtonSelect'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { RESOURCESELECTPHYSICAL, ROOT } from '../../constants/navigation'

// TODO more robust base don selection
const PhysicalSelect = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Grid>
        <Row size={20}>
          <Col style={{ justifyContent: 'center' }}>
            <H1 style={{ textAlign: 'center' }}>Select a specific situation</H1>
          </Col>
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigationUrl={RESOURCESELECTPHYSICAL} navigation={navigation} name='I am hurt and I can not move' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigationUrl={RESOURCESELECTPHYSICAL} navigation={navigation} name='I have been in a car accident' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigationUrl={RESOURCESELECTPHYSICAL} navigation={navigation} name='I am in a household where I am being abused' />
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

PhysicalSelect.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default PhysicalSelect
