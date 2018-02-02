(function() {
    angular.module('app')
        .component('sideNav', {
            templateUrl: './app/components/sideNav/sidenav.template.html',
            controller: 'SideNavController',
            controllerAs: 'ctrl'
        })
})()