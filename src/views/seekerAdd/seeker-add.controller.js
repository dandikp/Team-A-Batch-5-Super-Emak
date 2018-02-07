(function() {
    angular.module('app')
        .controller('SeekerAddController', SeekerAddController)
        
    SeekerAddController.$inject = ['seekerService']

    function SeekerAddController(seekerService) {
        var vm = this
        vm.addSeeker = addSeeker
        vm.name = null
        vm.username = null
        vm.password = null
        vm.email = null
        vm.phone = null
        vm.email = null
        
    }
})()