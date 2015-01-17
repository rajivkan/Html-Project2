var htmlApp = angular.module('htmlApp', ['ngRoute']);
htmlApp.config(['$routeProvider', '$controllerProvider',
    function($routeProvider, $controllerProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'template/home.html',
                controller: 'homeViewCtrl'
            })
            .when('/about', {
                templateUrl: 'template/about.html',
                controller: 'aboutViewCtrl'
            })
            .when('/contact', {
                templateUrl: 'template/contact.html',
                controller: 'contactViewCtrl'
            })
           }
    ]);


htmlApp.controller("homeViewCtrl", ["$scope", "$http", function($scope, $http){
	$scope.message = "Home View Comtroller"
	$scope.persons = [{"name": "ABc 1",
				"address": "Address 1"},
				{"name": "Abc 2", 
				"address": "Address 2"},
				{"name": "Abc 3", 
				"address": "Address 3"},
				{"name": "Abc 4", 
				"address": "Address 4"}
	];
}]);

htmlApp.controller("aboutViewCtrl", ["$scope", function($scope){
	$scope.message = ""
}]);

htmlApp.controller("contactViewCtrl", ["$scope", function($scope){
	$scope.message = ""
}]);