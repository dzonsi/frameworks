describe('Test for Todo', function() {

	it('Can be created with default values for its attributes.', function() {
		var todo = new app.Todo();
		expect(todo.get('title')).toBe('');
		expect(todo.get('completed')).toBe(false);
	});

	it('Can contain custom validation rules, and will trigger an invalid event on failed validation.', function() {

		var errorCallback = jasmine.createSpy('-invalid event callback-');

		var todo = new app.Todo();

		todo.on('invalid', errorCallback);

		todo.set({completed: 'A non boolean value'}, {validate: true});

		var errorArgs = errorCallback.mostRecentCall.args;
// errorCallback.mostRecentCall is undefined ???
		expect(errorArgs).toBeDefined();
		expect(errorArgs[0]).toBe(todo);
		expect(errorArgs[1]).toBe('Todo.completed must be a boolean value.');

	});

	it('Calls the set method on todo.', function() {

		var todo = new app.Todo();
		spyOn(todo, 'set');
		todo.set({completed: 'A non boolean value'});
		expect(todo.set).toHaveBeenCalled();

	});

	it('Calls the set method with one argument', function() {

		var todo = new app.Todo();
		spyOn(todo, 'set');
		todo.set({completed: 'A non boolean value'}, {validate: true});
		expect(todo.set).toHaveBeenCalledWith({completed: 'A non boolean value'}, {validate: true});

	});

});