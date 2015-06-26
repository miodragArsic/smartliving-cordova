(function() {
    'use strict';

    angular
        .module('app')
        .service('SmartLivingUser', SmartLiving.UserService);

    SmartLiving.UserService.$inject = ['$http', 'apiUrl', 'clientId'];

})()