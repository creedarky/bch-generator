(function() {
    'use strict';

    angular.module('WebBancoChile.cartaInstruccionFactories')
        .factory('cartaInstruccionFactory_', cartaInstruccionFactory);

    cartaInstruccionFactory.$inject = ['$http','URL_API'];
    /* @ngInject */
    function cartaInstruccionFactory($http,URL_API) {
        var cartas;
        var carta;

        return {
            getInstrucciones: getInstrucciones,
            guardarCarta: guardarCarta,
            getFavoritoList:getFavoritoList,
            getFavoritoByID:getFavoritoByID,
            get:get,
            set:set
        };

        function getInstrucciones(rut,params){
            return $http.get(URL_API + '/cartas-instruccion/cartas-instruccion/'+ rut +'/q',{params:params})
                .then(traeInstrucciones);

            function traeInstrucciones(result) {
                return result.data;
            }
        }

        function guardarCarta(instruction) {
            return $http({
                url: URL_API + '/cartas-instruccion/cartas-instruccion/uploadcarta/',
                dataType: 'json',
                method: 'POST',
                data: JSON.stringify(instruction),
                handleError:false,
                headers: {
                    "Content-Type": "application/json"
                }}).then(cartaGuardada);
            function cartaGuardada(result) {
                return result.data;
            }
        }

        function getFavoritoList(){
            return $http.get(URL_API + '/cartas-instruccion/cartas-instruccion/favorito/')
                .then(resultadoFavoritos);

            function resultadoFavoritos(result) {
                return result.data;
            }
        }

        function getFavoritoByID(idCarta){
            return $http.get(URL_API + '/cartas-instruccion/cartas-instruccion/favorita/'+idCarta)
                .then(traeInstrucciones);

            function traeInstrucciones(result) {
                return result.data;
            }
        }

        function get(){
            return carta;
        }

        function set(object){
            carta=object;
        }

    }
})();