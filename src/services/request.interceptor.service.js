// (function () {
//   angular
//     .module('app')
//     .factory('requestInterceptor', requestInterceptor)

//   function requestInterceptor($window) {
//     var requestInterceptor = {
//       request: function (config) {
//         config.headers['Authorization'] = 'Bearer ' + $window.storage.getItem('token')

//         return config
//       }
//     }
//     return requestInterceptor
//   }
// })();