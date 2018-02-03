(function() {
    angular.module('app')
        .component('dashboard', {
            templateUrl: "./src/views/dashboard/dashboard.view.html",
            controller: "DashboardController",
            controllerAs: "vm"
        })
})()