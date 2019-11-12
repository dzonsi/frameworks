Template.RecipeSingle.onCreated(function(){
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('SingleRecipe', id);
	});
	this.editMode = new ReactiveVar(false);
});
// zasto nece this da radi u helpers i events
Template.RecipeSingle.helpers({
	recipe: ()=> {
		var id = FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
	},
	updateRecipeId: function() {
		var id = FlowRouter.getParam('id');
		return id;
		// return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	}
});

Template.RecipeSingle.events({
	'click .toggle-menu': function() {
		var id = FlowRouter.getParam('id');
		var inMenu = Recipes.findOne({_id: id}).inMenu;
		Meteor.call('toggleMenuItem', id, inMenu);
		//Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-pencil': function (event, template) {
		template.editMode.set(!template.editMode.get());
	},
	'click .fa-trash': function () {
		var confirm = window.confirm('Are you sure you want to delete recipe?');
		if(confirm) {
			var id = FlowRouter.getParam('id');
			Meteor.call('deleteRecipe', id);
			if(!Recipes.findOne({_id: id})) {
				FlowRouter.go('recipe-book');
			}
		}
	}
});