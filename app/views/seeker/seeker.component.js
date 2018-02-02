(function() {
    angular.module('app')
        .component('seeker', {
            templateUrl: "./app/views/seeker/seeker.view.html",
            controller: "SeekerController",
            controllerAs: "vm"
        })
})()