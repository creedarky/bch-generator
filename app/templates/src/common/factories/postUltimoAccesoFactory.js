angular.module('postUltimoAccesoFactory',['WebBancoChile.constants'])
    .factory('postUltimoAccesoFactory_', function($http, URL_API) {
        var promise;
        var postUltimoAccesoFactory_ = {
            post: function(usuario) {
                if ( !promise ) {
                    promise = $http.get('assets/dummy-files/datos-ultimoAcceso-dummy.json')
                        .then(function (response) {
                            //console.log(response);
                            return response.data;
                        });
                }
                return promise;
            }
        };
        return postUltimoAccesoFactory_;
    });