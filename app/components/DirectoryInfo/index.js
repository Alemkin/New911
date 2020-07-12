import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import { Container, H1, Content, List, ListItem, Left, Right, Text, Icon } from 'native-base'
import { selectDirectory } from '../../reducers/directory'
import * as Linking from 'expo-linking'
import materialv2 from '../../../native-base-theme/variables/variables_v2'

// TODO use dynamic data
const DirectoryInfo = ({ navigation }) => {
  const directory = useSelector(selectDirectory)
  const directoryInfo = directory.directoryInfo
  return (
    <Container>
      <StatusBar style='light' />
      <Content>
        <H1 style={{ margin: 20 }}>{directoryInfo.name}</H1>
        <List>
          <ListItem>
            <Left>
              <Text>{directoryInfo.description}</Text>
            </Left>
          </ListItem>
          <ListItem noIndent style={{ backgroundColor: materialv2.brandInfo }} onPress={() => Linking.openURL(directoryInfo.website)}>
            <Left>
              <Text>{directoryInfo.website}</Text>
            </Left>
            <Right>
              <Icon name='arrow-forward' />
            </Right>
          </ListItem>
          <ListItem noIndent style={{ backgroundColor: materialv2.brandInfo }} onPress={() => Linking.openURL(directoryInfo.number)}>
            <Left>
              <Text>{directoryInfo.number}</Text>
            </Left>
            <Right>
              <Icon name='arrow-forward' />
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}

DirectoryInfo.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default DirectoryInfo
