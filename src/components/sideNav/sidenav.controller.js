(function() {
    angular.module('app')
        .controller('SideNavController', SideNavController)

    SideNavController.$inject = []

    function SideNavController() {
        var vm = this
        var sideBarWrapper = document.getElementsByClassName('side-nav__wrapper')[0]
        vm.closeSideBar = closeSideBar
        
        function closeSideBar() {
            sideBarWrapper.classList.remove('side-nav__wrapper--open')
        }
    }
})()