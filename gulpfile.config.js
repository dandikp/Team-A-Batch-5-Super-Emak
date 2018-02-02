module.exports = {
    dev: {
        scss: './app/**/*.scss',
        css: [
            './node_modules/font-awesome/css/font-awesome.css',
            './app/assets/css/**/*.css'
        ],
        js: [
            './node_modules/angular/angular.min.js',
            './node_modules/@uirouter/angularjs/release/angular-ui-router.js',
            './app/**/*.module.js',
            './app/**/*.routes.js',
            './app/**/*.controller.js',
            './app/**/*.component.js',
            './app/**/*.service.js',
            './app/assets/**/*.js'
        ]
    }
}