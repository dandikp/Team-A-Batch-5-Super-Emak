(function () {
  angular
    .module('app')
    .controller('supplierEditCtrl', controller)

  controller.$inject = ['supplierService', '$state', '$stateParams', '$window']

  function controller(supplierService, $state, $stateParams, $window) {
    var vm = this
    vm.currentSupplier = {}
    vm.id = $stateParams.id
    vm.name = null
    vm.username = null
    vm.email = null
    vm.password = null
    vm.phone = null
    vm.photo = {
      url: '',
      filename: '',
      filetype: '',
      filesize: '',
      base64: ''
    }
    vm.company_address = null
    vm.company_profile = null
    vm.isEditing = false
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
        // vm.password = vm.currentSupplier.password
        vm.phone = vm.currentSupplier.phone
        vm.company_address = vm.currentSupplier.company_address
        vm.company_profile = vm.currentSupplier.company_profile
        vm.photo.url = vm.currentSupplier.photo.url

      }, function (error) {
        $window.alert(error)

      })
    }

    function editSupplier() {
      if (!vm.name || !vm.username || !vm.email || !vm.password || !vm.phone || !vm.company_address
        || !vm.company_profile || !vm.photo) return

      vm.isEditing = true

      var payload = {
        name: vm.name,
        username: vm.username,
        email: vm.email,
        password: vm.password,
        phone: vm.phone,
        company_address: vm.company_address,
        company_profile: vm.company_profile,
        photo: 'data:' + vm.photo.filetype + ';base64,' + vm.photo.base64
      }

      supplierService.editSupplier(vm.id, payload, function (response) {
        vm.isEditing = false
        $state.go('supplier')

      }, function (error) {

      })
    }
  }
})();