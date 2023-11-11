angular.module('perfil-usuario', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/usuario/perfil", {
            templateUrl: "app/usuarios/perfil/perfil.template.html"
        })
    }])
    
    .controller("perfilUsuarioController", function($scope,$http,$cookies){
        var idusuario = $cookies.get('idusuario');
        console.log("id usuario: " + idusuario);
        $http({
            method: "GET",
            url: "https://api.lucaspatricio.com/Usuario/ID/" + idusuario
        }).then(function (success){
            let cpfInput = document.getElementById('cpfInput');
            cpfInput.value = success.data.cpf;
            
            let nomeInput = document.getElementById('nomeInput');
            nomeInput.value = success.data.nome;
            $scope.nomeUsuarioLogado = nomeInput.value;
            
            let sobrenomeInput = document.getElementById('sobrenomeInput');
            sobrenomeInput.value = success.data.sobrenome;
            
            let telefoneInput = document.getElementById('telefoneInput');
            telefoneInput.value = success.data.telefone;
            
            let dataInput = document.getElementById('dataNascimentoInput');
            dataInput.value = success.data.dataNascimento.slice(0,10);
            
            console.log(success.data);
        }, function (error){
            console.log(error.data);
        });
    });
