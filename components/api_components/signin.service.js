'use strict';

angular.module('app')

.factory('SignInService', SignInService);

SignInService.$inject = ['apiUrl', '$http'];

function SignInService(apiUrl, $http) {

    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    var service = {
        login: login,
        logout: logout
    };

    return service;

    ////////////////////////////////

    function login(loginData) {
    	var apiClientId = 'webSiteAppLocal';
    	 var data = 'grant_type=password&username=' + encodeURIComponent(loginData.username) + '&password=' + encodeURIComponent(loginData.password) + '&client_id=' + apiClientId;

            return $http.post(apiUrl + 'login', data, {
                headers: headers
            }).then(onSuccessfullLogin);
    }

    function onSuccessfullLogin(response){
    	return response.data;
    };

    function logout() {

    }

}
