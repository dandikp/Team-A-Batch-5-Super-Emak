(function () {
  angular
    .module('app')
    .component('app', {
      templateUrl: 'src/app/app.template.html',
      controller: 'appCtrl',
      controllerAs: 'ctrl'
    })
})();