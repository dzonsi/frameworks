import React, { Component } from 'react';
import { View } from 'react-native';

import List from '../components/List';
import Input from '../components/Input';
import Title from '../components/Title';

import { actionCreators } from '../components/TodoListRedux';
import store from '../components/Store';

export default class ReduxState extends Component {

	state = {};

  componentWillMount() {
    const {todos} = store.getState();
    this.setState({todos});

    this.unsubscribe = store.subscribe(() => {
      const { todos } = store.getState();
      this.setState({todos});
    })
  }

  componentWillUnmound() {
    this.unsubscribe();
  }

  onAddTodo = (text) => {
    store.dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    store.dispatch(actionCreators.remove(index))
  }

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

ReduxState.navigationOptions = {
  title: 'Redux State'
};