import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, Text, Button } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'

const RootScreen = ({ navigation, speak, asyncPokemon }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Grid>
        <Row style={{ backgroundColor: '#635DB7' }}>
          <Col>
            <Button danger style={{ margin: 5 }} onPress={speak(0)}>
              <Text>Click Me 1!</Text>
            </Button>
          </Col>
          <Col>
            <Button success style={{ margin: 5 }} onPress={speak(1)}>
              <Text>Click Me 2!</Text>
            </Button>
          </Col>
          <Col>
            <Button primary style={{ margin: 5 }} onPress={speak(2)}>
              <Text>Click Me 3!</Text>
            </Button>
          </Col>
        </Row>
        <Row style={{ backgroundColor: '#635DB7' }}>
          <Col>
            <Button warning style={{ margin: 5 }} onPress={speak(3)}>
              <Text>Click Me 4!</Text>
            </Button>
          </Col>
          <Col>
            <Button info style={{ margin: 5 }} onPress={speak(4)}>
              <Text>Click Me 5!</Text>
            </Button>
          </Col>
          <Col>
            <Button dark style={{ margin: 5 }} onPress={speak(5)}>
              <Text>Click Me 6!</Text>
            </Button>
          </Col>
        </Row>
        <Row style={{ backgroundColor: '#635DB7' }}>
          <Col>
            <Button light style={{ margin: 5 }} onPress={speak(6)}>
              <Text>Click Me 7!</Text>
            </Button>
          </Col>
          <Col>
            <Button danger style={{ margin: 5 }} onPress={speak(7)}>
              <Text>Click Me 8!</Text>
            </Button>
          </Col>
          <Col>
            <Button success style={{ margin: 5 }} onPress={speak(8)}>
              <Text>Click Me 9!</Text>
            </Button>
          </Col>
        </Row>
        {
          (asyncPokemon.result && !asyncPokemon.loading) &&
            <>
              <Row style={{ backgroundColor: '#00CE9F' }}>
                <Col style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text>{`Name: ${asyncPokemon.result.name}`}</Text>
                </Col>
              </Row>
              <Row style={{ backgroundColor: '#00CE9F' }}>
                <Col size={25} style={{ alignItems: 'center', backgroundColor: 'white', justifyContent: 'center' }}>
                  <Text>{`Weight: ${asyncPokemon.result.weight}`}</Text>
                </Col>
                <Col size={50} style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text>{`Id: ${asyncPokemon.result.id}`}</Text>
                </Col>
                <Col size={25} style={{ alignItems: 'center', backgroundColor: 'white', justifyContent: 'center' }}>
                  <Text>{`Order: ${asyncPokemon.result.order}`}</Text>
                </Col>
              </Row>
            </>
        }
        {
          asyncPokemon.error &&
            <Text>Error: {asyncPokemon.error.message}</Text>
        }
      </Grid>
    </Container>
  )
}

RootScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  speak: PropTypes.func.isRequired,
  asyncPokemon: PropTypes.object
}

export default RootScreen
