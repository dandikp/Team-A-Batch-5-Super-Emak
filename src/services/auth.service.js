(function () {
  angular
    .module('app')
    .factory('authService', authService)
  
  authService.$inject = ['$window', '$http']

  function authService($window, $http) {
    var auth = {}
    var baseUrl = 'http://mamabison-dev.herokuapp.com/api/v1/auth_admin'
    auth.storage = $window.localStorage
    auth.login = login
    auth.logout = logout
    auth.isLoggedIn = isLoggedIn

    return auth

    function login(username, password, onSuccess, onError) {
      $http({
        url: baseUrl,
        method: 'POST',
        data: {
          'username': username,
          'password': password
        }
      })
        .then(function (response) {
          if (!response.data.auth_invalid) {
            auth.storage.setItem('token', response.data.token)

            onSuccess('OK')
          } else {
            onError(response.data.auth_invalid)

          }
        }, function (response) {
          console.error(response)

        })
    }

    function logout(onSuccess, onError) {
      auth.storage.removeItem('token')

      onSuccess('OK')
    }

    function isLoggedIn() {
      return auth.storage.getItem('token') ? true : false
    }

  }
})();