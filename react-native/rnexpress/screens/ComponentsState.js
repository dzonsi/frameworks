import React, { Component } from 'react';
import { FlatList, SectionList, Text, View, StyleSheet } from 'react-native';

import List from '../components/List';
import Input from '../components/Input';
import Title from '../components/Title';

export default class ComponentsState extends Component {

	state = {
    todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
  }

  onAddTodo = (text) => {
    const {todos} = this.state;

    this.setState({
      todos: [text, ...todos],
    })
  }

  onRemoveTodo = (index) => {
    const {todos} = this.state;

    this.setState({
      todos: todos.filter((todo, i) => i !== index)
    })
  }// napisati drugaciju funkciju za uklanjanje todo-a

	render() {

    const {todos} = this.state;

  	return (
  		<View>
  			<Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
  		</View>
 		);
	}
}

ComponentsState.navigationOptions = {
  title: 'Components State'
};