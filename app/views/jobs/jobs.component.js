(function() {
    angular.module('app')
        .component('jobs', {
            templateUrl: "./app/views/jobs/jobs.view.html",
            controller: "JobsController",
            controllerAs: "vm"
        })
})()