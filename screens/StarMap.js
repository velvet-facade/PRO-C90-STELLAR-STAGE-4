import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';

const path =
  'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true';

export default class StarMapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>StarMap Screen!</Text>
        <WebView
          scalesPageToFit={true}
          source={{ uri: path }}
          style={{ marginBottom: 20, marginTop: 20 }}
        />
        <TextInput
          style={{
            backgroundColor: '#4C3A51',
            height: 40,
            width: '100%',
            textAlign: 'center',
            borderRadius: 20,
          }}
          placeholder="enter your latitude"
          placeholderTextColor="white"
          onChangeText={(text) =>
            this.setState({
              latitude: text,
            })
          }
        />
        <TextInput
          style={{
            backgroundColor: '#4C3A51',
            height: 40,
            width: '100%',
            textAlign: 'center',
            borderRadius: 20,
            marginTop: '5%',
          }}
          placeholder="enter your longitude"
          placeholderTextColor="white"
          onChangeText={(text) =>
            this.setState({
              longitude: text,
            })
          }
        />
      </View>
    );
  }
}
