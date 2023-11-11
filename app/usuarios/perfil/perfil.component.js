angular.module('perfil-usuario').component('perfilUsuario', {
    template: `<div class="container">
    <section id="perfil_usuario">
        <header>
            <div class="row text-center mb-3">
                <div class="col-12">
                    <img src="../../../assets/img/icons/man.png"
                        class="rounded-circle card-dashboard imagem-perfil-usuario mt-3">
                </div>
            </div>
            <div class="row text-center mb-3">
                <div class="col-12">
                    <p class="h1" ng-bind="nomeUsuarioLogado"></p>
                </div>
            </div>
        </header>
        <div class="container card modal-usuario-dashboard">
            
            <div class="row">
                <div class="col-12 col-md-6 my-2">
                    <label for="cpfInput" class="form-label">Cpf</label>
                    <input type="text" class="form-control" id="cpfInput" placeholder="111.111.111-11" disabled>
                </div>
                <div class="col-12 col-md-6 my-2">
                    <label for="dataNascimentoInput" class="form-label">Data Nascimento</label>
                    <input type="date" class="form-control" id="dataNascimentoInput" disabled>
                </div>         
            </div>

            <div class="row">
                <div class="col-12 col-md-6 my-2">
                    <label for="nomeInput" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="nomeInput" placeholder="Nome" disabled>
                </div>
                <div class="col-12 col-md-6 my-2">
                    <label for="sobrenomeInput" class="form-label">Sobrenome</label>
                    <input type="text" class="form-control" id="sobrenomeInput" placeholder="Sobrenome" disabled>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12 col-md-6 my-2">
                    <label for="telefoneInput" class="form-label">Telefone</label>
                    <input type="tel" class="form-control" id="telefoneInput" placeholder="(99) 9 9999-9999">
                </div>
                <div class="col-12 col-md-6 my-2">
                    <label for="passInput" class="form-label">Senha</label>
                    <input type="password" class="form-control" id="passInput" placeholder="***************">
                </div>
            </div>
            
            <div class="row">
                <div class="col-12 my-2">
                    <button class="btn btn-primary" style="width: 100%;" type="button">Salvar</button>
                </div>
            </div>
        </div>
    </section>
</div>`,
    controller: "perfilUsuarioController"
})