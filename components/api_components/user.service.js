'use strict';

angular.module('app')

.factory('UserService', UserService);

UserService.$inject = ['SmartLivingUser'];

function UserService(SmartLivingUser) {

    var service = {
        me: me
    };

    return service;

    ////////////////////////////////

    function me(token) {
        return SmartLivingUser.me(token).
            then(onSuccess);
    }

    function onSuccess(response){
        return response.data;
    }

}
