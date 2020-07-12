import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import { Container, H1, Button, Text } from 'native-base'
import ButtonSelect from '../ButtonSelect'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { EMERGENCY } from '../../constants/contactInfo'
import * as Linking from 'expo-linking'
import { resources, selectUserFlow } from '../../reducers/userFlow'

const mapRow = navigation => (resource, i) => {
  return (
    <Row key={resource.name + i} size={20} style={{ justifyContent: 'center' }}>
      <ButtonSelect number={resource.number} navigation={navigation} name={resource.name} />
    </Row>
  )
}

const ResourceSelectMental = ({ navigation }) => {
  const userFlow = useSelector(selectUserFlow)
  return (
    <Container>
      <StatusBar style='light' />
      <Grid>
        <Row size={20}>
          <Col style={{ justifyContent: 'center' }}>
            <H1 style={{ textAlign: 'center' }}>Select who to call</H1>
          </Col>
        </Row>
        {!!userFlow && !!userFlow.issue && resources[userFlow.issue].map(mapRow(navigation))}
        <Row size={10} />
        <Row size={10}>
          <Col style={{ alignContent: 'center', justifyContent: 'center' }}>
            <Button full danger onPress={() => Linking.openURL(EMERGENCY)}>
              <Text>Call 911</Text>
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
