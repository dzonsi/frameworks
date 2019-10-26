var Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	},
	initialize: function() {
		console.log('New model has been initialize.');
	}
});

var myTodo = new Todo({
	title: 'Check attributes property of the logged models in the console.'
});

var TodoView = Backbone.View.extend({
	tagName: 'li',
	// Cache the template function for a single item.
	todoTpl: _.template( $('#item-template').html() ),
	events: {
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},
	initialize: function() {
		this.$el = $('#todo');
		this.render();
	},
	render: function() {
		this.$el.html( this.todoTpl( this.model.attributes));
		this.input = this.$('.edit');
		return this;
	},
	edit: function() {

	},
	close: function() {

	},
	updateOnEnter: function(e) {

	}
});

var todoView = new TodoView({model: myTodo});