(function () {
    angular
        .module( 'WebBancoChile', [
            'ui.router',
            'templates-app',
            'templates-common',
            'templates-orion',
            'WebBancoChile.filters',
            'WebBancoChile.bancoChile',
            'WebBancoChile.about',
            'WebBancoChile.constants',
            'getDatosUsuariosFactory',
            'getUltimoAccesoFactory',
            'postUltimoAccesoFactory',
            'getProductosUsuarioFactory',
            'ui.utils',
            'toaster',
            'WebBancoChile.responseHandler'
        ]);
})();
