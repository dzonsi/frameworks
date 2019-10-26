describe('Tests for TodoList', function() {

	it('Can add Model instances as objects and arrays.', function() {

		var todos = new TodoList();

		expect(todos.length).toBe(0);

		todos.add({ title: 'Clean the kitchen' });

		expect(todos.length).toBe(1);

		todos.add([
			{ title: 'Do the laundry', completed: true },
			{ title: 'Go to the gym'}
		]);

		expect(todos.length).toBe(3);

	});

	it('Can have a model property to define all models in collection', function() {
		var todos = new TodoList();
		expect(todos.model).toBe(app.Todo);
	});

	// isto moze i za url ako imamo definisan

	// TodoList methods test

	it('Can return all completed todos', function() {
		var todos = new TodoList();

		todos.add([
			{ title: 'Do the laundry', completed: true },
			{ title: 'Go to the gym'},
			{ title: 'Clean the kitchen' }
		]);

		expect(todos.completed().length).toBe(1);
	});

	it('Can return all uncompleted todos', function() {
		var todos = new TodoList();

		todos.add([
			{ title: 'Do the laundry', completed: true },
			{ title: 'Go to the gym'},
			{ title: 'Clean the kitchen' }
		]);

		expect(todos.remaining().length).toBe(2);
	});

});