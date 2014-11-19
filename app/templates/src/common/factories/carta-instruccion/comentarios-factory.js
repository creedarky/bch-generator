(function() {
    'use strict';

    angular.module('WebBancoChile.cartaInstruccionFactories')
        .factory('comentariosCartaFactory_', comentariosFactory);

    comentariosFactory.$inject = ['$http','URL_API'];
    /* @ngInject */
    function comentariosFactory($http,URL_API) {
        var comentarios;

        return {
            getComentarios: getComentarios,
            addComentario: addComentario,
            getValueComentarios: getValueComentarios
        };

        function getValueComentarios(){
            return comentarios;
        }

        function getComentarios(idCarta){
            return $http.get(URL_API + '/cartas-instruccion/cartas-instruccion/'+idCarta+'/comentarios').then(traeComentarios);

            function traeComentarios(result){
                return comentarios = result.data;
            }
        }

        function addComentario(comentario){
            return $http({
                url: URL_API + '/cartas-instruccion/cartas-instruccion/pushComentario',
                dataType: 'json',
                method: 'POST',
                data: JSON.stringify(comentario),
                headers: {
                    "Content-Type": "application/json"
                }})
                .success(function (data) {
                    return data;
                })
                .error(function (data, status) {
                    return false;
                });
        }

    }
})();