import React, { Component } from 'react';
import {
  FlatList,
  SectionList,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
  DatePickerIOS,// nece da radi
  ImageBackground,
  MaskedViewIOS,// nece da radi
  Modal,
  TouchableHighlight,
  Alert,
  Picker,
  ProgressBarAndroid,
  StatusBar,
  Switch,
} from 'react-native';

export default class APIComponents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      modalVisible: false,
      language: 'java',
      switchValue: false,
      count: 0
    };

    this.onPressAlert = this.onPressAlert.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.switchChange = this.switchChange.bind(this);
  }

  onPressAlert() {
    alert("You press a button!");
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  switchChange() {
    this.setState({
      switchValue: !this.state.switchValue
    });
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

	render() {

    var {switchValue} = this.state;
    var {modalVisible} = this.state;

  	return (
  		<View>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator />
          <ActivityIndicator size="large" color="red"/>
          <ActivityIndicator size="small" color="lime"/>
          <ActivityIndicator size="large" color="purple"/>
        </View>
        <View style={[styles.container, styles.horizontal]}>
          <Button
            onPress={this.onPressAlert}
            title="Press me to alert"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={[styles.container, styles.horizontal]}>
          <DatePickerIOS
            date={this.state.chosenDate}
            onDateChange={this.setDate}
          />
        </View>
        <View style={styles.main}>
          <ImageBackground
            source={require("../assets/images/img_avatar.png")}
            style={{ width: '100%', height: '100%', padding: 10 }}
          >
            <Text style={styles.mainText}>View with background image!</Text>
          </ImageBackground>
        </View>
        <MaskedViewIOS
          style={{flex: 1, flexDirection: 'row', height: '100%'}}
          maskElement={
            <View
              style={{
                // Transparent background because mask is based off alpha channel.
                backgroundColor: 'transparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 60,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Basic Mask
              </Text>
            </View>
          }>
          {/* Shows behind the mask, you can put anything here, such as an image */}
          <View style={{flex: 1, height: '100%', backgroundColor: '#324376'}} />
          <View style={{flex: 1, height: '100%', backgroundColor: '#F5DD90'}} />
          <View style={{flex: 1, height: '100%', backgroundColor: '#F76C5E'}} />
        </MaskedViewIOS>
        <View>{/* Modal */}
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
          >
            <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
             </View>
          </Modal>

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text>Show Modal</Text>
          </TouchableHighlight>
        </View>
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Php" value="php" />
        </Picker>
        <View style={styles.progressBar}>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
            color="#2196F3"
          />
        </View>
        <View>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Switch
            trackColor="red"
            thumbColor="dodgerblue"
            value={switchValue}
            onValueChange={this.switchChange}
          />
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress}
        >
          <Text> Touch Here </Text>
        </TouchableHighlight>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
        </View>
      </View>
 		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  main: {
    width: 600,
    height: 400,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    overflow: 'hidden',
  },
  mainText: {
    color: 'white',
    fontSize: 25,
  },
  progressBar: {
    width: 600,
    height: 100
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
});

APIComponents.navigationOptions = {
  title: 'API Components'
};