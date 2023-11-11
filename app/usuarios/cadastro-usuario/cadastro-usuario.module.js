angular.module('cadastro-usuario', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/novo-usuario", {
            templateUrl: "app/usuarios/cadastro-usuario/cadastro-usuario.template.html",
            controller: "cadastroNovoUsuario"
        });
    }])
    .controller("cadastroNovoUsuario", function ($scope, $http, $location) {
       
        let elemento = document.getElementById('cpfInput');
        elemento.addEventListener('change', function(){
            $http({
                method: "GET",
                url: "https://api.lucaspatricio.com/Usuario/CPF/" + elemento.value.replace(/[.-]/g, '')
            }).then(function success(response) {
                
                $scope.nomeUsuarioInput = response.data.nome;
                $scope.sobrenomeUsuarioInput = response.data.sobrenome;
                
                let elementoDataNascimento = document.getElementById('dataNascimentoInput');
                elementoDataNascimento.value = response.data.dataNascimento.slice(0,10);
                
            }, function error(response) {
                $scope.usuario = response.data;
            });
        })

        $scope.adicionaUsuario = function(){
            
            let dataNascimentoInput = document.getElementById('dataNascimentoInput');
            
            let cpfValue = $scope.cpfInput;
            let dataNascimentoValue = dataNascimentoInput.value;
            
            let nomeUsuarioValue = $scope.nomeUsuarioInput;
            let sobrenomeUsuarioValue = $scope.sobrenomeUsuarioInput;
            
            let telefoneValue = $scope.telefoneUsuarioInput;
            let senhaValue = $scope.senhaUsuarioInput;
            
            
            
            dadosRequisicao = `{
                                  "cpf": "${cpfValue}",
                                  "nome": "${nomeUsuarioValue}",
                                  "sobrenome": "${sobrenomeUsuarioValue}",
                                  "dataNascimento": "${dataNascimentoValue}",
                                  "telefone": "${telefoneValue}",
                                  "senha": "${senhaValue}"
                                }`
            
            $http({
                method: "POST",
                url: "https://api.lucaspatricio.com/Usuario",
                data: dadosRequisicao,
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(function(success){
                $location.path('/login');
            }, function(error){
                console.log('deu errado');
            });
        }
    })