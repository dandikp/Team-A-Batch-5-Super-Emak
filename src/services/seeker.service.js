(function() {
	angular.module('app')
		.factory('seekerService', seekerService)

	seekerService.$inject = ['$http', '$window']

	function seekerService($http, $window) {
		var service = {}
		var baseUrl = 'https://mamabison-dev.herokuapp.com/api/v1/emaks'
		var headers = {
			'Authorization': $window.localStorage.getItem('token')
		}

		service.seeker = []
		service.getSeekersPerPage = getSeekersPerPage   
		service.addSeeker = addSeeker
		service.deleteSeeker = deleteSeeker 
		service.getSeekerById = getSeekerById
		service.editSeeker = editSeeker
		service.getTotalSeeker = getTotalSeeker
		
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

		function getTotalSeeker(onSuccess, onError) {
      $http({
        method: 'GET',
        url: baseUrl,
        headers: headers,
        data: ''
      })
        .then(function (response) {
          onSuccess(response.data.total_emak)
        }, function (response) {
          onError(response.statusStext)

        })
    }

		function getSeekerById(id, onSuccess, onError) {
			$http({
				method: 'GET',
				url: baseUrl + '/' + id,
				data: '',
				headers: headers
			})
				.then(function(response) {
					onSuccess(response.data.data)
				}, function(response) {
					onError(response.status)
				})
		}

		function addSeeker(payload, onSuccess, onError) {
			var data = {}

			data = {
					name: payload.name,
					username: payload.username,
					password: payload.password,
					phone: payload.phone,
					email: payload.email,
					address: payload.address,
					photo: payload.photo
			}

			$http({
				method: 'POST',
				url: baseUrl,
				headers: headers,
				data: data
			})
				.then(function(response) {
					onSuccess(response.status)
				}, function(response) {
					onError(response)
				})
		}

		function editSeeker(id, payload, onSuccess, onError) {
			var data = {}

			data = {
				name: payload.name,
				username: payload.username,
				password: payload.password,
				phone: payload.phone,
				email: payload.email,
				address: payload.address,
				photo: payload.photo
			}
			
			$http({
				method: 'PUT',
				url: baseUrl + '/' + id,
				headers: headers,
				data: data
			})
				.then(function(response) {
					onSuccess(response.status)
				}, function(response) {
					onError(response)
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
					onError(response)
				})
		}
	}
})();