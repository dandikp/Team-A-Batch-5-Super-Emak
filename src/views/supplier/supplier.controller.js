(function () {
  angular
    .module('app')
    .controller('supplierCtrl', controller)

  function controller(supplierService, $stateParams) {
    var vm = this
    vm.supplier = []
    //
    vm.getAllSupplier = getAllSupplier
    vm.deleteSupplier = deleteSupplier

    getAllSupplier()

    ////
    function getAllSupplier() {
      vm.supplier = supplierService.getAllSupplier()
    }

    function deleteSupplier(index) {
      supplierService.deleteSupplier(index)
    }

  }
})();