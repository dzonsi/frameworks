angular.
	module("phoneDetail").
	component("phoneDetail", {
		template: "TBD Detail view for <span>{{$ctrl.phoneID}}</span>",
		controller: ["$routeParams",
			function PhoneDetailController($routeParams) {
				this.phoneId = $routeParams.phoneId;
			}
		]
	});