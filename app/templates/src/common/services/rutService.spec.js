describe("Test unitario rutService", function() {
    beforeEach(module('storeRutService'));

    it('Debería contener storeRutService_', inject(function(storeRutService_){
        expect(storeRutService_).not.toEqual(null);
    }));

    it('Debería estar definido setRut', inject(['storeRutService_', function($yt) {
        expect($yt.setRut).toBeDefined();
    }]));

    it('Debería estar definido getRut', inject(['storeRutService_', function($yt) {
        expect($yt.getRut).toBeDefined();
    }]));
});