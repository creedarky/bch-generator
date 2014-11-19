angular
    .module( 'WebBancoChile.bancoChile' )
    .config(bancoChileConfig);

function bancoChileConfig( $stateProvider ) {
    $stateProvider.state( 'bancoChile', {
        parent: 'root',
        url: '/bancoChile',
        views: {
            "main@": {
                controller: 'BancoChileCtrl',
                templateUrl: 'bancoChile/bancoChile.tpl.html'
            }
        },
        data:{ pageTitle: 'bancoChile | Yellow Team' }
    });
}