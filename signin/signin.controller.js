'use strict';

angular.module('app.signin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/signin', {
        templateUrl: 'signin/signin.view.html',
        controller: 'SignInController',
        controllerAs: 'vm'
    });
}])

.controller('SignInController', SignInController);

SignInController.$inject = ['SignInService', '$location'];

function SignInController(SignInService, $location) {
    var vm = this;

    vm.login = login;
    vm.loginData = {
        username: null,
        password: null
    };

    ///////////////////////////////

    function login() {
        if (isInputValid()) {
            console.log('failed to login, empty fields');
        } else {

            SignInService.login(vm.loginData)
                .then(function(responseData) {
                    window.localStorage.setItem('token', responseData.access_token);
                    $location.path('home');
                })
                .catch(function() {
                    console.log('failed to login, something went wrong');
                });
        }

    }

    function isInputValid() {
        return vm.loginData.username === '' || !vm.loginData.username || vm.loginData.password === '' || !vm.loginData.password;
    }
}
