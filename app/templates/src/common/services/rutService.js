angular.module('storeRutService',[])
    .service('storeRutService_', function(){

        var localRut = '';

        this.setRut = function (rut){
            localRut = rut;
        };

        this.getRut = function() {
            return localRut;
        };
        
    });