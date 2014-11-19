describe('Pruebas unitarias', function () {
    describe('Módulo: WebBancoChile.bancoChile', function() {

        var modulo;
        beforeEach(function() {
            modulo = angular.module('WebBancoChile.bancoChile');
        });

        it('El módulo debe estar registrado', function() {
            expect(modulo).not.toEqual(null);
        });

        describe('Dependencias: ', function() {

            var dependencias;
            var hasModule = function(m) {
                return dependencias.indexOf(m) >= 0;
            };

            beforeEach(function() {
                dependencias = modulo.value('WebBancoChile.bancoChile').requires;
            });

            it('Debería tener ui.router como dependencia', function() {
                expect(hasModule('ui.router')).toEqual(true);
            });

            it('Debería tener ui.bootstrap como dependencia', function () {
                expect(hasModule('ui.bootstrap')).toEqual(true);
            });

            it('Debería tener WebBancoChile.constants como dependencia', function () {
                expect(hasModule('WebBancoChile.constants')).toEqual(true);
            });
        });
    });
});

describe('Pruebas unitarias para controlador BancoChileCtrl', function() {
    beforeEach(module('WebBancoChile.bancoChile'));

    var bancoChileCtrl;
    var scope;
    var windowMock;
    var postUltimoAccesoFactoryMock;
    var getUltimoAccesoFactoryMock;
    var getDatosUsuariosFactoryMock;
    var getProductosUsuarioFactoryMock;
    var rutBancoChileMock;
    var q;
    var deferred;

    beforeEach(function() {

        windowMock = {
            aux : ''
        };
        postUltimoAccesoFactoryMock = {
            aux : null,
            post:function(){
                return true;
            }
        };

        getUltimoAccesoFactoryMock = {
            aux : null,
            get:function(){
                deferred = q.defer();
                return deferred.promise;
            }

        };

        getDatosUsuariosFactoryMock = {
            aux : null,
            get:function(){
                deferred = q.defer();
                return deferred.promise;
            }
        };


        getProductosUsuarioFactoryMock = {
            aux : null,
            get:function(){
                deferred = q.defer();
                return deferred.promise;
            }
        };

        rutBancoChileMock = {
            aux : '12112693-1'
        };

        module(function($provide) {
            //$provide.value('window', windowMock);
            $provide.value('postUltimoAccesoFactory_', postUltimoAccesoFactoryMock);
            $provide.value('getUltimoAccesoFactory_', getUltimoAccesoFactoryMock);
            $provide.value('getDatosUsuariosFactory_', getDatosUsuariosFactoryMock);
            $provide.value('getProductosUsuarioFactory_', getProductosUsuarioFactoryMock);
            //$provide.value('rutBancoChile', rutBancoChileMock);
        });
    });

    beforeEach(inject(function ($controller, $rootScope, $q) {
        scope = $rootScope.$new();
        q = $q;
        bancoChileCtrl = $controller('BancoChileCtrl', {
            $scope: scope
        });
    }));


    it('Variable status debería estar definida', function() {
        expect(scope.status).toBeDefined();
    });

    it('Variable status.isFirstOpen debe iniciar en true', function() {
        expect(scope.status.isFirstOpen).toEqual(true);
    });

    it('Variable status.isFirstOpenTarjetas debe iniciar en true', function() {
        expect(scope.status.isFirstOpenTarjetas).toEqual(true);
    });

});