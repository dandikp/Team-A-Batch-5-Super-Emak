(function() {
	angular.module('app')
		.factory('seekerService', seekerService)

	seekerService.$inject = ['$window', '$http']

	function seekerService($window, $http) {
		var service = {}
		var baseUrl = 'https://mamabison-dev.herokuapp.com/api/v1/emaks'
		var headers = {
			'Access-Control-Allow-Origin': '*'
		}

		service.seeker = []
		service.getSeekersPerPage = getSeekersPerPage   
		service.deleteSeeker = deleteSeeker 
		
		return service

		function getSeekersPerPage(page, limitDataPerPage, onSuccess, onError) {
			$http({
				method: 'GET',
				url: baseUrl + '?page=' + page + '&limit=' + limitDataPerPage,
				headers: headers,
				data: ''
			})
				.then(function(response) {
					onSuccess(response.data)
				}, function(response) {
					onError('Couldn\'t Fetch Data')
				})
		}

		function addSeeker(payload, onSuccess, onError) {
			$http({
				method: 'POST',
				url: baseUrl,
				headers: headers,
				data: {
					name: payload.name,
					username: payload.username,
					password: payload.password,
					phone: payload.phone,
					email: payload.email,
					address: payload.address
				}
			})
				.then(function(response) {
					console.log(response)
				}, function(response) {
					console.log(response)
				})
		}

		function deleteSeeker(id, onSuccess, onError) {
			$http({
				method: 'DELETE',
				url: baseUrl + '/' + id,
				headers: headers
			})
				.then(function(response) {
					onSuccess(response.status)
				}, function (response) {
					onError(response.status)
				})
		}
	}
})();