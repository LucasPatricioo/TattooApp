angular.module('login-usuario', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/login", {
            templateUrl: "app/usuarios/login/login.template.html",

            controller: "loginUsuarioController"
        });
    }])


    .controller("loginUsuarioController", function ($scope, $location, $http,$cookies) {
        $scope.login = function () {
            // $location.path('/usuario/index');
            
            let telefoneLoginInput = $scope.telefoneLoginInput;
            let senhaLoginInput = $scope.senhaLoginInput;
            
            $http({
                method: "GET",
                url: `https://api.lucaspatricio.com/Usuario/LOGIN/TELEFONE=${telefoneLoginInput}/SENHA=${senhaLoginInput}`
            }).then(function success(response) {
                    $cookies.put('idusuario',response.data.idUsuario);
                    $location.path('/usuario/index');
                }, function error(response) {
                    $scope.aluno = response.data;
                }
            );
        };
    });
