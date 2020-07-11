import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, H1, Content, List, ListItem, Left, Right, Text, Icon } from 'native-base'
import { SUICIDE_HOTLINE } from '../../constants/contactInfo'
import { SUICIDE_PREVENTION_SITE } from '../../constants/websites'
import * as Linking from 'expo-linking'
import materialv2 from '../../../native-base-theme/variables/variables_v2'

// TODO use dynamic data
const DirectoryInfo = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Content>
        <H1 style={{ margin: 20 }}>National Suicide Prevention Lifeline</H1>
        <List>
          <ListItem>
            <Left>
              <Text>The National Suicide Prevention Lifeline is a national network of local crisis centers that provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week. We're committed to improving crisis services and advancing suicide prevention by empowering individuals, advancing professional best practices, and building awareness.</Text>
            </Left>
          </ListItem>
          <ListItem noIndent style={{ backgroundColor: materialv2.brandInfo }} onPress={() => Linking.openURL(SUICIDE_PREVENTION_SITE)}>
            <Left>
              <Text>https://suicidepreventionlifeline.org/</Text>
            </Left>
            <Right>
              <Icon name='arrow-forward' />
            </Right>
          </ListItem>
          <ListItem noIndent style={{ backgroundColor: materialv2.brandInfo }} onPress={() => Linking.openURL(SUICIDE_HOTLINE)}>
            <Left>
              <Text>1-800-273-8255</Text>
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
