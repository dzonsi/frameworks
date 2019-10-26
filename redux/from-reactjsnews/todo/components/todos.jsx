import React from 'react';
import { connect } from 'react-redux';

import NewTodo from './NewTodo';
import { addTodo } from '../actions';
import { deleteTodo } from '../actions';
import { addTodoPush } from '../actions';

const Todos = ({todos, dispatch}) => (
	<div>
		<h1>Todos</h1>
		<NewTodo onChange={e => {
			if(e.keyCode == 13 && e.target.value) {
				dispatch(addTodo(e.target.value));
				e.target.value = '';
			}
			if(e.target.type === 'button') {
				var target = document.getElementById("target");
				if(target.value) {
					dispatch(addTodoPush(target.value));
					target.value = '';
				}
			}
		}}
		/>
		{todos.map((todo, index) => <p key={index}>{todo} <button onClick={e => {
      dispatch(deleteTodo(index))
    }}>&times;</button></p>)}
	</div>
)

function mapStateToProps(todos) {
	return {
		todos
	}
}

export default connect(mapStateToProps) (Todos);