Vue.component('first', {
	template: '<h1>This is a component!</h1>'
});
Vue.component('todo-item', {
	props: ['todo'],
	template: '<li> {{ todo.text }}</li>'
});
Vue.component('todo-item2',{
	template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
	props: ['title']
});
Vue.component('blog-post', {
	props: ['post'],
	template: '<div>\
						<h3>{{ post.title }}</h3>\
						<button v-on:click="$emit(\'enlarge-text\')">Enlarge text</button>\
						<button v-on:click="$emit(\'ensmall-text\', 0.1)">Ensmall text</button>\
						<div v-html="post.content"></div>\
						</div>'
});
Vue.component('tab-home', {
	template: '<div>Home component</div>'
});
Vue.component('tab-posts', {
	template: '<div>Posts component</div>'
});
Vue.component('tab-archive', {
	template: '<div>Archive component</div>'
});

var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue',
		message2: 'You loaded this page on ' + new Date().toLocaleString(),
		seen: true,
		todos: [
			{ text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
		],
		message3: 'Hello Vue.js!',
		message4: "Hello world!",
		groceryList: [
			{ id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
		],
		className: 'nice',
		isButtonDisabled: true,
		attributeName: 'href',// nece da radi v-bind:[attributeName]
		attributeName2: 'target',// nece da radi,isto
		googleUrl: 'https://www.google.com/',
		target: '_blank',
		firstName: 'Foo',
		lastName: 'Bar',
		fullName: 'Foo Bar',
		isFirst: true,
		isSecond: false,
		error: null,
		activeColor: 'navy',
		fontSize: 30,
		styleObject: {
			color: 'mediumseagreen',
			fontSize: '25px'
		},
		items: [
			{ message: 'First'},
			{ message: 'Second'},
			{ message: 'Third'},
			{ message: 'Fourth'}
		],
		object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    },
    numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    newTodoText: '',
    todos2: [
    	{
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4,
    counter: 0,
    check1: false,
    checkedNames: [],
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ],
    selected: 'B',
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ],
    postFontSize: 1,
    currentTab: 'Home',
    tabs: ['Home', 'Posts', 'Archive']
	},
	methods: {
		hide: function() {
			this.seen = !this.seen;
		},
		reverseMessage: function() {
			this.message3 = this.message3.split('').reverse().join('');
		},
		svakiTreci: function(n) {
			return n.filter(function(num) {
				return num % 3 === 0;
			})
		},
		addNewTodo: function() {
			if(this.newTodoText !== '') {
				this.todos2.push({
					id: this.nextTodoId++,
					title: this.newTodoText
				})
				this.newTodoText = '';
			}
		},
		greet: function(event) {
			alert(this.message + '!');
			if(event) {
				alert(event.target.tagName);
			}
		},
		onSmallText: function(ensmallAmount) {
			this.postFontSize -= ensmallAmount;
		}
	},
	// stanje kada vue renderuje element
	created: function() {
		console.log('message is: ' + this.message);
	},
	computed: {
		reversedMessage: function() {
			return this.message.split('').reverse().join('');
		},
		classObject: function() {
			return {
				first: this.isFirst && !this.error,
				'second': this.error && this.error.type === 'fatal'
			}
		},
		evenNumbers: function() {
			return this.numbers.filter(function(n) {
				return n % 2 === 0;
			})
		},
		currentTabComponent: function() {
			return 'tab-' +
				this.currentTab.toLowerCase();
		}
	},
	watch: {
		firstName: function(val) {
			this.fullName = val + ' ' + this.lastName;
		},
		lastName: function(val) {
			this.fullName = this.firstName + ' ' + val;
		}
	}
});

var second = new Vue({
	el: '#new',
	data: {
		message: 'Nikola',
		message2: true
	},
	methods: {
		toggle: function() {
			this.message2 = !this.message2;
		}
	}
})