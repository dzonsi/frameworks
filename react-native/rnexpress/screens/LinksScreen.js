import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxLarge} />
      <ScrollView horizontal>
        <View style={styles.boxSmall} />
        <View style={styles.boxSmall} />
        <View style={styles.boxSmall} />
        <View style={styles.boxSmall} />
        <View style={styles.boxSmall} />
      </ScrollView>
      <View style={styles.boxLarge} />
      <View style={styles.boxSmall} />
      <ScrollView style={styles.customView}>
        <View style={styles.boxSmallGreen} />
        <View style={styles.boxSmallGreen} />
        <View style={styles.boxSmallGreen} />
        <View style={styles.boxSmallGreen} />
        <View style={styles.boxSmallGreen} />
      </ScrollView>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'ScrollView from reactnativeexpress',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  boxSmall: {
    width: 400,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  boxSmallGreen: {
    width: 400,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'limegreen',
  },
  boxLarge: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
  customView: {
    width: '100%',
    height: 500
  }
});
