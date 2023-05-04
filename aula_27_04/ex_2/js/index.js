//Criação de app
var app = angular.module("contas", []);

//Criação do controller
app.controller("OpController", function($scope){
    $scope.tarefa= "Vamos fazer contas";
    $scope.termo1 = 1;
    $scope.termo2 = 2;
});