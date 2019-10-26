var app = app || {};

app.Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	},
	validate: function(attrs) {
		if(attrs.title.length < 6) {
			console.log('validate faild')
			return 'Your todo is too short.';
		}
	},
	toggle: function() {
		this.save({
			completed: !this.get('completed')
		});
	}
});