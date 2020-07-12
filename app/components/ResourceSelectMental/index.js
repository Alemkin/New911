import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, H1, Button, Text } from 'native-base'
import ButtonSelect from '../ButtonSelect'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { SAMSI, NATIONALALLIANCE, SUICIDE_HOTLINE } from '../../constants/contactInfo'
import { ROOT } from '../../constants/navigation'

// TODO use redux to store selection and show resources
const ResourceSelectMental = ({ navigation }) => {
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
          <ButtonSelect number={SUICIDE_HOTLINE} navigation={navigation} name='Suicide Hotline' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect number={SAMSI} navigation={navigation} name='Substance Abuse and Mental Health Hotline' />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect number={NATIONALALLIANCE} navigation={navigation} name='National Alliance On Mental Health Hotline' />
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

ResourceSelectMental.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default ResourceSelectMental
