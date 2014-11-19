describe("Test unitario getDatosUsuariosFactory", function() {
    beforeEach(module('getDatosUsuariosFactory'));

    it('Debería contener getDatosUsuariosFactory_', inject(function(getDatosUsuariosFactory_){
        expect(getDatosUsuariosFactory_).not.toEqual(null);
    }));

    it('Debería estar definido get', inject(['getDatosUsuariosFactory_', function($yt) {
        expect($yt.get).toBeDefined();
    }]));
});