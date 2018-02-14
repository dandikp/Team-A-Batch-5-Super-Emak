(function() {
	angular.module('app')
		.controller('SeekerEditController', SeekerEditController)

	SeekerEditController.$inject = ['seekerService', '$state', '$stateParams', '$window']

	function SeekerEditController(seekerService, $state, $stateParams, $window) {
		var vm = this
		vm.id = $stateParams.id
		vm.dataSeeker = {}
		vm.name = null
		vm.username = null
		vm.password = null
		vm.email = null
		vm.phone = null
		vm.address = null
		vm.photo = {
			filename: '',
			filetype: '',
			filesize: '',
			base64: ''
		}

		vm.init = init
		vm.getSeekerById = getSeekerById
		vm.editSeeker = editSeeker

		function init() {
			vm.getSeekerById()
		}
		
		function getSeekerById() {
			seekerService.getSeekerById(vm.id, function(response) {
				vm.name = response.name
				vm.username = response.username
				vm.password = response.password
				vm.phone = response.phone
				vm.email = response.email
				vm.phone = response.phone
				vm.address = response.address
				vm.photo = response.photo
			}, function(error) {
				console.log(error)
			})
		}

		function editSeeker() {
			var payload = {}

			payload = {
				name: vm.name,
				username: vm.username,
				password: vm.password,
				email: vm.email,
				phone: vm.phone,
				address: vm.address,
				photo: 'data:' + vm.photo.filetype + ';base64,' + vm.photo.base64
			}

			seekerService.editSeeker(vm.id, payload, function(response) {
				vm.name = null
				vm.username = null
				vm.password = null
				vm.email = null
				vm.phone = null
				vm.address = null
				vm.photo = {
					filename: '',
					filetype: '',
					filesize: '',
					base64: ''
				}

				Promise.prototype.then(function() {
					console.log(response)
					$state.go('seeker')
				})
			}, function(error) {
				console.log(error)

			})
		}
	}
})();