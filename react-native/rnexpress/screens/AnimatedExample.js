import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedText = Animated.createAnimatedComponent(Text);

export default class AnimatedExample extends Component {

	state = {
    height: new Animated.Value(100),
    width: new Animated.Value(500),
    fontSize: new Animated.Value(25)
  };

  startAnimation = () => {
    const {height, width, fontSize} = this.state;

    height.setValue(100)// reset value if needed
    width.setValue(500)
    fontSize.setValue(25)

    // start spring animation
    Animated.spring(height, {toValue: 300, friction: 0.8}).start();
    Animated.spring(width, {toValue: 1000, friction: 0.8}).start();
    Animated.spring(fontSize, {toValue: 42, friction: 0.8}).start();
  }

  componentDidMount() {
    // this.startAnimation();
  }

	render() {

    const {height, width, fontSize} = this.state;

  	return (
  		<AnimatedTouchableOpacity
        onPress={this.startAnimation}
        style={[styles.button, {height, width}]}
      >
        <AnimatedText onPress={this.startAnimation} style={[styles.text, {fontSize}]}>
          Tap Me
        </AnimatedText>
      </AnimatedTouchableOpacity>
 		);
	}
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25
  },
});

AnimatedExample.navigationOptions = {
  title: 'Animated example'
};