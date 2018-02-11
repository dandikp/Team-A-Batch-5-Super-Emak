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
		vm.photo = null

		vm.addSeeker = addSeeker

		function addSeeker() {
			if (!vm.name || !vm.username || !vm.password || !vm.email) return

			var payload = {
				name: vm.name,
				username: vm.username,
				password: vm.password,
				email: vm.email,
				phone: vm.phone,
				address: vm.address,
				photo: vm.photo
			}

			seekerService.addSeeker(payload, function(response) {
				vm.name = null
				vm.username = null
				vm.password = null
				vm.email = null
				vm.phone = null
				vm.address = null
				vm.photo = null

				$state.go('seeker')

				console.log(response)
			}, function(error) {
				$window.alert(error)
			})
		}
	}
})();