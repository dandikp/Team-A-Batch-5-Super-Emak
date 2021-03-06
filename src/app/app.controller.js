(function () {
	angular.module('app')
		.controller('AppController', AppController)

	AppController.$inject = ['$transitions', '$rootScope', 'authService', '$state']

	function AppController($transitions, $rootScope, authService, $state) {
		var vm = this
		vm.onStart = onStart

		onStart()

		function onStart() {
			if (!authService.isLoggedIn()) $state.go('login')
		}

		$transitions.onEnter({}, function (transition) {
			if (!authService.isLoggedIn()) $state.go('login')
		})

	}
})();