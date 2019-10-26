// define value
mainApp.value("defaultValue", 10);
// define factory method
mainApp.factory("MathService",function() {
	var factory = {};

	factory.multiply = function(a, b) {
		return a * b;
	}
	return factory;
});
// define service
mainApp.service("CalcService", function(MathService) {
	this.square = function(a) {
		return MathService.multiply(a, a);
	}
});
// define Provider
mainApp.config(function($provide) {
	$provide.provider("MathDivider", function() {
		this.$get = function() {
			var factory = {};
			factory.divide = function(a) {
				return a / 2;
			}
			return factory;
		};
	});
});
mainApp.controller("studentController", function($scope, $http, CalcService, defaultValue, MathDivider) {
	$scope.defaultValueNumber = defaultValue;
	$scope.student = {
		firstName : "Aaron",
		lastName : "Rodgers",
		fees: 500,

		subjects: [
			{name: "Physics", marks: 70},
			{name: "Chemistry", marks: 80},
			{name: "Math", marks: 65},
			{name: "English", marks: 75},
			{name: "Hindi", marks: 67}
		],
		fullName: function() {
			var studentObject;
			studentObject = $scope.student;
			return studentObject.firstName + " " + studentObject.lastName;
		}
	};
	$scope.student2 = {
		firstName: "John",
		lastName: "Doe",
		email: "jd@example.com",
		reset: function() {
			$scope.student2.firstName = "John";
			$scope.student2.lastName = "Doe";
		  $scope.student2.email = "jd@example.com";
		}
	}
	$scope.student3 = {
		firstName : "Alvin",
		lastName: "Camara",
		position: "runing back",
		fullName: function() {
			var student = $scope.student3;
			return student.firstName + " " + student.lastName;
		}
	}
	$scope.ctrlMessage = "I am studentsController";
	$scope.type = "students";
	$http.get("data.json").then(function(response) {
		$scope.studentsFile = response.data;
	});
	// services
	$scope.square = function() {
		$scope.result = CalcService.square($scope.number);
	}
	// provider
	$scope.divide = function() {
		$scope.result2 = MathDivider.divide($scope.number2);
	}
});
mainApp.config(["$routeProvider", function($routeProvider) {
	$routeProvider
	.when("/addStudent", {
		templateUrl: "addStudent.htm",
		controller: 'addStudentController'
	})
	.when("/viewStudents", {
		templateUrl: "viewStudents.htm",
		controller: "viewStudentsController"
	})
	.otherwise({
		redirectTo: "/addStudent"
	});
}]);
mainApp.controller("addStudentController", function($scope) {
	$scope.message = "This page will be used to display add student form";
	$scope.ctrlMessage = "I am addStudentController";
});
mainApp.controller("viewStudentsController", function($scope) {
	$scope.message = "This page will be used to display all the students";
	$scope.ctrlMessage = "I am viewStudentsController";
	$scope.type = "view";
});