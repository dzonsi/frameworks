var myModel = {
	name: "Ashley",
	age: 24,
	friends: [
    { name: "Bob", age: 21 },
    { name: "Jane", age: 20 },
    { name: "Anna", age: 29 }
  ],
  search: ""
};

Vue.component('sitepoint', {
	props: ['channel'],
  template: '<a href="https://www.sitepoint.com/{{ channel | lowercase }}">' +
 '{{ channel }} @Sitepoint</a>',
});

var myCiewModel = new Vue({
	el: '#my_view',
	data: myModel,

	methods: {
		myClickHandler: function(e) {
			alert('Hello' + this.name);
		}
	}
});