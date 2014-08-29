var tttApp = angular.module('tttApp', []);

tttApp.controller('tttController', function($scope) {


$scope.cells = ['','','','','','','','',''];


});

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



