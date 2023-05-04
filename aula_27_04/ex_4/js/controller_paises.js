var app = angular.module("paisesApp", []);
app.controller("PaisesController", function($scope){
    $scope.capitais = [{capital: "Brasilia", pais: "Brasil"},
        {capital: "Madrid", pais:"Espanha"},
        {capital: "Berlim", pais:"Alemanha"}];
});