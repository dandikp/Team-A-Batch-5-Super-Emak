(function () {
  angular
    .module('app')
    .component('login', {
      templateUrl: './src/views/login/login.template.html',
      controller: 'loginController',
      controllerAs: 'vm'
    })
})();