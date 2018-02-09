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

        vm.init = init
        vm.getSeekerPerPage = getSeekerPerPage

        function init() {
            vm.getSeekerPerPage(1)
        }

        function getSeekerPerPage(page) {
            if (vm.currentPage === page) return
            if (page === 0) return
            if (page === vm.totalPage.length + 1) return

            vm.dataFetched = false
            vm.currentPage = page

            seekerService.getSeekerPerPage(page, vm.dataPerPage, function(data) {
                vm.seeker = data.data
                vm.totalPage = new Array(data.total_page)
                vm.dataFetched = true

            }, function(error) {
                $window.alert(error)
            })
        }
    }
})()