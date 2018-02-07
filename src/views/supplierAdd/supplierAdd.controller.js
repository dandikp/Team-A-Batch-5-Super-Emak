(function () {
  angular
    .module('app')
    .controller('supplierAddCtrl', controller)

  function controller(supplierService, $window) {
    var reader = new FileReader()

    var vm = this
    vm.name = null
    vm.username = null
    vm.email = null
    vm.password = null
    vm.phone = null
    vm.company_address = null
    vm.company_profile = null
    vm.photo = null
    //
    vm.addSupplier = addSupplier
    vm.encodeImg = encodeImg

    ////
    function addSupplier() {
      if (!vm.name || !vm.username || !vm.email || !vm.password ||
        !vm.phone || !vm.company_address || !vm.company_profile || !vm.photo) return

      var payload = {
        name: vm.name,
        username: vm.username,
        email: vm.email,
        password: vm.password,
        phone: vm.phone,
        company_address: vm.company_address,
        company_profile: vm.company_profile,
        photo: vm.photo
      }

      console.log(payload)

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
      }, function (response) {
        $window.alert(response)
      })
    }

    function encodeImg(e) {
    }
  }
})();