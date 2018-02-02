(function() {
    angular.module('app')
        .component('categories', {
            templateUrl: './app/views/categories/categories.view.html',
            controller: 'CategoriesController',
            controllerAs: 'vm'
        })
})()