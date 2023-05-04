const date = new Date();

//Criação de app
var app = angular.module("data", []);

//Criação do controller
app.controller("OpData", function($scope){
    $scope.dataDia = date.getDate(); 
    $scope.dataMes = date.getMonth() + 1;
    $scope.dataAno = date.getFullYear();
    $scope.hora = date.getHours();
    $scope.minuto = date.getMinutes();
});