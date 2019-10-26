import { createStore } from 'redux';
import todos from './reducers/todos';
export default createStore(
	todos,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);