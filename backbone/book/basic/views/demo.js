var TodoView = Backbone.View.extend({
	tagName: 'li',
	className: 'container',
	id: 'first',
	todoTpl: _.template('An example template'),
	events: {
		'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit':   'close'
	},
	initialize: function(options) {
		this.options = options || {};
	},
	render: function() {
		this.$el.html( this.todoTpl( this.model.attributes));
		this.input = this.$('.edit');
		return this;
	},
	edit: function() {
    // executed when todo label is double clicked
  },
  close: function() {
    // executed when todo loses focus
  },
  updateOnEnter: function( e ) {
    // executed on each keypress when in todo edit mode,
    // but we'll wait for enter to get in action
  }
});

var todoView = new TodoView();

console.log(todoView.el);


var button1 = $('<button></button>');
var button2 = $('<button></button>');

var View = Backbone.View.extend({
  events: {
    click: function(e) {
      console.log(view.el === e.target);
    }
  }
});

var view = new View({el: button1});
view.setElement(button2);

button1.trigger('click');
button2.trigger('click');// true

var view2 = new Backbone.View;
view2.setElement('<p><a><b>test</b></a></p>');
console.log(view2.$('a b').html()); // outputs "test"

// render()

var ItemView = Backbone.View.extend({
  events: {},
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

var ListView = Backbone.View.extend({
	render: function() {
		var items = this.model.get('items');

		_.each(items, function(item) {
			var itemView = new ItemView({ model: item });
			this.$el.append(itemView.render().el);
		}, this);
	}
});

// events

// 'eventName selector': 'callbackFunction'

var TodoView = Backbone.View.extend({
  initialize: function() {
    this.model.bind('change', _.bind(this.render, this));
  }
});// using _.bind to re-render our view when a model changes