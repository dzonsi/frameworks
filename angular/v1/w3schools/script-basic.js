var app = angular.module("myApp", ["ngAnimate", "ngRoute"]);
		app.directive("w3TestDirective", function() {
			return {
				template: "<h1>Made by a directive!</h1>"
			};
		});
		app.directive("w3TestDirectiveTwo", function() {
			return {
				restrict: "C",
				template: "<h1>Made by a class directive!</h1>"
			};
		});
		app.directive("w3TestDirectiveThree", function() {
			return {
				restrict: "M",
				replace: true,
				template: "<h1>Made by a comment directive!</h1>"
			};
		});
		app.controller("myCtrl", function($scope) {
			$scope.name = "Aaron Rodgers"; // da li ide ; ili , ??? radi sa oba
			$scope.placeHolder = "You entered:";
			$scope.name2 = "Alvin Camara";
			$scope.changeName2 = function() {
				$scope.name2 = "Todd Gurley";
			}
			$scope.names = [
				{name:'Jani',country:'Norway'},
    		{name:'Hege',country:'Sweden'},
    		{name:'Kai',country:'Denmark'}
			];
		});
		app.controller("filterCtrl", function($scope) {
			$scope.firstName = "Aaron";
			$scope.lastName = "Rodgers";
			$scope.fullName = function() {
				return $scope.firstName + " " + $scope.lastName;
			}
			$scope.upperCase = function() {
				return $scope.fullName().toUpperCase();
			}
			$scope.data = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
      ];
      $scope.orderByMe = function(x) {
      	$scope.myOrderBy = x;
      }
		});
		app.service("hexafy", function() {
			this.myFunc = function(x) {
				return x.toString(16);
			}
		});// returns hexadecimal number
		app.filter("myFormat", ["hexafy", function(hexafy) {
			return function(x) {
				return hexafy.myFunc(x);
			};
		}]);
// services and http
		app.controller("servicesCtrl",
			 function($scope, $location, $timeout, $interval, hexafy, $http) {
    		$scope.myUrl = $location.absUrl();
    		$scope.myHeader = "Hello World!";
    		$timeout(function() {
    			$scope.myHeader = "AngularJS";
    		}, 2000);
    		$scope.theTime = new Date().toLocaleTimeString();
    		$interval(function() {
    			$scope.theTime = new Date().toLocaleTimeString();
    		}, 1000);
    		$scope.hex = hexafy.myFunc(255);
    		$scope.counts = [123, 74, 990, 504, 34, 7];
    		$http.get("filethatdontexist.json")
    			.then(function(response) {
    				$scope.content = response.data;
    			}, function(response) {// second function handles error
    				$scope.content = "Something went wrong:)";
    			});
		});
// select
		app.controller("selectCtrl", function($scope) {
			$scope.names = ["Mike", "Aaron", "Billy", "Alvin", "Filip", "Tom"];
			$scope.cars = [
				{model: "Ford", color: "red"},
				{model: "Mazda", color: "grey"},
				{model: "Fiat", color: "white"},
				{model: "Reno", color: "blue"}
			];
			$scope.carsObj = {
        car01 : {brand : "Ford", model : "Mustang", color : "red"},
        car02 : {brand : "Fiat", model : "500", color : "white"},
        car03 : {brand : "Volvo", model : "XC90", color : "black"}
    	};
		});
// DOM
		app.controller("domCtrl", function($scope) {
			$scope.mySwitch = true;
			$scope.hour = 14;
		});
// Event
		app.controller("eventCtrl", function($scope) {
			$scope.count = 0;
			$scope.col = "dodgerblue";
			$scope.col2 = "initial";
			$scope.size = "initial";
			$scope.change = function() {
				$scope.col2 = "royalblue";
				$scope.size = "25px";
			}
			$scope.showMe = true;
			$scope.hide = function() {
				$scope.showMe = !$scope.showMe;
			}
			$scope.cordinates = function(myE) {
				$scope.x = myE.clientX;
				$scope.y = myE.clientY;
			}
		});
// forms
		app.controller('formCtrl', function($scope) {
	    $scope.master = {firstName:"John", lastName:"Doe"};
	    $scope.reset = function() {
	        $scope.user = angular.copy($scope.master);
	    };
	    $scope.reset();
		});
// forms validation
		app.controller("valCtrl", function($scope) {

		});
		app.directive("myDirective", function() {
			return {
				require: "ngModel",
				link: function(scope, element, attr, mCtrl) {
					function myValidation(value) {
						if (value.indexOf("e") > -1) {
							mCtrl.$setValidity("charE", true);
						} else {
							mCtrl.$setValidity("charE", false);
						}
						return value;
					}
					mCtrl.$parsers.push(myValidation);
				}
			};
		});
		app.config(function($routeProvider) {
			$routeProvider
			.when("/", {
				templateUrl : "main.htm",
			})
			.when("/london", {
				templateUrl : "london.htm",
				controller : "londonCtrl"
			})
			.when("/paris", {
				templateUrl : "paris.htm",
				controller : "parisCtrl"
			});
		});
		app.controller("londonCtrl", function($scope) {
			$scope.msg = "I love London!";
		});
		app.controller("parisCtrl", function($scope) {
			$scope.msg = "I love Paris!";
		});