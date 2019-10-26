import React, { Component } from 'react';
import { FlatList, SectionList, Text, View, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

const rows = [
  { id: 0, text: 'View' },
  { id: 1, text: 'Text' },
  { id: 2, text: 'Image' },
  { id: 3, text: 'ScrollView' },
  { id: 4, text: 'ListView' },
];

const sections = [
  {
    id: 0,
    title: 'Basic Components',
    data: [
      {id: 0, text: 'View'},
      {id: 1, text: 'Text'},
      {id: 2, text: 'Image'},
    ]
  },
  {
    id: 1,
    title: 'List Components',
    data: [
      {id: 3, text: 'ScrollView'},
      {id: 4, text: 'ListView'},
    ]
  }
];

const extractKey = ({ id }) => id;

export default class SettingsScreen extends Component {

	renderItem = ({ item }) => {
		return (
			<Text style={styles.row}>
				{item.text}
			</Text>
		)
	}

	renderSectionHeader = ({ section }) => {
		return (
			<Text style={styles.header}>
				{section.title}
			</Text>
		)
	}

	render() {
  	return (
  		<View>
  			<Text style={styles.sectionList}>Flat List</Text>
  			<FlatList
  				style={styles.container}
  				data={rows}
  				renderItem={this.renderItem}
  				keyExtractor={extractKey}
  			/>
  			<Text style={styles.sectionList}>Section List</Text>
  			<SectionList
  				style={styles.container}
  				sections={sections}
  				renderSectionHeader={this.renderSectionHeader}
  				renderItem={this.renderItem}
  				keyExtractor={extractKey}
  			/>
  		</View>
 		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  sectionList: {
  	fontSize: 25,
  	color: 'tomato',
  	padding: 10
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
});

SettingsScreen.navigationOptions = {
  title: 'Flat and Section Lists',
};
