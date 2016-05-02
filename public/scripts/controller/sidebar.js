/**
* myApp Module
*
* Description
*/
angular.module('myApp')
	.controller('sidebarCtrl', ['$scope', '$http', function($scope, $http){
		$scope.list =[];
		$http({
			method:'GET',
			url :'api/sidebar.json'
		}).success(function(data){
			$scope.list = data.data;
		});
	}]);