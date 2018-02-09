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

        service.seeker = []
        service.getSeekersPerPage = getSeekersPerPage    
        
        return service

        function getSeekersPerPage(page, limitDataPerPage, onSuccess, onError) {
            $http({
                method: 'GET',
                url: baseUrl + '?page=' + page + '&limit=' + limitDataPerPage,
                headers: headers,
                data: ''
            })
                .then(function(response) {
                    onSuccess(response.data)
                    console.log(response)
                }, function(response) {
                    onError(response.statusText)
                })
        }
    }
})()