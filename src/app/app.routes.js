(function() {
    angular.module('app')
        .config(routerConfig)
    
    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                component: 'dashboard'
            })
            .state('seeker', {
                url: '/seeker',
                component: 'seeker'
            })
            .state('supplier', {
                url: '/supplier',
                component: 'supplier'
            })
            .state('categories', {
                url: '/categories',
                component: 'categories'
            })
            .state('jobs', {
                url: '/jobs',
                component: 'jobs'
            })
        
        $urlRouterProvider
            .when('/', 'dashboard')
            .when('', 'dashboard')
    }
})()