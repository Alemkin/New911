import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { Container, Content, List, ListItem, Text, Left, Right, Icon, Item, Input } from 'native-base'
import { Image } from 'react-native'
import { DIRECTORYINFO } from '../../constants/navigation'
import { allResources } from '../../constants/contactInfo'
import { setDirectorySelection } from '../../reducers/directory'

const Directory = ({ navigation }) => {
  const dispatch = useDispatch()
  const handlePress = (directoryInfo, url) => () => {
    dispatch(setDirectorySelection(directoryInfo))
    navigation.navigate(url)
  }

  const [filteredResources, setFilteredResources] = useState(allResources)

  const filterResources = text => {
    const newItems = allResources.filter(x => x.name.indexOf(text) > -1)
    setFilteredResources(newItems)
  }
  return (
    <Container>
      <StatusBar style='light' />
      <Content>
        <Image accessibilityIgnoresInvertColors style={{ alignSelf: 'center', width: 150, height: 150 }} source={require('../../../assets/logo_icon.png')} />
        <Item>
          <Icon active ios='ios-search' android='md-search' style={{ color: 'white' }} />
          <Input placeholder='Search Directory' onChangeText={filterResources} />
        </Item>
        <List>
          {!!filteredResources && !!filteredResources.length && filteredResources.map((resource, i) => {
            return (
              <ListItem key={resource.name + i} noIndent onPress={handlePress(resource, DIRECTORYINFO)}>
                <Left>
                  <Text>{resource.name}</Text>
                </Left>
                <Right>
                  <Icon name='arrow-forward' />
                </Right>
              </ListItem>
            )
          })}
        </List>
      </Content>
    </Container>
  )
}

Directory.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Directory
