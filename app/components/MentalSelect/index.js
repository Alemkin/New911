import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, H1, Button, Text } from 'native-base'
import ButtonSelect from '../ButtonSelect'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { RESOURCESELECTMENTAL, ROOT } from '../../constants/navigation'

// TODO more robust base don selection
const MentalSelect = ({ navigation }) => {
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
          <ButtonSelect navigationUrl={RESOURCESELECTMENTAL} navigation={navigation} name='I am thinking of hurting myself' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigationUrl={RESOURCESELECTMENTAL} navigation={navigation} name='Someone near me is having a mental breakdown' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect navigationUrl={RESOURCESELECTMENTAL} navigation={navigation} name='I am having trouble with my neighbor' />
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

MentalSelect.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default MentalSelect
