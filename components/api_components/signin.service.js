'use strict';

angular.module('app')

.factory('SignInService', SignInService);

SignInService.$inject = ['SmartLivingAccount'];

function SignInService(SmartLivingAccount) {

    var service = {
        login: login,
        logout: logout
    };

    return service;

    ////////////////////////////////

    function login(loginData) {
        return SmartLivingAccount.login(loginData)
            .then(onSuccessfullLogin);
    }

    function onSuccessfullLogin(response) {
        return response.data;
    };

    function logout() {

    }

}
