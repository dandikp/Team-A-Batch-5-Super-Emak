(function() {
    angular.module('app')
        .component('categories', {
            templateUrl: './src/views/categories/categories.view.html',
            controller: 'CategoriesController',
            controllerAs: 'vm'
        })
})()