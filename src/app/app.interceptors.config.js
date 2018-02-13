(function () {
  angular
    .module('app')
    .config(config)

  function config ($httpProvider) {
    // $httpProvider.interceptors.push('requestInterceptor')
  }
})();