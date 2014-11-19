(function () {
    angular
        .module('WebBancoChile.responseHandler')
        .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push(function ($q, URL_API,responseHandler) {
            return {
                'responseError': function(rejection) {
                    var isRestCall = rejection.config.url.indexOf(URL_API) === 0;
                    if(angular.isUndefined(rejection.config.handleError) && isRestCall ){
                        responseHandler.error(rejection);
                    }
                    return $q.reject(rejection);
                }
            };
        });
    }

})();

