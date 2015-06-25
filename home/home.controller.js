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

HomeController.$inject = ['$location'];

function HomeController($location) {
    var vm = this;

    vm.homeText = 'I am home page!';

    vm.signout = signout;

    /////////////////////////////////////

    function signout() {
        $location.path('signin');
    }
}
