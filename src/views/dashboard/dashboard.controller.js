(function () {
	angular.module('app')
		.controller('DashboardController', DashboardController)
	
	DashboardController.$inject = ['jobsService', 'seekerService', 'supplierService']

	function DashboardController(jobsService, seekerService, supplierService) {
		var vm = this
		vm.totalJobs = null
		vm.totalSeeker = null
		vm.totalSupplier = null

		vm.getTotalJobs = getTotalJobs
		vm.getTotalSeeker = getTotalSeeker
		vm.getTotalSupplier = getTotalSupplier

		//
		getTotalJobs()
		getTotalSeeker()
		getTotalSupplier()

		/////////////
		function getTotalJobs() {
			jobsService.getTotalJobs(function (response) {
				vm.totalJobs = response
			}, function (response) {
				// do something hehehehehehhhhhhhhhh
			})
		}

		function getTotalSeeker() {
			seekerService.getTotalSeeker(function (response) {
				vm.totalSeeker = response
			}, function (response) {
				// something to handle errors
			})
		}

		function getTotalSupplier() {
			supplierService.getTotalSupplier(function (response) {
				vm.totalSupplier = response
			}, function (response) {
				//     $window.alert(response)
			})
		}
	}
})();