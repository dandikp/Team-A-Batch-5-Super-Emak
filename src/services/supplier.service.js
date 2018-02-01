(function () {
  angular
    .module('app')
    .factory('supplierService', service)

  service.$inject = ['$window']

  function service($window) {
    var storage = $window.localStorage
    var service = {}

    service.supplier = [
      {
        'name': 'Irham',
        'address': 'Imogiri Barat km.4'
      }
    ]
    service.getAllSupplier = getAllSupplier
    service.getSupplierById = getSupplierById
    service.addSupplier = addSupplier
    service.editSupplier = editSupplier
    service.deleteSupplier = deleteSupplier

    return service

    function getAllSupplier() {
      return service.supplier
    }

    function getSupplierById(id) {
      return service.supplier[id]
    }

    function addSupplier(payload) { // payload = supplier object without Id
      service.supplier.push(payload)
    }

    function editSupplier(id, payload) { // payload = supplier object without Id

      service.supplier.splice(id, 1, payload)
    }

    function deleteSupplier(id) {

      service.supplier.splice(id, 1)
    }
  }
})();