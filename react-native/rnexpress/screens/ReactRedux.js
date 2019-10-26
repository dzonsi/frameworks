import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import List from '../components/List';
import Input from '../components/Input';
import Title from '../components/Title';

import { actionCreators } from '../components/TodoListRedux';
import store from '../components/Store';

const mapStateToProps = (state) => ({
  todos: state.todos,
})

class App extends Component {

  onAddTodo = (text) => {
    const {dispatch} = this.props;

    dispatch(actionCreators.add(text));
  }

  onRemoveTodo = (index) => {
    const {dispatch} = this.props;

    dispatch(actionCreators.remove(index));
  }

	render() {

    const {todos} = this.props;

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

connect(mapStateToProps)(App);

export default function ReactRedux() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactRedux.navigationOptions = {
  title: 'React Redux State'
};