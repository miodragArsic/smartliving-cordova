'use strict';

angular.module('app.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
    });
}])

.controller('HomeController', HomeController);

HomeController.$inject = ['$location', 'UserService'];

function HomeController($location, UserService) {
    var vm = this;

    vm.homeText = 'I am home page!';

    vm.signout = signout;
    vm.me = null;

    /////////////////////////////////////


    function activate() {

        var token = window.localStorage.getItem('token');

        UserService.me(token)
        .then(function(responseData){
            vm.me = responseData;
        });
    }

    function signout() {
        $location.path('signin');
    }

    /////////////////////////////////////
    activate();
}
