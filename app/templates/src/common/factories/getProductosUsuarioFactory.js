angular.module('getProductosUsuarioFactory',['WebBancoChile.constants'])
    .factory('getProductosUsuarioFactory_', function($http, dummy_datos_usuario) {
        var promise;
        var getProductosUsuarioFactory_ = {
            get: function(rut) {
                if ( !promise ) {
                    promise = $http.get(dummy_datos_usuario).then(function (response) {
                        //console.log('prod', response);
                        return response.data;
                    });
                }
                return promise;
            }
        };
        return getProductosUsuarioFactory_;
    });