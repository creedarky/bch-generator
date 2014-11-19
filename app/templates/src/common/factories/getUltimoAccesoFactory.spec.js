describe("Test unitario getUltimoAccesoFactory", function() {
    beforeEach(module('getUltimoAccesoFactory'));

    it('Debería contener getUltimoAccesoFactory_', inject(function(getUltimoAccesoFactory_){
        expect(getUltimoAccesoFactory_).not.toEqual(null);
    }));

    it('Debería estar definido get', inject(['getUltimoAccesoFactory_', function($yt) {
        expect($yt.get).toBeDefined();
    }]));
});