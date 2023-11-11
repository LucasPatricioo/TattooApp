angular.module('login-usuario')
    .component('loginUsuario',{
        template: `<div class="container d-flex align-items-center justify-content-center" style="min-height: 100vh;">
        <div class="content w-100 form-signin m-auto align-middle">
            <main>
                <form>
                    <div class="text-center">
                        <img class="mb-4" src="../assets/img/icons/tattoo-studio.png" alt="" width="180" height="180">
                    </div>
    
                    <div class="form-floating">
                        <input type="tel" class="form-control" id="telefoneLoginInput" ng-model="telefoneLoginInput" placeholder="(99) 9 9999-9999">
                        <label for="telefoneLoginInput">Telefone</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="senhaLoginInput" ng-model="senhaLoginInput" placeholder="Password">
                        <label for="senhaLoginInput">Senha</label>
                    </div>
    
                    <div class="form-check text-start my-3">
                        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Mantenha-me conectado
                        </label>
                    </div>
                    <button class="btn btn-primary w-100 py-2" ng-click="login()">Entrar</button>
                    <!-- <a class="btn btn-primary w-100 py-2" href="#/aluno/index">Entrar</a> -->
                    <div class="text-center">
                        <p class="mt-5 mb-3 text-body-secondary">&copy; 2023</p>
                    </div>
                </form>
            </main>
        </div>
    </div>`,
        controller: "loginUsuarioController"
    })