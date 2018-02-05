(function () {
  angular
    .module('app')
    .controller('supplierEditCtrl', controller)

  function controller(supplierService, $state, $stateParams) {
    var vm = this
    vm.currentSupplier = {}
    vm.nameEdit = null
    vm.addressEdit = null
    vm.companyEdit = null
    //
    vm.getSupplierById = getSupplierById
    vm.editSupplier = editSupplier

    getSupplierById()

    ////
    function getSupplierById() {
      vm.currentSupplier = supplierService.getSupplierById($stateParams.id)

      vm.nameEdit = vm.currentSupplier.name
      vm.addressEdit = vm.currentSupplier.address   
      vm.companyEdit = vm.currentSupplier.company  
    }
    
    function editSupplier() {
      if (!vm.nameEdit || !vm.addressEdit || !vm.companyEdit) return

      var id = $stateParams.id
      var payload = {
        name: vm.nameEdit,
        address: vm.addressEdit,
        company: vm.companyEdit
      }

      supplierService.editSupplier(id, payload)
      vm.nameEdit = null
      vm.addressEdit = null
      vm.companyEdit = null
      $state.go('supplier')
    }
  }
})();