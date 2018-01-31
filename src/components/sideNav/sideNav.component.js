(function () {
  angular
    .module('app')
    .component('sideNav', {
      templateUrl: 'src/components/sideNav/sideNav.template.html',
      controller: 'sideNavCtrl',
      controllerAs: 'vm'
    })
})();