(function() {
    'use strict';

    angular
        .module('app')
        .service('SmartLivingAccount', SmartLiving.AccountService);

    SmartLiving.AccountService.$inject = ['$http', 'apiUrl', 'clientId'];

})()