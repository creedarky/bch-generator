angular.module('getUltimoAccesoFactory',['WebBancoChile.constants'])
    .factory('getUltimoAccesoFactory_', function($http, dummy_ultimoAcceso) {
        var promise;
        var getUltimoAccesoFactory_ = {
            get: function(usuario){
                if(!promise) {
                    promise = $http.get(dummy_ultimoAcceso).then(function (response) {
                        //console.log('response', response);
                        return response.data;
                    });
                }
                return promise;
            }
        };
        return getUltimoAccesoFactory_;
    });