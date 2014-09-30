


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
