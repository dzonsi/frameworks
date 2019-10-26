// Define the `phonecatApp` module
var phonecatApp = angular.module("phonecatApp", [
	// which depends on the 'phoneList' module
	"phoneList",
	"phoneDetail",
	"phoneList"
]);
