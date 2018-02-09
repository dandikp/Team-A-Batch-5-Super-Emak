module.exports = {
    dev: {
        scss: './src/**/*.scss',
        css: [
            './node_modules/font-awesome/css/font-awesome.css',
            './src/assets/css/**/*.css'
        ],
        js: [
            './node_modules/angular/angular.min.js',
            './node_modules/@uirouter/angularjs/release/angular-ui-router.js',
            './src/**/*.module.js',
            './src/**/*.routes.js',
            './src/**/*.service.js',
            './src/**/*.controller.js',
            './src/**/*.component.js',
            './src/assets/**/*.js'
        ]
    },
    build: {
        css: [
            './node_modules/font-awesome/css/font-awesome.css',
            './src/assets/css/**/*.css'
        ],
        js: [
            './node_modules/angular/angular.min.js',
            './node_modules/@uirouter/angularjs/release/angular-ui-router.js',
            './src/**/*.module.js',
            './src/**/*.routes.js',
            './src/**/*.controller.js',
            './src/**/*.component.js',
            './src/**/*.service.js',
            './src/assets/**/*.js'
        ],
        img: [
            '.src/assets/img/*'
        ],
        html: [
            './index.html',
            './src/**/*.html'
        ]
    }
}