var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var TodosCollection = Backbone.Collection.extend({
  model: Todo
});

var todo1 = new Todo({title: 'Read the whole book', id: 1});
var todo2 = new Todo({title: 'Clean the room', id: 2});
var todo3 = new Todo({title: 'Go to Jamica.', id: 3});

var todos = new TodosCollection([todo1, todo2]);
console.log('Collection size: ' + todos.length);

// adding and removing models

todos.add(todo3);
console.log('Collection size: ' + todos.length);
todos.remove(todo1);
console.log('Collection size: ' + todos.length);

// retrieving models

var getTodo = todos.get(2);
// models, as objects, are passed by reference
console.log(getTodo === todo2);// true
console.log(getTodo);

// listening for events

var TodosCollection = new Backbone.Collection();
TodosCollection.on("add", function(todo) {
  console.log(`I should ${todo.get('title')}. Have I done it before? ${todo.get('completed') ? 'Yes' : 'No'}`);
});
TodosCollection.on('remove', function(todo) {
  console.log(`Todo: ${todo.get('title')} removed.`);
});

TodosCollection.add([
  { title: 'go to Jamaica', completed: false },
  { title: 'go to China', completed: false },
  { title: 'go to Disneyland', completed: true }
]);

// TodosCollection.remove(2); nece da radi
TodosCollection.remove(TodosCollection.models[0]);
//TodosCollection.models.pop();// radi ali ne pokrece on remove

TodosCollection.on("change:title", function(model) {
    console.log("Changed my mind! I should " + model.get('title'));
});

TodosCollection.add([
  { title: 'Take a break for coffe.', completed: false}
]);
console.log(TodosCollection.length);// 4

 var helpTodo = TodosCollection.models[2];
 helpTodo.set('title', 'go fishing');

console.log(TodosCollection);

// set()
 var Beatle = Backbone.Model.extend({
  defaults: {
    job: 'musician'
  }
});

var john = new Beatle({ firstName: 'John', lastName: 'Lennon'});
var paul = new Beatle({ firstName: 'Paul', lastName: 'McCartney'});
var george = new Beatle({ firstName: 'George', lastName: 'Harrison'});
var ringo = new Beatle({ firstName: 'Ringo', lastName: 'Starr'});

var theBeatles = new Backbone.Collection([john, paul, george, ringo]);
theBeatles.on("add", function(member) {
  console.log(`Added new member: ${member.get('firstName')}.`);
});
theBeatles.on("remove", function(member) {
  console.log(`Remove member: ${member.get('firstName')}.`);
});

var pete = new Beatle({ firstName: 'Pete', lastName: 'Best'});

theBeatles.set([john, paul, george, pete]);

theBeatles.remove(pete);
theBeatles.add(pete);

// underscore utility functions

theBeatles.forEach(function(model) {
  console.log(model.get('firstName'));
});

var names = theBeatles.pluck('lastName');
console.log(names);

// underscore chain()

var collection = new Backbone.Collection([
  { name: 'Tim', age: 5 },
  { name: 'Ida', age: 26 },
  { name: 'Rob', age: 55 },
  { name: 'Aaron', age: 32}
]);

var filterNames = collection.chain()
  .filter(item => item.get('age') > 10)
  .map(item => item.get('name'))
  .value();
console.log(filterNames);
console.log(filterNames.sort());