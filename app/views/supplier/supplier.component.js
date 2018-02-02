(function() {
    angular.module('app')
        .component('supplier', {
            templateUrl: "./app/views/supplier/supplier.view.html",
            controller: "SupplierController",
            controllerAs: "vm"
        })
})()