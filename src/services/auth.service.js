(function () {
  angular
    .module('app')
    .factory('authService', authService)

  authService.$inject = ['$window']

  function authService($window) {
    var auth = {}
    var storage = $window.localStorage
    auth.login = login
    auth.logout = logout
    auth.isLoggedIn = isLoggedIn

    return auth


    ////
    function login(username, password, onSuccess, onError) {
      if (username === 'admin' && password === 'admin1234') {
        storage.setItem('isLoggedIn', 'true')

        onSuccess('OK')
      } else {
        if (username !== 'admin' && password !== 'admin1234') {
          onError('Username and password are incorrect') 
          return
        }
        if (username !== 'admin') {
          onError('Username is incorrect')
          return
        }
        if (password !== 'admin1234') {
          onError('Password is incorrect')
          return
        }
      }
    }

    function logout(onSuccess, onError) {
      storage.removeItem('isLoggedIn')

      onSuccess('OK')

      // onError('Logout Failed due to' + )
    }

    function isLoggedIn() {
      return storage.getItem('isLoggedIn') ? true : false
    }
  }
})();