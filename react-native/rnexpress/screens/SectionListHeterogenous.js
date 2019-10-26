import React, { Component } from 'react';
import { FlatList, SectionList, Text, View, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';


const sectionsHeterogenous = [
  {
    id: 0,
    title: 'Basic Components',
    data: [
      {id: 0, text: 'View'},
      {id: 1, text: 'Text'},
      {id: 2, text: 'Image'},
    ],
    renderItem: ({item}) => {
      return (
        <Text style={styles.row}>
          {item.text}
        </Text>
      )
    }
  },
  {
    id: 1,
    title: 'List Components',
    data: [
      {id: 3, text: 'ScrollView'},
      {id: 4, text: 'ListView'},
    ],
    renderItem: ({item}) => {
      return (
        <Text style={styles.rowDark}>
          {item.text}
        </Text>
      )
    }
  }
]

const extractKey = ({ id }) => id;

export default class SectionListHeterogenous extends Component {

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
  			<Text style={styles.sectionList}>Section List Heterogenous</Text>
  			<SectionList
  				style={styles.container}
  				sections={sectionsHeterogenous}
  				renderSectionHeader={this.renderSectionHeader}
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
  rowDark: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
  },
  sectionList: {
  	fontSize: 25,
  	color: 'tomato',
  	padding: 10
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'royalblue',
    color: 'white',
    fontWeight: 'bold',
  },
});

SectionListHeterogenous.navigationOptions = {
  title: 'Section List Heterogenous'
};