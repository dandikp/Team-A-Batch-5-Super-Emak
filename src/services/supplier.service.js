(function () {
  angular
    .module('app')
    .factory('supplierService', service)


  function service($window, $http) {
    var service = {}
    var baseUrl = 'https://mamabison-dev.herokuapp.com/api/v1/suppliers'
    var headers = {
      'Authorization': $window.localStorage.getItem('token')
    }

    service.supplier = []
    service.getSupplierPerPage = getSupplierPerPage
    service.getTotalSupplier = getTotalSupplier
    service.getSupplierById = getSupplierById
    service.addSupplier = addSupplier
    service.editSupplier = editSupplier
    service.deleteSupplier = deleteSupplier

    return service

    function getSupplierPerPage(page, dataPerPage, onSuccess, onError) {
      $http({
        method: 'GET',
        url: baseUrl + '?page=' + page + '&limit=' + dataPerPage,
        headers: headers,
        data: ''
      })
        .then(function (response) {
          onSuccess(response.data)
          console.log(response)

        }, function (response) {
          onError(response.statusText)

        })
    }

    function getTotalSupplier(onSuccess, onError) {
      $http({
        method: 'GET',
        url: baseUrl,
        headers: headers,
        data: ''
      })
        .then(function (response) {
          onSuccess(response.data.total_supplier)

        }, function (response) {
          onError(response.statusText)

        })
    }

    function getSupplierById(id, onSuccess, onError) {
      $http({
        method: 'GET',
        url: baseUrl + '/' + id,
        headers: headers,
        data: ''
      })
        .then(function (response) {
          onSuccess(response.data.data)

        }, function (response) {
          onError(response.statusText)

        })
    }

    function addSupplier(payload, onSuccess, onError) { // payload = supplier object without Id
      $http({
        method: 'POST',
        url: baseUrl,
        headers: headers,
        data: {
          name: payload.name,
          username: payload.username,
          email: payload.email,
          password: payload.password,
          phone: payload.phone,
          company_address: payload.company_address,
          company_profile: payload.company_profile,
          photo: payload.photo
        }
      })
        .then(function (response) {
          onSuccess(response.statusText)
        }, function (response) {
          onError(response.statusText)
        })
    }

    function editSupplier(id, payload, onSuccess, onError) { // payload = supplier object without Id
      $http({
        method: 'PUT',
        url: baseUrl,
        headers: headers,
        data: {
          'id': id,
          'name': payload.name,
          'username': payload.username,
          'email': payload.email,
          'password': payload.password,
          'phone': payload.phone,
          'company_address': payload.company_address,
          'company_profile': payload.company_profile,
          'photo': payload.photo
        }
      })
        .then(function (response) {
          onSuccess(response.statusText)
        }, function (response) {
          onError(response.statusText)
        })
    }

    function deleteSupplier(id, onSuccess, onError) {
      $http({
        method: 'DELETE',
        url: baseUrl + '/' + id,
        headers: headers
      })
        .then(function (response) {
          onSuccess(response.statusText)

        }, function (response) {
          onError(response.statusText)

        })
    }
  }
})();