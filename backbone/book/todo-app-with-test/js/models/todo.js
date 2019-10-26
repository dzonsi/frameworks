var app = app || {};

app.Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	},
	toggle: function() {
		this.save({
			completed: !this.get('completed')
		});
	},
	validate: function(attrs) {// namerno ima gresku u drugom uslovu
		if (attrs.hasOwnProperty('completed') && !_.isBoolean(attrs.completed)) {
			return 'Todo.completed must be a boolean value.';
		}
	}
});