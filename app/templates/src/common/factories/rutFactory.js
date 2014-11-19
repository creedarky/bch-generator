angular.module('storeRutFactory',[])
    .factory('storeRutFactory_', function(){
        var rutFactory = {};

        var localRut = '';

        rutFactory.setRut = function (rut){
            localRut = rut;
        };

        rutFactory.getRut = function() {
            return localRut;
        };

        return rutFactory;
    });