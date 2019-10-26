describe('Tests for TodoView', function() {
	beforeEach(function() {// app.TodoView is not a constructor ???
        $('body').append('<ul id="todoList"></ul>');
        this.todoView = new app.TodoView({ model: new app.Todo() });
    });


    afterEach(function() {
        this.todoView.remove();
        $('#todoList').remove();
    });

    it('Should be tied to a DOM element when created, based off the property provided.', function() {
    //what html element tag name represents this view?
    expect(this.todoView.el.tagName.toLowerCase()).toBe('li');
});

});