(function () {
  angular
    .module('app')
    .controller('loginController', loginController)

  function loginController(authService, $state, $window) {
    var vm = this
    vm.username = null
    vm.password = null

    vm.login = login

    //////////

    function login() {
      if (!vm.username || !vm.password) return
      
      authService.login(vm.username, vm.password, function (response) {
        $state.go('dashboard')

      }, function (response) {
        $window.alert(response)

      })
    }

  }
})();