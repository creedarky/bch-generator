angular.module('getDatosUsuariosFactory',['WebBancoChile.constants'])
    .factory('getDatosUsuariosFactory_', function($http, dummy_productos) {
        var promise;
        var userData;
        var getDatosUsuariosFactory_ = {
            get: function(rut) {
                if ( !promise ) {
                    promise = $http.get(dummy_productos).then(function (response) {
                        userData = response.data;
                        return response.data;
                    });
                }

                return promise;
            },

            async: function(rut) {
                return userData;
            }
        };
        return getDatosUsuariosFactory_;
    });