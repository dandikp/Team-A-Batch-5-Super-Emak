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
            .state('seekerAdd', {
                url: '/seeker/add',
                component: 'seekerAdd'
            })
            .state('seekerEdit', {
                url: '/seeker/edit',
                component: 'seekerEdit'
            })
            .state('supplier', {
                url: '/supplier',
                component: 'supplier'
            })
            .state('supplierAdd', {
                url: '/supplier/add',
                component: 'supplierAdd'
            })
            .state('supplierEdit', {
                url: '/supplier/edit',
                component: 'supplierEdit'
            })
            .state('jobs', {
                url: '/jobs',
                component: 'jobs'
            })
        
        $urlRouterProvider
            .when('/', 'dashboard')
            .when('', 'dashboard')
    }
})();