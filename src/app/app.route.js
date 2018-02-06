(function () {
  angular
    .module('app')
    .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider']

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', 'home')
    var viewUrl = 'src/views/'

    $stateProvider
      .state('home', {
        url: '/home',
        component: 'home'
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
        url: '/supplier/edit/:id',
        component: 'supplierEdit'
      })
      .state('jobseeker', {
        url: '/jobseeker',
        component: 'jobseeker'
      })
      .state('jobs', {
        url: '/jobs',
        component: 'jobs'
      })
  
  }
})();