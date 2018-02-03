(function() {
    angular.module('app')
        .component('sideNav', {
            templateUrl: './src/components/sideNav/sidenav.template.html',
            controller: 'SideNavController',
            controllerAs: 'ctrl'
        })
})()