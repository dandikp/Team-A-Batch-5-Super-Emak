(function() {
    angular.module('app')
        .component('seeker', {
            templateUrl: "./src/views/seeker/seeker.template.html",
            controller: "SeekerController",
            controllerAs: "vm"
        })
})()