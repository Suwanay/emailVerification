angular.module('emailVerificationApp').component('emailVerificationBatch', {
	templateUrl: 'email-verification-batch/email-verification-batch.template.html',
	controller: [
		'$http',
		function EmailController($http) {
			let form = this;

			let count = 1;
			form.emails = [];

			form.addEmail = function() {
				form.emails.push({
					id: count,
					email_address: form.email,
					ip_address: ''
				});

				count++;
				form.email = '';
			};

			form.validateEmail = function() {
				let apiKey = '9d3ccfae6cf74e9c915d84430c94afb6';
				let emailBatch = form.emails;

				let apiURL =
					'https://bulkapi.zerobounce.net/v2/validatebatch' +
					apiKey +
					'&email_batch=' +
					JSON.stringify(emailBatch);

				// console.log(apiURL);

				$http.post(apiURL).then(function(response) {
					console.log(response.data);
					form.dataValidate = response.data;
				});
			};
		}
	]
});
