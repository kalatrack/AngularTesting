// now it is angular ng-change directive //

var firstController = angular.module('Apps',[]);
firstController.controller('firstController', function($scope){
		$scope.counter = 1;
		$scope.ad = 1;
	
	$scope.adds = function(){
		$scope.ad ++;
		$scope.counter = $scope.ad;
	}
	$scope.str = function(){
		$scope.ad --;
		$scope.counter =$scope.ad;
	}
});



//little search app
var list = function($scope){
	$scope.people = [
		{name: "Tom", age: "40"},
		{name: "Hussain", age: "50"},
		{name: "Adil", age: "20"},
		{name: "Asim", age: "30"},
		{name: "Nokail", age: "15"}

	];
	$scope.add = function(){
		var newItem = {name: $scope.nname, age: $scope.nage}
		$scope.people.push(newItem);
	};
	
	$scope.remove = function(index){
		$scope.people.splice(index,1);
	};
};


//This is for Time update live app

function dates($scope){
	$scope.clock = new Date();
	var updateclock = function (){
		$scope.clock = new Date();
	};
	setInterval(function(){
		$scope.$apply(updateclock);
	},1000);
	updateclock();
};

//This take input field value and display it on the client side 

	function hellos($scope){
		$scope.hello_message = "Hellow Dear i Try to load Angular HAHAHAHHA...........!!!";
	};

//this is simple test of value or variables to perform MVC artichecture requirement.

	function myFirstTest($scope){
		$scope.first_var = "Hello Hussain";
		$scope.second_var = "Hello hussain Second Time using angular test lab";
	};
