module.exports = {
	dev: {
		scss: './src/**/*.scss',
		css: [
			'./node_modules/font-awesome/css/font-awesome.css',
			'./src/assets/css/**/*.css'
		],
		js: [
			'./node_modules/angular/angular.js',
			'./node_modules/@uirouter/angularjs/release/angular-ui-router.js',
			'./node_modules/angular-base64-upload/src/angular-base64-upload.js',
			'./src/**/*.module.js',
			'./src/**/*.routes.js',
			'./src/**/*.service.js',
			'./src/**/*.controller.js',
			'./src/**/*.component.js'
		],
		views: './src/**/*.html',
		fonts: './node_modules/font-awesome/fonts/*',
		img: './src/assets/img/*',
		index: './index.template.html'
	},
	build: {
		css: [
			'./dist/src/assets/css/main.min.css'
		],
		js: [
			'./dist/src/**/main.min.js'
		],
		img: './dist/src/assets/img/*',
		views: './dist/src/**/*.html'
	}
}