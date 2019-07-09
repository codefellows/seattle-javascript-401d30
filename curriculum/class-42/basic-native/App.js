import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking } from 'react-native';
import * as Expo from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state.contacts = [];
    this.state.permission = false;
  }

  async componentDidMount() {
    const { status } = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
    this.setState({permission: status === 'granted'});
    console.log('TEST :)');
  }

  showContacts = async () => {
    const contacts = await Expo.Contacts.getContactsAsync();
    this.setState({contacts: contacts.data});
  };

  call = number => {
    const linkToPhoneNumber = `tel:${number.replace(/[\(\)\-\s+]/g, '')}`;
    // Remember to use canOpenUrl
    Linking.openURL(linkToPhoneNumber);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button  onPress={this.showContacts} title=' Show me my contacts :)'/>
        {
          // this.state.contacts.map(
          //   (contact, index) => <Text key={index}> {contact.firstName} </Text>
          // )
          <FlatList
            data = {this.state.contacts}
            keyExtractor={ item => item.id }
            renderItem = {item => {
              return (<Button
                title={`Call ${item.item.phoneNumbers[0].number}`}
                onPress={() => this.call(item.item.phoneNumbers[0].number)}
              />);
            }}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
