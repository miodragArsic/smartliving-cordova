'use strict';

angular.module('app')

.factory('SignInService', SignInService);

SignInService.$inject = ['SmartlivingAuthorization'];

function SignInService(SmartLivingAuthorization) {

    var service = {
        login: login,
        logout: logout
    };

    return service;

    ////////////////////////////////

    function login(loginData) {
        // var data = 'grant_type=password&username=' + encodeURIComponent(loginData.username) + '&password=' + encodeURIComponent(loginData.password) + '&client_id=' + clientId;

        //       return $http.post(apiUrl + 'login', data, {
        //           headers: headers
        //       }).then(onSuccessfullLogin);
        return SmartLivingAuthorization.login(loginData)
            .then(onSuccessfullLogin);
    }

    function onSuccessfullLogin(response) {
        return response.data;
    };

    function logout() {

    }

}
