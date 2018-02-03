(function(){
    angular.module('app')
        .component('navbar', {
            templateUrl: './src/components/navbar/navbar.template.html',
            controller: 'NavbarController',
            controllerAs: 'vm'
        })
})()