describe("Test unitario postUltimoAccesoFactory", function() {
    beforeEach(module('postUltimoAccesoFactory'));

    it('Debería contener postUltimoAccesoFactory_', inject(function(postUltimoAccesoFactory_){
        expect(postUltimoAccesoFactory_).not.toEqual(null);
    }));

    it('Debería estar definido get', inject(['postUltimoAccesoFactory_', function($yt) {
        expect($yt.post).toBeDefined();
    }]));
});