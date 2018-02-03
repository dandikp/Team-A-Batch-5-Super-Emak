(function() {
    angular.module('app')
        .component('supplier', {
            templateUrl: "./src/views/supplier/supplier.view.html",
            controller: "SupplierController",
            controllerAs: "vm"
        })
})()