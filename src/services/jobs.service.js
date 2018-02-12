(function () {
  angular
    .module('app')
    .factory('jobsService', service)

  function service($http) {
    var service = {}
    var baseUrl = 'https://mamabison-dev.herokuapp.com/api/v1/jobs'
    var headers = {
      'Access-Control-Allow-Origin': '*'
    }

    service.getTotalJobs = getTotalJobs

    return service

    /////////////////
    function getJobsPerPage(page, dataPerpage, onSuccess, onError) {
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

    function getTotalJobs(onSuccess, onError) {
      $http({
        method: 'GET',
        url: baseUrl,
        headers: headers,
        data: ''
      })
        .then(function (response) {
          console.log(response)
          onSuccess(response.data.total_jobs)

        }, function () {
          onError(response.statusText)

        })
    }

    function getJobById(id, onSuccess, onError) {
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

    function addJob(payload, onSuccess, onError) {
      $http({
        method: 'POST',
        url: baseUrl,
        headers: headers,
        data: {

        }
      })
        .then(function (response) {
          onSuccess(response.statusText)
        }, function (response) {
          onError(response.statusText)
        })
    }

    function editJob(id, payload, onSuccess, onError) {

    }
  }
})();