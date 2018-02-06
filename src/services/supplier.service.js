(function () {
  angular
    .module('app')
    .factory('supplierService', service)

  service.$inject = ['$window', '$http']

  function service($window, $http) {
    var service = {}
    var baseUrl = 'https://mamabison-dev.herokuapp.com/api/v1/suppliers'

    service.supplier = [
      {
        'name': 'Irham',
        'address': 'Imogiri Barat km.4',
        'company': 'Amikom'
      },
      {
        'name': 'Irham',
        'address': 'Imogiri Barat km.4',
        'company': 'Binar'
      },
      {
        'name': 'Irham',
        'address': 'Imogiri Barat km.4',
        'company': 'Amikom'
      },
      {
        'name': 'Irham',
        'address': 'Imogiri Barat km.4',
        'company': 'Binar'
      },
      {
        'name': 'Irham',
        'address': 'Imogiri Barat km.4',
        'company': 'Amikom'
      },
      {
        'name': 'Irham',
        'address': 'Imogiri Barat km.4',
        'company': 'Binar'
      }
    ]
    service.getAllSupplier = getAllSupplier
    service.getSupplierById = getSupplierById
    service.addSupplier = addSupplier
    service.editSupplier = editSupplier
    service.deleteSupplier = deleteSupplier

    return service

    function getAllSupplier() {
      $http({
        method: 'GET',
        url: baseUrl,
        header: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then((response)=> {
        service.supplier = response.data
      }, ()=> {
        $window.alert(response.statusText)
      })
      
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