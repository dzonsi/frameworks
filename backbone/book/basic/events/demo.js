Backbone.on('event', function() {
  console.log('Handled Backbone event');
});
Backbone.trigger('event');


var ourObject = {};

_.extend(ourObject, Backbone.Events);

ourObject.on('dance', function(msg) {
  console.log(`We triggered ${msg}`);
});

ourObject.trigger('dance', 'our event');

function dancing(msg) {
  console.log(`We started ${msg}`);
}

ourObject.on('dance:tap', dancing);
ourObject.on('dance:break', dancing);

ourObject.trigger("dance:tap", "tap dancing. Yeah!");
ourObject.trigger("dance:break", "break dancing. Yeah!");

// all

var secondObj = {};
_.extend(secondObj, Backbone.Events);

secondObj.on('all', function(eventName) {
  console.log("The name of the event passed was " + eventName);
});

secondObj.trigger("dance:tap", "tap dancing. Yeah!");
secondObj.trigger("dance:break", "break dancing. Yeah!");
secondObj.trigger("dance", "break dancing. Yeah!");

// off

ourObject.off('dance:tap');
ourObject.trigger("dance:tap", "tap dancing. Yeah!");// no log


function jumping (msg) {
  console.log("We are jumping. " + msg);
}

var thirdObj = {};
_.extend(thirdObj, Backbone.Events);

thirdObj.on('move', dancing);
thirdObj.on('move', jumping);

thirdObj.trigger('move', 'Yeah!');// both listeners are called

thirdObj.off('move', dancing);
thirdObj.trigger('move', 'Yeah, jump, jump!');


// multiple list of events
var fourthObj = {};
_.extend(fourthObj, Backbone.Events);
fourthObj.on('dance', jumping);
fourthObj.on('jump', jumping);
fourthObj.on('skip', jumping);

fourthObj.trigger("dance jump skip", 'Very tired from so much action.');


// multiple arguments
function doAction (action, duration) {
  console.log("We are " + action + ' for ' + duration ); 
}

var fifthObj = {};
_.extend(fifthObj, Backbone.Events);

fifthObj.on("dance", doAction);
fifthObj.on("jump", doAction);
fifthObj.on("skip", doAction);

fifthObj.trigger('dance jump skip', 'on fire', '15 minutes');


// listenTo() and stopListening()

var a = _.extend({}, Backbone.Events);
var b = _.extend({}, Backbone.Events);
var c = _.extend({}, Backbone.Events);

a.listenTo(b, 'anything', function(event){ console.log("anything happened"); });
a.listenTo(c, 'everything', function(event){ console.log("everything happened"); });

b.trigger('anything');

a.stopListening();

b.trigger('anything');
c.trigger('everything');