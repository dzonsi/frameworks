import { exampleMixin } from './mixin/mixin.js';

var mixin = {
	created: function() {
		this.hello();
	},
	methods: {
		hello: function() {
			console.log('Hello from mixin!')
		}
	}
}

Vue.directive('focus', {
	inserted: function(el) {
		el.focus();
	}
});

Vue.directive('demo', function(el, binding) {
	console.log(binding.value.color);
	console.log(binding.value.text);
	el.style.backgroundColor = binding.value.backgroundColor;
});

Vue.directive('example',{
	bind: function(el, binding, vnode) {
		var s = JSON.stringify
		el.innerHTML =
			'name: '       + s(binding.name) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
	}
});

/* render functions */

Vue.component('anchored-heading', {
	render: function(createElement) {
		return createElement('div',
      Array.apply(null, { length: this.num }).map(function () {
      	return createElement('a', {
      		attrs: {
      			href: 'https://www.google.com/',// kako ubaciti url???
      			target: '_blank'
      		},
      	}, ['Google'])
    	})
    )
	},
	props: ['url', 'num']
});

Vue.component('nice', {
	props: ['url'],
	render: function(createElement) {
		return createElement(
			'div',
			{
				class: {
					strong: true
				}
			},
			[
				createElement('h1', 'A h1 headline'),
				createElement(
					'a',
					{ attrs:
						{ href: this.url,
      			target: '_blank'},
      			class: {
      				nice: true
      			}
      		},
      		'Google')
			]
		)
	}
});

Vue.component('items', {
	props: ['items'],
	render: function(createElement) {
		if (this.items.length) {
			return createElement('ul', this.items.map(function(item) {
				return createElement('li', item)
			}))
		} else {
			return createElement('p', 'No items found')
		}
	}
});

Vue.component('message', {
	props: ['message'],
	render: function (createElement) {
  	// `<div><slot></slot></div>`
 	 return createElement(
 	 	'div',
 	 	{class: {strong: true}},
 	 	this.$slots.default)
	}
});

Vue.component('custom-button', {
	functioanal: true,
	render: function(createElement, context) {
		return createElement('button', context.data, context.children)
	}
});// kako definisati context????

var app = new Vue({
	el: '#app',
	data: {
		show: true,
		show2: true,
		show3: true,
		show4: true,
		show5: false,
		isEditing: true,
		docState: 'saved',
		docState2: 'edited',
		state: true,
		view: 'v-a',
		items: [1,2,3,4,5,6,7,8,9],
		nextNum: 10,
		items2: [1,2,3,4,5,6,7,8,9],
		number: 0,
		tweenedNumber: 0,
		message: 'Google',
		url: 'https://www.google.com/',
		data : {
			attrs: 'Click me',
			on: 'listeners'
		}
	},
	mixins: [mixin, exampleMixin],
	created: function() {
		this.logMessage();
	},
	components: {
		'v-a': {
			template: '<h3>Component A</h3>'
		},
		'v-b': {
			template: '<h3>Component B</h3>'
		}
	},
	methods: {
		beforeEnter: function(el) {
			el.style.opacity = 0;
		},
		enter: function(el, done) {
			Velocity(el, { opacity: 1, fontSize: '1.4em'}, { duration: 300});
			Velocity(el, { fontSize: '1em'}, { complete: done});
		},
		leave: function(el, done) {
			Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
			Velocity(el, { rotateZ: '100deg' }, { loop: 2 });
			Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done });
		},
		randomIndex: function() {
			return Math.floor(Math.random() * this.items.length);
		},
		add: function() {
			this.items.splice(this.randomIndex(), 0, this.nextNum++);
		},
		remove: function() {
			this.items.splice(this.randomIndex(), 1);
		},
		shuffle: function () {
      this.items2 = _.shuffle(this.items2);
    }
	},
	computed: {
		buttonMessage: function() {
			switch(this.docState2) {
				case 'saved': return 'Edit'
				case 'edited': return 'Save'
      	case 'editing': return 'Cancel'
			}
		},
		animatedNumber: function() {
			return this.tweenedNumber.toFixed(0);
		}
	},
	watch: {
		number: function(newValue) {
			TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue});
		}
	}
});