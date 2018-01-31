(function () {
  angular
    .module('app')
    .component('home', {
      templateUrl: 'src/views/home/home.template.html',
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
})();