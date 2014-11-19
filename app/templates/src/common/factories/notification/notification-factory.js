(function () {
    angular
        .module('WebBancoChile.notificationFactory')
        .factory('notificationFactory', notificationFactory);

    notificationFactory.$inject = ['toaster'];

    /* @ngInject */
    function notificationFactory(toaster) {
        var errors = {
            "DEFAULT": "Ha ocurrido un error en su solicitud",
            "CA-0001": "Error al cambiar el apoderado",
            "CF-0001": "Error al cambiar el estado a la firma",
            "CE-0001": "Error al grabar el codigo de autorizacion",
            "CE-0002": "Error al cambiar el estado a la carta",
            "CE-0003": "Error al cambiar el estado banco",
            "GE-0001": "Error no tipificado (Generico)",
            "CO-0001": "Carta no encontrada",
            "CO-0002": "Parametro de orden no valido",
            "CC-0001": "Error al asignar archivo a la carta",
            "CC-0002": "Error al grabar el archivo",
            "CC-0003": "Error al grabar la carta",
            "CC-0004": "Error al grabar el comentario",
            "CC-0005": "Error al grabar el estado banco",
            "CC-0007": "Error al grabar apoderados",
            "CT-0001": "Cuenta no existe (Se usa en la validacion)",
            "DT-0001": "Datos no encontrados (Para catálogos)",
            "FV-0001": "Error al grabar el favorito",
            "HH-0001": "Error al generar el hash",
            "UP-0001": "Tamaño de archivo mayor al permitido",
            "UP-0002": "Content type distinto a pdf",
            "PE-0001": "Usuario no existe",
            "PE-0002": "Usuario no tiene roles",
            "PE-0003": "Usuario no tiene permiso sobre la carta",
            "PE-0004": "Usuario no tiene permiso para crear cartas para la empresa",
            "PE-0005": "Usuario no es tiene permiso para consultar todas las cartas (Transaction Control)",
            "DP-0001": "Digipass no valido (para validacion al grabar o firmar)",
            "SS-0001": "Servicio sucursales no disponible",
            "SS-0002": "Servicio saldos no disponible",
            "SS-0003": "Servicio digipass no disponible",
            "SS-0004": "Servicio bancos no disponible",
            "SS-0005": "Servicio productos no disponible",
            "DB-0001": "Base de datos no disponible",
            "SE-0001": "Error de sistema generico",
            "SE-0002": "Datos de catalogo no encontrados (tablas vacías)"
        };

        var factory = {
            logError: logError
        };

        return factory;

        function logError(code) {
            var message = angular.isDefined(errors[code]) ? errors[code] : errors.DEFAULT;
            toaster.pop('error', null, message);
        }


    }
})();


