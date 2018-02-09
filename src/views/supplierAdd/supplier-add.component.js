(function() {
    angular.module('app')
        .component('supplierAdd', {
            templateUrl: './src/views/supplierAdd/supplier-add.template.html',
            controller: 'SupplierAddController',
            controllerAs: 'vm'
        })
})()