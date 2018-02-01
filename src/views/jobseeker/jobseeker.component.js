(function () {
  angular
    .module('app')
    .component('jobseeker', {
      templateUrl: 'src/views/jobseeker/jobseeker.template.html',
      controller: 'jobseekerCtrl',
      controllerAs: 'vm'
    })
})();