angular
        .module( 'WebBancoChile')
        .controller('AppCtrl', AppCtrl );

function AppCtrl ( $scope ) {
  $scope.$on('$stateChangeSuccess', function(event, toState){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Banco de Chile' ;
    }
  });
}


