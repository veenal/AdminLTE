var app = angular.module('admin', [ ]);


app.directive('headerPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'header-panel.html'
		
	};
});
