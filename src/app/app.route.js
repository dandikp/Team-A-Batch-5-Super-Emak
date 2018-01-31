(function () {
  angular
    .module('app')
    .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider']

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/')

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/views/home/home.template.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .state('supplier', {
        url: '/supplier',
        templateUrl: 'src/views/supplier/supplier.template.html',
        controller: 'supplierCtrl',
        controllerAs: 'vm'
      })
  
  }
})();