/**
* myApp Module
*
* Description
*/
angular.module('myApp')
	.controller('topTilesCtrl', ['$scope', '$http', function($scope, $http){
		$scope.list =[];
		$http({
			method:'GET',
			url :'api/topTiles.json'
		}).success(function(data){
			$scope.list = data.data;
		});
	}]);