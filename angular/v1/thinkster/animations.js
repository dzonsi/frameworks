function TestCtrl() {
  var self = this;

  self.showBoxOne = false;
  self.showBoxTwo = false;

  self.people = [
  	{ name: "Eric Simons" },
    { name: "Albert Pai" },
    { name: "Matthew Greenster" }
  ];
  self.bigger = false;
  self.lightTheme = false;

  self.newName = "";

  self.add = function() {
  	var obj = {};
  	obj.name = self.newName;
  	self.people.push(obj);
  }
}

angular.module('app', ['ngAnimate'])
.controller('TestCtrl', TestCtrl);