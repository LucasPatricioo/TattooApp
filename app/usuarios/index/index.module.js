angular.module('index-usuario', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/usuario/index", {
            templateUrl: "app/usuarios/index/index.template.html",
        })
    }])

    .controller("indexUsuariosController", function ($scope, $http, $cookies) {
        var idUsuarioCookie = $cookies.get('idusuario');

        $http({
            method: "GET",
            url: "https://api.lucaspatricio.com/Usuario/NOME/" + idUsuarioCookie
        }).then(function (success) {
            $scope.nomeUsuario = success.data.usuario;
        }, function (error) {
            console.log(error.data);
        });

        $http({
            method: "GET",
            url: "https://api.lucaspatricio.com/Postagem"
        }).then(function (success) {
            $scope.listaPostagem = success.data
        }, function (error) {
            console.log(error);
        })

        $scope.abrirModal = function (item) {
            $scope.modalData = item;

            let modal = new bootstrap.Modal(document.getElementById('modalCupom'));
            modal.show();
        }
    });