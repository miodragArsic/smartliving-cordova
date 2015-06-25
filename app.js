'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'app.signin',
  'app.signup',
  'app.home'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/signin'});
}])
.run(function () {

	function onDeviceReady() {
		document.body.style.marginTop = "20px";
	}

	document.addEventListener('deviceready', onDeviceReady, false);

});