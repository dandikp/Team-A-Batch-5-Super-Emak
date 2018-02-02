(function() {
    angular.module('app')
        .config(routerConfig)
    
    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/home',
                component: 'dashboard'
            })
        
        $urlRouterProvider
            .when('', 'home')
    }
})()