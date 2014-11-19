angular
    .module( 'WebBancoChile.bancoChile')
    .controller('BancoChileCtrl',BancoChileCtrl);

function BancoChileCtrl(
    $window,
    $scope,
    postUltimoAccesoFactory_,
    getUltimoAccesoFactory_,
    getDatosUsuariosFactory_,
    getProductosUsuarioFactory_,
    rutBancoChile) {

    //dropdown cuentas corrientes
    $scope.status = {
        isFirstOpen: true,
        isFirstOpenTarjetas:true
    };
    $scope.fecha = new Date();

    $scope.oneAtATime = true;
    $scope.oneAtATimeTarjetas = true;
    //Variable para dropdown footer
    $scope.isCollapsed = true;

    var userRut = rutBancoChile;

    postUltimoAccesoFactory_.post(userRut);
    getUltimoAccesoFactory_.get(userRut).then(function(data){
        $scope.ultimoAcceso = data.fechaUltimoAcceso;
    });

    getDatosUsuariosFactory_.get(userRut).then(function(data) { // get from cache
        $scope.data = data;
    });

    getProductosUsuarioFactory_.get(userRut).then(function(data){
        $scope.productos = data;
    });



    $scope.logout = function() {
        $window.location.href = "/asd";
    };

}
