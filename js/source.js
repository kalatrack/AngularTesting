
var nameSpace = angular.module('myApp', []);

	nameSpace.controller('MyInfo', function ($scope){
		$scope.author = {

			name: 'Hussain',
			title: 'MScIT', 
			company:'locking for Good name', 
			location:'Lahore in SomeWheres'
		};
	});

	