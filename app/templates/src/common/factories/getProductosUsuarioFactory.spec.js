describe("Test unitario getProductosUsuarioFactory", function() {
    beforeEach(module('getProductosUsuarioFactory'));

    it('Debería contener getProductosUsuarioFactory_', inject(function(getProductosUsuarioFactory_){
        expect(getProductosUsuarioFactory_).not.toEqual(null);
    }));

    it('Debería estar definido get', inject(['getProductosUsuarioFactory_', function($yt) {
        expect($yt.get).toBeDefined();
    }]));
});