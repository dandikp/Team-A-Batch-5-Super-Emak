(function () {
  angular
    .module('app')
    .component('jobs', {
      templateUrl: 'src/views/jobs/jobs.template.html',
      controller: 'jobsCtrl',
      controllerAs: 'vm'
    })
})();