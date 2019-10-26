angular.
	module("phonecatApp").
	config(["$routeProvider",
		function config($routeProvider) {
			$routeProvider.
				when("/phones", {
					template: "<phone-list></phone-list>"
				}).
				when("phones/:phoneID", {
					template: "<phone-detail></phone-detail>"
				}).
				otherwise("/phones");
		}
]);