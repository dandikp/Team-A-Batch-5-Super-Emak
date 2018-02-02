(function() {
    angular.module('app')
        .component('dashboard', {
            templateUrl: "./app/views/dashboard/dashboard.view.html",
            controller: "DashboardController",
            controllerAs: "vm"
        })
})()