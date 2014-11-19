describe('Pruebas unitarias', function () {
    describe('Módulo: WebBancoChile.about', function() {

        var modulo;
        beforeEach(function() {
            modulo = angular.module('WebBancoChile.about');
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
                dependencias = modulo.value('WebBancoChile.about').requires;
            });

            it('Debería tener ui.router como dependencia', function() {
                expect(hasModule('ui.router')).toEqual(true);
            });

            it('Debería tener ui.bootstrap como dependencia', function () {
                expect(hasModule('ui.bootstrap')).toEqual(true);
            });


            it('Debería tener storeRutService como dependencia', function () {
                expect(hasModule('storeRutService')).toEqual(true);
            });

            it('Debería tener storeRutFactory como dependencia', function () {
                expect(hasModule('storeRutFactory')).toEqual(true);
            });

            it('Debería tener WebBancoChile.filters como dependencia', function () {
                expect(hasModule('WebBancoChile.filters')).toEqual(true);
            });
        });
    });
});

describe('Pruebas unitarias para controlador aboutCtrl', function() {
    beforeEach(module('WebBancoChile.about'));

    var aboutCtrl;
    var scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        aboutCtrl = $controller('aboutCtrl', {
            $scope: scope
        });
    }));

    it('Debería existir dropdownDemoItems', function () {
        expect(scope.dropdownDemoItems).not.toEqual(null);
    });

    it('El objeto dropdownDemoItems debería poseer 3 opciones', function() {
        expect(scope.dropdownDemoItems.length).toEqual(3);
    });
});