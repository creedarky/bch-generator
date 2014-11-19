(function() {
    'use strict';

    angular.module('WebBancoChile.cartaInstruccionFactories')
        .factory('apoderadosFactory_', apoderadosFactory);

    apoderadosFactory.$inject = ['$http','URL_API'];
    /* @ngInject */
    function apoderadosFactory($http,URL_API) {
        var apoderados;

        return {
            getApoderadosEmpresa: getApoderadosEmpresa
        };

        function getApoderadosEmpresa(rutEmpresa){
            return $http.get(URL_API + '/cartas-instruccion/apoderados/empresa/' + rutEmpresa)
                .then(traeApoderadosEmpresa);

            function traeApoderadosEmpresa(result) {
                return apoderados = result.data;
            }
        }
    }
})();