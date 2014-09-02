var tttApp = angular.module('tttApp', ["firebase"]);

tttApp.controller('tttController', ["$scope", "$firebase", 
	function($scope, $firebase) {

var fb = new Firebase("https://mintchoco.firebaseio.com/");
var angConnect = $firebase(fb).$asObject();
var fbData = angConnect.$bindTo($scope, 'db').then(function() {


$scope.db = {cells:['','','','','','','','','']}

});


// $scope.firstPlayer = prompt('What\'s your name?');
// $scope.secondPlayer = prompt('What\'s your name?');


$scope.player1 = 0;
$scope.player2 = 0;

$scope.checkXWin = function() {
	if ($scope.db.cells[0] === 'X' && $scope.db.cells[1] === 'X' && $scope.db.cells[2] === 'X') {
		$scope.xFunctions();}
	else if ($scope.db.cells[3] === 'X' && $scope.db.cells[4] === 'X' && $scope.db.cells[5] === 'X') {
		$scope.xFunctions();}
	else if ($scope.db.cells[6] === 'X' && $scope.db.cells[7] === 'X' && $scope.db.cells[8] === 'X') {
		$scope.xFunctions();}
	else if ($scope.db.cells[0] === 'X' && $scope.db.cells[3] === 'X' && $scope.db.cells[6] === 'X') {
		$scope.xFunctions();}
	else if ($scope.db.cells[1] === 'X' && $scope.db.cells[4] === 'X' && $scope.db.cells[7] === 'X') {
		$scope.xFunctions();}
	else if ($scope.db.cells[2] === 'X' && $scope.db.cells[5] === 'X' && $scope.db.cells[8] === 'X') {
		$scope.xFunctions();}
	else if ($scope.db.cells[0] === 'X' && $scope.db.cells[4] === 'X' && $scope.db.cells[8] === 'X') {
		$scope.xFunctions();}
	else if ($scope.db.cells[2] === 'X' && $scope.db.cells[4] === 'X' && $scope.db.cells[6] === 'X') {
		$scope.xFunctions();}
	else if (numMoves == 9) {
		alert("Cat's Game! Meow!");
		$scope.resetGame();
		if (player % 2 === 0) {
			player = 2;
		}
		else {
			player = 3;
		}
	}
};


$scope.checkOWin = function() {
	if ($scope.db.cells[0] === 'O' && $scope.db.cells[1] === 'O' && $scope.db.cells[2] === 'O') {
		$scope.oFunctions();}
	else if ($scope.db.cells[3] === 'O' && $scope.db.cells[4] === 'O' && $scope.db.cells[5] === 'O') {
		$scope.oFunctions();}
	else if ($scope.db.cells[6] === 'O' && $scope.db.cells[7] === 'O' && $scope.db.cells[8] === 'O') {
		$scope.oFunctions();}
	else if ($scope.db.cells[0] === 'O' && $scope.db.cells[3] === 'O' && $scope.db.cells[6] === 'O') {
		$scope.oFunctions();}
	else if ($scope.db.cells[1] === 'O' && $scope.db.cells[4] === 'O' && $scope.db.cells[7] === 'O') {
		$scope.oFunctions();}
	else if ($scope.db.cells[2] === 'O' && $scope.db.cells[5] === 'O' && $scope.db.cells[8] === 'O') {
		$scope.oFunctions();}
	else if ($scope.db.cells[0] === 'O' && $scope.db.cells[4] === 'O' && $scope.db.cells[8] === 'O') {
		$scope.oFunctions();}
	else if ($scope.db.cells[2] === 'O' && $scope.db.cells[4] === 'O' && $scope.db.cells[6] === 'O') {
		$scope.oFunctions();}
	else if (numMoves == 9) {
		alert("Cat's Game! Meow!");
		$scope.resetGame();
		if (player % 2 === 0) {
			player = 2;
		}
		else {
			player = 3;
		}
	}
};



$scope.xFunctions = function() {
	alert("Player 1 Wins!!");
	$scope.player1 += 1; 
	$scope.resetGame();
}


$scope.oFunctions = function() {
	alert("Player 2 Wins!!");
	$scope.player2 += 1;
	$scope.resetGame();
}


$scope.resetButt = function() {
	if (player >= 6) {
		document.getElementById('resetButton').style.visibility = 'hidden';
	}
	else if (player < 6) {
		document.getElementById('resetButton').style.visibility = 'visible';
	}
}


$scope.goFirstPlayer = function() {
	if (player % 2 === 0) {
	document.getElementById('firstPlayer').style.visibility = 'visible';
	}
	else {
	document.getElementById('firstPlayer').style.visibility = 'hidden';
	}

}


$scope.goSecondPlayer = function() {
	if (player % 2 === 0) {
	document.getElementById('secondPlayer').style.visibility = 'hidden';
	}
	else {
	document.getElementById('secondPlayer').style.visibility = 'visible';
	}

}


$scope.resetGame = function() {
	$scope.db.cells = ['','','','','','','','',''];
	numMoves = 0;
	player = 2;
}


var player = 2;
var numMoves = 0;

$scope.alternate = function($index) {

	if ($scope.db.cells[$index] === '') { 

		if (player % 2 === 0) {
			

			player++;
			$scope.db.cells[$index] = 'X';
			numMoves++;
			// console.log(numMoves);
			console.log(player);
			$scope.checkXWin();
			$scope.goSecondPlayer();
		}
		else {
			player++;
			$scope.db.cells[$index] = 'O';
			numMoves++;
			//console.log(numMoves);
			$scope.checkOWin();
			$scope.goFirstPlayer();
		}
  	}
	}

}]);
































































/*

switch() {
case 1:
 cells[0] == 'X' && cells[1] == 'X' && cells[2] == 'X';
 alert("Yipee!");
 break;
}

}





switch

case 1:
 cells[0] == 'X' && cells[1] == 'X' && cells[2] == 'X';
 break;

case 2:
 cells[3] == 'X' && cells[4] == 'X' && cells[5] == 'X';
 break;

case 3:
 cells[6] == 'X' && cells[7] == 'X' && cells[8] == 'X';
 break;

case 4: 
 cells[0] == 'X' && cells[0] == 'X' && cells[0] == 'X';
 break;


 cells[0] == 'X' && cells[0] == 'X' && cells[0] == 'X'
 cells[0] == 'X' && cells[0] == 'X' && cells[0] == 'X'
 cells[0] == 'X' && cells[0] == 'X' && cells[0] == 'X'
 cells[0] == 'X' && cells[0] == 'X' && cells[0] == 'X'

cells[0] == 'O' && cells[0] == 'O' && cells[0] == 'O'
cells[0] == 'O' && cells[0] == 'O' && cells[0] == 'O'
cells[0] == 'O' && cells[0] == 'O' && cells[0] == 'O'
cells[0] == 'O' && cells[0] == 'O' && cells[0] == 'O'
cells[0] == 'O' && cells[0] == 'O' && cells[0] == 'O'
cells[0] == 'O' && cells[0] == 'O' && cells[0] == 'O'
cells[0] == 'O' && cells[0] == 'O' && cells[0] == 'O'
cells[0] == 'O' && cells[0] == 'O' && cells[0] == 'O'









/*



$scope.i = 2

$scope.xoro = function() {
for (i=2; i<10; i++) {
	if (i % 2 = 0) {
		console.log(i);
	}
	else {console.log("Hi!");
	}
	}
}








	if (i%2=0) {
		document.getElementById('ninedivs').innerHTML = 'X';
	}
	else {
		document.getElementById('ninedivs').innerHTML = 'O';
	}
}
};






if (cells[0] === X && cells[1] === X && cells[2] === X) {
	alert("You won!");
}






/*
switch
 case 

 A1 === X && A2 === X && A3 === X
 A4 === X && A5 === X && A6 === X
 A7 === X && A8 === X && A9 === X
 A1 === X && A4 === X && A7 === X
 A2 === X && A5 === X && A8 === X
 A3 === X && A6 === X && A9 === X
 A1 === X && A5 === X && A9 === X
 A3 === X && A5 === X && A7 === X

A1 === O && A2 === O && A3 === O
A4 === O && A5 === O && A6 === O
A7 === O && A8 === O && A9 === O
A1 === O && A4 === O && A7 === O
A2 === O && A5 === O && A8 === O
A3 === O && A6 === O && A9 === O
A1 === O && A5 === O && A9 === O
A3 === O && A5 === O && A7 === O


switch: A1 === O && A2 === O && A3 === O
highlight A1, A2, A3 
alert "0 wins!"


*/


/*


var tttApp = angular.module('tttApp', ['firebase']);

tttApp.controller('tttController', ["$scope", "firebase"
	function($scope) {

		*/





/*


var firebase = new Firebase("FB url/store")
var storeDetails = $firebase(firebase);
var storeDetailsObject = storeDetails.$asObject();
storeDetailsObject.$bindTo($scope, 'db');

var storeDetails = $firebase(new Firebase("donutshoppe.firebaseio.com/));
storeDetails.$asObject().bindTo($scope, 'storeDetails').
	.then(function() {
		// GUARANTEED that $scope.storeDetails exists (takes time to retrieve from DB)
		$scope.storeDetails.address = "Broadway";
		OR
		$scope.storeDetails.address = initialDB;
	});



var initialDB = {
	"address": "On Broadway",
	"hours": "9 to 5"
}

$scope.storeDetails.address = "Broadway";


-------------------------------


var initialDB = {
	address: "On Broadway",
	hours: "9 to 5",
	cells = ['', '', ''],
	gameInProgress: true
}	

var firebase = new Firebase("FB url/store")
var storeDetails = $firebase(firebase);
var storeDetailsObject = storeDetails.$asObject();



storeDetailsObject.$bindTo($scope, 'storeDetails')
	.then(function() {
		// GUARANTEED that $scope.storeDetails exists (takes time to retrieve from DB)

		// Initialize DB if game not in progress
		if (!$scope.storeDetails.gameInProgress) {
		$scope.storeDetails = initialDB;
		}
	});











$scope.db = {
		cells:['','','','','','','','','']
	};

});













*/
