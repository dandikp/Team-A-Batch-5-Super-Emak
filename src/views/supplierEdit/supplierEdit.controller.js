(function () {
  angular
    .module('app')
    .controller('supplierEditCtrl', controller)

  function controller(supplierService, $state, $stateParams, $window) {
    var vm = this
    vm.currentSupplier = {}
    vm.name = null
    vm.username = null
    vm.email = null
    vm.photo = {
      filename: '',
      filetype: '',
      filesize: '',
      base64: ''
    }
    vm.company_address = null
    vm.company_profile = null
    //
    vm.getSupplierById = getSupplierById
    vm.editSupplier = editSupplier

    getSupplierById()

    ////
    function getSupplierById() {
      supplierService.getSupplierById($stateParams.id, function (response) {
        vm.currentSupplier = response

        vm.name = vm.currentSupplier.name
        vm.username = vm.currentSupplier.username
        vm.email = vm.currentSupplier.email
        vm.password = vm.currentSupplier.password
        vm.company_address = vm.currentSupplier.company_address
        vm.company_profile = vm.currentSupplier.company_profile
        vm.photo = vm.currentSupplier.photo
      }, function (response) {
        $window.alert(response)

      })
    }

    function editSupplier() {
      if (!vm.name || !vm.username || !vm.email || !vm.password || !vm.company_address
        || !vm.company_profile || !vm.photo) return

      var id = $stateParams.id
      var payload = {
        name: vm.name,
        username: vm.username,
        email: vm.email,
        password: vm.password,
        company_address: vm.company_address,
        company_profile: vm.company_profile,
        photo: vm.photo
      }

      supplierService.editSupplier(id, payload)
      vm.name = null
      vm.username = null
      vm.email = null
      vm.photo = {
        filename: '',
        filetype: '',
        filesize: '',
        base64: ''
      }
      vm.company_address = null
      vm.company_profile = null
      $state.go('supplier')
    }
  }
})();