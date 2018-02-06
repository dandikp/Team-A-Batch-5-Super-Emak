(function() {
    angular.module('app')
        .controller('NavbarController', NavbarController)
        
    NavbarController.$inject = []

    function NavbarController() {
        var vm = this
        vm.openSideBar = openSideBar

        function openSideBar() {
            
            var sideBarWrapper = document.getElementsByClassName('side-nav__wrapper')[0]
            sideBarWrapper.classList.add('side-nav__wrapper--open')
        }
    }
})()