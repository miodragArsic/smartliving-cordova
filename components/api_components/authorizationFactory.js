(function() {
    'use strict';

    angular
        .module('app')
        .service('SmartlivingAuthorization', Smartliving.Authorization);

    Smartliving.Authorization.$inject = ['$http', 'apiUrl', 'clientId'];

})()