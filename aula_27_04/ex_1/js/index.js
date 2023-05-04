//Criação de app
var app = angular.module("helloWorld", []);

//Criação do controller
app.controller("HelloController", function($scope){
    $scope.boasvindas = "Hello, World!";
});