angular
    .module('WebBancoChile.responseHandler')
    .factory('responseHandler', responseHandler);

responseHandler.$inject = ["notificationFactory"];

/* @ngInject */
function responseHandler(notificationFactory) {
    var service = {
        error: handleError
    };


    return service;

    ////////////////

    function handleError(rejection) {
        notificationFactory.logError(rejection.data.codigo);
    }

}
