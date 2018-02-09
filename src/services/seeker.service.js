(function() {
    angular.module('app')
        .factory('seekerService', seekerService)

    seekerService.$inject = ['$window', '$http']

    function seekerService($window, $http) {
        var service = {}
        var baseUrl = 'https://mamabison-dev.heroku-app.com/api/v1/emaks'
        var headers = {
            'Access-Control-Allow-Origin': '*'
        }

        service.seekers = []
        service.getSeekersPerPage = getSeekersPerPage        

        function getSeekersPerPage(page, limitDataPerPage, onSuccess, onError) {
            $http({
                method: 'GET',
                url: baseUrl + '?page=' + page + '&limit=' + limitDataPerPage,
                headers: headers,
                data: ''
            })
                .then(function(response) {
                    onSuccess()
                    console.log(response)
                }, function(response) {
                    onError()
                    console.log(response)
                })
        }
    }
})()