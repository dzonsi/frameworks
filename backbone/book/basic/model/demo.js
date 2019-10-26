var Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	},
	validate: function(attributes) {
		if(attributes.title === '') {
			return 'Remember to set a title for your todo.';
		}
	},
	initialize: function() {
		console.log('This model has been initialized.');
		this.on('change', function() {
			console.log('Values for this model have changed.');
		});
		this.on('change:title', function() {
			console.log('Value of title have changed.');
		});
		this.on('invalid', function(model, error) {
			console.log(error);
		});
	}
});

var todo1 = new Todo();
console.log(JSON.stringify(todo1));

var todo2 = new Todo({
	title: 'Check the attributes of both model instances in the console.',
  completed: true
});
console.log(JSON.stringify(todo2));

var todo3 = new Todo({
  title: 'This todo is done, so take no action on this one.',
  completed: true
});
console.log(JSON.stringify(todo3));

// get()

console.log(todo1.get('title')); // empty string
console.log(todo1.get('completed')); // false

console.log(todo2.get('title')); // Check the attributes of both model instances in the console.
console.log(todo2.get('completed')); // true

var todoAttributes = todo2.toJSON();// clone all of model's data attributes
console.log(todoAttributes);
console.log(JSON.stringify(todoAttributes));

// set()

todo1.set('title', 'Title attribute set through Model.set().');
console.log(todo1.get('title'));
todo2.set({
	title: 'Title changed with set()',
	completed: false
});
console.log(JSON.stringify(todo2));


var Person = new Backbone.Model();
Person.on('change:name', function() {
	console.log('Name changed');
});
Person.set({name: 'Andrew'});
Person.set({name: 'Jeremy'}, {silent: true});

console.log(Person.hasChanged('name'));// true

// validation
Person.validate = function(attrs) {
	if (!attrs.name) {
		return 'I need your name.'
	}
};


var todo4 = new Todo();
todo4.set('completed', true, {validate: true});
console.log(todo3);
console.log(todo4);
console.log(todo4.get('completed'));// false