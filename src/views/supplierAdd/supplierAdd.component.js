(function () {
  angular
    .module('app')
    .component('supplierAdd', {
      templateUrl: 'src/views/supplierAdd/supplierAdd.template.html',
      controller: 'supplierAddController',
      controllerAs: 'vm'
    })
})();