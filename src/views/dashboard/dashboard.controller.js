(function () {
	angular.module('app')
		.controller('DashboardController', DashboardController)
	
	DashboardController.$inject = ['jobsService', 'seekerService', 'supplierService']

	function DashboardController(jobsService, seekerService, supplierService) {
		var vm = this
		vm.totalJobs = null
		vm.totalSeeker = null
		vm.totalSupplier = null
		vm.init = init
		vm.getTotalJobs = getTotalJobs
		vm.getTotalSeeker = getTotalSeeker
		vm.getTotalSupplier = getTotalSupplier

		function init() {
			vm.getTotalJobs()
			vm.getTotalSeeker()
			vm.getTotalSupplier()
		}

		function getTotalJobs() {
			jobsService.getTotalJobs(function (response) {
				vm.totalJobs = response

			}, function (error) {
				console.error(error)
				
			})
		}

		function getTotalSeeker() {
			seekerService.getTotalSeeker(function (response) {
				vm.totalSeeker = response

			}, function (error) {
				console.error(error)

			})
		}

		function getTotalSupplier() {
			supplierService.getTotalSupplier(function (response) {
				vm.totalSupplier = response

			}, function (error) {
				console.error(error)

			})
		}
	}
})();