describe("Pruebas unitarias", function() {
    describe("Módulo : WebBancoChile", function() {

        var modulo;
        beforeEach(function() {
            modulo = angular.module("WebBancoChile");
        });

        it("Debe estar registrado", function() {
            expect(modulo).not.toEqual(null);
        });

        describe("Dependencias :", function() {

            var dependencias;
            var hasModule = function(m) {
                return dependencias.indexOf(m) >= 0;
            };

            beforeEach(function() {
                dependencias = modulo.value('WebBancoChile').requires;
            });

            /*Chequeo de dependencias*/
            it('Debería tener ui.router como dependencia', function() {
                expect(hasModule('ui.router')).toEqual(true);
            });

            it("Debería tener templates-app' como dependencia", function() {
                expect(hasModule('templates-app')).toEqual(true);
            });

            it("Debería tener templates-common como dependencia", function() {
                expect(hasModule('templates-common')).toEqual(true);
            });

            it("Debería tener templates-orion como dependencia", function() {
                expect(hasModule('templates-orion')).toEqual(true);
            });

            it("Debería tener WebBancoChile.filters como dependencia", function() {
                expect(hasModule('WebBancoChile.filters')).toEqual(true);
            });

            it("Debería tener WebBancoChile.bancoChile como dependencia", function() {
                expect(hasModule('WebBancoChile.bancoChile')).toEqual(true);
            });

            it("Debería tener WebBancoChile.about como dependencia", function() {
                expect(hasModule('WebBancoChile.about')).toEqual(true);
            });

            it("Debería tener WebBancoChile.constants como dependencia", function() {
                expect(hasModule('WebBancoChile.constants')).toEqual(true);
            });

            it("Debería tener getDatosUsuariosFactory como dependencia", function() {
                expect(hasModule('getDatosUsuariosFactory')).toEqual(true);
            });

            it("Debería tener getUltimoAccesoFactory como dependencia", function() {
                expect(hasModule('getUltimoAccesoFactory')).toEqual(true);
            });

            it("Debería tener postUltimoAccesoFactory como dependencia", function() {
                expect(hasModule('postUltimoAccesoFactory')).toEqual(true);
            });

            it("Debería tener getProductosUsuarioFactory como dependencia", function() {
                expect(hasModule('getProductosUsuarioFactory')).toEqual(true);
            });
        });
    });
});

/*Test de controlador*/

//describe( 'AppCtrl', function() {
//    describe( 'isCurrentUrl', function() {
//        var AppCtrl, $location, $scope;
//
//        beforeEach( module( 'WebBancoChile' ) );
//
//        beforeEach( inject( function( $controller, _$location_, $rootScope ) {
//            $location = _$location_;
//            $scope = $rootScope.$new();
//            AppCtrl = $controller( 'AppCtrl', { $location: $location, $scope: $scope });
//        }));
//    });
//});
