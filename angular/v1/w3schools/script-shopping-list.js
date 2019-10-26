var app = angular.module("myShoppingList", []);

app.controller("myCtrl", function($scope) {
	$scope.products = ["Milk", "Bread", "Cheese"];
	$scope.addItem = function() {
		$scope.errortext = "";
		if (!$scope.addMe) { return;}
		if ($scope.products.indexOf($scope.addMe) == -1) {
			$scope.products.push($scope.addMe);
			$scope.addMe = "";
		} else {
			$scope.errortext = "This item is already in your shoping list.";
			$scope.addMe = "";
		}
	}
	$scope.addItemEnter = function($event) {
		$scope.errortext = "";
		if ($event.keyCode === 13) {
			if (!$scope.addMe) { return;}
			if ($scope.products.indexOf($scope.addMe) == -1) {
				$scope.products.push($scope.addMe);
				$scope.addMe = "";
			} else {
				$scope.errortext = "This item is already in your shoping list.";
				$scope.addMe = "";
			}
		}
	}
	$scope.removeItem = function(x) {
		$scope.errortext = "";
		$scope.products.splice(x, 1);
	}
});