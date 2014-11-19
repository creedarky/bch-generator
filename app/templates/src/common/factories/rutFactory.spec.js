describe("Test unitario rutFactory", function() {
    beforeEach(module('storeRutFactory'));

    it('Debería contener storeRutFactory_', inject(function(storeRutFactory_){
        expect(storeRutFactory_).not.toEqual(null);
    }));

    it('Debería estra definido setRut', inject(['storeRutFactory_', function($yt) {
        expect($yt.setRut).toBeDefined();
    }]));

    it('Debería estar definido getRut', inject(['storeRutFactory_', function($yt) {
        expect($yt.getRut).toBeDefined();
    }]));
});