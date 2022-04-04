angular.module('emailVerificationApp').component('emailVerification', {
	templateUrl: 'email-verification/email-verification.template.html',
	controller: [
		'$http',
		function EmailController($http) {
			let form = this;

			form.validateEmail = function() {
				let apiKey = '9d3ccfae6cf74e9c915d84430c94afb6';
				let emailToValidate = form.email;
				let ipAddress = '';

				let apiURL =
					'https://api.zerobounce.net/v2/validate?api_key=' +
					apiKey +
					'&email=' +
					String(emailToValidate) +
					'&ip_address=' +
					String(ipAddress);

				$http.get(apiURL).then(function(response) {
					console.log(response.data);
					form.dataValidate = response.data;
				});
			};
		}
	]
});
