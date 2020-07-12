import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Container, H1, Button, Text, Icon, Toast } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { TALLAHASSEE_NON_EMERGENCY_POLICE, TALLAHASSEE_NON_EMERGENCY_FIRE } from '../../constants/contactInfo'
import { MENTALSELECT, PHYSICALSELECT, ROOT } from '../../constants/navigation'
import * as situations from '../../constants/situations'
import * as Linking from 'expo-linking'
import materialv2 from '../../../native-base-theme/variables/variables_v2'
import { setSituation } from '../../reducers/userFlow'

const ButtonSelect = ({ name, infoText, navigation, navigationUrl, handlePress }) => {
  return (
    <>
      <Col size={infoText ? 90 : 100} style={{ alignContent: 'center', justifyContent: 'center', marginLeft: infoText ? 0 : 10 }}>
        <Button
          full
          info
          large
          style={{ marginLeft: 20, marginRight: 20, height: 80 }}
          onPress={handlePress}
        >
          <Text>{name}</Text>
        </Button>
      </Col>
      {!!infoText &&
        <Col size={10} style={{ alignContent: 'center', justifyContent: 'center' }}>
          <Icon
            ios='ios-information-circle-outline'
            android='md-information-circle-outline'
            style={{ color: 'white' }}
            fontSize={32}
            onPress={() =>
              Toast.show({
                text: infoText,
                buttonText: 'Got it!',
                style: { height: 200, backgroundColor: materialv2.brandPrimary, margin: 20 },
                duration: 30000
              })}
          />
        </Col>}
    </>
  )
}

const SituationSelect = ({ navigation }) => {
  const dispatch = useDispatch()
  const handlePress = (key, url) => () => {
    navigation.navigate(url)
    dispatch(setSituation(key))
  }
  return (
    <Container>
      <StatusBar style='light' />
      <Grid>
        <Row size={20}>
          <Col style={{ justifyContent: 'center' }}>
            <H1 style={{ textAlign: 'center' }}>Select Your Situation</H1>
          </Col>
        </Row>
        <Row size={18} style={{ justifyContent: 'center' }}>
          <ButtonSelect handlePress={handlePress(situations.PHYSICAL, PHYSICALSELECT)} navigation={navigation} navigationUrl={PHYSICALSELECT} name={situations.PHYSICAL} infoText='You were in a car accident, Someone is exhibiting threatening behavior, etc...' />
        </Row>
        <Row size={18} style={{ justifyContent: 'center' }}>
          <ButtonSelect handlePress={handlePress(situations.EMOTIONAL, MENTALSELECT)} navigation={navigation} navigationUrl={MENTALSELECT} name={situations.EMOTIONAL} infoText='You are feeling depressed, Your family member is having an mental health issue, etc...' />
        </Row>
        <Row size={24} />
        <Row size={10}>
          <Col style={{ justifyContent: 'center', backgroundColor: materialv2.brandLight }} onPress={() => Linking.openURL(TALLAHASSEE_NON_EMERGENCY_POLICE)}>
            <Text style={{ textAlign: 'center', color: materialv2.brandDark }}>Non-Emergency Police</Text>
          </Col>
          <Col style={{ justifyContent: 'center', backgroundColor: materialv2.brandLight, borderLeftWidth: 1 }} onPress={() => Linking.openURL(TALLAHASSEE_NON_EMERGENCY_FIRE)}>
            <Text style={{ textAlign: 'center', color: materialv2.brandDark }}>Non-Emergency Fire</Text>
          </Col>
        </Row>
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

SituationSelect.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default SituationSelect
