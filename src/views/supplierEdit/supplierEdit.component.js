(function() {
  angular
    .module('app')
    .component('supplierEdit', {
      templateUrl: 'src/views/supplierEdit/supplierEdit.template.html',
      controller: 'supplierEditCtrl',
      controllerAs: 'vm'
    })
})();