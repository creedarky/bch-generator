(function() {
    'use strict';

    angular.module('WebBancoChile.cartaInstruccionFactories')
        .factory('catalogoFactory_', catalogoFactory);

    catalogoFactory.$inject = ['$http','URL_API'];
    /* @ngInject */
    function catalogoFactory($http,URL_API) {
        return {
            getTiposInstruccion: getTiposInstruccion,
            getPlazos: getPlazos,
            getMenu: getMenu,
            getBancos: getBancos,
            getTipoCuentas: getTipoCuentas,
            getMonedas: getMonedas,
            getFormasPago: getFormasPago,
            getGastosCuenta: getGastosCuenta,
            getCodigosEgreso: getCodigosEgreso,
            getSucursales: getSucursales
        };

        function getTiposInstruccion(){

            return $http.get(URL_API + '/cartas-instruccion/catalogo/tipos-instruccion').then(resultTipo);
            function resultTipo(result) {

                return result.data;
            }
        }

        function getPlazos(){
            return $http.get(URL_API + '/cartas-instruccion/calendario/plazos-ejecucion').then(resultPlazos);
            function resultPlazos(result) {
                return result.data;
            }
        }

        function getMenu(rut){
            return $http.get(URL_API + '/cartas-instruccion/menu-lateral/' + rut).then(resultMenu);
            function resultMenu(result) {
                return result.data;
            }
        }

        function getBancos() {
            return $http.get(URL_API + '/cartas-instruccion/banco/todos').then(resultBancos);
            function resultBancos(result) {
                return result.data;
            }
        }
        function getTipoCuentas() {
            return $http.get(URL_API + '/cartas-instruccion/catalogo/tipo-cuenta').then(resultTipos);

            function resultTipos(result) {
                return result.data;
            }
        }

        function getMonedas(tipoInstruccion) {
            return $http.get(URL_API + '/cartas-instruccion/banco/'+ tipoInstruccion.id +'/moneda').then(resultMonedas);
            function resultMonedas(result) {
                return result.data;
            }
        }
        function getFormasPago() {
            return $http.get(URL_API + '/cartas-instruccion/catalogo/formas-pago').then(resultTipos);

            function resultTipos(result) {
                return result.data;
            }
        }
        function getGastosCuenta() {
            return $http.get(URL_API + '/cartas-instruccion/banco/gastos-exterior').then(resultGastos);
            function resultGastos(result) {
                return result.data;
            }
        }
        function getCodigosEgreso() {
            return $http.get(URL_API + '/cartas-instruccion/banco/codigos-egreso').then(resultCodigoEgreso);
            function resultCodigoEgreso(result) {
                return result.data;
            }
        }
        function getSucursales() {
            return $http.get(URL_API + '/cartas-instruccion/banco/sucursal/todos').then(resultadoSucursales);
            function resultadoSucursales(result){
                return result.data;
            }
        }
    }
})();
