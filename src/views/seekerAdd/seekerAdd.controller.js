(function() {
	angular.module('app')
		.controller('SeekerAddController', SeekerAddController)
		
	SeekerAddController.$inject = ['$window', '$state', 'seekerService']

	function SeekerAddController($window, $state, seekerService) {
		var vm = this
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

		vm.addSeeker = addSeeker

		function addSeeker() {
			if (!vm.name || !vm.username || !vm.password || !vm.email || !vm.phone || !vm.photo) return

			var payload= {
				name: vm.name,
				username: vm.username,
				password: vm.password,
				email: vm.email,
				phone: vm.phone,
				address: vm.address,
				photo: 'data:' + vm.photo.filetype + ';base64,' + vm.photo.base64
			}

			seekerService.addSeeker(payload, function(response) {
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

				$state.go('seeker')

			}, function(error) {
				console.error(error)
				
			})
		}
	}
})();