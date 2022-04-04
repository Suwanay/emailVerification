'use strict';

angular.module('emailVerificationApp').config([
	'$routeProvider',
	function config($routeProvider) {
		$routeProvider
			.when('/single', {
				template: '<email-verification></email-verification>'
			})
			.when('/batch', {
				template: '<email-verification-batch></email-verification-batch>'
			})
			.otherwise('/single');
	}
]);
