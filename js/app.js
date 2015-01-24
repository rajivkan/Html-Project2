var htmlApp = angular.module('htmlApp', ['ngRoute']);
htmlApp.config(['$routeProvider', '$controllerProvider',
    function($routeProvider, $controllerProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'template/home.html',
                controller: 'homeViewCtrl'
            })
            .when('/about', {
                template: '<div>About view</div>',
                controller: 'aboutViewCtrl'
            })
            .when('/contact', {
                templateUrl: 'template/contact.html',
                controller: 'contactViewCtrl'
            })
            .when('/detail/:personId', {
                templateUrl: 'template/detail.html',
                controller: 'detailViewCtrl'
            })
           }
    ]);

var arrayData = [];
htmlApp.controller("homeViewCtrl", ["$scope", "$http", function($scope, $http){
	$scope.message = "Home View Comtroller"
	// $scope.persons = [{"name": "ABc 1",
	// 			"address": "Address 1"},
	// 			{"name": "Abc 2", 
	// 			"address": "Address 2"},
	// 			{"name": "Abc 3", 
	// 			"address": "Address 3"},
	// 			{"name": "Abc 4", 
	// 			"address": "Address 4"}
	// ];

	$http.get("data/data.json?1").success(function(result){
		$scope.persons = result.persons;
		arrayData = result.persons;
	}).error(function(error){
		alert("error");
	});
	$scope.displayView = function(){
		alert("call");
	}

}]);

htmlApp.controller("detailViewCtrl", ["$scope", '$routeParams', function($scope, $routeParams){
	for(var i=0; i < arrayData.length; i++){
		if(arrayData[i].id == $routeParams.personId){
			$scope.name = arrayData[i].name;
			$scope.address = arrayData[i].address;
			$scope.courses = arrayData[i].course;
			break;
		}
	}
}]);

htmlApp.controller("aboutViewCtrl", ["$scope", function($scope){
	$scope.message = ""
}]);

htmlApp.controller("contactViewCtrl", ["$scope", function($scope){
	$scope.message = ""
}]);

htmlApp.directive("login", function(){
	return{
		restrict: 'C',
		templateUrl: 'template/login.html',
		controller: "loginController"
	}
});

htmlApp.controller("loginController", ["$scope", function($scope){
	$scope.username = "test";
	$scope.password = "password";
}])