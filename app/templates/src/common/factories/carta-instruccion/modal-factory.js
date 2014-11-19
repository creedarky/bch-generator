(function() {
    'use strict';

    angular.module('WebBancoChile.cartaInstruccionFactories')
        .factory('modalCartaInstruccionFactory_', modalCartaInstruccionFactory);

    modalCartaInstruccionFactory.$inject = ['$modal'];
    /* @ngInject */
    function modalCartaInstruccionFactory($modal) {
        var modalInstance;
        var urlBase = "carta-instruccion/modal/";

        var modalCartaInstruccionFactory_ = {
            levantaModalPDF: levantaModalPDF,
            levantaVisulizarPDF:levantaVisulizarPDF,
            levantaModalCartaDetalle: levantaModalCartaDetalle
        };

        return modalCartaInstruccionFactory_;

        function levantaModalPDF(vm, object){
            modalInstance = $modal.open({
                templateUrl: urlBase + 'modal-pdf.tpl.html',
                controller: 'ModalCartaPDF',
                controllerAs:'detalleCarta',
                //size: 'lg',
                scope: vm,
                resolve: {
                    data: function () {
                        return object;
                    }
                }
            });
            return modalInstance.result;
        }

        function levantaVisulizarPDF(vm, object){
            modalInstance = $modal.open({
                templateUrl: urlBase + 'visualiza-pdf-modal.tpl.html',
                controller: 'ModalCartaPDF',
                controllerAs:'cartaPDF',
                //size: 'lg',
                scope: vm,
                resolve: {
                    data: function () {
                        return object;
                    }
                }
            });
            return modalInstance.result;
        }

        function levantaModalCartaDetalle(vm, object){
            modalInstance = $modal.open({
                templateUrl: urlBase + 'modal-detalle-carta-instruccion.tpl.html',
                controller: 'ModalDetalleCarta',
                controllerAs: 'detalleCarta',
                //size: 'lg',
                scope: vm,
                resolve: {
                    data: function () {
                        return object;
                    }
                }
            });
            return modalInstance.result;
        }
    }
})();
