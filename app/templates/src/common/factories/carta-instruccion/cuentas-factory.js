(function() {
    'use strict';

    angular.module('WebBancoChile.cartaInstruccionFactories')
        .factory('cuentasFactory_', cuentasFactory);

    cuentasFactory.$inject = ['$http','URL_API'];
    /* @ngInject */
    function cuentasFactory($http,URL_API) {


        var cuentaDataService_ = {
            validaCuenta: validaCuenta,

            getCuentas: getCuentas
        };

        return cuentaDataService_;

        function validaCuenta($filter,rut, cuenta){
            return $http.get(URL_API + '/cartas-instruccion/cuentas/valida/' + $filter('rutSinPunto')(rut) + '/' + cuenta)
                .then(valida);

            function valida(result) {
                return result.data;
            }
        }

        function getCuentas(rutEmpresa){
            return $http.get(URL_API + '/cartas-instruccion/cuentas/'+ rutEmpresa)
                .then(traeCuentas);

            function traeCuentas(result){
                return result.data;
            }
        }

    }
})();