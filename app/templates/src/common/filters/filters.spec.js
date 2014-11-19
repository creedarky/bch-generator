describe('Test para filters', function() {
    beforeEach(module('WebBancoChile.filters'));

    it('Debería existir un filtro llamado lessThanZero', inject(function($filter) {
        expect($filter('lessThanZero')).toBeDefined();
    }));

    it('El filtro lessThanZero debería retornar input ',
        inject(function($filter) {
            var input = $filter('lessThanZero')(8);
            expect(input).toEqual(8);
        }));

    it('El filtro lessThanZero debería retornar 0 ',
        inject(function($filter) {
            var input = $filter('lessThanZero')(-8);
            expect(input).toEqual(0);
        }));

    it('Debería existir un filtro llamado rut', inject(function($filter) {
        expect($filter('rut')).toBeDefined();
    }));

    it('El filtro rut debería formatear un rut', inject(function($filter) {
        var input = $filter('rut')('121126930');
        expect(input).toEqual('12.112.693-0');
    }));

    it('Debería existir un filtro llamado rutSinPunto', inject(function($filter) {
        expect($filter('rutSinPunto')).toBeDefined();
    }));

    it('Debería existir un filtro llamado rutSinFormato', inject(function($filter) {
        expect($filter('rutSinFormato')).toBeDefined();
    }));

    it('Debería existir un filtro llamado multiCurrency', inject(function($filter) {
        expect($filter('multiCurrency')).toBeDefined();
    }));

    it('Debería existir un filtro llamado textCurrency', inject(function($filter) {
        expect($filter('textCurrency')).toBeDefined();
    }));

    it('Debería existir un filtro llamado account', inject(function($filter) {
        expect($filter('account')).toBeDefined();
    }));

    it('Debería existir un filtro llamado camelcase', inject(function($filter) {
        expect($filter('camelcase')).toBeDefined();
    }));

    it('Debería existir un filtro llamado todate', inject(function($filter) {
        expect($filter('todate')).toBeDefined();
    }));

    it('Debería existir un filtro llamado todate_format1', inject(function($filter) {
        expect($filter('todate_format1')).toBeDefined();
    }));
});