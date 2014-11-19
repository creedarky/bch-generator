angular
    .module('WebBancoChile.about')
    .controller('aboutCtrl',aboutCtrl);

function aboutCtrl($scope, storeRutService_, storeRutFactory_) {
    // This is simple a demo for UI Boostrap.
    $scope.dropdownDemoItems = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];


    storeRutService_.setRut('1111111-1');
    storeRutFactory_.setRut('2222222-2');

    $scope.fromService = storeRutService_.getRut();
    $scope.fromFactory = storeRutFactory_.getRut();

}
