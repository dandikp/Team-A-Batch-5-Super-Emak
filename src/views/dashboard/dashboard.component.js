(function() {
    angular.module('app')
        .component('dashboard', {
            templateUrl: "./src/views/dashboard/dashboard.template.html",
            controller: "DashboardController",
            controllerAs: "vm"
        })
})()