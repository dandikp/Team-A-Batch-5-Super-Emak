(function() {
  angular
    .module('app')
    .controller('supplierAddCtrl', controller)

  function controller(supplierService) {
    var vm = this
    vm.name = null
    vm.address = null
    //
    vm.addSupplier = addSupplier

    ////
    function addSupplier() {
      var payload = {
        name: vm.name,
        address: vm.address
      }

      supplierService.addSupplier(payload)
      vm.name = null
      vm.address = null
    }
  }
})();