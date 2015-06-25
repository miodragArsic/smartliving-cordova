'use strict';

angular.module('app.signup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/signup', {
        templateUrl: 'signup/signup.view.html',
        controller: 'SignUpController',
        controllerAs: 'vm'
    });
}])

.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$location'];

function SignUpController($location) {

	var vm = this;

	vm.goBack = goBack;

	//////////////////////////////

	function goBack(){
		$location.path('signin');
	} 

}
