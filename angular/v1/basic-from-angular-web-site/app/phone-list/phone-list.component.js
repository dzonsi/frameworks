// Register `phoneList` component, along with its associated
//  controller and template
angular.
	module("phoneList").
	component("phoneList", { // This name is what AngularJS uses
// to match to the `<phone-list>` element.

		// The URL is relative to our `index.html` file
		templateUrl: "phone-list/phone-list.template.html",
		controller: function PhoneListController($http) {
			var self = this;
			this.orderProp = "age";

			$http.get("phones/phones.json").then(function(response) {
				self.phones = response.data;
			});
		}

});