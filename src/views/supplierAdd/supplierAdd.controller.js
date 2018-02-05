(function() {
  angular
    .module('app')
    .controller('supplierAddCtrl', controller)

  function controller(supplierService) {
    var vm = this
    vm.name = null
    vm.address = null
    vm.company = null
    //
    vm.addSupplier = addSupplier

    ////
    function addSupplier() {
      if (!vm.name || !vm.address || !vm.company) return
      
      var payload = {
        name: vm.name,
        address: vm.address,
        company: vm.company
      }

      supplierService.addSupplier(payload)
      vm.name = null
      vm.address = null
      vm.company = null
    }
  }
})();