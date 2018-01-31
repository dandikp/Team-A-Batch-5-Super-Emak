(function () {
  angular
    .module('app')
    .component('supplier', {
      templateUrl: 'src/views/supplier/supplier.template.html',
      controller: 'supplierCtrl',
      controllerAs: 'vm'
    })
})();