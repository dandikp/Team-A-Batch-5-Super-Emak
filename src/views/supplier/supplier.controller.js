(function () {
  angular
    .module('app')
    .controller('supplierController', controller)

  function controller(supplierService, $state, $stateParams, $window) {
    var vm = this
    vm.supplier = []
    vm.dataFetched = false
    vm.dataPerPage = 10
    vm.totalPage = -1
    vm.currentPage = null
    //
    vm.getSupplierPerPage = getSupplierPerPage
    vm.deleteSupplier = deleteSupplier

    getSupplierPerPage(1)

    ////

    function getSupplierPerPage(page) {
      if (vm.currentPage === page) return
      if (page === 0) return
      if (page === vm.totalPage.length + 1) return

      vm.dataFetched = false
      vm.currentPage = page

      supplierService.getSupplierPerPage(page, vm.dataPerPage, function (data) {
        vm.supplier = data.data
        vm.totalPage = new Array(data.total_page)
        vm.dataFetched = true

      }, function (error) {
        $window.alert(error)

      })
    }

    function deleteSupplier(index) {
      vm.dataFetched = false
      supplierService.deleteSupplier(index, function (response) {
        $window.alert(response)

        vm.currentPage = null
        vm.getSupplierPerPage(1)
      }, function (error) {
        $window.alert(error)

      })
    }

  }
})();
