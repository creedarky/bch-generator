(function() {
    'use strict';
    angular
        .module('WebBancoChile.constants',[])
        .constant('rutBancoChile','6650278-3')
        .constant('dummy_productos','assets/dummy-files/datos-usuario-dummy.json')
        .constant('dummy_ultimoAcceso','assets/dummy-files/datos-ultimoAcceso-dummy.json')
        .constant('dummy_datos_usuario','assets/dummy-files/datos-producto-dummy.json')
        //.constant('URL_API','/mibancochile/rest/empresa');
        .constant('URL_API','rest_api/mibancochile/rest/empresa');

})();