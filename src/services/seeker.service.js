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
				data: ''
			})
				.then(function(response) {
					onSuccess(response.data.data)
				}, function() {
					onError(response.status)
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
					address: payload.address,
					photo: payload.photo
				}
			})
				.then(function(response) {
					onSuccess(response.status)
				}, function(response) {
					onError(response)
				})
		}

		function editSeeker(id, payload, onSuccess, onError) {
			$http({
				method: 'PUT',
				url: baseUrl + '/' + id,
				headers: headers,
				data: {
					id: id,
					name: vm.name,
					username: vm.username,
					password: vm.password,
					phone: vm.phone,
					email: vm.email,
					address: vm.address
				}
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