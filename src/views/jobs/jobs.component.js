(function() {
    angular.module('app')
        .component('jobs', {
            templateUrl: "./src/views/jobs/jobs.view.html",
            controller: "JobsController",
            controllerAs: "vm"
        })
})()