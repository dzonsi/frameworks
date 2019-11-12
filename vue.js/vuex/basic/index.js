const store = new Vuex.Store({
	state: {
		count: 0,
		todos: [
			{ id: 1, text: 'first', done: true },
      { id: 2, text: 'second', done: false },
      { id: 3, text: 'third', done: true },
      { id: 4, text: 'fourth', done: false }
		]
	},
	// mutations are synchronous transactions
	mutations: {
		increment: state => state.count ++,
		decrement: state => state.count --,
		// mutations with payload
		incrementWithNumber (state, n) {
			state.count += n;
		},
		// mutations with payload as object
		addNewTodo: (state, payload) => state.todos.push(payload)
	},
	// getters are something like computed properties for store
	// getters resoult is cached based on its dependencies
	getters: {
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		},
		// getters will also receive other gatters as the 2nd argument
		doneTodosLength: (state, getters) => {
			return getters.doneTodos.length
		},
		getTodoById: (state) => (id) => {
			return state.todos.find(todo => todo.id === id)
		}
	},
	// actions commit mutations
	// actions can be asynchronous
	actions: {
		increment(context) {
			context.commit('increment');
			console.log(context)
		},
		decrement({ commit }) {
			commit('decrement');
		},
		asyncIncrement({ commit }) {
			setTimeout(() => {
				commit('increment')
			}, 2000);
		}
	}
});

new Vue({
	el: '#app',
	computed: {
		count() {
			return store.state.count
		}
	},
	methods: {
		increment() {
			store.commit('increment');
		},
		decrement() {
			store.commit('decrement');
		},
		incrementWithNumber() {
			store.commit('incrementWithNumber', 10);
		},
		incrementActions() {
			store.dispatch('increment');
		},
		decrementActions() {
			store.dispatch('decrement');
		},
		asyncActionIncrement() {
			store.dispatch('asyncIncrement');
		}
	}
});

const Counter = {
	template: `<div>{{ count }} injected in component Counter</div>`,
	computed: {
		count() {
			return this.$store.state.count
		}
	}
}

const Practice = {
	template: `
		<div>
			<h1>From store: {{ count }}, from component data.number: {{ number }}</h1>
			<button @click="incrementWithNumber">Increment with data.number</button>
			<h2> Done todos: {{ doneTodos }} </h2>
			<h3> Done todos length: {{ doneTodosCount }} </h3>
			<h3> Todo with id 3: {{ getTodo }} </h3>
			<input type="text" placeholder="id" v-model="newTodo.id"/>
			<input type="text" placeholder="text" v-model="newTodo.text"/>
			<input type="checkbox" v-model="newTodo.done"/>
			<button @click="addNewTodo">Add new Todo</button>
		</div>
	`,
	data: () => {
		return {
			number: 7,
			newTodo: {
				id: 5,
				text: 'fifth',
				done: true
			}
		}
	},
	computed: {
		count() {
			return this.$store.state.count
		},
		doneTodos() {
			return this.$store.getters.doneTodos
		},
		doneTodosCount() {
    	return this.$store.getters.doneTodosLength
  	},
  	getTodo() {
  		return this.$store.getters.getTodoById(3)
  	}
	},
	methods: {
		incrementWithNumber() {
			this.$store.commit('incrementWithNumber', this.number);
		},
		addNewTodo() {
			this.$store.commit('addNewTodo', {...this.newTodo});
			// not working if newTodo.done is false, why ???
		}
	}
}

const app2 = new Vue({
	el: '#app2',
	store,// inject store into all child components of the root
	// available on them as this.$store
	components: { Counter, Practice },
	template: `
		<div>
      <counter></counter>
      <practice></practice>
    </div>
	`
});


// Modules

const moduleA = {
  state: { count: 0 },
  mutations: {
    increment (state) {
      // state is the local module state
      state.count++
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },
  actions: {
  	// context or object destruction { state, commit, rootState }
  	// contaxt.state will expose local state
  	// context.rootState will expose root state
  	incrementIfOddOnRootSum ({ state, commit, rootState }) {
  		console.log(rootState)
      if ((state.count + rootState.number) % 2 === 1) {
        commit('increment');
      }
    }
  }
}

const moduleB = {
	// registered module
	// all getters, actions and mutations are local
	// and will be automatically namespaced
	namespaced: true,
  state: {
  	todos: [
			{ id: 1, text: 'first', done: true },
      { id: 2, text: 'second', done: false },
      { id: 3, text: 'third', done: true },
      { id: 4, text: 'fourth', done: false }
		]
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
    }
  },
  getters: {
    doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		}
  },
  actions: {
  	addTodoIfEvenLength: context => {
  		if(context.state.todos.length % 2 != 1) {
  			context.commit('addTodo', {
  				id: 5, text: 'fifth', done: false
  			});
  		}
  	}
  }
}

const secondStore = new Vuex.Store({
	modules: {
		a: moduleA,
		b: moduleB
	},
	state: {
		number: 7
	}
});

new Vue({
	el: '#app3',
	computed: {
		count() {
			return secondStore.state.a.count
		},
		todos() {
			return secondStore.state.b.todos
		}
	},
	methods: {
		increment() {
			secondStore.commit('increment');
		},
		addTodo() {
			// namespaced module b/addTodo
			secondStore.commit('b/addTodo', {
  			id: 5, text: 'fifth', done: true
  		});
		},
		actionIncrement() {
			secondStore.dispatch('incrementIfOddOnRootSum');
		},
		actionAdd() {
			// namespaced module b/addTodo
			secondStore.dispatch('b/addTodoIfEvenLength');
		}
	}
});