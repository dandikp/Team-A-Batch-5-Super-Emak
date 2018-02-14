(function () {
  angular
    .module('app')
    .controller('supplierAddController', controller)

  controller.$inject = ['supplierService', '$window']
  
  function controller(supplierService, $window) {
    var vm = this
    vm.name = null
    vm.username = null
    vm.email = null
    vm.password = null
    vm.photo = {
      filename: '',
      filetype: '',
      filesize: '',
      base64: ''
    }
    vm.company_address = null
    vm.company_profile = null
    //
    vm.addSupplier = addSupplier

    ////
    function addSupplier() {
      if (!vm.name || !vm.username || !vm.email || !vm.password ||
        !vm.phone || !vm.company_address || !vm.company_profile || !vm.photo.base64) return

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

      supplierService.addSupplier(payload, function (response) {
        $window.alert(response)
        vm.name = null
        vm.username = null
        vm.email = null
        vm.password = null
        vm.phone = null
        vm.company_address = null
        vm.company_profile = null
        vm.photo = null

      }, function (error) {
        $window.alert(error)
        
      })
    }
  }
})();