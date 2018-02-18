(function () {
  angular
    .module('app')
    .controller('supplierController', controller)

  controller.$inject = ['supplierService', '$state', '$stateParams', '$window']

  function controller(supplierService, $state, $stateParams, $window) {
    var vm = this
    vm.supplier = []
    vm.dataFetched = false
    vm.dataPerPage = 10
    vm.totalPage = -1
    vm.currentPage = null
    vm.init = init
    vm.getSupplierPerPage = getSupplierPerPage
    vm.deleteSupplier = deleteSupplier
    vm.dataStatus = ''

    function init() {
      getSupplierPerPage(1)
    }    

    function getSupplierPerPage(page) {
      if (vm.currentPage === page) return
      if (page === 0) return
      if (page === vm.totalPage.length + 1) return

      vm.dataFetched = false
      vm.currentPage = page
      vm.dataStatus = 'Fetching data...'

      supplierService.getSupplierPerPage(page, vm.dataPerPage, function (data) {
        vm.supplier = data.data
        vm.totalPage = new Array(data.total_page)
        vm.dataFetched = true

      }, function (error) {
        console.error(error)
        vm.dataStatus = 'Couldn\'t fetch data. Try again later'
        
      })
    }

    function deleteSupplier(index) {
      vm.dataFetched = false
      supplierService.deleteSupplier(index, function (response) {
        vm.currentPage = null
        vm.init()

      }, function (error) {
        vm.currentPage = null
        vm.init()
        
        console.error(error)

      })
    }

  }
})();
