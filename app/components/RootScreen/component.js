import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, Text, Button, H1, Card, Content, CardItem, Body } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import * as Linking from 'expo-linking'
import { EMERGENCY } from '../../constants/contactInfo'
import { SITUATIONSELECT } from '../../constants/navigation'
import materialv2 from '../../../native-base-theme/variables/variables_v2'

const RootScreen = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Grid>
        <Row size={40} style={{ alignItems: 'center', justifyContent: 'center' }}>
          <H1>Do you have an emergency?</H1>
        </Row>
        <Row size={30}>
          <Col style={{ alignItems: 'center' }}>
            <Button full light large style={{ margin: 20 }} onPress={() => navigation.navigate(SITUATIONSELECT)}>
              <Text>No</Text>
            </Button>
          </Col>
          <Col style={{ alignItems: 'center' }}>
            <Button full danger large style={{ margin: 20 }} onPress={() => Linking.openURL(EMERGENCY)}>
              <Text>Call 911</Text>
            </Button>
          </Col>
        </Row>
        <Row size={25}>
          <Content>
            <Card>
              <CardItem style={{ backgroundColor: materialv2.brandDark }}>
                <Body>
                  <Text>Example Emergencies:</Text>
                  <Text>There is a Fire</Text>
                  <Text>Someone has passed out</Text>
                  <Text>There is violence in progress</Text>
                  <Text>There was a serious car accident</Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Row>
        <Row size={5} />
      </Grid>
    </Container>
  )
}

RootScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default RootScreen
