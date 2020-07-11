import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, Text, Button, H1, Icon } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'

const RootScreen = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Grid>
        <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
          <H1>Choose what best describes your situation</H1>
        </Row>
        <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Col size={85}>
            <Button full light large style={{ margin: 10 }}>
              <Text>Physical</Text>
            </Button>
          </Col>
          <Col size={15}>
            <Icon name='md-information-circle-outline' style={{ color: 'white' }} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Col>
            <Button full light large style={{ margin: 20 }}>
              <Text>Mental</Text>
            </Button>
          </Col>
        </Row>
        <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Col>
            <Button full light large style={{ margin: 20 }}>
              <Text>Non-Emergency Fire Dept</Text>
            </Button>
          </Col>
        </Row>
        <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Col>
            <Button full light large style={{ margin: 20 }}>
              <Text>Non-Emergency Police</Text>
            </Button>
          </Col>
        </Row>
      </Grid>
    </Container>
  )
}

RootScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default RootScreen
