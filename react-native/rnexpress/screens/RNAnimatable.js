import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

import * as Animateble from 'react-native-animatable';

const colors = ['#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F'];
const animations = ['fadeIn', 'shake', 'rubberBand', 'zoomOut', 'fadeOut'];

export default class RNAnimateble extends Component {

	state = {
    animation: animations[0],
    shakeAnimation: 'shake'
  };

  nextAnimation = () => {
    const {animation} = this.state;
    const nextIndex = (animations.indexOf(animation) + 1) % animations.length;

    this.setState({ animation: animations[nextIndex]});
  }

  shakeAnimation = () => {
    // this.setState({shakeAnimation: 'shake'});
    // this.forceUpdate();
    // kako pokrenuti animaciju opet
    // sa istom animacijom???
    const animation = this.state.shakeAnimation;
    {animation === 'shake' ?
      this.setState({shakeAnimation: 'rubberBand'}) :
      this.setState({shakeAnimation: 'shake'});}
  }

  handleViewRef = ref => this.view = ref;// dodao sa rna imprerative usage

	renderItem = (color, i) => {

    const {animation} = this.state;

  	return (
  		<Animateble.View
        key={i + 1}
        animation={animation}
        delay={i * 200}
        style={[styles.button, {backgroundColor: color}]}
      >
        <Text style={styles.text}>Tap me {i + 1}</Text>
      </Animateble.View>
 		);
	}

  render() {
    const {animation} = this.state;
    const {shakeAnimation} = this.state;

    return (
      <View>
        <TouchableOpacity
          // use key to force re-render when we switch animation
          key={animation}
          onPress={this.nextAnimation}
        >
          {colors.map(this.renderItem)}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.shakeAnimation}
        >
          <Animateble.View
            style={styles.shakeContainer}
            animation={shakeAnimation}
            ref={this.handleViewRef}// dodao sa rna imprerative usage
          >
            <Text style={styles.shakeText}>Tap me</Text>
          </Animateble.View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  shakeContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd'
  },
  shakeText: {
    color: 'tomato',
    fontSize: 25,
  }
});

RNAnimateble.navigationOptions = {
  title: 'RN Animateble library'
};