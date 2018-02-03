(function() {
    angular.module('app')
        .component('seeker', {
            templateUrl: "./src/views/seeker/seeker.view.html",
            controller: "SeekerController",
            controllerAs: "vm"
        })
})()