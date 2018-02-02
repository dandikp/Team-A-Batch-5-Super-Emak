(function(){
    angular.module('app')
        .component('navbar', {
            templateUrl: './app/components/navbar/navbar.template.html',
            controller: 'NavbarController',
            controllerAs: 'vm'
        })
})()