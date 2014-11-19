angular
		.module( 'WebBancoChile')
		.config(myAppConfig);

function myAppConfig($stateProvider, $urlRouterProvider,$httpProvider) {
    $stateProvider.state('root', {
        abstract: true,
        views: {
            "header@": {
                controller: 'BancoChileCtrl',
                templateUrl: 'templates/header.tpl.html'
            },
            "main@": {

            },
            "footer@": {
                controller: 'BancoChileCtrl',
                templateUrl: 'templates/footer.tpl.html'
            }
        }

    });
    $urlRouterProvider.otherwise('/login');
    $httpProvider.interceptors.push(function ($q, userDataService_, URL_API) {
        return {
            'request': function(config) {
                var isRestCall = config.url.indexOf(URL_API) === 0;
                var rut = userDataService_.getRut();
                if (isRestCall && angular.isDefined(rut)) {
                    config.headers['OAM_REMOTE_USER'] = rut;
                }
                return config || $q.when(config);
            }
        };
    });

}
