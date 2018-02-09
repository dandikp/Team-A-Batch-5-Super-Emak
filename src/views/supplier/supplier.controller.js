(function () {
  angular
    .module('app')
    .controller('supplierCtrl', controller)

  function controller(supplierService, $stateParams, $window) {
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

      }, function (err) {
        $window.alert(err)

      })
    }

    function deleteSupplier(index) {
      vm.dataFetched = false
      supplierService.deleteSupplier(index, function (resp) {
        $window.alert(resp)
        vm.dataFetched = true

      }, function (resp) {
        $window.alert(resp)

      })
    }

  }
})();
