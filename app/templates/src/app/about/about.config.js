angular
    .module('WebBancoChile.about')
    .config(aboutConfig);

function aboutConfig($stateProvider) {
    $stateProvider.state('about', {
        parent: 'root',
        url: '/about',
        views: {
            "main@": {
                controller: 'aboutCtrl',
                templateUrl: 'about/about.tpl.html'
            }
        },
        data: { pageTitle: 'Login' }
    });

}