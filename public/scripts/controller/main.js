/**
* myApp Module
*
* Description
*/
angular.module('myApp')
	.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
		$scope.showSideBar = true;
		$scope.sideBarStausChange = function(val) {
			if(val == 'show') {
				$scope.showSideBar = true;
			} else {
				$scope.showSideBar = false;
			}
		}
		$scope.showGraph = function(param) {
			$http({
				method:'GET',
				url :'api/graphs.json'
			}).success(function(data){
				$scope.graph = data.data[param];
			});
		}
		$scope.showGraph('Sales');
	}])