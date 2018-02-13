(function() {
	angular.module('app')
		.controller('NavbarController', NavbarController)

	NavbarController.$inject = ['authService', '$window', '$state']
		
	function NavbarController(authService, $window, $state) {
		var vm = this

		vm.openSideBar = openSideBar
		vm.logout = logout

		function openSideBar() {
			var sideBarWrapper = document.querySelector('.side-nav__wrapper')
			sideBarWrapper.classList.add('side-nav__wrapper--open')
		}

		function logout() {
			authService.logout(function (response) {
				if (response === 'OK') {
					$window.alert('Logging out')
					$state.go('login')
				} else {
					$window.alert(response)
				}
			}, function (response) {
				$window.alert(response)
			})
		}
	}
})();
