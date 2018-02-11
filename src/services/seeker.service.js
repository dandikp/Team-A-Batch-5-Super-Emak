(function () {
  angular
    .module('app')
    .factory('seekerService', service)


  function service($http) {
    var service = {}
    var baseUrl = 'https://mamabison-dev.herokuapp.com/api/v1/emaks'
    var headers = {
      'Access-Control-Allow-Origin': '*'
    }

    service.getSeekerPerPage = getSeekerPerPage
    service.getTotalSeeker = getTotalSeeker

    return service
    
    //////
    function getSeekerPerPage() {

    }

    function getTotalSeeker(onSuccess, onError) {
      $http({
        method: 'GET',
        url: baseUrl,
        headers: headers,
        data: ''
      })
        .then(function (response) {
          onSuccess(response.data.total_emak)
        }, function (response) {
          onError(response.statusStext)

        })
    }
  }
})();