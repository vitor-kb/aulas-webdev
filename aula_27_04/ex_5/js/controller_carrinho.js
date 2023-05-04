var app = angular.module("carrinhoApp", []);

app.controller("CarrinhoController", function($scope){
    $scope.items = [{nome:"Cabo HDMI", quantidade: 1, preco: 22.00},{nome: "Teclado", quantidade: 3, preco:300.00},{nome: "Pen Drive", quantidade: 2, preco: 100.00}];
    $scope.remove = function(index){
        $scope.items.splice(index, 1);
    }
});