var app = angular.module('admin', [ ]);


app.directive('headerPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'header-panel.html'
		
	};
});
<<<<<<< HEAD

app.directive('sidebarPanel', function() {
	return {
		restrict: 'E',
		templateUrl: 'sidebar-panel'

	};
});

app.directive('csidebarPanel', function() {
	return {
		restrict: 'E',
		templateUrl: 'csidebar-panel'

	};
});

app.controller('EmailController',function(){
	// body...
	this.mail = [
		{
			id: "123@456.com",
			message: "hello"
		},
		{
			id : "abc@alpha.com",
			message: "hello there how are you"
		},
		{
			id: "xyz@beta.com",
			message: "hello world"
		}
		];
	});


/*var gems = [
	{
		id: "123@456.com",
		message: "hello"
	},
		{
			id : "abc@alpha.com",
			message: "hello there how are you"
		},
		{
			id: "xyz@beta.com",
			message: "hello world"
		}
		];*/
=======
>>>>>>> ddd096b4d9b596536274cd27bf988e0afd5c631f
