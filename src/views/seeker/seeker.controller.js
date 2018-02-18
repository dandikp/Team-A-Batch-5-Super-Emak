(function() {
	angular.module('app')
		.controller('SeekerController', SeekerController)
	
	SeekerController.$inject = ['$window', 'seekerService']

	function SeekerController($window, seekerService) {
		var vm = this
		vm.seeker = []
		vm.dataFetched = false
		vm.dataPerPage = 10
		vm.totalPage = -1
		vm.currentPage = null
		vm.dataStatus = ''
		vm.init = init
		vm.getSeekersPerPage = getSeekersPerPage
		vm.deleteSeeker = deleteSeeker

		function init() {
			vm.getSeekersPerPage(1)
		}

		function getSeekersPerPage(page) {
			if (vm.currentPage === page) return
			if (page === 0) return
			if (page === vm.totalPage.length + 1) return

			vm.dataFetched = false
			vm.currentPage = page
			vm.dataStatus = 'Fetching data...'

			seekerService.getSeekersPerPage(page, vm.dataPerPage, function(data) {
				vm.seeker = data.data
				vm.totalPage = new Array(data.total_page)
				vm.dataFetched = true

			}, function(error) {
				vm.dataStatus = 'Couldn\'t fetch data. Try again later'
				console.error(error)

			})
		}

		function deleteSeeker(id) {
			vm.dataFetched = false

			seekerService.deleteSeeker(id, function(response) {
				vm.currentPage = null
				vm.init()

			}, function(error) {
				vm.currentPage = null
				vm.init()

				console.error(error)

			})
		}
	}
})();