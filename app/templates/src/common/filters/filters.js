/**
 * Created by Administrador on 12-09-2014.
 */
/* Filters */

angular.module('WebBancoChile.filters', [])
    .filter('lessThanZero', function () {
        return function (input) {
            return input < 0 ? 0 : input;
        };
    }).filter('rut', function RutFilter() {
        return function (rut) {
            if (angular.isUndefined(rut)) {
                return '';
            }
            var sRut;
            var sRutFormateado = '';
            var strRut = rut.replace(/^0+/, '');
            strRut = strRut.replace(/[-|\.]/g, '');
            sRut = strRut;
            var sDV = sRut.charAt(sRut.length - 1);
            sRut = sRut.substring(0, sRut.length - 1);
            while (sRut.length > 3) {
                sRutFormateado = "." + sRut.substr(sRut.length - 3) + sRutFormateado;
                sRut = sRut.substring(0, sRut.length - 3);
            }
            sRutFormateado = sRut + sRutFormateado;
            sRutFormateado += "-" + sDV;

            return sRutFormateado;
        };
    }).filter('rutSinPunto', function RutFilter() {
        return function (rut) {
            if (angular.isUndefined(rut)) {
                return '';
            }
            var sRut;
            var strRut = rut.replace(/^0+/, '');
            strRut = strRut.replace(/[-|\.]/g, '');
            sRut = strRut;
            var sDV = sRut.charAt(sRut.length - 1);
            sRut = sRut.substring(0, sRut.length - 1);
            var sRutFormateado = sRut;
            sRutFormateado += "-" + sDV;
            return sRutFormateado;
        };
    }).filter('rutSinFormato', function RutFilter() {
        return function (rut) {
            if (angular.isUndefined(rut)) {
                return '';
            }
            var sRut;
            var strRut = rut.replace(/^0+/, '');
            return strRut.replace(/[-|\.]/g, '');
        };
    }).filter('multiCurrency',function MultiCurrencyFilter($filter,$locale) {
        var numberFilter = $filter('number');
        var formats = $locale.NUMBER_FORMATS;
        var pattern = formats.PATTERNS[1];
        formats.DEFAULT_PRECISION = angular.isUndefined(formats.DEFAULT_PRECISION) ? 2 : formats.DEFAULT_PRECISION;
        var isBoolean = function ( obj ) {
            return obj === true || obj === false || Object.prototype.toString.call(obj) === '[object Boolean]';
        };
        var processAmount =  function ( amount, currencySymbol, fractionSize, suffixSymbol ) {

            if ( isNaN(parseInt(amount,10))) { return ''; }
            if ( angular.isUndefined(currencySymbol) ) { currencySymbol = formats.CURRENCY_SYM; }

            var isNegative = amount < 0;

            var parts = [];
            amount = amount.toString().replace(",",".");
            suffixSymbol = isBoolean(fractionSize) ? fractionSize : suffixSymbol;
            fractionSize = isBoolean(fractionSize) ? formats.DEFAULT_PRECISION : fractionSize;
            fractionSize = angular.isUndefined(fractionSize) || amount.toString().indexOf(".") !== -1 ? formats.DEFAULT_PRECISION : fractionSize;


            amount = Math.abs(amount);
            var number = numberFilter( amount, fractionSize );

            parts.push(isNegative ? pattern.negPre : pattern.posPre);
            parts.push(!suffixSymbol ? currencySymbol : number);
            parts.push(suffixSymbol ? currencySymbol : number);
            parts.push(isNegative ? pattern.negSuf : pattern.posSuf);

            return parts.join('').replace(/\u00A4/g, '');
        };

        return function(amount, type) {

            switch(angular.isDefined(type) ? type.toLowerCase() : '') {
                case 'usd':
                    return processAmount(amount, 'USD ', 2, false);
                case 'euro':
                case 'eur':
                    return processAmount(amount, '\u20ac', 2, true);
                case 'clp':
                    return processAmount(amount, '$ ', 0, false);
                case 'uf':
                    return processAmount(amount, 'UF ', 2, false);
                default:
                    return processAmount(amount, '$ ', 0, false);
            }
        };
    }).filter('textCurrency',function MultiCurrencyFilter() {
        return function(type) {
            switch(angular.isDefined(type) ? type.toLowerCase() : '') {
                case 'usd':
                    return 'Dolar Am\u00e9ricano(USD)';
                case 'euro':
                case 'eur':
                    return 'Euro(\u20ac)';
                case 'clp':
                    return 'Pesos Chilenos(CLP)';
                case 'uf' :
                    return 'UF';
                default:
                    return 'Pesos Chilenos(CLP)';
            }
        };
    }).filter('account',function MultiCurrencyFilter() {
        return function(account) {
            if (angular.isUndefined(account) || account == null ||  account === '') {
                return '';
            }
            var str = account.slice(-4);
            return '**** ** **' + str;
        };
    }).filter('camelcase',function TextFilter() {
        return function (input) {
            if (angular.isUndefined(input) || input == null ||  input === '') {
                return '';
            }
            var words = input.replace(/ +/g, ' ').split(' ');
            for (var i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
            }
            return words.join(' ');
        };
    }).filter('todate', function($filter) {
        return function(string, format) {
            if (angular.isUndefined(string) || string == null ||  string === '') {
                return '';
            }
            var data = string.split('T');
            var date = data[0].replace(/-/g, '');
            var time = data[1].replace(/:/g, '');
            var month = parseInt(date.substr(4,2),10) - 1;
            var dateToFormat = new Date(date.substr(0,4), month, date.substr(6,2),  time.substr(0,2), time.substr(2,2), time.substr(4,2));
            return $filter('date')(dateToFormat, format);
        };
    }).filter('todate_format1', function($filter) {
        return function(string) {
            return $filter('todate')(string, 'dd/MM/yyyy');
        };
    });