angular.module('index-usuario').component('indexUsuario',{
    template:`<div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <p class="h1">
                Bem vindo, {{nomeUsuario}}
            </p>
        </div>
    </div>
    <div class="row modal-usuario-dashboard">
        <div class="col-12 col-md-6 mb-2" ng-repeat="item in listaPostagem">
            <div class="card card-index my-4" style="width: 21rem;">
                <div class="card-body">
                    <h5 class="card-title text-center">{{item.titulo}}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary text-center">{{item.dataPostagem}}</h6>
                    <p class="card-text">
                        <img alt="imagemPostagem" src="https://i.pinimg.com/736x/e8/c6/d2/e8c6d2ecb31f284015564f8fd4caf3d6.jpg" class="rounded img-thumbnail">
                    </p>

                    <div class="col-12 d-grip gap-2">
                        <button class="btn btn-primary w-100" ng-click="abrirModal(item)">Ver Mais</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="modalCupom" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="modalCupomLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalCupomLabel">{{modalData.titulo}}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                
                <p class="">Mussum Ipsum, cacilds vidis litro abertis.  Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Paisis, filhis, espiritis santis. Bota 1 metro de cachacis aí pra viagem! Quem num gosta di mim que vai caçá sua turmis!</p>
                <h6 class="my-2 text-body-secondary text-right">{{modalData.dataPostagem}}</h6>
                
                <img alt="imagemPostagem" src="https://i.pinimg.com/736x/e8/c6/d2/e8c6d2ecb31f284015564f8fd4caf3d6.jpg" class="rounded img-thumbnail">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Salvar</button>
            </div>
        </div>
    </div>
</div>`,
    controller: "indexUsuariosController"
})