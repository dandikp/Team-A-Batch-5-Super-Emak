(function() {
    angular.module('app')
        .component('supplierEdit', {
            templateUrl: './src/views/supplierEdit/supplier-edit.template.html',
            controller: 'SupplierEditController',
            controllerAs: 'vm'
        })
})()