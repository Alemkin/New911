import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Container, H1, Button, Text } from 'native-base'
import ButtonSelect from '../ButtonSelect'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { RESOURCESELECT, ROOT } from '../../constants/navigation'
import * as issues from '../../constants/issues'
import { setSpecificIssue } from '../../reducers/userFlow'

const PhysicalSelect = ({ navigation }) => {
  const dispatch = useDispatch()
  const handlePress = (key, url) => () => {
    dispatch(setSpecificIssue(key))
    console.log('url', url)
    navigation.navigate(url)
  }
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
          <ButtonSelect name={issues.PHYSICAL_1} handlePress={handlePress(issues.PHYSICAL_1, RESOURCESELECT)} />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect name={issues.PHYSICAL_2} handlePress={handlePress(issues.PHYSICAL_2, RESOURCESELECT)} />
        </Row>
        <Row size={20} style={{ justifyContent: 'center' }}>
          <ButtonSelect name={issues.PHYSICAL_3} handlePress={handlePress(issues.PHYSICAL_3, RESOURCESELECT)} />
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
