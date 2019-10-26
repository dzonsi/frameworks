import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

import Toggle from '../components/Toggle';

export default class HomeScreen extends Component {

  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

  render() {
    const {flexDirection, alignItems, justifyContent} = this.state;
    const layoutStyle = {flexDirection, justifyContent, alignItems};

    const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical';
    const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal';

    return (
      <View style={styles.container}>
        <Toggle
          label={'Primary axis (flexDirection)'}
          value={flexDirection}
          options={['row', 'column']}
          onChange={(option) => this.setState({flexDirection: option})}
        />
        <Toggle
          label={primaryAxis + ' distribution (justifyContent)'}
          value={justifyContent}
          options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between']}
          onChange={(option) => this.setState({justifyContent: option})}
        />
        <Toggle
          label={secondaryAxis + ' alignment (alignItems)'}
          value={alignItems}
          options={['flex-start', 'center', 'flex-end', 'stretch']}
          onChange={(option) => this.setState({alignItems: option})}
        />
        <View style={[styles.layout, layoutStyle]}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  title: 'Flexbox from reactnativeexpress.com'
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 40,
    backgroundColor: 'steelblue',
    margin: 5,
  },
});
