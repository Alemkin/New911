import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, Content, List, ListItem, Text } from 'native-base'

const Directory = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Content>
        <List>
          <ListItem itemDivider>
            <Text>Mental Health</Text>
          </ListItem>
          <ListItem noIndent>
            <Text>Social Worker</Text>
          </ListItem>
          <ListItem noIndent>
            <Text>Suicide Hotline</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Physical</Text>
          </ListItem>
          <ListItem noIndent>
            <Text>Non Emergency Police</Text>
          </ListItem>
          <ListItem noIndent>
            <Text>Non Emergency Fire Department</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}

Directory.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Directory
